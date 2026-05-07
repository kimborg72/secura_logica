#!/usr/bin/env node
/**
 * PageSpeed Insights — performance audit
 *
 * Runs Lighthouse via PSI API for each URL in the sitemap (or URLs passed
 * as CLI args). Reports performance score and Core Web Vitals.
 *
 * Usage:  npm run psi:check                 # full sitemap, mobile
 *         npm run psi:check -- --desktop    # desktop strategy
 *         node scripts/psi-check.mjs https://verit.se /tjanster
 *
 * Setup:  Enable PageSpeed Insights API on GCP project verit-492219, then
 *         add PAGESPEED_API_KEY=... to .env
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Env ─────────────────────────────────────────────────────────────
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
  console.error('1. Enable PSI API: https://console.cloud.google.com/apis/library/pagespeedonline.googleapis.com?project=verit-492219');
  console.error('2. Create an API key restricted to PageSpeed Insights API');
  console.error('3. Add PAGESPEED_API_KEY=... to .env');
  process.exit(1);
}

// ── Config ──────────────────────────────────────────────────────────
const ORIGIN = 'https://verit.se';
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const args = process.argv.slice(2);
const STRATEGY = args.includes('--desktop') ? 'desktop' : 'mobile';
const SAVE_JSON = args.includes('--save');
const URL_ARGS = args.filter((a) => !a.startsWith('--'));

// ── Helpers ─────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)];
}

async function runPsi(url) {
  const params = new URLSearchParams({
    url,
    strategy: STRATEGY,
    key: API_KEY,
    category: 'performance',
  });
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body.slice(0, 200)}`);
  }
  const data = await res.json();
  const lh = data.lighthouseResult;
  const audits = lh.audits;
  return {
    url,
    score: Math.round((lh.categories.performance.score ?? 0) * 100),
    lcp: audits['largest-contentful-paint']?.displayValue ?? '-',
    fcp: audits['first-contentful-paint']?.displayValue ?? '-',
    cls: audits['cumulative-layout-shift']?.displayValue ?? '-',
    tbt: audits['total-blocking-time']?.displayValue ?? '-',
    ttfb: audits['server-response-time']?.displayValue ?? '-',
    si: audits['speed-index']?.displayValue ?? '-',
  };
}

function scoreColor(score) {
  if (score >= 90) return '\x1b[32m'; // green
  if (score >= 50) return '\x1b[33m'; // yellow
  return '\x1b[31m'; // red
}

// ── Main ────────────────────────────────────────────────────────────
console.log(`PageSpeed Insights — ${STRATEGY} audit`);
console.log('='.repeat(40) + '\n');

let urls;
if (URL_ARGS.length > 0) {
  urls = URL_ARGS.map((u) => (u.startsWith('http') ? u : `${ORIGIN}${u.startsWith('/') ? u : '/' + u}`));
} else {
  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  urls = await fetchSitemapUrls();
}
console.log(`Auditing ${urls.length} URL(s)\n`);

const results = [];
for (const url of urls) {
  process.stdout.write(`  ${url} ... `);
  try {
    const r = await runPsi(url);
    results.push(r);
    const reset = '\x1b[0m';
    console.log(
      `${scoreColor(r.score)}${r.score}${reset}  LCP ${r.lcp}  CLS ${r.cls}  TBT ${r.tbt}`,
    );
  } catch (err) {
    results.push({ url, error: err.message });
    console.log(`\x1b[31mERROR\x1b[0m ${err.message}`);
  }
  await sleep(1100); // PSI free tier: ~1 req/sec
}

// ── Summary ─────────────────────────────────────────────────────────
const ok = results.filter((r) => !r.error);
const failed = results.filter((r) => r.error);
const avg = ok.length ? Math.round(ok.reduce((s, r) => s + r.score, 0) / ok.length) : 0;
const lt50 = ok.filter((r) => r.score < 50);
const lt90 = ok.filter((r) => r.score >= 50 && r.score < 90);

console.log('\n' + '─'.repeat(40));
console.log(`Strategy:      ${STRATEGY}`);
console.log(`Audited:       ${ok.length} ok / ${failed.length} failed`);
console.log(`Average score: ${avg}`);
console.log(`Poor (<50):    ${lt50.length}`);
console.log(`Needs work:    ${lt90.length}`);
console.log(`Good (≥90):    ${ok.length - lt50.length - lt90.length}`);

if (lt50.length) {
  console.log('\nWorst pages:');
  for (const r of lt50.sort((a, b) => a.score - b.score).slice(0, 10)) {
    console.log(`  ${r.score}  ${r.url}`);
  }
}

if (SAVE_JSON) {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const path = resolve(ROOT, `tmp/psi-${STRATEGY}-${stamp}.json`);
  writeFileSync(path, JSON.stringify({ strategy: STRATEGY, timestamp: stamp, results }, null, 2));
  console.log(`\nSaved: ${path}`);
}

process.exit(failed.length ? 1 : 0);
