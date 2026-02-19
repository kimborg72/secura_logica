import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://verit.se',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: {
          sv: 'sv-SE',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
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
