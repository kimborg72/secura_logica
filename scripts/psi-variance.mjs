#!/usr/bin/env node
/**
 * Run PSI on the same URL N times to measure lab variance — useful for
 * deciding whether a borderline LCP score is a real bottleneck or just
 * noise in the simulated environment.
 */
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function loadEnv() {
  const env = { ...process.env };
  try {
    const c = readFileSync(resolve(ROOT, '.env'), 'utf-8');
    for (const line of c.split('\n')) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m && !env[m[1]]) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
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

const RUNS = parseInt(process.env.RUNS || '5', 10);
const ORIGIN = 'https://verit.se';
const args = process.argv.slice(2);
const URLS = (args.length ? args : ['/en', '/insikter/hotbild'])
  .map((u) => (u.startsWith('http') ? u : `${ORIGIN}${u.startsWith('/') ? u : '/' + u}`));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runPsi(url) {
  const params = new URLSearchParams({
    url,
    strategy: 'mobile',
    key: API_KEY,
    category: 'performance',
  });
  const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const lh = data.lighthouseResult;
  const a = lh.audits;
  return {
    score: Math.round((lh.categories.performance.score ?? 0) * 100),
    lcp: a['largest-contentful-paint']?.numericValue ?? 0,
    tbt: a['total-blocking-time']?.numericValue ?? 0,
    cls: a['cumulative-layout-shift']?.numericValue ?? 0,
    fcp: a['first-contentful-paint']?.numericValue ?? 0,
  };
}

console.log(`PSI variance — ${RUNS} runs each on ${URLS.length} URL(s)\n`);

for (const url of URLS) {
  console.log(`▶ ${url}`);
  const results = [];
  for (let i = 0; i < RUNS; i++) {
    process.stdout.write(`  run ${i + 1}/${RUNS} ... `);
    try {
      const r = await runPsi(url);
      results.push(r);
      const lcpS = (r.lcp / 1000).toFixed(2);
      const cwv = r.lcp <= 2500 ? '✅' : r.lcp <= 4000 ? '⚠' : '❌';
      console.log(`P ${r.score}  LCP ${lcpS}s ${cwv}  TBT ${Math.round(r.tbt)}ms`);
    } catch (err) {
      console.log(`ERROR ${err.message}`);
    }
    if (i < RUNS - 1) await sleep(1500);
  }

  if (results.length > 1) {
    const avg = (k) => results.reduce((s, r) => s + r[k], 0) / results.length;
    const min = (k) => Math.min(...results.map((r) => r[k]));
    const max = (k) => Math.max(...results.map((r) => r[k]));
    const goodPct = Math.round((results.filter((r) => r.lcp <= 2500).length / results.length) * 100);
    console.log(`  ──────`);
    console.log(`  Score   avg ${Math.round(avg('score'))}   range ${min('score')}–${max('score')}`);
    console.log(`  LCP     avg ${(avg('lcp') / 1000).toFixed(2)}s   range ${(min('lcp') / 1000).toFixed(2)}–${(max('lcp') / 1000).toFixed(2)}s`);
    console.log(`  TBT     avg ${Math.round(avg('tbt'))}ms   range ${Math.round(min('tbt'))}–${Math.round(max('tbt'))}ms`);
    console.log(`  CWV "Good" rate: ${goodPct}% (LCP ≤ 2.5s)`);
  }
  console.log();
}
