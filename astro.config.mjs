import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://verit.se',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: { sv: 'sv-SE' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/admin': '/admin/index.html',
  },
  trailingSlash: 'never',
  prefetch: {
    defaultStrategy: 'hover',
  },
});
