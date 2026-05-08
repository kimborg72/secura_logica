import { defineMiddleware } from 'astro:middleware';
import { randomBytes } from 'node:crypto';

const STATIC_ASSET_RE = /\.(?:js|mjs|css|woff2?|ttf|otf|png|jpe?g|gif|svg|webp|avif|ico|map)$/i;

// base64 (mixed alphanumerics) instead of hex avoids long all-digit runs
// that ZAP's PII heuristic mistakes for credit card numbers (CWE-359).
function generateNonce(): string {
  return randomBytes(16).toString('base64');
}

// upgrade-insecure-requests is omitted: browsers ignore it in Report-Only mode
// and log a console warning. Re-add when CSP graduates to enforcing.
function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://*.basemaps.cartocdn.com https://maps.googleapis.com https://maps.gstatic.com",
    "font-src 'self'",
    "connect-src 'self' https://stats.securapilot.com https://maps.googleapis.com https://*.basemaps.cartocdn.com",
    "worker-src 'self' blob:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    'report-uri /api/csp-report',
  ].join('; ');
}

export const onRequest = defineMiddleware(async (context, next) => {
  const nonce = generateNonce();
  context.locals.cspNonce = nonce;

  const response = await next();
  const { pathname } = context.url;
  const headers = response.headers;
  const contentType = headers.get('content-type') ?? '';

  headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  );
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  headers.set('Server', '');

  const skipCsp = pathname.startsWith('/admin');
  if (!skipCsp) {
    headers.set('Content-Security-Policy-Report-Only', buildCsp(nonce));
  }

  if (pathname.startsWith('/api/')) {
    headers.set('Cache-Control', 'no-store');
  } else if (pathname.startsWith('/admin')) {
    headers.set('Cache-Control', 'no-store');
  } else if (pathname.startsWith('/_astro/') || STATIC_ASSET_RE.test(pathname)) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (contentType.startsWith('text/html')) {
    headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  return response;
});
