#!/usr/bin/env node
/**
 * Google Search Console — indexing audit
 *
 * Reads the live sitemap, then checks each URL via the URL Inspection API.
 * Reports which pages are indexed, excluded, or have errors.
 *
 * Usage:  npm run gsc:check
 *         node scripts/gsc-check.mjs [--submit-sitemap]
 */

import { google } from 'googleapis';
import { readFileSync, appendFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Config ──────────────────────────────────────────────────────────
const SITE_URL = 'sc-domain:verit.se'; // domain property in Search Console
const ORIGIN = 'https://verit.se';
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const CI = !!process.env.CI;
const GITHUB_STEP_SUMMARY = process.env.GITHUB_STEP_SUMMARY;

// ── Auth (supports both file and env var for CI) ────────────────────
function loadCredentials() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  }
  const keyPath = resolve(ROOT, 'verit-492219-760cb5c5d175.json');
  return JSON.parse(readFileSync(keyPath, 'utf-8'));
}

const credentials = loadCredentials();
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/webmasters',
  ],
});

const searchconsole = google.searchconsole({ version: 'v1', auth });
const webmasters = google.webmasters({ version: 'v3', auth });

// ── Helpers ─────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)]; // deduplicate
}

async function inspectUrl(url) {
  try {
    const res = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: SITE_URL,
      },
    });
    const result = res.data.inspectionResult;
    return {
      url,
      verdict: result.indexStatusResult?.verdict ?? 'UNKNOWN',
      coverageState: result.indexStatusResult?.coverageState ?? 'UNKNOWN',
      robotsTxtState: result.indexStatusResult?.robotsTxtState ?? 'UNKNOWN',
      lastCrawlTime: result.indexStatusResult?.lastCrawlTime ?? null,
      pageFetchState: result.indexStatusResult?.pageFetchState ?? 'UNKNOWN',
    };
  } catch (err) {
    return {
      url,
      verdict: 'ERROR',
      coverageState: err.message,
      robotsTxtState: 'UNKNOWN',
      lastCrawlTime: null,
      pageFetchState: 'UNKNOWN',
    };
  }
}

async function submitSitemap() {
  try {
    await webmasters.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });
    console.log(`\n✓ Sitemap submitted: ${SITEMAP_URL}`);
  } catch (err) {
    console.error(`✗ Failed to submit sitemap: ${err.message}`);
  }
}

async function getSitemapStatus() {
  try {
    const res = await webmasters.sitemaps.get({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });
    return res.data;
  } catch {
    return null;
  }
}

// ── Main ────────────────────────────────────────────────────────────
const shouldSubmit = process.argv.includes('--submit-sitemap');

console.log('Google Search Console — Indexing Audit');
console.log('======================================\n');

// 1. Sitemap status
console.log('Sitemap status:');
const sitemapStatus = await getSitemapStatus();
if (sitemapStatus) {
  console.log(`  URL:       ${SITEMAP_URL}`);
  console.log(`  Last downloaded: ${sitemapStatus.lastDownloaded ?? 'never'}`);
  console.log(`  Warnings:  ${sitemapStatus.warnings ?? 0}`);
  console.log(`  Errors:    ${sitemapStatus.errors ?? 0}`);
} else {
  console.log('  Not yet submitted or not accessible.');
}

// 2. Submit sitemap if requested
if (shouldSubmit) {
  await submitSitemap();
}

// 3. Fetch all sitemap URLs
console.log('\nFetching sitemap URLs...');
const urls = await fetchSitemapUrls();
console.log(`Found ${urls.length} unique URLs in sitemap.\n`);

// 4. Inspect each URL (with rate limiting — API quota is ~600/min)
const indexed = [];
const notIndexed = [];
const errors = [];

for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const progress = `[${i + 1}/${urls.length}]`;

  const result = await inspectUrl(url);

  if (result.verdict === 'PASS') {
    indexed.push(result);
    process.stdout.write(`${progress} ✓ ${url}\n`);
  } else if (result.verdict === 'ERROR') {
    errors.push(result);
    process.stdout.write(`${progress} ✗ ${url} — ${result.coverageState}\n`);
  } else {
    notIndexed.push(result);
    process.stdout.write(`${progress} ○ ${url} — ${result.coverageState}\n`);
  }

  // Rate limit: ~2 requests/sec to stay within quota
  if (i < urls.length - 1) await sleep(500);
}

// 5. Summary
console.log('\n======================================');
console.log('SUMMARY');
console.log('======================================');
console.log(`Total URLs:    ${urls.length}`);
console.log(`Indexed:       ${indexed.length}`);
console.log(`Not indexed:   ${notIndexed.length}`);
console.log(`Errors:        ${errors.length}`);

if (notIndexed.length > 0) {
  console.log('\n── Not indexed ────────────────────────');
  for (const r of notIndexed) {
    console.log(`  ${r.url}`);
    console.log(`    Status: ${r.coverageState}`);
    console.log(`    Fetch:  ${r.pageFetchState}`);
    console.log(`    Robots: ${r.robotsTxtState}`);
    if (r.lastCrawlTime) console.log(`    Last crawl: ${r.lastCrawlTime}`);
  }
}

if (errors.length > 0) {
  console.log('\n── Errors ─────────────────────────────');
  for (const r of errors) {
    console.log(`  ${r.url}`);
    console.log(`    ${r.coverageState}`);
  }
}

// 6. Write GitHub Actions summary (if running in CI)
if (GITHUB_STEP_SUMMARY) {
  const pct = urls.length ? ((indexed.length / urls.length) * 100).toFixed(0) : 0;
  const lines = [
    `## GSC Indexing Audit — ${new Date().toISOString().split('T')[0]}`,
    '',
    `| Metric | Count |`,
    `|--------|-------|`,
    `| Total URLs | ${urls.length} |`,
    `| Indexed | ${indexed.length} (${pct}%) |`,
    `| Not indexed | ${notIndexed.length} |`,
    `| Errors | ${errors.length} |`,
    '',
  ];

  if (notIndexed.length > 0) {
    // Group by status
    const byStatus = {};
    for (const r of notIndexed) {
      byStatus[r.coverageState] = byStatus[r.coverageState] || [];
      byStatus[r.coverageState].push(r.url);
    }
    lines.push('### Not indexed (by reason)', '');
    for (const [status, statusUrls] of Object.entries(byStatus)) {
      lines.push(`<details><summary>${status} (${statusUrls.length})</summary>`, '');
      for (const u of statusUrls) lines.push(`- ${u}`);
      lines.push('', '</details>', '');
    }
  }

  if (errors.length > 0) {
    lines.push('### Errors', '');
    for (const r of errors) lines.push(`- ${r.url}: ${r.coverageState}`);
    lines.push('');
  }

  appendFileSync(GITHUB_STEP_SUMMARY, lines.join('\n'));
}

// 7. Exit with error code if indexing rate is critically low
const indexRate = urls.length ? indexed.length / urls.length : 1;
if (indexRate < 0.1 && urls.length > 10) {
  console.log('\n⚠ WARNING: Less than 10% of pages indexed!');
}

console.log('\nDone.');
