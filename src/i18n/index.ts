import sv from './translations/sv';
import en from './translations/en';
import type { Locale } from './types';

export type { Locale };
export { locales, defaultLocale } from './types';

type TranslationKey = keyof typeof sv;

const translations: Record<Locale, Record<string, string>> = { sv, en };

/**
 * Translate a key for the given locale. Supports `{param}` interpolation.
 */
export function t(
  locale: Locale,
  key: TranslationKey,
  params?: Record<string, string>,
): string {
  let value = translations[locale]?.[key] ?? translations.sv[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{${k}}`, v);
    }
  }
  return value;
}

/**
 * Derive locale from URL pathname.
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  return segment === 'en' ? 'en' : 'sv';
}

/**
 * Prefix a path with locale when needed (no prefix for default sv).
 */
export function getLocalePath(locale: Locale, path: string): string {
  if (locale === 'sv') return path;
  return `/en${path}`;
}

/**
 * Get the home path for a locale.
 */
export function getHomePath(locale: Locale): string {
  return locale === 'sv' ? '/' : '/en';
}

/**
 * Format a date string for the given locale.
 */
export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
