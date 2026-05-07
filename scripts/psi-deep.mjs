#!/usr/bin/env node
/**
 * PageSpeed Insights — deep optimization audit
 *
 * Runs Lighthouse for all 4 categories (Performance, Accessibility,
 * Best Practices, SEO) on a representative sample of page templates.
 * Aggregates opportunities/diagnostics across pages so you can see
 * which fixes have the highest leverage.
 *
 * Usage:  node scripts/psi-deep.mjs [--desktop]
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function loadEnv() {
  const env = { ...process.env };
  try {
    const content = readFileSync(resolve(ROOT, '.env'), 'utf-8');
    for (const line of content.split('\n')) {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match && !env[match[1]]) env[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  } catch {}
  return env;
}

const env = loadEnv();
const API_KEY = env.PAGESPEED_API_KEY;
if (!API_KEY) {
  console.error('Missing PAGESPEED_API_KEY in .env');
  process.exit(1);
}

const STRATEGY = process.argv.includes('--desktop') ? 'desktop' : 'mobile';
const ORIGIN = 'https://verit.se';

// Representative sample: one URL per template type
const SAMPLE = [
  ['Homepage (SV)',         '/'],
  ['Homepage (EN)',         '/en'],
  ['Service hub',           '/tjanster'],
  ['Service detail',        '/tjanster/iso27001'],
  ['Service AI Fasttrack',  '/tjanster/ai-fasttrack'],
  ['Insights hub',          '/insikter'],
  ['Insight article',       '/insikter/hotbild'],
  ['Kommun hub',            '/insikter/kommuner'],
  ['Kommun detail',         '/insikter/kommuner/stockholm'],
  ['About',                 '/om-oss'],
  ['Contact',               '/kontakt'],
  ['SecuraPilot',           '/securapilot'],
  ['Privacy policy',        '/integritetspolicy'],
  ['References',            '/referenser'],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runPsi(url) {
  const params = new URLSearchParams({
    url,
    strategy: STRATEGY,
    key: API_KEY,
  });
  // PSI expects category as repeated param
  for (const c of ['performance', 'accessibility', 'best-practices', 'seo']) {
    params.append('category', c);
  }
  const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  return res.json();
}

function summarize(data) {
  const lh = data.lighthouseResult;
  const cats = lh.categories;
  const audits = lh.audits;

  const score = (k) => Math.round((cats[k]?.score ?? 0) * 100);

  // Collect failing audits per category. score === null means N/A; informative
  // means it can't fail; binary: 1 = pass, 0 = fail; numeric: <0.9 = needs work
  const failing = [];
  for (const [catKey, cat] of Object.entries(cats)) {
    for (const ref of cat.auditRefs) {
      const a = audits[ref.id];
      if (!a || a.score === null) continue;
      if (a.scoreDisplayMode === 'informative' || a.scoreDisplayMode === 'manual') continue;
      if (a.scoreDisplayMode === 'notApplicable') continue;
      if (a.score >= 0.9) continue;
      failing.push({
        category: catKey,
        id: ref.id,
        title: a.title,
        score: a.score,
        weight: ref.weight ?? 0,
        savingsMs: a.details?.overallSavingsMs ?? 0,
        savingsBytes: a.details?.overallSavingsBytes ?? 0,
        displayValue: a.displayValue ?? '',
      });
    }
  }

  return {
    scores: {
      performance: score('performance'),
      accessibility: score('accessibility'),
      'best-practices': score('best-practices'),
      seo: score('seo'),
    },
    metrics: {
      lcp: audits['largest-contentful-paint']?.displayValue,
      fcp: audits['first-contentful-paint']?.displayValue,
      cls: audits['cumulative-layout-shift']?.displayValue,
      tbt: audits['total-blocking-time']?.displayValue,
      ttfb: audits['server-response-time']?.displayValue,
      si: audits['speed-index']?.displayValue,
    },
    failing,
  };
}

// ── Run ─────────────────────────────────────────────────────────────
console.log(`PSI deep audit — ${STRATEGY}, ${SAMPLE.length} templates\n`);

const results = [];
for (const [label, path] of SAMPLE) {
  const url = `${ORIGIN}${path}`;
  process.stdout.write(`  ${label.padEnd(22)} ${path.padEnd(40)} `);
  try {
    const data = await runPsi(url);
    const s = summarize(data);
    results.push({ label, path, url, ...s });
    const c = (n) => (n >= 90 ? '\x1b[32m' : n >= 50 ? '\x1b[33m' : '\x1b[31m') + n + '\x1b[0m';
    console.log(`P ${c(s.scores.performance)}  A ${c(s.scores.accessibility)}  BP ${c(s.scores['best-practices'])}  SEO ${c(s.scores.seo)}`);
  } catch (err) {
    console.log(`\x1b[31mERROR ${err.message}\x1b[0m`);
    results.push({ label, path, url, error: err.message });
  }
  await sleep(1100);
}

// ── Aggregate ───────────────────────────────────────────────────────
const ok = results.filter((r) => !r.error);

console.log('\n' + '═'.repeat(72));
console.log(' CATEGORY AVERAGES');
console.log('═'.repeat(72));
for (const cat of ['performance', 'accessibility', 'best-practices', 'seo']) {
  const avg = Math.round(ok.reduce((s, r) => s + r.scores[cat], 0) / ok.length);
  const min = Math.min(...ok.map((r) => r.scores[cat]));
  const max = Math.max(...ok.map((r) => r.scores[cat]));
  console.log(`  ${cat.padEnd(16)} avg ${avg}   range ${min}–${max}`);
}

// Aggregate failing audits across all pages
const issueMap = new Map();
for (const r of ok) {
  for (const f of r.failing) {
    const key = `${f.category}::${f.id}`;
    if (!issueMap.has(key)) {
      issueMap.set(key, {
        category: f.category,
        id: f.id,
        title: f.title,
        weight: f.weight,
        pages: [],
        totalSavingsMs: 0,
        totalSavingsBytes: 0,
      });
    }
    const e = issueMap.get(key);
    e.pages.push({ path: r.path, score: f.score, displayValue: f.displayValue });
    e.totalSavingsMs += f.savingsMs;
    e.totalSavingsBytes += f.savingsBytes;
  }
}

const issues = [...issueMap.values()].sort((a, b) => {
  // sort by impact: pages affected × weight, then by savings
  const impactA = a.pages.length * (a.weight + 1);
  const impactB = b.pages.length * (b.weight + 1);
  if (impactB !== impactA) return impactB - impactA;
  return b.totalSavingsMs - a.totalSavingsMs;
});

console.log('\n' + '═'.repeat(72));
console.log(' OPPORTUNITIES — ranked by impact (pages × weight)');
console.log('═'.repeat(72));
for (const cat of ['performance', 'accessibility', 'best-practices', 'seo']) {
  const catIssues = issues.filter((i) => i.category === cat);
  if (!catIssues.length) {
    console.log(`\n  [${cat}] no failing audits ✓`);
    continue;
  }
  console.log(`\n  [${cat}]`);
  for (const i of catIssues) {
    const savings =
      i.totalSavingsMs > 0
        ? ` — ${Math.round(i.totalSavingsMs / i.pages.length)}ms/page potential savings`
        : i.totalSavingsBytes > 0
          ? ` — ${Math.round(i.totalSavingsBytes / 1024 / i.pages.length)}KB/page`
          : '';
    console.log(`    • ${i.title}`);
    console.log(`      affects ${i.pages.length}/${ok.length} pages, weight ${i.weight}${savings}`);
    console.log(`      audit id: ${i.id}`);
    // show first 3 example pages
    for (const p of i.pages.slice(0, 3)) {
      const v = p.displayValue ? ` (${p.displayValue})` : '';
      console.log(`        ${p.path}${v}`);
    }
    if (i.pages.length > 3) console.log(`        ...+${i.pages.length - 3} more`);
  }
}

mkdirSync(resolve(ROOT, 'tmp'), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const outPath = resolve(ROOT, `tmp/psi-deep-${STRATEGY}-${stamp}.json`);
writeFileSync(outPath, JSON.stringify({ strategy: STRATEGY, results, issues }, null, 2));
console.log(`\nFull data saved: ${outPath}`);
