import type { Locale } from '@i18n/types';

/**
 * Estimate reading time for text (~220 words/minute).
 */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatReadingTime(minutes: number, locale: Locale = 'sv'): string {
  if (locale === 'en') return `${minutes} min read`;
  return `${minutes} min lästid`;
}
