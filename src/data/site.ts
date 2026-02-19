export const site = {
  name: 'Verit',
  tagline: 'Cybersäkerhet & Compliance',
  url: 'https://verit.se',
  locale: 'sv_SE',
  language: 'sv',
  defaultOgImage: '/og-default.jpg',
  defaultDescription:
    'VER&IT hjälper samhällsviktiga verksamheter med cybersäkerhet, compliance och informationssäkerhet. NIS2, ISO 27001, CISO-as-a-Service och vår GRC-plattform Securapilot.',
} as const;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  description: site.defaultDescription,
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
