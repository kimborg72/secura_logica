#!/usr/bin/env node
/**
 * Fetches raw Lighthouse audit details for specific URLs to extract
 * actionable specifics (which colors fail contrast, which images need
 * dimensions, what the LCP element is, etc.). One-shot helper for
 * optimization analysis.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
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
const ORIGIN = 'https://verit.se';

const URLS = [
  '/',
  '/insikter/hotbild',
  '/om-oss',
  '/integritetspolicy',
  '/insikter/kommuner',
];

const AUDITS_OF_INTEREST = [
  'largest-contentful-paint-element',
  'lcp-lazy-loaded',
  'render-blocking-resources',
  'unused-javascript',
  'unused-css-rules',
  'unminified-javascript',
  'modern-image-formats',
  'uses-optimized-images',
  'uses-text-compression',
  'uses-rel-preconnect',
  'uses-responsive-images',
  'efficient-animated-content',
  'duplicated-javascript',
  'legacy-javascript',
  'unsized-images',
  'color-contrast',
  'link-name',
  'link-text',
  'link-in-text-block',
  'heading-order',
  'long-tasks',
  'third-party-summary',
  'mainthread-work-breakdown',
  'bootup-time',
  'server-response-time',
  'critical-request-chains',
  'render-blocking-insight',
  'forced-reflow-insight',
  'image-delivery-insight',
  'lcp-discovery-insight',
  'cache-insight',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function runPsi(url) {
  const params = new URLSearchParams({ url, strategy: 'mobile', key: API_KEY });
  for (const c of ['performance', 'accessibility', 'best-practices', 'seo']) {
    params.append('category', c);
  }
  const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

const all = {};
for (const path of URLS) {
  const url = `${ORIGIN}${path}`;
  process.stdout.write(`Fetching ${path} ... `);
  try {
    const data = await runPsi(url);
    const audits = data.lighthouseResult.audits;
    const picked = {};
    for (const id of AUDITS_OF_INTEREST) {
      if (audits[id]) {
        picked[id] = {
          score: audits[id].score,
          displayValue: audits[id].displayValue,
          details: audits[id].details,
        };
      }
    }
    all[path] = picked;
    console.log('done');
  } catch (err) {
    console.log('ERROR ' + err.message);
    all[path] = { error: err.message };
  }
  await sleep(1100);
}

mkdirSync(resolve(ROOT, 'tmp'), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const out = resolve(ROOT, `tmp/psi-detail-${stamp}.json`);
writeFileSync(out, JSON.stringify(all, null, 2));
console.log(`\nSaved: ${out}`);
