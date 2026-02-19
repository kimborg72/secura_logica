import type { Locale } from '@i18n/types';

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

const navData: Record<Locale, NavItem[]> = {
  sv: [
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
        title: 'Securapilot',
        description: 'Vår SaaS-plattform för löpande compliance-hantering.',
        href: '/securapilot',
      },
    },
    { label: 'Securapilot', href: '/securapilot' },
    { label: 'Om oss', href: '/om-oss' },
    { label: 'Referenser', href: '/referenser' },
    { label: 'Insikter', href: '/insikter' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  en: [
    {
      label: 'Services',
      href: '/en/services',
      children: [
        { label: 'NIS2 / Cybersecurity Act', href: '/en/services/nis2' },
        { label: 'ISO 27001 / ISMS', href: '/en/services/iso27001' },
        { label: 'CISO-as-a-Service', href: '/en/services/ciso-as-a-service' },
        {
          label: 'Risk Management & Information Classification',
          href: '/en/services/risk-management',
        },
        { label: 'Training & Awareness', href: '/en/services/training' },
        { label: 'GDPR & Data Protection', href: '/en/services/gdpr' },
      ],
      featured: {
        title: 'Securapilot',
        description: 'Our SaaS platform for continuous compliance management.',
        href: '/en/securapilot',
      },
    },
    { label: 'Securapilot', href: '/en/securapilot' },
    { label: 'About us', href: '/en/about-us' },
    { label: 'References', href: '/en/references' },
    { label: 'Insights', href: '/en/insights' },
    { label: 'Contact', href: '/en/contact' },
  ],
};

export function getMainNav(locale: Locale): NavItem[] {
  return navData[locale];
}

export const mainNav = navData.sv;
