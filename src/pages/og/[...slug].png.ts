import type { APIRoute, GetStaticPaths } from 'astro';
import { generateOgImage } from '@lib/og-image';
import { getServicesByLocale, getInsightsByLocale } from '@i18n/content';
import { kommuner } from '@data/kommuner';

export const prerender = true;

interface OgEntry {
  params: { slug: string };
  props: { title: string; subtitle?: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: OgEntry[] = [];

  // --- Static pages (SV) ---
  paths.push(
    { params: { slug: 'index' }, props: { title: 'Verit', subtitle: 'Cybersäkerhet & Compliance' } },
    { params: { slug: 'om-oss' }, props: { title: 'Om Verit', subtitle: 'Cybersäkerhetskonsulter sedan 2014' } },
    { params: { slug: 'kontakt' }, props: { title: 'Kontakta Verit', subtitle: 'Cybersäkerhet & Compliance' } },
    { params: { slug: 'tjanster' }, props: { title: 'Våra tjänster', subtitle: 'NIS2, ISO 27001, CISO & GRC' } },
    { params: { slug: 'insikter' }, props: { title: 'Insikter', subtitle: 'Cybersäkerhet & Compliance' } },
    { params: { slug: 'securapilot' }, props: { title: 'Securapilot', subtitle: 'GRC-plattform för NIS2 & ISO 27001' } },
    { params: { slug: 'integritetspolicy' }, props: { title: 'Integritetspolicy' } },
    { params: { slug: 'referenser' }, props: { title: 'Referenser' } },
    { params: { slug: 'insikter/kommuner' }, props: { title: 'Cybersäkerhet & NIS2', subtitle: 'Per kommun i Sverige' } },
  );

  // --- Static pages (EN) ---
  paths.push(
    { params: { slug: 'en/index' }, props: { title: 'Verit', subtitle: 'Cybersecurity & Compliance' } },
    { params: { slug: 'en/about-us' }, props: { title: 'About Verit', subtitle: 'Cybersecurity Consultants Since 2014' } },
    { params: { slug: 'en/contact' }, props: { title: 'Contact Verit', subtitle: 'Cybersecurity & Compliance' } },
    { params: { slug: 'en/services' }, props: { title: 'Our Services', subtitle: 'NIS2, ISO 27001, CISO & GRC' } },
    { params: { slug: 'en/insights' }, props: { title: 'Insights', subtitle: 'Cybersecurity & Compliance' } },
    { params: { slug: 'en/securapilot' }, props: { title: 'Securapilot', subtitle: 'GRC Platform for NIS2 & ISO 27001' } },
    { params: { slug: 'en/privacy-policy' }, props: { title: 'Privacy Policy' } },
    { params: { slug: 'en/references' }, props: { title: 'References' } },
  );

  // --- Services ---
  const svServices = await getServicesByLocale('sv');
  for (const s of svServices) {
    paths.push({
      params: { slug: `tjanster/${s.data.slug}` },
      props: { title: s.data.title, subtitle: s.data.excerpt },
    });
  }

  const enServices = await getServicesByLocale('en');
  for (const s of enServices) {
    paths.push({
      params: { slug: `en/services/${s.data.slug}` },
      props: { title: s.data.title, subtitle: s.data.excerpt },
    });
  }

  // --- Insights ---
  const svInsights = await getInsightsByLocale('sv');
  for (const p of svInsights) {
    const slug = p.id.replace('sv/', '');
    paths.push({
      params: { slug: `insikter/${slug}` },
      props: { title: p.data.title, subtitle: p.data.category },
    });
  }

  const enInsights = await getInsightsByLocale('en');
  for (const p of enInsights) {
    const slug = p.id.replace('en/', '');
    paths.push({
      params: { slug: `en/insights/${slug}` },
      props: { title: p.data.title, subtitle: p.data.category },
    });
  }

  // --- Kommuner ---
  for (const k of kommuner) {
    paths.push({
      params: { slug: `insikter/kommuner/${k.slug}` },
      props: { title: `Cybersäkerhet i ${k.name}`, subtitle: 'NIS2 & ISO 27001' },
    });
  }

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props as { title: string; subtitle?: string };
  const png = await generateOgImage(title, subtitle);
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
