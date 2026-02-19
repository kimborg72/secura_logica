export const footerColumns = [
  {
    title: 'Tjänster',
    links: [
      { label: 'NIS2 / Cybersäkerhetslagen', href: '/tjanster/nis2' },
      { label: 'ISO 27001 / LIS', href: '/tjanster/iso27001' },
      { label: 'CISO-as-a-Service', href: '/tjanster/ciso-as-a-service' },
      { label: 'Riskhantering', href: '/tjanster/riskhantering' },
      { label: 'Utbildning & Awareness', href: '/tjanster/utbildning' },
      { label: 'GDPR & Dataskydd', href: '/tjanster/gdpr' },
    ],
  },
  {
    title: 'Företaget',
    links: [
      { label: 'Om oss', href: '/om-oss' },
      { label: 'SecuraPilot', href: '/securapilot' },
      { label: 'Insikter', href: '/insikter' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Integritetspolicy', href: '/integritetspolicy' },
    ],
  },
] as const;
