export interface Office {
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
}

export const offices: Office[] = [
  {
    city: 'Vänersborg',
    address: 'Nygatan 71',
    postalCode: '462 32 Vänersborg',
    phone: '079-340 51 55',
    email: 'info@verit.se',
  },
];
