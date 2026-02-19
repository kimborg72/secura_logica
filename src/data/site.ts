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
      'VER&IT hjälper samhällsviktiga verksamheter med cybersäkerhet, compliance och informationssäkerhet. NIS2, ISO 27001, CISO-as-a-Service och vår GRC-plattform Securapilot.',
  },
  en: {
    tagline: 'Cybersecurity & Compliance',
    locale: 'en_US',
    language: 'en',
    defaultDescription:
      'VER&IT helps critical infrastructure organisations with cybersecurity, compliance and information security. NIS2, ISO 27001, CISO-as-a-Service and our GRC platform Securapilot.',
  },
};

export function getSiteData(locale: Locale) {
  return { ...site, ...siteLocalized[locale] };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  description: siteLocalized.sv.defaultDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nygatan 71',
    addressLocality: 'Vänersborg',
    postalCode: '462 32',
    addressCountry: 'SE',
  },
  telephone: '079-340 51 55',
  foundingDate: '2014',
  sameAs: ['https://www.linkedin.com/company/verit'],
} as const;
