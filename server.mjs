import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import send from 'send';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const PORT = Number(process.env.PORT ?? 4321);
const HOST = process.env.HOST ?? '0.0.0.0';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_DIR = path.join(__dirname, 'dist', 'client');

const STATIC_ASSET_RE = /\.(?:js|mjs|css|woff2?|ttf|otf|png|jpe?g|gif|svg|webp|avif|ico|map)$/i;

// upgrade-insecure-requests is omitted: browsers ignore it in Report-Only mode
// and log a console warning. Re-add when CSP graduates to enforcing.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://stats.securapilot.com https://maps.googleapis.com https://maps.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.basemaps.cartocdn.com https://maps.googleapis.com https://maps.gstatic.com",
  "font-src 'self'",
  "connect-src 'self' https://stats.securapilot.com https://maps.googleapis.com https://*.basemaps.cartocdn.com",
  "worker-src 'self' blob:",
  "frame-src 'self' https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'report-uri /api/csp-report',
].join('; ');

function applySecurityHeaders(req, res) {
  const url = req.url ?? '/';
  const pathname = url.split('?')[0];

  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  );
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  res.removeHeader('Server');
  res.removeHeader('X-Powered-By');

  if (!pathname.startsWith('/admin')) {
    res.setHeader('Content-Security-Policy-Report-Only', CSP);
  }

  if (pathname.startsWith('/api/') || pathname.startsWith('/admin')) {
    res.setHeader('Cache-Control', 'no-store');
  } else if (pathname.startsWith('/_astro/') || STATIC_ASSET_RE.test(pathname)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  }
}

function resolveStaticPath(urlPath) {
  if (urlPath.endsWith('/') && urlPath !== '/') {
    urlPath = urlPath.slice(0, -1);
  }
  const filePath = path.join(CLIENT_DIR, urlPath);
  try {
    if (fs.statSync(filePath).isDirectory()) {
      return urlPath + '/index.html';
    }
  } catch {
    // not a directory or doesn't exist; check for prerendered HTML
  }
  try {
    const htmlCandidate = filePath + '/index.html';
    if (fs.statSync(htmlCandidate).isFile()) {
      return urlPath + '/index.html';
    }
  } catch {}
  return urlPath;
}

function serveStatic(req, res, fallback) {
  const url = req.url ?? '/';
  const [rawPath, query] = url.split('?');
  const resolved = resolveStaticPath(rawPath);

  const stream = send(req, resolved, {
    root: CLIENT_DIR,
    dotfiles: resolved.startsWith('/.well-known/') ? 'allow' : 'deny',
  });

  let forwardError = false;
  stream.on('error', (err) => {
    if (forwardError) {
      console.error(err);
      res.writeHead(500);
      res.end('Internal server error');
      return;
    }
    fallback();
  });
  stream.on('file', () => {
    forwardError = true;
  });
  stream.pipe(res);
}

function serve404(req, res) {
  if (res.headersSent) return;
  const filePath = path.join(CLIENT_DIR, '404.html');
  try {
    const body = fs.readFileSync(filePath);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(body);
  } catch {
    res.statusCode = 404;
    res.end('Not found');
  }
}

const server = http.createServer((req, res) => {
  applySecurityHeaders(req, res);
  serveStatic(req, res, () => {
    ssrHandler(req, res, (err) => {
      if (err) {
        console.error(err);
        if (!res.headersSent) {
          res.writeHead(500);
          res.end('Internal server error');
        }
        return;
      }
      serve404(req, res);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`verit.se listening on http://${HOST}:${PORT}`);
});
