#!/usr/bin/env node
/**
 * Google Ads + Search Console — Combined optimization report
 *
 * Alt 1: GSC → Ads keyword opportunities (high impressions, low CTR)
 * Alt 2: Campaign health check + landing page validation
 * Alt 3: Organic vs paid performance comparison
 *
 * Usage:
 *   npm run ads:report              # full report
 *   npm run ads:report -- --keywords  # keyword opportunities only
 *   npm run ads:report -- --health    # campaign health only
 *   npm run ads:report -- --compare   # organic vs paid only
 */

import { GoogleAdsApi, enums } from 'google-ads-api';
import { google } from 'googleapis';
import { readFileSync, appendFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Load .env (falls back to process.env in CI) ────────────────────
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
const GITHUB_STEP_SUMMARY = process.env.GITHUB_STEP_SUMMARY;

// ── Config ──────────────────────────────────────────────────────────
const SITE_URL = 'sc-domain:verit.se';
const ORIGIN = 'https://verit.se';
const CUSTOMER_ID = env.GOOGLE_ADS_CUSTOMER_ID || '6821977588';

// ── Validate credentials ───────────────────────────────────────────
const missingAds = [];
if (!env.GOOGLE_ADS_CLIENT_ID) missingAds.push('GOOGLE_ADS_CLIENT_ID');
if (!env.GOOGLE_ADS_CLIENT_SECRET) missingAds.push('GOOGLE_ADS_CLIENT_SECRET');
if (!env.GOOGLE_ADS_DEVELOPER_TOKEN) missingAds.push('GOOGLE_ADS_DEVELOPER_TOKEN');
if (!env.GOOGLE_ADS_REFRESH_TOKEN) missingAds.push('GOOGLE_ADS_REFRESH_TOKEN');

const hasAdsAccess = missingAds.length === 0;

// ── GSC Auth (supports both file and env var for CI) ────────────────
function loadGscCredentials() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  }
  const keyPath = resolve(ROOT, 'verit-492219-760cb5c5d175.json');
  return JSON.parse(readFileSync(keyPath, 'utf-8'));
}

const gscCredentials = loadGscCredentials();
const gscAuth = new google.auth.GoogleAuth({
  credentials: gscCredentials,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});
const webmasters = google.webmasters({ version: 'v3', auth: gscAuth });

// ── Ads client (lazy init) ──────────────────────────────────────────
function getAdsClient() {
  if (!hasAdsAccess) {
    console.error('\nGoogle Ads API not configured. Missing:', missingAds.join(', '));
    console.error('Run: node scripts/ads-auth-setup.mjs\n');
    return null;
  }

  const client = new GoogleAdsApi({
    client_id: env.GOOGLE_ADS_CLIENT_ID,
    client_secret: env.GOOGLE_ADS_CLIENT_SECRET,
    developer_token: env.GOOGLE_ADS_DEVELOPER_TOKEN,
  });

  return client.Customer({
    customer_id: CUSTOMER_ID,
    refresh_token: env.GOOGLE_ADS_REFRESH_TOKEN,
  });
}

// ── Alt 1: Keyword opportunities from GSC data ──────────────────────
async function findKeywordOpportunities() {
  console.log('\n═══════════════════════════════════════════');
  console.log('  ALT 1: Keyword Opportunities (GSC → Ads)');
  console.log('═══════════════════════════════════════════\n');

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 28);

  const fmt = (d) => d.toISOString().split('T')[0];

  const res = await webmasters.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ['query', 'page'],
      rowLimit: 500,
    },
  });

  const rows = res.data.rows || [];
  if (rows.length === 0) {
    console.log('No search data available yet.');
    return [];
  }

  // Sort by impressions desc
  rows.sort((a, b) => b.impressions - a.impressions);

  // High impressions, low CTR — good ad candidates
  const adCandidates = rows.filter((r) => r.impressions >= 10 && r.ctr < 0.05);

  // High impressions, position 5-15 — boost with ads
  const boostCandidates = rows.filter((r) => r.impressions >= 5 && r.position >= 5 && r.position <= 15);

  console.log(`Total queries tracked: ${rows.length}`);
  console.log(`Queries with high impressions + low CTR: ${adCandidates.length}`);
  console.log(`Queries ranking 5-15 (boost candidates): ${boostCandidates.length}`);

  if (adCandidates.length > 0) {
    console.log('\n── Top ad candidates (high impressions, low CTR) ──');
    console.log(
      `${'Keyword'.padEnd(45)} ${'Impr'.padStart(6)} ${'CTR'.padStart(7)} ${'Pos'.padStart(5)} Page`,
    );
    console.log('─'.repeat(100));
    for (const r of adCandidates.slice(0, 20)) {
      const keyword = r.keys[0].substring(0, 44);
      const page = r.keys[1].replace(ORIGIN, '');
      console.log(
        `${keyword.padEnd(45)} ${String(r.impressions).padStart(6)} ${(r.ctr * 100).toFixed(1).padStart(6)}% ${r.position.toFixed(1).padStart(5)} ${page}`,
      );
    }
  }

  if (boostCandidates.length > 0) {
    console.log('\n── Boost candidates (position 5-15, would benefit from ads) ──');
    console.log(
      `${'Keyword'.padEnd(45)} ${'Impr'.padStart(6)} ${'CTR'.padStart(7)} ${'Pos'.padStart(5)} Page`,
    );
    console.log('─'.repeat(100));
    for (const r of boostCandidates.slice(0, 20)) {
      const keyword = r.keys[0].substring(0, 44);
      const page = r.keys[1].replace(ORIGIN, '');
      console.log(
        `${keyword.padEnd(45)} ${String(r.impressions).padStart(6)} ${(r.ctr * 100).toFixed(1).padStart(6)}% ${r.position.toFixed(1).padStart(5)} ${page}`,
      );
    }
  }

  // GitHub Actions summary
  if (GITHUB_STEP_SUMMARY) {
    const md = [
      `## Keyword Opportunities — ${new Date().toISOString().split('T')[0]}`,
      '',
      `Queries tracked: ${rows.length} | Ad candidates: ${adCandidates.length} | Boost candidates: ${boostCandidates.length}`,
      '',
    ];

    if (adCandidates.length > 0) {
      md.push('### Ad candidates (high impressions, low CTR)', '');
      md.push('| Keyword | Impressions | CTR | Position | Page |', '|---------|-------------|-----|----------|------|');
      for (const r of adCandidates.slice(0, 20)) {
        md.push(`| ${r.keys[0]} | ${r.impressions} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} | ${r.keys[1].replace(ORIGIN, '')} |`);
      }
      md.push('');
    }

    if (boostCandidates.length > 0) {
      md.push('### Boost candidates (position 5-15)', '');
      md.push('| Keyword | Impressions | CTR | Position | Page |', '|---------|-------------|-----|----------|------|');
      for (const r of boostCandidates.slice(0, 20)) {
        md.push(`| ${r.keys[0]} | ${r.impressions} | ${(r.ctr * 100).toFixed(1)}% | ${r.position.toFixed(1)} | ${r.keys[1].replace(ORIGIN, '')} |`);
      }
      md.push('');
    }

    appendFileSync(GITHUB_STEP_SUMMARY, md.join('\n'));
  }

  return rows;
}

// ── Alt 2: Campaign health + landing page validation ────────────────
async function checkCampaignHealth() {
  console.log('\n═══════════════════════════════════════════');
  console.log('  ALT 2: Campaign Health & Landing Pages');
  console.log('═══════════════════════════════════════════\n');

  const customer = getAdsClient();
  if (!customer) return;

  // Campaign performance
  const campaigns = await customer.query(`
    SELECT
      campaign.id,
      campaign.name,
      campaign.status,
      campaign.advertising_channel_type,
      campaign_budget.amount_micros,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.ctr,
      metrics.average_cpc
    FROM campaign
    WHERE segments.date DURING LAST_30_DAYS
  `);

  console.log('── Campaign Performance (last 30 days) ──');
  for (const row of campaigns) {
    const c = row.campaign;
    const m = row.metrics;
    const budget = row.campaign_budget;

    console.log(`\n  ${c.name} (${enums.CampaignStatus[c.status]})`);
    console.log(`    Type:        ${enums.AdvertisingChannelType[c.advertising_channel_type]}`);
    console.log(`    Budget:      ${(budget.amount_micros / 1_000_000).toFixed(2)} kr/day`);
    console.log(`    Impressions: ${m.impressions}`);
    console.log(`    Clicks:      ${m.clicks}`);
    console.log(`    CTR:         ${(m.ctr * 100).toFixed(2)}%`);
    console.log(`    Avg CPC:     ${(m.average_cpc / 1_000_000).toFixed(2)} kr`);
    console.log(`    Cost:        ${(m.cost_micros / 1_000_000).toFixed(2)} kr`);
    console.log(`    Conversions: ${m.conversions}`);
  }

  // Landing page validation
  console.log('\n── Landing Page Validation ──');
  try {
    const landingPages = await customer.query(`
      SELECT
        landing_page_view.unexpanded_final_url,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros
      FROM landing_page_view
      WHERE segments.date DURING LAST_30_DAYS
      ORDER BY metrics.impressions DESC
      LIMIT 50
    `);

    for (const row of landingPages) {
      const url = row.landing_page_view.unexpanded_final_url;
      const status = await checkUrl(url);
      const icon = status === 200 ? '✓' : '✗';
      console.log(
        `  ${icon} [${status}] ${url} (${row.metrics.clicks} clicks, ${(row.metrics.cost_micros / 1_000_000).toFixed(2)} kr)`,
      );
    }
  } catch (err) {
    console.log('  Could not fetch landing pages:', err.message?.substring(0, 100));
  }

  // Optimization score
  try {
    const optScore = await customer.query(`
      SELECT
        customer.optimization_score,
        customer.optimization_score_weight
      FROM customer
    `);

    if (optScore.length > 0) {
      const score = optScore[0].customer.optimization_score;
      console.log(`\n  Optimization Score: ${(score * 100).toFixed(0)}%`);
    }
  } catch {}
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.status;
  } catch {
    return 0;
  }
}

// ── Alt 3: Organic vs paid comparison ───────────────────────────────
async function compareOrganicVsPaid() {
  console.log('\n═══════════════════════════════════════════');
  console.log('  ALT 3: Organic vs Paid Performance');
  console.log('═══════════════════════════════════════════\n');

  // Get organic data from GSC
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 28);
  const fmt = (d) => d.toISOString().split('T')[0];

  const gscRes = await webmasters.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ['query'],
      rowLimit: 500,
    },
  });

  const organicQueries = new Map();
  for (const row of gscRes.data.rows || []) {
    organicQueries.set(row.keys[0], {
      impressions: row.impressions,
      clicks: row.clicks,
      ctr: row.ctr,
      position: row.position,
    });
  }

  console.log(`Organic queries tracked: ${organicQueries.size}`);

  // Get paid data from Ads
  const customer = getAdsClient();
  if (!customer) {
    console.log('(Ads data skipped — not configured)\n');
    // Still show organic summary
    console.log('── Top organic queries ──');
    const sorted = [...organicQueries.entries()].sort((a, b) => b[1].impressions - a[1].impressions);
    console.log(
      `${'Query'.padEnd(45)} ${'Impr'.padStart(7)} ${'Clicks'.padStart(7)} ${'CTR'.padStart(7)} ${'Pos'.padStart(5)}`,
    );
    console.log('─'.repeat(75));
    for (const [query, data] of sorted.slice(0, 30)) {
      console.log(
        `${query.substring(0, 44).padEnd(45)} ${String(data.impressions).padStart(7)} ${String(data.clicks).padStart(7)} ${(data.ctr * 100).toFixed(1).padStart(6)}% ${data.position.toFixed(1).padStart(5)}`,
      );
    }
    return;
  }

  const paidQueries = new Map();
  try {
    const searchTerms = await customer.query(`
      SELECT
        search_term_view.search_term,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros,
        metrics.conversions
      FROM search_term_view
      WHERE segments.date DURING LAST_30_DAYS
      ORDER BY metrics.impressions DESC
      LIMIT 500
    `);

    for (const row of searchTerms) {
      paidQueries.set(row.search_term_view.search_term, {
        impressions: row.metrics.impressions,
        clicks: row.metrics.clicks,
        cost: row.metrics.cost_micros / 1_000_000,
        conversions: row.metrics.conversions,
      });
    }
  } catch (err) {
    console.log('  Note: Search terms not available for Performance Max campaigns.');
    console.log('  Showing campaign-level paid data instead.\n');
  }

  console.log(`Paid queries tracked: ${paidQueries.size}`);

  // Find cannibalization (paying for clicks you already get organically)
  const cannibalized = [];
  for (const [query, paid] of paidQueries) {
    const organic = organicQueries.get(query);
    if (organic && organic.position <= 3 && organic.ctr > 0.1) {
      cannibalized.push({ query, organic, paid });
    }
  }

  if (cannibalized.length > 0) {
    console.log('\n── Cannibalization warning (paying for top organic results) ──');
    console.log(
      `${'Query'.padEnd(40)} ${'Org Pos'.padStart(8)} ${'Org CTR'.padStart(8)} ${'Ad Cost'.padStart(9)}`,
    );
    console.log('─'.repeat(70));
    for (const { query, organic, paid } of cannibalized) {
      console.log(
        `${query.substring(0, 39).padEnd(40)} ${organic.position.toFixed(1).padStart(8)} ${(organic.ctr * 100).toFixed(1).padStart(7)}% ${paid.cost.toFixed(2).padStart(8)} kr`,
      );
    }
    console.log('\n  → Consider reducing bids on these terms — organic results already strong.');
  }

  // Find gaps (organic queries with no paid coverage, worth bidding on)
  const paidSet = new Set(paidQueries.keys());
  const gaps = [...organicQueries.entries()]
    .filter(([q, d]) => !paidSet.has(q) && d.impressions >= 10 && d.position > 5)
    .sort((a, b) => b[1].impressions - a[1].impressions);

  if (gaps.length > 0) {
    console.log('\n── Paid gaps (organic queries not covered by ads) ──');
    console.log(
      `${'Query'.padEnd(45)} ${'Impr'.padStart(7)} ${'Pos'.padStart(5)} Recommendation`,
    );
    console.log('─'.repeat(85));
    for (const [query, data] of gaps.slice(0, 15)) {
      const rec = data.position > 10 ? 'High priority — weak organic' : 'Medium — strengthen with ads';
      console.log(
        `${query.substring(0, 44).padEnd(45)} ${String(data.impressions).padStart(7)} ${data.position.toFixed(1).padStart(5)} ${rec}`,
      );
    }
  }

  // Summary stats
  const totalOrgClicks = [...organicQueries.values()].reduce((s, d) => s + d.clicks, 0);
  const totalPaidClicks = [...paidQueries.values()].reduce((s, d) => s + d.clicks, 0);
  const totalPaidCost = [...paidQueries.values()].reduce((s, d) => s + d.cost, 0);

  console.log('\n── Summary ──');
  console.log(`  Organic clicks (28 days):  ${totalOrgClicks}`);
  console.log(`  Paid clicks (30 days):     ${totalPaidClicks}`);
  console.log(`  Total ad spend:            ${totalPaidCost.toFixed(2)} kr`);
  if (totalPaidClicks > 0) {
    console.log(`  Avg CPC:                   ${(totalPaidCost / totalPaidClicks).toFixed(2)} kr`);
  }
}

// ── Run ─────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const runAll = args.length === 0;

console.log('Google Ads + Search Console — Optimization Report');
console.log('=================================================');
console.log(`Date: ${new Date().toISOString().split('T')[0]}`);
console.log(`Site: ${ORIGIN}`);
console.log(`Ads:  ${hasAdsAccess ? 'Connected' : 'Not configured (run ads-auth-setup.mjs)'}`);

if (runAll || args.includes('--keywords')) {
  await findKeywordOpportunities();
}

if (runAll || args.includes('--health')) {
  await checkCampaignHealth();
}

if (runAll || args.includes('--compare')) {
  await compareOrganicVsPaid();
}

console.log('\nDone.');
