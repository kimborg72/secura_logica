/**
 * Generate AI images for kommun pages using Freepik Mystic API.
 * Usage: node scripts/generate-kommun-images.mjs
 */

const API_KEY = 'FPSX011fd498fae6a9ed54fbac9426774381';
const API_URL = 'https://api.freepik.com/v1/ai/mystic';
const OUT_DIR = new URL('../public/images/insights/', import.meta.url);

import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const prompts = {
  'hero-hotbild': 'Cybersecurity monitoring room, large screens with data, dark blue ambient lighting, professional office',
};

async function generateImage(type, prompt) {
  console.log(`\n--- Generating: ${type} ---`);
  console.log(`Prompt: ${prompt}`);

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-freepik-api-key': API_KEY,
    },
    body: JSON.stringify({
      prompt,
      resolution: '1k',
      aspect_ratio: 'widescreen_16_9',
      model: 'super_real',
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`API error (${res.status}):`, text);
    return null;
  }

  const data = await res.json();
  console.log('Task status:', data.data?.status);

  // If async (CREATED/IN_PROGRESS), poll for completion
  if (data.data?.status === 'COMPLETED' && data.data?.generated?.length) {
    return data.data.generated[0];
  }

  if (data.data?.task_id) {
    return await pollForResult(data.data.task_id);
  }

  console.error('Unexpected response:', JSON.stringify(data, null, 2));
  return null;
}

async function pollForResult(taskId) {
  const pollUrl = `https://api.freepik.com/v1/ai/mystic/${taskId}`;
  for (let i = 0; i < 60; i++) {
    console.log(`  Polling attempt ${i + 1}...`);
    await new Promise((r) => setTimeout(r, 3000));

    const res = await fetch(pollUrl, {
      headers: { 'x-freepik-api-key': API_KEY },
    });

    if (!res.ok) {
      console.error(`  Poll error (${res.status}):`, await res.text());
      continue;
    }

    const data = await res.json();
    console.log('  Status:', data.data?.status);

    if (data.data?.status === 'COMPLETED' && data.data?.generated?.length) {
      return data.data.generated[0];
    }

    if (data.data?.status === 'FAILED') {
      console.error('  Generation failed');
      return null;
    }
  }

  console.error('  Timed out waiting for result');
  return null;
}

async function downloadImage(url, filename) {
  console.log(`  Downloading: ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`  Download failed (${res.status})`);
    return;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(fileURLToPath(OUT_DIR), filename);
  await writeFile(outPath, buffer);
  console.log(`  Saved: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

async function main() {
  await mkdir(fileURLToPath(OUT_DIR), { recursive: true });

  for (const [type, prompt] of Object.entries(prompts)) {
    const imageUrl = await generateImage(type, prompt);
    if (imageUrl) {
      // Determine file extension from URL or default to .webp
      const ext = imageUrl.match(/\.(jpg|jpeg|png|webp)/i)?.[1] || 'webp';
      await downloadImage(imageUrl, `${type}.${ext}`);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);
