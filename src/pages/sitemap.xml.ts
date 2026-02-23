import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routeMap, serviceSlugMap, insightSlugMap } from '@i18n/routes';
import { site } from '@data/site';
import { kommuner } from '@data/kommuner';

const SITE_URL = site.url;

function buildBilingualBlock(sv: string, en: string): string {
  const svUrl = `${SITE_URL}${sv}`;
  const enUrl = `${SITE_URL}${en}`;

  return `  <url>
    <loc>${svUrl}</loc>
    <xhtml:link rel="alternate" hreflang="sv-SE" href="${svUrl}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${svUrl}"/>
  </url>
  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="sv-SE" href="${svUrl}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${svUrl}"/>
  </url>`;
}

function buildSvOnlyBlock(svPath: string): string {
  const svUrl = `${SITE_URL}${svPath}`;
  return `  <url>
    <loc>${svUrl}</loc>
    <xhtml:link rel="alternate" hreflang="sv-SE" href="${svUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${svUrl}"/>
  </url>`;
}

export const GET: APIRoute = async () => {
  const blocks: string[] = [];

  // 1. Static bilingual pages
  for (const [sv, en] of Object.entries(routeMap)) {
    blocks.push(buildBilingualBlock(sv, en));
  }

  // 2. Service detail pages — dynamic from collection
  const allServices = await getCollection('services');
  const svServices = allServices.filter((s) => s.id.startsWith('sv/'));
  for (const service of svServices) {
    const svSlug = service.data.slug;
    const enSlug = serviceSlugMap[svSlug] ?? svSlug;
    blocks.push(buildBilingualBlock(`/tjanster/${svSlug}`, `/en/services/${enSlug}`));
  }

  // 3. Insight detail pages — dynamic from collection
  const allInsights = await getCollection('insights');
  const svInsights = allInsights.filter((p) => p.id.startsWith('sv/') && !p.data.draft);
  for (const post of svInsights) {
    const svSlug = post.id.replace('sv/', '');
    const enSlug = insightSlugMap[svSlug] ?? svSlug;
    blocks.push(buildBilingualBlock(`/insikter/${svSlug}`, `/en/insights/${enSlug}`));
  }

  // 4. Municipality pages — Swedish-only
  blocks.push(buildSvOnlyBlock('/kommuner'));
  for (const k of kommuner) {
    blocks.push(buildSvOnlyBlock(`/kommuner/${k.slug}`));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
