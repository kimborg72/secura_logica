import type { Locale } from '@i18n/types';

export const site = {
  name: 'Verit',
  url: 'https://verit.se',
  defaultOgImage: '/og-default.jpg',
} as const;

const siteLocalized: Record<Locale, { tagline: string; locale: string; language: string; defaultDescription: string }> = {
  sv: {
    tagline: 'Cybersäkerhet & Compliance',
    locale: 'sv_SE',
    language: 'sv',
    defaultDescription:
      'Verit hjälper samhällsviktiga verksamheter med cybersäkerhet, compliance och informationssäkerhet. NIS2, ISO 27001, CISO-as-a-Service och vår GRC-plattform Securapilot.',
  },
  en: {
    tagline: 'Cybersecurity & Compliance',
    locale: 'en_US',
    language: 'en',
    defaultDescription:
      'Verit helps critical infrastructure organisations with cybersecurity, compliance and information security. NIS2, ISO 27001, CISO-as-a-Service and our GRC platform Securapilot.',
  },
};

export function getSiteData(locale: Locale) {
  return { ...site, ...siteLocalized[locale] };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}#organization`,
  name: site.name,
  legalName: 'VER & IT AB',
  url: site.url,
  logo: `${site.url}/images/logos/logo_verit_light_2026.png`,
  image: `${site.url}/images/logos/logo_verit_light_2026.png`,
  description: siteLocalized.sv.defaultDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nygatan 71',
    addressLocality: 'Vänersborg',
    addressRegion: 'Västra Götaland',
    postalCode: '462 32',
    addressCountry: 'SE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 58.38,
    longitude: 12.32,
  },
  telephone: '+46-79-340-51-55',
  email: 'info@verit.se',
  foundingDate: '2014',
  areaServed: {
    '@type': 'Country',
    name: 'Sweden',
  },
  serviceType: 'Cybersäkerhetskonsulting',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://www.linkedin.com/company/verit'],
} as const;
