export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  featured?: {
    title: string;
    description: string;
    href: string;
  };
}

export const mainNav: NavItem[] = [
  {
    label: 'Tjänster',
    href: '/tjanster',
    children: [
      { label: 'NIS2 / Cybersäkerhetslagen', href: '/tjanster/nis2' },
      { label: 'ISO 27001 / LIS', href: '/tjanster/iso27001' },
      { label: 'CISO-as-a-Service', href: '/tjanster/ciso-as-a-service' },
      {
        label: 'Riskhantering & Informationsklassificering',
        href: '/tjanster/riskhantering',
      },
      { label: 'Utbildning & Awareness', href: '/tjanster/utbildning' },
      { label: 'GDPR & Dataskydd', href: '/tjanster/gdpr' },
    ],
    featured: {
      title: 'SecuraPilot',
      description: 'Vår SaaS-plattform för löpande compliance-hantering.',
      href: '/securapilot',
    },
  },
  { label: 'SecuraPilot', href: '/securapilot' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Insikter', href: '/insikter' },
  { label: 'Kontakt', href: '/kontakt' },
];
