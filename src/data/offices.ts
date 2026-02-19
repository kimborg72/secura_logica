export interface Office {
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
}

export const offices: Office[] = [
  {
    city: 'Linköping',
    address: 'Teknikringen 7',
    postalCode: '583 30 Linköping',
    phone: '+46 13 000 00 00',
    email: 'linkoping@verit.se',
  },
  {
    city: 'Stockholm',
    address: 'Kungsgatan 10',
    postalCode: '111 43 Stockholm',
    phone: '+46 8 000 00 00',
    email: 'stockholm@verit.se',
  },
  {
    city: 'Göteborg',
    address: 'Kungsportsavenyen 1',
    postalCode: '411 36 Göteborg',
    phone: '+46 31 000 00 00',
    email: 'goteborg@verit.se',
  },
];
