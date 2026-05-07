#!/usr/bin/env node
/**
 * Google Search Console — combined insights report
 *
 * Phase A — Issues:    sitemap status + URL inspection grouped by coverage state
 * Phase B — Optimize:  90-day query data, bucketed into quick wins, CTR bugs, near-page-1, stars
 * Phase C — Capture:   target-keyword gap analysis (commercial intent for services)
 *
 * Output: console summary + tmp/seo-insights-YYYY-MM-DD.{md,json}
 *
 * Usage:  npm run gsc:insights
 *         node scripts/gsc-insights.mjs [--no-inspect]   # skip URL inspection (saves ~3 min)
 */

import { google } from 'googleapis';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Config ──────────────────────────────────────────────────────────
const SITE_URL = 'sc-domain:verit.se';
const ORIGIN = 'https://verit.se';
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const ANALYSIS_DAYS = 90;
const HIST_DAYS = 480; // ~16 months for capture analysis
const SKIP_INSPECT = process.argv.includes('--no-inspect');

const OUT_DATE = new Date().toISOString().split('T')[0];
const OUT_MD = resolve(ROOT, `tmp/seo-insights-${OUT_DATE}.md`);
const OUT_JSON = resolve(ROOT, `tmp/seo-insights-${OUT_DATE}.json`);

// Target keywords for capture analysis (commercial intent → drive customer enquiries)
const TARGET_KEYWORDS = {
  'NIS2 / Cybersäkerhetslagen': [
    'nis2', 'nis2 konsult', 'nis2 efterlevnad', 'nis2 hjälp', 'nis2 implementation',
    'nis2 gap-analys', 'nis2 sverige', 'nis2 företag', 'nis2 direktivet',
    'cybersäkerhetslagen', 'cybersäkerhetslagen konsult', 'cybersäkerhetslagen företag',
  ],
  'ISO 27001': [
    'iso 27001', 'iso 27001 konsult', 'iso 27001 certifiering', 'iso 27001 implementation',
    'iso 27001 sverige', 'iso 27001 hjälp', 'informationssäkerhet iso',
  ],
  'CISO-as-a-Service': [
    'ciso as a service', 'ciso outsourcing', 'extern ciso', 'ciso konsult',
    'informationssäkerhetsansvarig konsult', 'ciso tjänst',
  ],
  'GDPR & Dataskydd': [
    'gdpr konsult', 'dataskydd konsult', 'dpo outsourcing', 'gdpr hjälp företag',
    'dataskyddsombud', 'gdpr efterlevnad',
  ],
  'Riskhantering': [
    'riskhantering informationssäkerhet', 'riskanalys it-säkerhet',
    'informationsklassificering', 'riskbedömning cybersäkerhet',
  ],
  'Utbildning & Awareness': [
    'cybersäkerhetsutbildning', 'informationssäkerhet utbildning',
    'awareness-utbildning', 'nis2 utbildning ledning', 'säkerhetsutbildning företag',
  ],
  'AI FastTrack': [
    'ai säkerhet konsult', 'ai governance sverige', 'ai compliance', 'ai act sverige',
  ],
  'Securapilot / GRC': [
    'grc plattform sverige', 'grc-verktyg', 'compliance-plattform', 'securapilot',
  ],
  'Generella': [
    'cybersäkerhet konsult sverige', 'cybersäkerhet vänersborg',
    'informationssäkerhet konsult', 'cybersäkerhet företag',
  ],
};

// ── Auth ────────────────────────────────────────────────────────────
function loadCredentials() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  }
  return JSON.parse(readFileSync(resolve(ROOT, 'verit-492219-760cb5c5d175.json'), 'utf-8'));
}

const auth = new google.auth.GoogleAuth({
  credentials: loadCredentials(),
  scopes: [
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/webmasters',
  ],
});
const searchconsole = google.searchconsole({ version: 'v1', auth });
const webmasters = google.webmasters({ version: 'v3', auth });

// ── Helpers ─────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fmtDate = (d) => d.toISOString().split('T')[0];
const daysAgo = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
};
const pct = (n, total) => (total ? ((n / total) * 100).toFixed(1) : '0.0');
const normalize = (s) => s.toLowerCase().trim().replace(/[\s\-_]+/g, ' ');

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)];
}

// ── Phase A: Issues ─────────────────────────────────────────────────
async function phaseA_issues(allUrls) {
  console.log('\n═══ Phase A: Issues ═══');

  // 1. Sitemap report
  let sitemap = null;
  try {
    const res = await webmasters.sitemaps.get({ siteUrl: SITE_URL, feedpath: SITEMAP_URL });
    sitemap = res.data;
  } catch (err) {
    sitemap = { error: err.message };
  }
  console.log(`Sitemap: ${sitemap.lastDownloaded ?? 'never downloaded'} | warnings ${sitemap.warnings ?? 0} | errors ${sitemap.errors ?? 0}`);

  // 2. URL inspection across full sitemap
  const inspected = [];
  if (!SKIP_INSPECT) {
    console.log(`Inspecting ${allUrls.length} URLs (rate-limited, ~${Math.ceil(allUrls.length * 0.5 / 60)} min)…`);
    for (let i = 0; i < allUrls.length; i++) {
      try {
        const res = await searchconsole.urlInspection.index.inspect({
          requestBody: { inspectionUrl: allUrls[i], siteUrl: SITE_URL },
        });
        const r = res.data.inspectionResult;
        inspected.push({
          url: allUrls[i],
          verdict: r.indexStatusResult?.verdict ?? 'UNKNOWN',
          coverageState: r.indexStatusResult?.coverageState ?? 'UNKNOWN',
          robotsTxtState: r.indexStatusResult?.robotsTxtState ?? 'UNKNOWN',
          pageFetchState: r.indexStatusResult?.pageFetchState ?? 'UNKNOWN',
          lastCrawlTime: r.indexStatusResult?.lastCrawlTime ?? null,
          mobileVerdict: r.mobileUsabilityResult?.verdict ?? null,
          richResultsVerdict: r.richResultsResult?.verdict ?? null,
        });
      } catch (err) {
        inspected.push({ url: allUrls[i], verdict: 'ERROR', coverageState: err.message });
      }
      if ((i + 1) % 25 === 0) process.stdout.write(`  ${i + 1}/${allUrls.length}\n`);
      if (i < allUrls.length - 1) await sleep(500);
    }
  } else {
    console.log('URL inspection skipped (--no-inspect).');
  }

  // 3. Aggregate by coverage state
  const byState = {};
  for (const r of inspected) {
    const k = r.coverageState || 'UNKNOWN';
    byState[k] = byState[k] || [];
    byState[k].push(r);
  }
  for (const state of Object.keys(byState).sort()) {
    console.log(`  ${state.padEnd(45)} ${byState[state].length}`);
  }

  return { sitemap, inspected, byState };
}

// ── Phase B: Optimize ───────────────────────────────────────────────
async function phaseB_optimize() {
  console.log(`\n═══ Phase B: Optimize (last ${ANALYSIS_DAYS} days) ═══`);

  const start = fmtDate(daysAgo(ANALYSIS_DAYS));
  const end = fmtDate(new Date());

  // Query × page level
  let rows = [];
  try {
    const res = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: start, endDate: end,
        dimensions: ['query', 'page'],
        rowLimit: 25000,
      },
    });
    rows = res.data.rows || [];
  } catch (err) {
    console.log(`searchanalytics error: ${err.message}`);
    return { rows: [], buckets: {}, pages: [] };
  }

  console.log(`Total query×page rows: ${rows.length}`);

  // Bucket by performance
  const quickWins = rows.filter((r) => r.position >= 5 && r.position <= 15 && r.impressions >= 20)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 30);
  const ctrBugs = rows.filter((r) => r.position <= 5 && r.impressions >= 30 && r.ctr < 0.03)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 30);
  const nearPage1 = rows.filter((r) => r.position > 15 && r.position <= 30 && r.impressions >= 30)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 30);
  const stars = rows.filter((r) => r.position <= 3 && r.clicks >= 10)
    .sort((a, b) => b.clicks - a.clicks).slice(0, 20);

  console.log(`  Quick wins (pos 5-15, imp ≥ 20): ${quickWins.length}`);
  console.log(`  CTR bugs (pos 1-5, CTR < 3%):    ${ctrBugs.length}`);
  console.log(`  Near page-1 (pos 15-30):         ${nearPage1.length}`);
  console.log(`  Stars (pos ≤ 3, clicks ≥ 10):    ${stars.length}`);

  // Page-level data — high-impression, low-click
  let pageRows = [];
  try {
    const res = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: start, endDate: end,
        dimensions: ['page'],
        rowLimit: 5000,
      },
    });
    pageRows = res.data.rows || [];
  } catch (err) {
    console.log(`page-level error: ${err.message}`);
  }
  const zeroClickPages = pageRows.filter((r) => r.impressions >= 50 && r.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 20);
  console.log(`  Pages with ≥50 impressions but 0 clicks: ${zeroClickPages.length}`);

  return { rows, buckets: { quickWins, ctrBugs, nearPage1, stars }, pages: pageRows, zeroClickPages };
}

// ── Phase C: Capture ────────────────────────────────────────────────
async function phaseC_capture() {
  console.log(`\n═══ Phase C: Capture (target keyword gaps, last ${HIST_DAYS} days) ═══`);

  const start = fmtDate(daysAgo(HIST_DAYS));
  const end = fmtDate(new Date());

  let rows = [];
  try {
    const res = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: start, endDate: end,
        dimensions: ['query'],
        rowLimit: 25000,
      },
    });
    rows = res.data.rows || [];
  } catch (err) {
    console.log(`capture error: ${err.message}`);
    return { byCategory: {}, summary: { total: 0, ranking: 0, gap: 0 } };
  }

  // Build a map: normalized query → row
  const queryMap = new Map();
  for (const r of rows) {
    queryMap.set(normalize(r.keys[0]), r);
  }

  console.log(`Indexed queries (last ${HIST_DAYS} days): ${rows.length}`);

  const result = {};
  let totalRanking = 0, totalGap = 0;

  for (const [category, keywords] of Object.entries(TARGET_KEYWORDS)) {
    result[category] = { ranking: [], gap: [] };
    for (const kw of keywords) {
      const norm = normalize(kw);
      const exact = queryMap.get(norm);

      // Also look for any query that contains all words (substring/word match)
      const words = norm.split(/\s+/);
      let bestMatch = exact;
      let matchType = exact ? 'exact' : null;
      if (!bestMatch) {
        for (const [k, row] of queryMap) {
          if (words.every((w) => k.includes(w))) {
            if (!bestMatch || row.impressions > bestMatch.impressions) {
              bestMatch = row;
              matchType = 'partial';
            }
          }
        }
      }

      if (bestMatch) {
        result[category].ranking.push({
          target: kw,
          matched: bestMatch.keys[0],
          matchType,
          impressions: bestMatch.impressions,
          clicks: bestMatch.clicks,
          ctr: bestMatch.ctr,
          position: bestMatch.position,
        });
        totalRanking++;
      } else {
        result[category].gap.push({ target: kw });
        totalGap++;
      }
    }
  }

  const total = totalRanking + totalGap;
  console.log(`Target keywords:    ${total}`);
  console.log(`  Has visibility:   ${totalRanking} (${pct(totalRanking, total)}%)`);
  console.log(`  Pure gap (0 imp): ${totalGap} (${pct(totalGap, total)}%)`);

  return { byCategory: result, summary: { total, ranking: totalRanking, gap: totalGap } };
}

// ── Markdown report ─────────────────────────────────────────────────
function buildMarkdown(a, b, c) {
  const lines = [
    `# SEO Insights — verit.se — ${OUT_DATE}`,
    '',
    `Källa: Google Search Console (property \`${SITE_URL}\`).`,
    `Optimize-fas: senaste ${ANALYSIS_DAYS} dagar. Capture-fas: senaste ${HIST_DAYS} dagar.`,
    '',
    '---',
    '',
    '## Phase A — Issues',
    '',
  ];

  if (a.sitemap?.error) {
    lines.push(`Sitemap: **error** — ${a.sitemap.error}`, '');
  } else {
    lines.push(
      '| Sitemap-fält | Värde |',
      '|---|---|',
      `| Path | \`${SITEMAP_URL}\` |`,
      `| Last downloaded | ${a.sitemap?.lastDownloaded ?? '—'} |`,
      `| Warnings | ${a.sitemap?.warnings ?? 0} |`,
      `| Errors | ${a.sitemap?.errors ?? 0} |`,
      `| isPending | ${a.sitemap?.isPending ?? false} |`,
      '',
    );
  }

  if (Object.keys(a.byState).length) {
    lines.push('### URL-status (sitemap-omfång)', '', '| Coverage State | Antal | Andel |', '|---|---|---|');
    const total = a.inspected.length;
    for (const [state, list] of Object.entries(a.byState).sort((x, y) => y[1].length - x[1].length)) {
      lines.push(`| ${state} | ${list.length} | ${pct(list.length, total)}% |`);
    }
    lines.push('');

    // List details for problem states
    const problemStates = Object.entries(a.byState).filter(([s]) => !['Submitted and indexed', 'Indexed, not submitted in sitemap'].includes(s));
    for (const [state, list] of problemStates) {
      if (list.length === 0) continue;
      lines.push(`<details><summary><strong>${state}</strong> — ${list.length} URL:er</summary>`, '');
      for (const r of list.slice(0, 50)) {
        lines.push(`- ${r.url}`);
      }
      if (list.length > 50) lines.push(`- *… och ${list.length - 50} till*`);
      lines.push('', '</details>', '');
    }
  } else {
    lines.push('_URL-inspection skippades (--no-inspect)._', '');
  }

  lines.push('---', '', '## Phase B — Optimize', '');

  const renderQueryTable = (heading, items, intent) => {
    if (!items.length) return [];
    const out = [`### ${heading}`, '', `_${intent}_`, '', '| Query | Imp | Clicks | CTR | Pos | Page |', '|---|---:|---:|---:|---:|---|'];
    for (const r of items) {
      out.push(`| ${r.keys[0]} | ${r.impressions} | ${r.clicks} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} | \`${r.keys[1].replace(ORIGIN, '')}\` |`);
    }
    out.push('');
    return out;
  };

  lines.push(...renderQueryTable('Quick wins (position 5-15, ≥ 20 impressions)', b.buckets?.quickWins ?? [],
    'En liten on-page-justering (titel, intro, H2) kan flytta dessa till sida 1.'));
  lines.push(...renderQueryTable('CTR-buggar (position 1-5, CTR < 3 %, ≥ 30 imp)', b.buckets?.ctrBugs ?? [],
    'Ranking finns men SERP-snippet (title/description) övertygar inte. Skriv om titel + meta-description med tydligare värdeerbjudande.'));
  lines.push(...renderQueryTable('Nästan-där (position 15-30, ≥ 30 imp)', b.buckets?.nearPage1 ?? [],
    'Med utbyggt innehåll, fler interna länkar eller H-struktur kan dessa nå sida 2 → 1.'));
  lines.push(...renderQueryTable('Stjärnor (position ≤ 3, ≥ 10 clicks)', b.buckets?.stars ?? [],
    'Replikera vad som funkar här (titelmönster, innehållsdjup) på relaterade sidor.'));

  if (b.zeroClickPages?.length) {
    lines.push('### Sidor med många impressions men 0 clicks', '',
      '_Sidan visas men ingen klickar — fel intent, eller annan SERP-feature (FAQ, AI-overview) stjäl klicket._', '',
      '| Page | Impressions | Avg pos |', '|---|---:|---:|');
    for (const r of b.zeroClickPages) {
      lines.push(`| \`${r.keys[0].replace(ORIGIN, '')}\` | ${r.impressions} | ${r.position.toFixed(1)} |`);
    }
    lines.push('');
  }

  lines.push('---', '', '## Phase C — Capture (target keyword gaps)', '');
  lines.push(`Mål: ${c.summary.total} kommersiella sökord. **Har synlighet**: ${c.summary.ranking}. **Gap (0 impressions)**: ${c.summary.gap}.`, '');

  for (const [category, data] of Object.entries(c.byCategory)) {
    if (data.ranking.length === 0 && data.gap.length === 0) continue;
    lines.push(`### ${category}`, '');

    if (data.ranking.length) {
      lines.push('**Har synlighet**', '', '| Mål | Match (faktisk query) | Match-typ | Imp | Clicks | CTR | Pos |',
        '|---|---|---|---:|---:|---:|---:|');
      for (const r of data.ranking.sort((x, y) => y.impressions - x.impressions)) {
        lines.push(`| ${r.target} | ${r.matched} | ${r.matchType} | ${r.impressions} | ${r.clicks} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} |`);
      }
      lines.push('');
    }

    if (data.gap.length) {
      lines.push('**Gap — saknar synlighet**', '');
      for (const g of data.gap) lines.push(`- ${g.target}`);
      lines.push('');
    }
  }

  return lines.join('\n');
}

// ── Main ────────────────────────────────────────────────────────────
console.log('═══════════════════════════════════════════');
console.log('  SEO Insights — verit.se');
console.log('═══════════════════════════════════════════');
console.log(`  Property: ${SITE_URL}`);
console.log(`  Date: ${OUT_DATE}`);
console.log(`  Output: ${OUT_MD}`);
console.log(`  Inspect URLs: ${SKIP_INSPECT ? 'no' : 'yes'}`);

const allUrls = await fetchSitemapUrls();
console.log(`  Sitemap URLs: ${allUrls.length}`);

const a = await phaseA_issues(allUrls);
const b = await phaseB_optimize();
const c = await phaseC_capture();

mkdirSync(resolve(ROOT, 'tmp'), { recursive: true });
const md = buildMarkdown(a, b, c);
writeFileSync(OUT_MD, md, 'utf-8');
writeFileSync(OUT_JSON, JSON.stringify({
  date: OUT_DATE,
  property: SITE_URL,
  phaseA: a,
  phaseB: b,
  phaseC: c,
}, null, 2), 'utf-8');

console.log('\n═══════════════════════════════════════════');
console.log(`✓ Markdown report: ${OUT_MD}`);
console.log(`✓ JSON dump:       ${OUT_JSON}`);
console.log('═══════════════════════════════════════════');
