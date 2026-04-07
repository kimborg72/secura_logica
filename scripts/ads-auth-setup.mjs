#!/usr/bin/env node
/**
 * Google Ads API — OAuth2 setup (one-time)
 *
 * Generates a refresh token for Google Ads API access.
 *
 * Prerequisites:
 *   1. Google Cloud Console (console.cloud.google.com) — project verit-492219:
 *      - Enable "Google Ads API"
 *      - Create OAuth2 credentials (Desktop app) → copy client_id + client_secret
 *
 *   2. Google Ads (ads.google.com):
 *      - Tools & Settings → API Center → copy developer_token
 *
 *   3. Add to .env:
 *      GOOGLE_ADS_CLIENT_ID=...
 *      GOOGLE_ADS_CLIENT_SECRET=...
 *      GOOGLE_ADS_DEVELOPER_TOKEN=...
 *
 * Usage:  node scripts/ads-auth-setup.mjs
 */

import { google } from 'googleapis';
import { createInterface } from 'readline';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ENV_PATH = resolve(ROOT, '.env');

function loadEnv() {
  const env = {};
  try {
    const content = readFileSync(ENV_PATH, 'utf-8');
    for (const line of content.split('\n')) {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match) env[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  } catch {}
  return env;
}

const env = loadEnv();
const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GOOGLE_ADS_CLIENT_ID and/or GOOGLE_ADS_CLIENT_SECRET in .env');
  console.error('\nSetup steps:');
  console.error('  1. Go to https://console.cloud.google.com/apis/credentials?project=verit-492219');
  console.error('  2. Create OAuth 2.0 Client ID (Desktop app)');
  console.error('  3. Copy client ID and client secret to .env');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, 'urn:ietf:wg:oauth:2.0:oob');

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: ['https://www.googleapis.com/auth/adwords'],
});

console.log('Open this URL in your browser and authorize:\n');
console.log(authUrl);
console.log('\nAfter authorizing, paste the code below.\n');

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question('Authorization code: ', async (code) => {
  rl.close();
  try {
    const { tokens } = await oauth2Client.getToken(code.trim());
    console.log('\nRefresh token obtained!\n');
    console.log(`GOOGLE_ADS_REFRESH_TOKEN=${tokens.refresh_token}\n`);

    // Append to .env
    const envContent = readFileSync(ENV_PATH, 'utf-8');
    if (!envContent.includes('GOOGLE_ADS_REFRESH_TOKEN')) {
      writeFileSync(ENV_PATH, envContent.trimEnd() + `\nGOOGLE_ADS_REFRESH_TOKEN=${tokens.refresh_token}\n`);
      console.log('Added to .env automatically.');
    } else {
      console.log('GOOGLE_ADS_REFRESH_TOKEN already exists in .env — update it manually if needed.');
    }
  } catch (err) {
    console.error('Error exchanging code:', err.message);
  }
});
