import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://verit.se',
  adapter: node({ mode: 'standalone' }),
  // checkOrigin disabled: @astrojs/node ignores X-Forwarded-Proto, so behind
  // nginx Astro sees http:// while the browser sends https:// Origin, causing
  // false 403s. CSRF is enforced explicitly in src/pages/api/contact.ts.
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
      },
    },
  },
  redirects: {
    '/admin': '/admin/index.html',
  },
  trailingSlash: 'never',
  prefetch: {
    defaultStrategy: 'hover',
  },
});
