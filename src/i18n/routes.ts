import type { Locale } from './types';

/** Static route mapping: Swedish path → English path */
const routeMap: Record<string, string> = {
  '/': '/en',
  '/om-oss': '/en/about-us',
  '/kontakt': '/en/contact',
  '/tjanster': '/en/services',
  '/insikter': '/en/insights',
  '/securapilot': '/en/securapilot',
  '/integritetspolicy': '/en/privacy-policy',
};

const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([sv, en]) => [en, sv]),
);

/** Service slug mapping: Swedish slug → English slug */
export const serviceSlugMap: Record<string, string> = {
  nis2: 'nis2',
  iso27001: 'iso27001',
  'ciso-as-a-service': 'ciso-as-a-service',
  riskhantering: 'risk-management',
  utbildning: 'training',
  gdpr: 'gdpr',
};

const reverseServiceSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([sv, en]) => [en, sv]),
);

/**
 * Given the current pathname, return the path for the target locale.
 */
export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  if (targetLocale === 'en') {
    // Static routes
    if (routeMap[currentPath]) return routeMap[currentPath];

    // Service detail: /tjanster/slug → /en/services/slug
    const serviceMatch = currentPath.match(/^\/tjanster\/(.+)$/);
    if (serviceMatch) {
      const enSlug = serviceSlugMap[serviceMatch[1]] ?? serviceMatch[1];
      return `/en/services/${enSlug}`;
    }

    // Insights: /insikter/slug → /en/insights/slug
    const insightMatch = currentPath.match(/^\/insikter\/(.+)$/);
    if (insightMatch) return `/en/insights/${insightMatch[1]}`;

    // Fallback
    return `/en${currentPath}`;
  }

  // English → Swedish
  if (reverseRouteMap[currentPath]) return reverseRouteMap[currentPath];

  // Service detail: /en/services/slug → /tjanster/slug
  const serviceMatch = currentPath.match(/^\/en\/services\/(.+)$/);
  if (serviceMatch) {
    const svSlug = reverseServiceSlugMap[serviceMatch[1]] ?? serviceMatch[1];
    return `/tjanster/${svSlug}`;
  }

  // Insights: /en/insights/slug → /insikter/slug
  const insightMatch = currentPath.match(/^\/en\/insights\/(.+)$/);
  if (insightMatch) return `/insikter/${insightMatch[1]}`;

  // Fallback: strip /en prefix
  return currentPath.replace(/^\/en/, '') || '/';
}

/**
 * Get the contact page path for a locale.
 */
export function getContactPath(locale: Locale): string {
  return locale === 'sv' ? '/kontakt' : '/en/contact';
}

/**
 * Get the services index path for a locale.
 */
export function getServicesPath(locale: Locale): string {
  return locale === 'sv' ? '/tjanster' : '/en/services';
}

/**
 * Get a service detail path for a locale.
 */
export function getServicePath(locale: Locale, slug: string): string {
  if (locale === 'sv') return `/tjanster/${slug}`;
  const enSlug = serviceSlugMap[slug] ?? slug;
  return `/en/services/${enSlug}`;
}

/**
 * Get the insights index path for a locale.
 */
export function getInsightsPath(locale: Locale): string {
  return locale === 'sv' ? '/insikter' : '/en/insights';
}

/**
 * Get an insight detail path for a locale.
 */
export function getInsightPath(locale: Locale, slug: string): string {
  return locale === 'sv' ? `/insikter/${slug}` : `/en/insights/${slug}`;
}

/**
 * Get the privacy policy path for a locale.
 */
export function getPrivacyPath(locale: Locale): string {
  return locale === 'sv' ? '/integritetspolicy' : '/en/privacy-policy';
}

/**
 * Get the Securapilot page path for a locale.
 */
export function getSecurapilotPath(locale: Locale): string {
  return locale === 'sv' ? '/securapilot' : '/en/securapilot';
}

/**
 * Get the about page path for a locale.
 */
export function getAboutPath(locale: Locale): string {
  return locale === 'sv' ? '/om-oss' : '/en/about-us';
}
