import type { Locale } from '@i18n/types';

interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const footerData: Record<Locale, FooterColumn[]> = {
  sv: [
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
        { label: 'Referenser', href: '/referenser' },
        { label: 'Securapilot', href: '/securapilot' },
        { label: 'Insikter', href: '/insikter' },
        { label: 'Kontakt', href: '/kontakt' },
        { label: 'Integritetspolicy', href: '/integritetspolicy' },
      ],
    },
  ],
  en: [
    {
      title: 'Services',
      links: [
        { label: 'NIS2 / Cybersecurity Act', href: '/en/services/nis2' },
        { label: 'ISO 27001 / ISMS', href: '/en/services/iso27001' },
        { label: 'CISO-as-a-Service', href: '/en/services/ciso-as-a-service' },
        { label: 'Risk Management', href: '/en/services/risk-management' },
        { label: 'Training & Awareness', href: '/en/services/training' },
        { label: 'GDPR & Data Protection', href: '/en/services/gdpr' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '/en/about-us' },
        { label: 'References', href: '/en/references' },
        { label: 'Securapilot', href: '/en/securapilot' },
        { label: 'Insights', href: '/en/insights' },
        { label: 'Contact', href: '/en/contact' },
        { label: 'Privacy policy', href: '/en/privacy-policy' },
      ],
    },
  ],
};

export function getFooterColumns(locale: Locale): FooterColumn[] {
  return footerData[locale];
}

export const footerColumns = footerData.sv;
