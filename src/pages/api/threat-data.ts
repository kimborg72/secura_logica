import type { APIRoute } from 'astro';
import { fetchThreatData } from '@lib/threat-data';

export const prerender = false;

export type { ThreatData } from '@lib/threat-data';

export const GET: APIRoute = async () => {
  try {
    const data = await fetchThreatData();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (err) {
    console.error('Threat data endpoint error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch threat data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
