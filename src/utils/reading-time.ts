/**
 * Estimate reading time for Swedish text (~220 words/minute).
 */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min lästid`;
}
