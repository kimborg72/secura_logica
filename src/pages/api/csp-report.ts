import type { APIRoute } from 'astro';

export const prerender = false;

const NOISE_SCHEMES = ['chrome-extension', 'moz-extension', 'safari-extension', 'webkit-masked-url'];

function isNoise(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  return NOISE_SCHEMES.some((scheme) => value.startsWith(scheme + ':'));
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const text = await request.text();
    if (!text) return new Response(null, { status: 204 });

    const payload = JSON.parse(text);
    const report = payload['csp-report'] ?? payload;

    const blocked = report?.['blocked-uri'] ?? report?.blockedURL;
    const source = report?.['source-file'] ?? report?.sourceFile;
    if (isNoise(blocked) || isNoise(source)) {
      return new Response(null, { status: 204 });
    }

    console.warn('[CSP]', JSON.stringify({
      directive: report?.['violated-directive'] ?? report?.effectiveDirective,
      blocked,
      source,
      line: report?.['line-number'] ?? report?.lineNumber,
      document: report?.['document-uri'] ?? report?.documentURL,
    }));
  } catch {
    // Swallow malformed reports — they're not actionable.
  }
  return new Response(null, { status: 204 });
};
