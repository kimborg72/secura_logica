#!/usr/bin/env node
/**
 * Best-effort "request indexing" via Google Indexing API (urlNotifications.publish).
 *
 * NOTE: Google officially supports the Indexing API only for JobPosting /
 * BroadcastEvent pages. For ordinary pages this is unofficial — it usually
 * nudges a re-crawl but is not guaranteed. The canonical path is the
 * "Request indexing" button in the Search Console UI.
 *
 * Requires:
 *   - Indexing API enabled in the GCP project (verit-492219)
 *   - The service account added as an *Owner* of the Search Console property
 *
 * Usage: node scripts/gsc-request-indexing.mjs
 */
import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const URLS = [
  'https://verit.se/tjanster/iso27001',
  'https://verit.se/tjanster/utbildning',
  'https://verit.se/tjanster/ciso-as-a-service',
  'https://verit.se/tjanster/riskhantering',
  'https://verit.se/en/services/ciso-as-a-service',
  'https://verit.se/en/services/gdpr',
];

function loadCredentials() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  return JSON.parse(readFileSync(resolve(ROOT, 'verit-492219-760cb5c5d175.json'), 'utf-8'));
}

const auth = new google.auth.GoogleAuth({
  credentials: loadCredentials(),
  scopes: ['https://www.googleapis.com/auth/indexing'],
});
const indexing = google.indexing({ version: 'v3', auth });

console.log('Indexing API — requesting re-crawl (best-effort)\n');
let ok = 0;
for (const url of URLS) {
  try {
    const res = await indexing.urlNotifications.publish({
      requestBody: { url, type: 'URL_UPDATED' },
    });
    const t = res.data.urlNotificationMetadata?.latestUpdate?.notifyTime ?? 'submitted';
    console.log(`  ✓ ${url}  (${t})`);
    ok++;
  } catch (err) {
    const msg = err?.errors?.[0]?.message || err?.response?.data?.error?.message || err.message;
    console.log(`  ✗ ${url}\n      ${msg}`);
  }
}
console.log(`\n${ok}/${URLS.length} accepted by the Indexing API.`);
