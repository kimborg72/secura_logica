import { getCollection } from 'astro:content';
import type { Locale } from './types';

/**
 * Content entries use locale subdirectories (sv/, en/).
 * Entry IDs are prefixed with the locale folder, e.g. "sv/nis2" or "en/nis2".
 */

export async function getServicesByLocale(locale: Locale) {
  const all = await getCollection('services');
  return all
    .filter((s) => s.id.startsWith(`${locale}/`))
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getServiceBySlug(locale: Locale, slug: string) {
  const all = await getCollection('services');
  return all.find((s) => s.id.startsWith(`${locale}/`) && s.data.slug === slug);
}

export async function getInsightsByLocale(locale: Locale) {
  const all = await getCollection('insights');
  return all
    .filter((p) => p.id.startsWith(`${locale}/`) && !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getInsightBySlug(locale: Locale, slug: string) {
  const all = await getCollection('insights');
  return all.find(
    (p) => p.id.startsWith(`${locale}/`) && p.id.replace(`${locale}/`, '').replace(/\.\w+$/, '') === slug,
  );
}

export async function getIndustriesByLocale(locale: Locale) {
  const all = await getCollection('industries');
  return all
    .filter((i) => i.id.startsWith(`${locale}/`))
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getTeamByLocale(locale: Locale) {
  const all = await getCollection('team');
  return all.filter((t) => t.id.startsWith(`${locale}/`));
}
