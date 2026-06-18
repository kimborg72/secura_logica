export type KommunType = 'industrial' | 'major-city' | 'rural' | 'service-city';

export interface Kommun {
  slug: string;
  name: string;
  county: string;
  population: number;
  type: KommunType;
  dominantSectors: string[];
  nis2Estimate: number;
  tillsynsmyndigheter: string[];
  lat: number;
  lng: number;
  metaTitle?: string;
  metaDescription?: string;
  /** 2–4 faktiska större arbetsgivare/verksamheter i kommunen. Optional —
   *  fylls i där det går att verifiera; mallen hanterar frånvaro. */
  namedEmployers?: string[];
  /** En mening om en konkret lokal omständighet med cybersäkerhetsbäring
   *  (hamn, sjukhus, datacenter, kraftverk, försvarsindustri). Optional. */
  localAngle?: string;
}

export const kommuner: Kommun[] = [
  // --- Västra Götaland ---
  {
    slug: 'goteborg',
    name: 'Göteborg',
    county: 'Västra Götaland',
    population: 590000,
    type: 'major-city',
    dominantSectors: ['fordon', 'hamn', 'logistik', 'life-science', 'energi', 'IT'],
    nis2Estimate: 950,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten', 'PTS', 'Finansinspektionen'],
    lat: 57.71, lng: 11.97,
  },
  {
    slug: 'trollhattan',
    name: 'Trollhättan',
    county: 'Västra Götaland',
    population: 59000,
    type: 'industrial',
    dominantSectors: ['fordon', 'flyg', 'tillverkning', 'energi'],
    nis2Estimate: 45,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 58.28, lng: 12.29,
  },
  {
    slug: 'vanersborg',
    name: 'Vänersborg',
    county: 'Västra Götaland',
    population: 40000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'energi', 'VA'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Länsstyrelsen'],
    lat: 58.38, lng: 12.32,
  },
  {
    slug: 'boras',
    name: 'Borås',
    county: 'Västra Götaland',
    population: 115000,
    type: 'industrial',
    dominantSectors: ['textil', 'tillverkning', 'logistik'],
    nis2Estimate: 65,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 57.72, lng: 12.94,
  },
  {
    slug: 'skovde',
    name: 'Skövde',
    county: 'Västra Götaland',
    population: 57000,
    type: 'industrial',
    dominantSectors: ['fordon', 'försvar', 'tillverkning'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 58.39, lng: 13.85,
  },
  {
    slug: 'uddevalla',
    name: 'Uddevalla',
    county: 'Västra Götaland',
    population: 57000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'energi'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 58.35, lng: 11.94,
  },
  {
    slug: 'lidkoping',
    name: 'Lidköping',
    county: 'Västra Götaland',
    population: 41000,
    type: 'industrial',
    dominantSectors: ['livsmedel', 'tillverkning', 'energi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.51, lng: 13.16,
  },
  {
    slug: 'kungalv',
    name: 'Kungälv',
    county: 'Västra Götaland',
    population: 48000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'IT', 'energi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.87, lng: 11.97,
  },
  {
    slug: 'alingsas',
    name: 'Alingsås',
    county: 'Västra Götaland',
    population: 42000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'livsmedel', 'energi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.93, lng: 12.53,
  },
  {
    slug: 'mariestad',
    name: 'Mariestad',
    county: 'Västra Götaland',
    population: 25000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.71, lng: 13.82,
  },
  // --- Dalsland ---
  {
    slug: 'amal',
    name: 'Åmål',
    county: 'Västra Götaland',
    population: 12500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA', 'skog'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.05, lng: 12.70,
  },
  {
    slug: 'bengtsfors',
    name: 'Bengtsfors',
    county: 'Västra Götaland',
    population: 9500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.03, lng: 12.23,
  },
  {
    slug: 'dals-ed',
    name: 'Dals-Ed',
    county: 'Västra Götaland',
    population: 4800,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.91, lng: 11.93,
  },
  {
    slug: 'fargelanda',
    name: 'Färgelanda',
    county: 'Västra Götaland',
    population: 6700,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.57, lng: 12.07,
  },
  {
    slug: 'mellerud',
    name: 'Mellerud',
    county: 'Västra Götaland',
    population: 9200,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.70, lng: 12.45,
  },
  // --- Västra Götaland (övriga) ---
  {
    slug: 'molndal',
    name: 'Mölndal',
    county: 'Västra Götaland',
    population: 69000,
    type: 'service-city',
    dominantSectors: ['life-science', 'IT', 'forskning', 'tillverkning'],
    nis2Estimate: 55,
    tillsynsmyndigheter: ['MCF', 'Läkemedelsverket', 'PTS'],
    lat: 57.66, lng: 12.01,
  },
  {
    slug: 'lerum',
    name: 'Lerum',
    county: 'Västra Götaland',
    population: 42000,
    type: 'service-city',
    dominantSectors: ['IT', 'offentlig-sektor', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.77, lng: 12.27,
  },
  {
    slug: 'harryda',
    name: 'Härryda',
    county: 'Västra Götaland',
    population: 39000,
    type: 'industrial',
    dominantSectors: ['logistik', 'flyg', 'IT', 'tillverkning'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'PTS'],
    lat: 57.68, lng: 12.14,
  },
  {
    slug: 'partille',
    name: 'Partille',
    county: 'Västra Götaland',
    population: 39000,
    type: 'service-city',
    dominantSectors: ['IT', 'logistik', 'offentlig-sektor'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 57.74, lng: 12.11,
  },
  {
    slug: 'mark',
    name: 'Mark',
    county: 'Västra Götaland',
    population: 35000,
    type: 'industrial',
    dominantSectors: ['textil', 'tillverkning', 'energi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.51, lng: 12.65,
  },
  {
    slug: 'falkoping',
    name: 'Falköping',
    county: 'Västra Götaland',
    population: 33000,
    type: 'industrial',
    dominantSectors: ['livsmedel', 'tillverkning', 'logistik'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 58.17, lng: 13.55,
  },
  {
    slug: 'ale',
    name: 'Ale',
    county: 'Västra Götaland',
    population: 31000,
    type: 'service-city',
    dominantSectors: ['logistik', 'tillverkning', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 57.93, lng: 12.23,
  },
  {
    slug: 'stenungsund',
    name: 'Stenungsund',
    county: 'Västra Götaland',
    population: 27000,
    type: 'industrial',
    dominantSectors: ['kemi', 'energi', 'tillverkning'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'MCF'],
    lat: 58.07, lng: 11.82,
  },
  {
    slug: 'ulricehamn',
    name: 'Ulricehamn',
    county: 'Västra Götaland',
    population: 25000,
    type: 'industrial',
    dominantSectors: ['textil', 'tillverkning', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.79, lng: 13.42,
  },
  {
    slug: 'skara',
    name: 'Skara',
    county: 'Västra Götaland',
    population: 19000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.39, lng: 13.44,
  },
  {
    slug: 'tjorn',
    name: 'Tjörn',
    county: 'Västra Götaland',
    population: 16000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.99, lng: 11.56,
  },
  {
    slug: 'vara',
    name: 'Vara',
    county: 'Västra Götaland',
    population: 16000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'energi', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.26, lng: 13.12,
  },
  {
    slug: 'orust',
    name: 'Orust',
    county: 'Västra Götaland',
    population: 15000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.18, lng: 11.66,
  },
  {
    slug: 'lysekil',
    name: 'Lysekil',
    county: 'Västra Götaland',
    population: 14000,
    type: 'industrial',
    dominantSectors: ['kemi', 'energi', 'hamn'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 58.27, lng: 11.44,
  },
  {
    slug: 'lilla-edet',
    name: 'Lilla Edet',
    county: 'Västra Götaland',
    population: 13000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'energi'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.13, lng: 12.13,
  },
  {
    slug: 'tanum',
    name: 'Tanum',
    county: 'Västra Götaland',
    population: 13000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.72, lng: 11.33,
  },
  {
    slug: 'tidaholm',
    name: 'Tidaholm',
    county: 'Västra Götaland',
    population: 13000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'livsmedel', 'energi'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.18, lng: 13.96,
  },
  {
    slug: 'stromstad',
    name: 'Strömstad',
    county: 'Västra Götaland',
    population: 13000,
    type: 'rural',
    dominantSectors: ['logistik', 'livsmedel', 'energi'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 58.94, lng: 11.17,
  },
  {
    slug: 'gotene',
    name: 'Götene',
    county: 'Västra Götaland',
    population: 13000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'energi'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.53, lng: 13.49,
  },
  {
    slug: 'ockero',
    name: 'Öckerö',
    county: 'Västra Götaland',
    population: 13000,
    type: 'rural',
    dominantSectors: ['hamn', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 57.71, lng: 11.65,
  },
  {
    slug: 'vargarda',
    name: 'Vårgårda',
    county: 'Västra Götaland',
    population: 12000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'energi'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.99, lng: 12.81,
  },
  {
    slug: 'tranemo',
    name: 'Tranemo',
    county: 'Västra Götaland',
    population: 11000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'textil', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.49, lng: 13.35,
  },
  {
    slug: 'tibro',
    name: 'Tibro',
    county: 'Västra Götaland',
    population: 11000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.42, lng: 14.16,
  },
  {
    slug: 'svenljunga',
    name: 'Svenljunga',
    county: 'Västra Götaland',
    population: 10500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.50, lng: 13.11,
  },
  {
    slug: 'munkedal',
    name: 'Munkedal',
    county: 'Västra Götaland',
    population: 10000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.47, lng: 11.67,
  },
  {
    slug: 'bollebygd',
    name: 'Bollebygd',
    county: 'Västra Götaland',
    population: 9500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.67, lng: 12.57,
  },
  {
    slug: 'herrljunga',
    name: 'Herrljunga',
    county: 'Västra Götaland',
    population: 9500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'energi'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.08, lng: 13.03,
  },
  {
    slug: 'sotenas',
    name: 'Sotenäs',
    county: 'Västra Götaland',
    population: 9000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.38, lng: 11.31,
  },
  {
    slug: 'hjo',
    name: 'Hjo',
    county: 'Västra Götaland',
    population: 9000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'energi'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.30, lng: 14.28,
  },
  {
    slug: 'toreboda',
    name: 'Töreboda',
    county: 'Västra Götaland',
    population: 9000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.71, lng: 14.12,
  },
  {
    slug: 'karlsborg',
    name: 'Karlsborg',
    county: 'Västra Götaland',
    population: 7000,
    type: 'rural',
    dominantSectors: ['försvar', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.54, lng: 14.51,
  },
  {
    slug: 'grastorp',
    name: 'Grästorp',
    county: 'Västra Götaland',
    population: 5700,
    type: 'rural',
    dominantSectors: ['livsmedel', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.33, lng: 12.72,
  },
  {
    slug: 'essunga',
    name: 'Essunga',
    county: 'Västra Götaland',
    population: 5500,
    type: 'rural',
    dominantSectors: ['livsmedel', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.25, lng: 13.08,
  },
  {
    slug: 'gullspang',
    name: 'Gullspång',
    county: 'Västra Götaland',
    population: 5000,
    type: 'rural',
    dominantSectors: ['energi', 'skog', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.99, lng: 14.09,
  },
  // --- Stockholms län ---
  {
    slug: 'stockholm',
    name: 'Stockholm',
    county: 'Stockholm',
    population: 984000,
    type: 'major-city',
    dominantSectors: ['finans', 'IT', 'life-science', 'energi', 'transport', 'offentlig-sektor'],
    nis2Estimate: 2500,
    tillsynsmyndigheter: ['MCF', 'Finansinspektionen', 'PTS', 'Energimyndigheten', 'IVO', 'Transportstyrelsen'],
    lat: 59.33, lng: 18.07,
  },
  {
    slug: 'sodertalje',
    name: 'Södertälje',
    county: 'Stockholm',
    population: 100000,
    type: 'industrial',
    dominantSectors: ['fordon', 'life-science', 'tillverkning', 'logistik'],
    nis2Estimate: 120,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Läkemedelsverket'],
    lat: 59.20, lng: 17.63,
  },
  {
    slug: 'huddinge',
    name: 'Huddinge',
    county: 'Stockholm',
    population: 115000,
    type: 'service-city',
    dominantSectors: ['halso-sjukvard', 'IT', 'forskning', 'offentlig-sektor'],
    nis2Estimate: 95,
    tillsynsmyndigheter: ['MCF', 'IVO', 'PTS'],
    lat: 59.24, lng: 17.98,
  },
  {
    slug: 'nacka',
    name: 'Nacka',
    county: 'Stockholm',
    population: 105000,
    type: 'service-city',
    dominantSectors: ['IT', 'finans', 'offentlig-sektor', 'energi'],
    nis2Estimate: 90,
    tillsynsmyndigheter: ['MCF', 'Finansinspektionen', 'PTS', 'Energimyndigheten'],
    lat: 59.31, lng: 18.16,
  },
  {
    slug: 'botkyrka',
    name: 'Botkyrka',
    county: 'Stockholm',
    population: 94000,
    type: 'service-city',
    dominantSectors: ['logistik', 'tillverkning', 'IT', 'offentlig-sektor'],
    nis2Estimate: 55,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 59.20, lng: 17.82,
  },
  {
    slug: 'haninge',
    name: 'Haninge',
    county: 'Stockholm',
    population: 95000,
    type: 'service-city',
    dominantSectors: ['logistik', 'tillverkning', 'IT', 'energi'],
    nis2Estimate: 60,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.17, lng: 18.15,
  },
  {
    slug: 'solna',
    name: 'Solna',
    county: 'Stockholm',
    population: 85000,
    type: 'service-city',
    dominantSectors: ['life-science', 'IT', 'finans', 'offentlig-sektor'],
    nis2Estimate: 150,
    tillsynsmyndigheter: ['MCF', 'Läkemedelsverket', 'Finansinspektionen', 'PTS'],
    lat: 59.36, lng: 18.00,
  },
  {
    slug: 'jarfalla',
    name: 'Järfälla',
    county: 'Stockholm',
    population: 80000,
    type: 'service-city',
    dominantSectors: ['IT', 'logistik', 'offentlig-sektor', 'energi'],
    nis2Estimate: 50,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Energimyndigheten'],
    lat: 59.43, lng: 17.83,
  },
  {
    slug: 'sollentuna',
    name: 'Sollentuna',
    county: 'Stockholm',
    population: 75000,
    type: 'service-city',
    dominantSectors: ['IT', 'finans', 'logistik', 'offentlig-sektor'],
    nis2Estimate: 60,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Finansinspektionen'],
    lat: 59.43, lng: 17.95,
  },
  {
    slug: 'taby',
    name: 'Täby',
    county: 'Stockholm',
    population: 73000,
    type: 'service-city',
    dominantSectors: ['IT', 'finans', 'halso-sjukvard', 'offentlig-sektor'],
    nis2Estimate: 55,
    tillsynsmyndigheter: ['MCF', 'Finansinspektionen', 'PTS', 'IVO'],
    lat: 59.44, lng: 18.07,
  },
  {
    slug: 'norrtalje',
    name: 'Norrtälje',
    county: 'Stockholm',
    population: 65000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA', 'logistik'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.76, lng: 18.70,
  },
  {
    slug: 'sundbyberg',
    name: 'Sundbyberg',
    county: 'Stockholm',
    population: 53000,
    type: 'service-city',
    dominantSectors: ['IT', 'finans', 'offentlig-sektor'],
    nis2Estimate: 70,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Finansinspektionen'],
    lat: 59.36, lng: 17.97,
  },
  {
    slug: 'sigtuna',
    name: 'Sigtuna',
    county: 'Stockholm',
    population: 50000,
    type: 'service-city',
    dominantSectors: ['transport', 'logistik', 'IT', 'energi'],
    nis2Estimate: 45,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.62, lng: 17.72,
  },
  {
    slug: 'tyreso',
    name: 'Tyresö',
    county: 'Stockholm',
    population: 49000,
    type: 'service-city',
    dominantSectors: ['IT', 'offentlig-sektor', 'energi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.24, lng: 18.23,
  },
  {
    slug: 'lidingo',
    name: 'Lidingö',
    county: 'Stockholm',
    population: 48000,
    type: 'service-city',
    dominantSectors: ['life-science', 'IT', 'halso-sjukvard'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Läkemedelsverket', 'IVO'],
    lat: 59.37, lng: 18.14,
  },
  {
    slug: 'upplands-vasby',
    name: 'Upplands Väsby',
    county: 'Stockholm',
    population: 46000,
    type: 'service-city',
    dominantSectors: ['IT', 'logistik', 'offentlig-sektor'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Transportstyrelsen'],
    lat: 59.52, lng: 17.91,
  },
  {
    slug: 'varmdo',
    name: 'Värmdö',
    county: 'Stockholm',
    population: 46000,
    type: 'service-city',
    dominantSectors: ['IT', 'offentlig-sektor', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.32, lng: 18.37,
  },
  {
    slug: 'osteraker',
    name: 'Österåker',
    county: 'Stockholm',
    population: 46000,
    type: 'service-city',
    dominantSectors: ['IT', 'offentlig-sektor', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.48, lng: 18.30,
  },
  {
    slug: 'vallentuna',
    name: 'Vallentuna',
    county: 'Stockholm',
    population: 34000,
    type: 'service-city',
    dominantSectors: ['IT', 'offentlig-sektor', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.53, lng: 18.08,
  },
  {
    slug: 'danderyd',
    name: 'Danderyd',
    county: 'Stockholm',
    population: 33000,
    type: 'service-city',
    dominantSectors: ['halso-sjukvard', 'finans', 'IT', 'offentlig-sektor'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'IVO', 'Finansinspektionen'],
    lat: 59.40, lng: 18.03,
  },
  {
    slug: 'upplands-bro',
    name: 'Upplands-Bro',
    county: 'Stockholm',
    population: 30000,
    type: 'service-city',
    dominantSectors: ['logistik', 'tillverkning', 'energi'],
    nis2Estimate: 15,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.50, lng: 17.63,
  },
  {
    slug: 'ekero',
    name: 'Ekerö',
    county: 'Stockholm',
    population: 29000,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'energi', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.28, lng: 17.80,
  },
  {
    slug: 'nynashamn',
    name: 'Nynäshamn',
    county: 'Stockholm',
    population: 29000,
    type: 'industrial',
    dominantSectors: ['hamn', 'energi', 'logistik', 'kemi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 58.90, lng: 17.95,
  },
  {
    slug: 'salem',
    name: 'Salem',
    county: 'Stockholm',
    population: 17000,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.19, lng: 17.77,
  },
  {
    slug: 'nykvarn',
    name: 'Nykvarn',
    county: 'Stockholm',
    population: 12000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.18, lng: 17.43,
  },
  {
    slug: 'vaxholm',
    name: 'Vaxholm',
    county: 'Stockholm',
    population: 12000,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.40, lng: 18.35,
  },
  {
    slug: 'malmo',
    name: 'Malmö',
    county: 'Skåne',
    population: 357000,
    type: 'major-city',
    dominantSectors: ['life-science', 'livsmedel', 'logistik', 'IT', 'energi'],
    nis2Estimate: 550,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket', 'PTS', 'Energimyndigheten'],
    lat: 55.60, lng: 13.00,
  },
  {
    slug: 'uppsala',
    name: 'Uppsala',
    county: 'Uppsala',
    population: 235000,
    type: 'service-city',
    dominantSectors: ['life-science', 'halso-sjukvard', 'IT', 'forskning', 'energi'],
    nis2Estimate: 280,
    tillsynsmyndigheter: ['MCF', 'IVO', 'Läkemedelsverket', 'PTS', 'Energimyndigheten'],
    lat: 59.86, lng: 17.64,
  },
  {
    slug: 'linkoping',
    name: 'Linköping',
    county: 'Östergötland',
    population: 165000,
    type: 'service-city',
    dominantSectors: ['försvar', 'IT', 'tillverkning', 'forskning'],
    nis2Estimate: 180,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'PTS'],
    lat: 58.41, lng: 15.63,
  },
  {
    slug: 'vasteras',
    name: 'Västerås',
    county: 'Västmanland',
    population: 155000,
    type: 'industrial',
    dominantSectors: ['energi', 'tillverkning', 'IT', 'automation'],
    nis2Estimate: 150,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 59.61, lng: 16.55,
  },
  {
    slug: 'orebro',
    name: 'Örebro',
    county: 'Örebro',
    population: 157000,
    type: 'service-city',
    dominantSectors: ['logistik', 'livsmedel', 'offentlig-sektor', 'IT'],
    nis2Estimate: 120,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 59.27, lng: 15.21,
  },
  {
    slug: 'norrkoping',
    name: 'Norrköping',
    county: 'Östergötland',
    population: 143000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'energi', 'livsmedel'],
    nis2Estimate: 110,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 58.59, lng: 16.18,
  },
  {
    slug: 'helsingborg',
    name: 'Helsingborg',
    county: 'Skåne',
    population: 150000,
    type: 'industrial',
    dominantSectors: ['livsmedel', 'logistik', 'kemi', 'energi'],
    nis2Estimate: 140,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 56.05, lng: 12.69,
  },
  {
    slug: 'jonkoping',
    name: 'Jönköping',
    county: 'Jönköping',
    population: 144000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'IT'],
    nis2Estimate: 120,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 57.78, lng: 14.16,
  },
  {
    slug: 'umea',
    name: 'Umeå',
    county: 'Västerbotten',
    population: 130000,
    type: 'service-city',
    dominantSectors: ['halso-sjukvard', 'IT', 'forskning', 'energi'],
    nis2Estimate: 80,
    tillsynsmyndigheter: ['MCF', 'IVO', 'PTS', 'Energimyndigheten'],
    lat: 63.83, lng: 20.26,
  },
  {
    slug: 'lulea',
    name: 'Luleå',
    county: 'Norrbotten',
    population: 79000,
    type: 'industrial',
    dominantSectors: ['stål', 'gruv', 'datacenter', 'energi'],
    nis2Estimate: 55,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'PTS'],
    lat: 65.58, lng: 22.15,
  },
  {
    slug: 'gavle',
    name: 'Gävle',
    county: 'Gävleborg',
    population: 103000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'energi'],
    nis2Estimate: 60,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 60.67, lng: 17.14,
  },
  {
    slug: 'sundsvall',
    name: 'Sundsvall',
    county: 'Västernorrland',
    population: 99000,
    type: 'industrial',
    dominantSectors: ['skog', 'IT', 'finans', 'energi'],
    nis2Estimate: 55,
    tillsynsmyndigheter: ['MCF', 'Finansinspektionen', 'PTS', 'Energimyndigheten'],
    lat: 62.39, lng: 17.31,
  },
  // --- Glesbygd/mindre kommuner ---
  {
    slug: 'torsby',
    name: 'Torsby',
    county: 'Värmland',
    population: 11000,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.14, lng: 13.00,
  },
  {
    slug: 'storuman',
    name: 'Storuman',
    county: 'Västerbotten',
    population: 5700,
    type: 'rural',
    dominantSectors: ['energi', 'skog', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 64.96, lng: 17.11,
  },
  {
    slug: 'soderhamn',
    name: 'Söderhamn',
    county: 'Gävleborg',
    population: 25000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'energi', 'VA'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 61.30, lng: 17.06,
  },
  {
    slug: 'kalmar',
    name: 'Kalmar',
    county: 'Kalmar',
    population: 72000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi', 'IT'],
    nis2Estimate: 40,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 56.66, lng: 16.36,
  },
  {
    slug: 'karlstad',
    name: 'Karlstad',
    county: 'Värmland',
    population: 96000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'IT', 'tillverkning', 'energi'],
    nis2Estimate: 55,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Energimyndigheten'],
    lat: 59.38, lng: 13.50,
  },
  {
    slug: 'vaxjo',
    name: 'Växjö',
    county: 'Kronoberg',
    population: 96000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'IT', 'energi'],
    nis2Estimate: 50,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 56.88, lng: 14.81,
  },
  {
    slug: 'halmstad',
    name: 'Halmstad',
    county: 'Halland',
    population: 105000,
    type: 'service-city',
    dominantSectors: ['logistik', 'livsmedel', 'energi', 'IT'],
    nis2Estimate: 60,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 56.67, lng: 12.86,
  },
  // --- Uppsala län (övriga) ---
  {
    slug: 'enkoping',
    name: 'Enköping',
    county: 'Uppsala',
    population: 47000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'livsmedel', 'försvar'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 59.64, lng: 17.08,
  },
  {
    slug: 'heby',
    name: 'Heby',
    county: 'Uppsala',
    population: 14000,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.93, lng: 16.85,
  },
  {
    slug: 'habo-uppsala',
    name: 'Håbo',
    county: 'Uppsala',
    population: 23000,
    type: 'service-city',
    dominantSectors: ['IT', 'logistik', 'offentlig-sektor', 'energi'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.61, lng: 17.52,
  },
  {
    slug: 'knivsta',
    name: 'Knivsta',
    county: 'Uppsala',
    population: 21000,
    type: 'service-city',
    dominantSectors: ['IT', 'forskning', 'logistik', 'offentlig-sektor'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Transportstyrelsen'],
    lat: 59.72, lng: 17.79,
  },
  {
    slug: 'tierp',
    name: 'Tierp',
    county: 'Uppsala',
    population: 21000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.34, lng: 17.51,
  },
  {
    slug: 'alvkarleby',
    name: 'Älvkarleby',
    county: 'Uppsala',
    population: 9700,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.57, lng: 17.45,
  },
  {
    slug: 'osthammar',
    name: 'Östhammar',
    county: 'Uppsala',
    population: 22500,
    type: 'industrial',
    dominantSectors: ['energi', 'tillverkning', 'forskning', 'VA'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.26, lng: 18.37,
  },
  // --- Södermanland ---
  {
    slug: 'eskilstuna',
    name: 'Eskilstuna',
    county: 'Södermanland',
    population: 108000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'energi', 'IT'],
    nis2Estimate: 80,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten', 'PTS'],
    lat: 59.37, lng: 16.51,
  },
  {
    slug: 'flen',
    name: 'Flen',
    county: 'Södermanland',
    population: 17000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'energi'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 59.06, lng: 16.59,
  },
  {
    slug: 'gnesta',
    name: 'Gnesta',
    county: 'Södermanland',
    population: 12000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 59.05, lng: 17.31,
  },
  {
    slug: 'katrineholm',
    name: 'Katrineholm',
    county: 'Södermanland',
    population: 35000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'livsmedel', 'energi'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.99, lng: 16.21,
  },
  {
    slug: 'nykoping',
    name: 'Nyköping',
    county: 'Södermanland',
    population: 58000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'flyg', 'logistik', 'IT'],
    nis2Estimate: 38,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'PTS'],
    lat: 58.75, lng: 17.01,
  },
  {
    slug: 'oxelosund',
    name: 'Oxelösund',
    county: 'Södermanland',
    population: 12000,
    type: 'industrial',
    dominantSectors: ['stål', 'hamn', 'energi', 'tillverkning'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 58.67, lng: 17.10,
  },
  {
    slug: 'strangnas',
    name: 'Strängnäs',
    county: 'Södermanland',
    population: 37000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'försvar', 'IT', 'forskning'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'PTS'],
    lat: 59.38, lng: 17.03,
  },
  {
    slug: 'trosa',
    name: 'Trosa',
    county: 'Södermanland',
    population: 14000,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.90, lng: 17.55,
  },
  {
    slug: 'vingaker',
    name: 'Vingåker',
    county: 'Södermanland',
    population: 9000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'skog', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.04, lng: 15.87,
  },
  // --- Östergötland (övriga) ---
  {
    slug: 'boxholm',
    name: 'Boxholm',
    county: 'Östergötland',
    population: 5400,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 58.20, lng: 15.05,
  },
  {
    slug: 'finspang',
    name: 'Finspång',
    county: 'Östergötland',
    population: 22000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'energi', 'automation', 'forskning'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.71, lng: 15.78,
  },
  {
    slug: 'kinda',
    name: 'Kinda',
    county: 'Östergötland',
    population: 9800,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.99, lng: 15.67,
  },
  {
    slug: 'mjolby',
    name: 'Mjölby',
    county: 'Östergötland',
    population: 28000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'livsmedel', 'energi'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 58.32, lng: 15.13,
  },
  {
    slug: 'motala',
    name: 'Motala',
    county: 'Östergötland',
    population: 44000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'energi', 'livsmedel'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten', 'Livsmedelsverket'],
    lat: 58.54, lng: 15.04,
  },
  {
    slug: 'soderkoping',
    name: 'Söderköping',
    county: 'Östergötland',
    population: 14700,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 58.48, lng: 16.32,
  },
  {
    slug: 'vadstena',
    name: 'Vadstena',
    county: 'Östergötland',
    population: 7400,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 58.45, lng: 14.89,
  },
  {
    slug: 'valdemarsvik',
    name: 'Valdemarsvik',
    county: 'Östergötland',
    population: 7700,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 58.20, lng: 16.61,
  },
  {
    slug: 'ydre',
    name: 'Ydre',
    county: 'Östergötland',
    population: 3700,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.84, lng: 15.34,
  },
  {
    slug: 'atvidaberg',
    name: 'Åtvidaberg',
    county: 'Östergötland',
    population: 11500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 58.20, lng: 15.99,
  },
  {
    slug: 'odeshog',
    name: 'Ödeshög',
    county: 'Östergötland',
    population: 5200,
    type: 'rural',
    dominantSectors: ['livsmedel', 'skog', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 58.23, lng: 14.66,
  },
  // --- Jönköpings län (övriga) ---
  {
    slug: 'aneby',
    name: 'Aneby',
    county: 'Jönköping',
    population: 6800,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.84, lng: 14.81,
  },
  {
    slug: 'eksjo',
    name: 'Eksjö',
    county: 'Jönköping',
    population: 18000,
    type: 'service-city',
    dominantSectors: ['halso-sjukvard', 'försvar', 'offentlig-sektor', 'tillverkning'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'IVO'],
    lat: 57.67, lng: 14.97,
  },
  {
    slug: 'gislaved',
    name: 'Gislaved',
    county: 'Jönköping',
    population: 30000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'kemi'],
    nis2Estimate: 20,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 57.30, lng: 13.54,
  },
  {
    slug: 'gnosjo',
    name: 'Gnosjö',
    county: 'Jönköping',
    population: 9700,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'energi'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 57.36, lng: 13.74,
  },
  {
    slug: 'habo',
    name: 'Habo',
    county: 'Jönköping',
    population: 13200,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.91, lng: 14.07,
  },
  {
    slug: 'mullsjo',
    name: 'Mullsjö',
    county: 'Jönköping',
    population: 7500,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.92, lng: 13.88,
  },
  {
    slug: 'nassjo',
    name: 'Nässjö',
    county: 'Jönköping',
    population: 32000,
    type: 'industrial',
    dominantSectors: ['logistik', 'tillverkning', 'skog', 'energi'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 57.65, lng: 14.69,
  },
  {
    slug: 'savsjo',
    name: 'Sävsjö',
    county: 'Jönköping',
    population: 11200,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'skog', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.40, lng: 14.66,
  },
  {
    slug: 'tranas',
    name: 'Tranås',
    county: 'Jönköping',
    population: 19000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'textil', 'skog', 'logistik'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 58.04, lng: 14.98,
  },
  {
    slug: 'vaggeryd',
    name: 'Vaggeryd',
    county: 'Jönköping',
    population: 14800,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 57.50, lng: 14.15,
  },
  {
    slug: 'vetlanda',
    name: 'Vetlanda',
    county: 'Jönköping',
    population: 28000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'energi'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 57.43, lng: 15.07,
  },
  {
    slug: 'varnamo',
    name: 'Värnamo',
    county: 'Jönköping',
    population: 35000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'IT', 'skog'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'PTS'],
    lat: 57.18, lng: 14.04,
  },
  // --- Kronobergs län (övriga) ---
  {
    slug: 'alvesta',
    name: 'Alvesta',
    county: 'Kronoberg',
    population: 20000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 56.90, lng: 14.55,
  },
  {
    slug: 'lessebo',
    name: 'Lessebo',
    county: 'Kronoberg',
    population: 8700,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.75, lng: 15.27,
  },
  {
    slug: 'ljungby',
    name: 'Ljungby',
    county: 'Kronoberg',
    population: 28800,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'energi'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 56.83, lng: 13.94,
  },
  {
    slug: 'markaryd',
    name: 'Markaryd',
    county: 'Kronoberg',
    population: 10200,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 56.46, lng: 13.60,
  },
  {
    slug: 'tingsryd',
    name: 'Tingsryd',
    county: 'Kronoberg',
    population: 12000,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.53, lng: 14.98,
  },
  {
    slug: 'uppvidinge',
    name: 'Uppvidinge',
    county: 'Kronoberg',
    population: 9200,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 57.04, lng: 15.42,
  },
  {
    slug: 'almhult',
    name: 'Älmhult',
    county: 'Kronoberg',
    population: 17600,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'IT', 'logistik', 'forskning'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'PTS'],
    lat: 56.55, lng: 14.14,
  },
  // --- Kalmar län (övriga) ---
  {
    slug: 'borgholm',
    name: 'Borgholm',
    county: 'Kalmar',
    population: 10800,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.88, lng: 16.66,
  },
  {
    slug: 'emmaboda',
    name: 'Emmaboda',
    county: 'Kalmar',
    population: 9100,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'VA', 'skog', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.63, lng: 15.54,
  },
  {
    slug: 'hultsfred',
    name: 'Hultsfred',
    county: 'Kalmar',
    population: 13600,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.49, lng: 15.84,
  },
  {
    slug: 'hogsby',
    name: 'Högsby',
    county: 'Kalmar',
    population: 5700,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.17, lng: 16.03,
  },
  {
    slug: 'monsteras',
    name: 'Mönsterås',
    county: 'Kalmar',
    population: 13200,
    type: 'industrial',
    dominantSectors: ['skog', 'energi', 'tillverkning', 'hamn'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 57.04, lng: 16.45,
  },
  {
    slug: 'morbylanga',
    name: 'Mörbylånga',
    county: 'Kalmar',
    population: 15400,
    type: 'rural',
    dominantSectors: ['livsmedel', 'energi', 'tillverkning', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 56.52, lng: 16.40,
  },
  {
    slug: 'nybro',
    name: 'Nybro',
    county: 'Kalmar',
    population: 20000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'logistik'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.74, lng: 15.91,
  },
  {
    slug: 'oskarshamn',
    name: 'Oskarshamn',
    county: 'Kalmar',
    population: 26700,
    type: 'industrial',
    dominantSectors: ['energi', 'tillverkning', 'hamn', 'forskning'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 57.27, lng: 16.45,
  },
  {
    slug: 'torsas',
    name: 'Torsås',
    county: 'Kalmar',
    population: 7100,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.41, lng: 16.00,
  },
  {
    slug: 'vimmerby',
    name: 'Vimmerby',
    county: 'Kalmar',
    population: 15700,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 57.67, lng: 15.86,
  },
  {
    slug: 'vastervik',
    name: 'Västervik',
    county: 'Kalmar',
    population: 36600,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'energi'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 57.76, lng: 16.64,
  },
  // --- Gotland ---
  {
    slug: 'gotland',
    name: 'Gotland',
    county: 'Gotland',
    population: 61000,
    type: 'service-city',
    dominantSectors: ['livsmedel', 'försvar', 'tillverkning', 'energi', 'offentlig-sektor'],
    nis2Estimate: 50,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 57.64, lng: 18.30,
  },
  // --- Blekinge ---
  {
    slug: 'karlshamn',
    name: 'Karlshamn',
    county: 'Blekinge',
    population: 32000,
    type: 'industrial',
    dominantSectors: ['hamn', 'kemi', 'energi', 'skog', 'logistik'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 56.17, lng: 14.86,
  },
  {
    slug: 'karlskrona',
    name: 'Karlskrona',
    county: 'Blekinge',
    population: 67000,
    type: 'service-city',
    dominantSectors: ['försvar', 'IT', 'offentlig-sektor', 'forskning', 'halso-sjukvard'],
    nis2Estimate: 60,
    tillsynsmyndigheter: ['MCF', 'PTS', 'IVO'],
    lat: 56.16, lng: 15.59,
  },
  {
    slug: 'olofstrom',
    name: 'Olofström',
    county: 'Blekinge',
    population: 13000,
    type: 'industrial',
    dominantSectors: ['fordon', 'tillverkning', 'energi', 'logistik'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 56.28, lng: 14.53,
  },
  {
    slug: 'ronneby',
    name: 'Ronneby',
    county: 'Blekinge',
    population: 30000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'IT', 'skog', 'logistik'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Transportstyrelsen'],
    lat: 56.21, lng: 15.28,
  },
  {
    slug: 'solvesborg',
    name: 'Sölvesborg',
    county: 'Blekinge',
    population: 17500,
    type: 'rural',
    dominantSectors: ['livsmedel', 'logistik', 'hamn', 'tillverkning'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 56.05, lng: 14.59,
  },
  // --- Skåne (övriga) ---
  {
    slug: 'bjuv',
    name: 'Bjuv',
    county: 'Skåne',
    population: 16000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'logistik', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.08, lng: 12.91,
  },
  {
    slug: 'bromolla',
    name: 'Bromölla',
    county: 'Skåne',
    population: 12700,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'kemi'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.07, lng: 14.47,
  },
  {
    slug: 'burlov',
    name: 'Burlöv',
    county: 'Skåne',
    population: 20700,
    type: 'service-city',
    dominantSectors: ['logistik', 'tillverkning', 'IT', 'livsmedel'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 55.64, lng: 13.10,
  },
  {
    slug: 'bastad',
    name: 'Båstad',
    county: 'Skåne',
    population: 16100,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 56.43, lng: 12.85,
  },
  {
    slug: 'eslov',
    name: 'Eslöv',
    county: 'Skåne',
    population: 34800,
    type: 'industrial',
    dominantSectors: ['livsmedel', 'tillverkning', 'logistik', 'energi'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 55.84, lng: 13.30,
  },
  {
    slug: 'hassleholm',
    name: 'Hässleholm',
    county: 'Skåne',
    population: 52800,
    type: 'service-city',
    dominantSectors: ['logistik', 'tillverkning', 'livsmedel', 'offentlig-sektor'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 56.16, lng: 13.77,
  },
  {
    slug: 'hoganas',
    name: 'Höganäs',
    county: 'Skåne',
    population: 28000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'energi', 'kemi', 'skog'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.20, lng: 12.55,
  },
  {
    slug: 'horby',
    name: 'Hörby',
    county: 'Skåne',
    population: 16000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 55.85, lng: 13.66,
  },
  {
    slug: 'hoor',
    name: 'Höör',
    county: 'Skåne',
    population: 17000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 55.93, lng: 13.54,
  },
  {
    slug: 'klippan',
    name: 'Klippan',
    county: 'Skåne',
    population: 17700,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.13, lng: 13.13,
  },
  {
    slug: 'kristianstad',
    name: 'Kristianstad',
    county: 'Skåne',
    population: 87000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'IT', 'halso-sjukvard'],
    nis2Estimate: 60,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'IVO'],
    lat: 56.03, lng: 14.13,
  },
  {
    slug: 'kavlinge',
    name: 'Kävlinge',
    county: 'Skåne',
    population: 32000,
    type: 'service-city',
    dominantSectors: ['life-science', 'IT', 'tillverkning', 'livsmedel'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Läkemedelsverket', 'PTS'],
    lat: 55.79, lng: 13.11,
  },
  {
    slug: 'landskrona',
    name: 'Landskrona',
    county: 'Skåne',
    population: 47000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'hamn', 'logistik', 'kemi'],
    nis2Estimate: 32,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 55.87, lng: 12.83,
  },
  {
    slug: 'lomma',
    name: 'Lomma',
    county: 'Skåne',
    population: 25800,
    type: 'service-city',
    dominantSectors: ['IT', 'forskning', 'offentlig-sektor', 'life-science'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Läkemedelsverket'],
    lat: 55.67, lng: 13.07,
  },
  {
    slug: 'lund',
    name: 'Lund',
    county: 'Skåne',
    population: 131000,
    type: 'service-city',
    dominantSectors: ['life-science', 'forskning', 'IT', 'halso-sjukvard', 'energi'],
    nis2Estimate: 200,
    tillsynsmyndigheter: ['MCF', 'Läkemedelsverket', 'IVO', 'PTS', 'Energimyndigheten'],
    lat: 55.71, lng: 13.19,
  },
  {
    slug: 'osby',
    name: 'Osby',
    county: 'Skåne',
    population: 13700,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.38, lng: 13.99,
  },
  {
    slug: 'perstorp',
    name: 'Perstorp',
    county: 'Skåne',
    population: 7200,
    type: 'industrial',
    dominantSectors: ['kemi', 'tillverkning', 'energi', 'forskning'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.13, lng: 13.40,
  },
  {
    slug: 'simrishamn',
    name: 'Simrishamn',
    county: 'Skåne',
    population: 19100,
    type: 'rural',
    dominantSectors: ['livsmedel', 'hamn', 'offentlig-sektor', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 55.55, lng: 14.35,
  },
  {
    slug: 'sjobo',
    name: 'Sjöbo',
    county: 'Skåne',
    population: 19600,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 55.63, lng: 13.71,
  },
  {
    slug: 'skurup',
    name: 'Skurup',
    county: 'Skåne',
    population: 16300,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'logistik', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 55.47, lng: 13.50,
  },
  {
    slug: 'staffanstorp',
    name: 'Staffanstorp',
    county: 'Skåne',
    population: 27200,
    type: 'service-city',
    dominantSectors: ['IT', 'logistik', 'offentlig-sektor', 'livsmedel'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Livsmedelsverket'],
    lat: 55.64, lng: 13.21,
  },
  {
    slug: 'svalov',
    name: 'Svalöv',
    county: 'Skåne',
    population: 14000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'forskning', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 55.92, lng: 13.10,
  },
  {
    slug: 'svedala',
    name: 'Svedala',
    county: 'Skåne',
    population: 22700,
    type: 'service-city',
    dominantSectors: ['logistik', 'IT', 'livsmedel', 'tillverkning'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'PTS', 'Livsmedelsverket'],
    lat: 55.51, lng: 13.24,
  },
  {
    slug: 'tomelilla',
    name: 'Tomelilla',
    county: 'Skåne',
    population: 13800,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 55.55, lng: 13.95,
  },
  {
    slug: 'trelleborg',
    name: 'Trelleborg',
    county: 'Skåne',
    population: 47000,
    type: 'industrial',
    dominantSectors: ['hamn', 'logistik', 'tillverkning', 'energi'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 55.38, lng: 13.16,
  },
  {
    slug: 'vellinge',
    name: 'Vellinge',
    county: 'Skåne',
    population: 38000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'IT', 'livsmedel', 'energi'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Livsmedelsverket'],
    lat: 55.47, lng: 13.02,
  },
  {
    slug: 'ystad',
    name: 'Ystad',
    county: 'Skåne',
    population: 31000,
    type: 'service-city',
    dominantSectors: ['hamn', 'offentlig-sektor', 'logistik', 'livsmedel'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 55.43, lng: 13.82,
  },
  {
    slug: 'astorp',
    name: 'Åstorp',
    county: 'Skåne',
    population: 15800,
    type: 'rural',
    dominantSectors: ['tillverkning', 'logistik', 'skog', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 56.13, lng: 12.94,
  },
  {
    slug: 'angelholm',
    name: 'Ängelholm',
    county: 'Skåne',
    population: 43700,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'IT', 'halso-sjukvard', 'flyg'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'IVO'],
    lat: 56.24, lng: 12.86,
  },
  {
    slug: 'orkelljunga',
    name: 'Örkelljunga',
    county: 'Skåne',
    population: 10200,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 56.28, lng: 13.28,
  },
  {
    slug: 'ostra-goinge',
    name: 'Östra Göinge',
    county: 'Skåne',
    population: 14000,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.23, lng: 14.07,
  },
  // --- Hallands län (övriga) ---
  {
    slug: 'falkenberg',
    name: 'Falkenberg',
    county: 'Halland',
    population: 46700,
    type: 'service-city',
    dominantSectors: ['livsmedel', 'tillverkning', 'logistik', 'energi'],
    nis2Estimate: 28,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 56.91, lng: 12.49,
  },
  {
    slug: 'hylte',
    name: 'Hylte',
    county: 'Halland',
    population: 10700,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 56.99, lng: 13.24,
  },
  {
    slug: 'kungsbacka',
    name: 'Kungsbacka',
    county: 'Halland',
    population: 85800,
    type: 'service-city',
    dominantSectors: ['IT', 'offentlig-sektor', 'logistik', 'livsmedel'],
    nis2Estimate: 50,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Transportstyrelsen'],
    lat: 57.49, lng: 12.07,
  },
  {
    slug: 'laholm',
    name: 'Laholm',
    county: 'Halland',
    population: 26600,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 56.51, lng: 13.04,
  },
  {
    slug: 'varberg',
    name: 'Varberg',
    county: 'Halland',
    population: 67700,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'hamn', 'halso-sjukvard', 'livsmedel', 'energi'],
    nis2Estimate: 45,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'IVO', 'Livsmedelsverket'],
    lat: 57.11, lng: 12.25,
  },
  // --- Värmland (övriga) ---
  {
    slug: 'arvika',
    name: 'Arvika',
    county: 'Värmland',
    population: 26000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'energi', 'logistik'],
    nis2Estimate: 16,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.65, lng: 12.59,
  },
  {
    slug: 'eda',
    name: 'Eda',
    county: 'Värmland',
    population: 8600,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'logistik', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 59.91, lng: 12.24,
  },
  {
    slug: 'filipstad',
    name: 'Filipstad',
    county: 'Värmland',
    population: 10600,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.71, lng: 14.17,
  },
  {
    slug: 'forshaga',
    name: 'Forshaga',
    county: 'Värmland',
    population: 11600,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.53, lng: 13.48,
  },
  {
    slug: 'grums',
    name: 'Grums',
    county: 'Värmland',
    population: 9000,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'kemi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.34, lng: 13.10,
  },
  {
    slug: 'hagfors',
    name: 'Hagfors',
    county: 'Värmland',
    population: 12000,
    type: 'industrial',
    dominantSectors: ['stål', 'skog', 'tillverkning', 'energi'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.03, lng: 13.69,
  },
  {
    slug: 'hammaro',
    name: 'Hammarö',
    county: 'Värmland',
    population: 16600,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'kemi', 'energi'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.31, lng: 13.51,
  },
  {
    slug: 'kil',
    name: 'Kil',
    county: 'Värmland',
    population: 12100,
    type: 'rural',
    dominantSectors: ['logistik', 'skog', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 59.49, lng: 13.32,
  },
  {
    slug: 'kristinehamn',
    name: 'Kristinehamn',
    county: 'Värmland',
    population: 24000,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'energi', 'hamn'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.31, lng: 14.11,
  },
  {
    slug: 'munkfors',
    name: 'Munkfors',
    county: 'Värmland',
    population: 3600,
    type: 'rural',
    dominantSectors: ['stål', 'skog', 'tillverkning', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF'],
    lat: 59.82, lng: 13.55,
  },
  {
    slug: 'storfors',
    name: 'Storfors',
    county: 'Värmland',
    population: 3950,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.53, lng: 14.27,
  },
  {
    slug: 'sunne',
    name: 'Sunne',
    county: 'Värmland',
    population: 13100,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.84, lng: 13.13,
  },
  {
    slug: 'saffle',
    name: 'Säffle',
    county: 'Värmland',
    population: 15600,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'livsmedel', 'skog', 'energi'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 59.13, lng: 12.93,
  },
  {
    slug: 'arjang',
    name: 'Årjäng',
    county: 'Värmland',
    population: 10000,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.39, lng: 12.13,
  },
  // --- Örebro län (övriga) ---
  {
    slug: 'askersund',
    name: 'Askersund',
    county: 'Örebro',
    population: 11600,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 58.88, lng: 14.91,
  },
  {
    slug: 'degerfors',
    name: 'Degerfors',
    county: 'Örebro',
    population: 9600,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'skog', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.24, lng: 14.43,
  },
  {
    slug: 'hallsberg',
    name: 'Hallsberg',
    county: 'Örebro',
    population: 16100,
    type: 'industrial',
    dominantSectors: ['logistik', 'tillverkning', 'skog', 'energi'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 59.07, lng: 15.11,
  },
  {
    slug: 'hallefors',
    name: 'Hällefors',
    county: 'Örebro',
    population: 6700,
    type: 'rural',
    dominantSectors: ['stål', 'skog', 'tillverkning', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF'],
    lat: 59.78, lng: 14.51,
  },
  {
    slug: 'karlskoga',
    name: 'Karlskoga',
    county: 'Örebro',
    population: 30200,
    type: 'industrial',
    dominantSectors: ['försvar', 'tillverkning', 'automation', 'energi'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.33, lng: 14.52,
  },
  {
    slug: 'kumla',
    name: 'Kumla',
    county: 'Örebro',
    population: 22200,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'livsmedel', 'energi'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 59.13, lng: 15.14,
  },
  {
    slug: 'laxa',
    name: 'Laxå',
    county: 'Örebro',
    population: 5600,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'logistik', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 58.99, lng: 14.62,
  },
  {
    slug: 'lekeberg',
    name: 'Lekeberg',
    county: 'Örebro',
    population: 8600,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.20, lng: 14.85,
  },
  {
    slug: 'lindesberg',
    name: 'Lindesberg',
    county: 'Örebro',
    population: 23800,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'logistik', 'skog', 'energi'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.59, lng: 15.23,
  },
  {
    slug: 'ljusnarsberg',
    name: 'Ljusnarsberg',
    county: 'Örebro',
    population: 4800,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'gruv', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF'],
    lat: 59.92, lng: 14.97,
  },
  {
    slug: 'nora',
    name: 'Nora',
    county: 'Örebro',
    population: 10800,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.52, lng: 15.04,
  },
  // --- Västmanlands län (övriga) ---
  {
    slug: 'arboga',
    name: 'Arboga',
    county: 'Västmanland',
    population: 14200,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'försvar', 'logistik', 'energi'],
    nis2Estimate: 10,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 59.39, lng: 15.84,
  },
  {
    slug: 'fagersta',
    name: 'Fagersta',
    county: 'Västmanland',
    population: 13700,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'energi', 'automation'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.00, lng: 15.79,
  },
  {
    slug: 'hallstahammar',
    name: 'Hallstahammar',
    county: 'Västmanland',
    population: 16200,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'fordon', 'automation', 'energi'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 59.62, lng: 16.22,
  },
  {
    slug: 'kungsor',
    name: 'Kungsör',
    county: 'Västmanland',
    population: 8700,
    type: 'rural',
    dominantSectors: ['tillverkning', 'livsmedel', 'logistik', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.42, lng: 16.08,
  },
  {
    slug: 'koping',
    name: 'Köping',
    county: 'Västmanland',
    population: 26500,
    type: 'industrial',
    dominantSectors: ['fordon', 'hamn', 'tillverkning', 'livsmedel'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 59.51, lng: 16.00,
  },
  {
    slug: 'norberg',
    name: 'Norberg',
    county: 'Västmanland',
    population: 5700,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'gruv', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF'],
    lat: 60.07, lng: 15.93,
  },
  {
    slug: 'sala',
    name: 'Sala',
    county: 'Västmanland',
    population: 22800,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'livsmedel', 'skog', 'logistik'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Transportstyrelsen'],
    lat: 59.92, lng: 16.60,
  },
  {
    slug: 'skinnskatteberg',
    name: 'Skinnskatteberg',
    county: 'Västmanland',
    population: 4400,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 59.83, lng: 15.69,
  },
  {
    slug: 'surahammar',
    name: 'Surahammar',
    county: 'Västmanland',
    population: 10200,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'energi', 'fordon'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 59.71, lng: 16.21,
  },
  // --- Dalarna ---
  {
    slug: 'avesta',
    name: 'Avesta',
    county: 'Dalarna',
    population: 23000,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'energi', 'skog'],
    nis2Estimate: 18,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.15, lng: 16.17,
  },
  {
    slug: 'borlange',
    name: 'Borlänge',
    county: 'Dalarna',
    population: 52800,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'logistik', 'energi'],
    nis2Estimate: 50,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 60.49, lng: 15.43,
  },
  {
    slug: 'falun',
    name: 'Falun',
    county: 'Dalarna',
    population: 59700,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'IT', 'halso-sjukvard', 'forskning', 'energi'],
    nis2Estimate: 38,
    tillsynsmyndigheter: ['MCF', 'PTS', 'IVO', 'Energimyndigheten'],
    lat: 60.61, lng: 15.63,
  },
  {
    slug: 'gagnef',
    name: 'Gagnef',
    county: 'Dalarna',
    population: 10400,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 60.59, lng: 15.07,
  },
  {
    slug: 'hedemora',
    name: 'Hedemora',
    county: 'Dalarna',
    population: 15600,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 60.28, lng: 15.99,
  },
  {
    slug: 'leksand',
    name: 'Leksand',
    county: 'Dalarna',
    population: 16000,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 60.73, lng: 14.99,
  },
  {
    slug: 'ludvika',
    name: 'Ludvika',
    county: 'Dalarna',
    population: 26700,
    type: 'industrial',
    dominantSectors: ['energi', 'automation', 'tillverkning', 'forskning'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.15, lng: 15.19,
  },
  {
    slug: 'malung-salen',
    name: 'Malung-Sälen',
    county: 'Dalarna',
    population: 10200,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 60.68, lng: 13.71,
  },
  {
    slug: 'mora',
    name: 'Mora',
    county: 'Dalarna',
    population: 20800,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'tillverkning', 'energi'],
    nis2Estimate: 12,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 61.00, lng: 14.55,
  },
  {
    slug: 'orsa',
    name: 'Orsa',
    county: 'Dalarna',
    population: 7000,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 61.12, lng: 14.62,
  },
  {
    slug: 'rattvik',
    name: 'Rättvik',
    county: 'Dalarna',
    population: 10800,
    type: 'rural',
    dominantSectors: ['livsmedel', 'tillverkning', 'skog', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 60.89, lng: 15.12,
  },
  {
    slug: 'smedjebacken',
    name: 'Smedjebacken',
    county: 'Dalarna',
    population: 10800,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'skog', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.14, lng: 15.41,
  },
  {
    slug: 'sater',
    name: 'Säter',
    county: 'Dalarna',
    population: 11200,
    type: 'rural',
    dominantSectors: ['tillverkning', 'skog', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 60.35, lng: 15.75,
  },
  {
    slug: 'vansbro',
    name: 'Vansbro',
    county: 'Dalarna',
    population: 6700,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.51, lng: 14.22,
  },
  {
    slug: 'alvdalen',
    name: 'Älvdalen',
    county: 'Dalarna',
    population: 7100,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 61.23, lng: 14.04,
  },
  // --- Gävleborgs län (övriga) ---
  {
    slug: 'bollnas',
    name: 'Bollnäs',
    county: 'Gävleborg',
    population: 26500,
    type: 'industrial',
    dominantSectors: ['tillverkning', 'skog', 'logistik', 'livsmedel'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 61.35, lng: 16.39,
  },
  {
    slug: 'hofors',
    name: 'Hofors',
    county: 'Gävleborg',
    population: 9500,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'skog', 'energi'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.55, lng: 16.29,
  },
  {
    slug: 'hudiksvall',
    name: 'Hudiksvall',
    county: 'Gävleborg',
    population: 37300,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'IT', 'livsmedel'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Livsmedelsverket'],
    lat: 61.73, lng: 17.10,
  },
  {
    slug: 'ljusdal',
    name: 'Ljusdal',
    county: 'Gävleborg',
    population: 19000,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 61.83, lng: 16.09,
  },
  {
    slug: 'nordanstig',
    name: 'Nordanstig',
    county: 'Gävleborg',
    population: 9500,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 61.97, lng: 17.06,
  },
  {
    slug: 'ockelbo',
    name: 'Ockelbo',
    county: 'Gävleborg',
    population: 5900,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 60.89, lng: 16.72,
  },
  {
    slug: 'ovanaker',
    name: 'Ovanåker',
    county: 'Gävleborg',
    population: 11500,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 61.27, lng: 16.07,
  },
  {
    slug: 'sandviken',
    name: 'Sandviken',
    county: 'Gävleborg',
    population: 39800,
    type: 'industrial',
    dominantSectors: ['stål', 'tillverkning', 'forskning', 'energi'],
    nis2Estimate: 50,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 60.62, lng: 16.78,
  },
  // --- Västernorrlands län (övriga) ---
  {
    slug: 'harnosand',
    name: 'Härnösand',
    county: 'Västernorrland',
    population: 25200,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'IT', 'försvar', 'energi'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'PTS'],
    lat: 62.63, lng: 17.94,
  },
  {
    slug: 'kramfors',
    name: 'Kramfors',
    county: 'Västernorrland',
    population: 17700,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 62.93, lng: 17.78,
  },
  {
    slug: 'solleftea',
    name: 'Sollefteå',
    county: 'Västernorrland',
    population: 18700,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'tillverkning', 'VA'],
    nis2Estimate: 8,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 63.16, lng: 17.27,
  },
  {
    slug: 'timra',
    name: 'Timrå',
    county: 'Västernorrland',
    population: 18200,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'logistik', 'energi'],
    nis2Estimate: 14,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 62.49, lng: 17.32,
  },
  {
    slug: 'ange',
    name: 'Ånge',
    county: 'Västernorrland',
    population: 9200,
    type: 'rural',
    dominantSectors: ['skog', 'logistik', 'tillverkning', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 62.53, lng: 15.66,
  },
  {
    slug: 'ornskoldsvik',
    name: 'Örnsköldsvik',
    county: 'Västernorrland',
    population: 56000,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'IT', 'kemi', 'energi'],
    nis2Estimate: 40,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'PTS'],
    lat: 63.29, lng: 18.72,
  },
  // --- Jämtlands län ---
  {
    slug: 'berg',
    name: 'Berg',
    county: 'Jämtland',
    population: 6900,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 62.95, lng: 14.21,
  },
  {
    slug: 'bracke',
    name: 'Bräcke',
    county: 'Jämtland',
    population: 6200,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 62.75, lng: 15.42,
  },
  {
    slug: 'harjedalen',
    name: 'Härjedalen',
    county: 'Jämtland',
    population: 10100,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'livsmedel', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 62.43, lng: 13.74,
  },
  {
    slug: 'krokom',
    name: 'Krokom',
    county: 'Jämtland',
    population: 14800,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 63.33, lng: 14.46,
  },
  {
    slug: 'ragunda',
    name: 'Ragunda',
    county: 'Jämtland',
    population: 5200,
    type: 'rural',
    dominantSectors: ['energi', 'skog', 'tillverkning', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 63.08, lng: 16.39,
  },
  {
    slug: 'stromsund',
    name: 'Strömsund',
    county: 'Jämtland',
    population: 11600,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 63.85, lng: 15.56,
  },
  {
    slug: 'are',
    name: 'Åre',
    county: 'Jämtland',
    population: 12100,
    type: 'rural',
    dominantSectors: ['offentlig-sektor', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 6,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket', 'Energimyndigheten'],
    lat: 63.40, lng: 13.08,
  },
  {
    slug: 'ostersund',
    name: 'Östersund',
    county: 'Jämtland',
    population: 64000,
    type: 'service-city',
    dominantSectors: ['offentlig-sektor', 'försvar', 'IT', 'halso-sjukvard', 'forskning'],
    nis2Estimate: 45,
    tillsynsmyndigheter: ['MCF', 'PTS', 'IVO'],
    lat: 63.18, lng: 14.64,
  },
  // --- Västerbottens län (övriga) ---
  {
    slug: 'bjurholm',
    name: 'Bjurholm',
    county: 'Västerbotten',
    population: 2400,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 63.94, lng: 19.18,
  },
  {
    slug: 'dorotea',
    name: 'Dorotea',
    county: 'Västerbotten',
    population: 2600,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'energi', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 64.27, lng: 16.50,
  },
  {
    slug: 'lycksele',
    name: 'Lycksele',
    county: 'Västerbotten',
    population: 11800,
    type: 'rural',
    dominantSectors: ['skog', 'halso-sjukvard', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'IVO'],
    lat: 64.59, lng: 18.66,
  },
  {
    slug: 'mala',
    name: 'Malå',
    county: 'Västerbotten',
    population: 3100,
    type: 'rural',
    dominantSectors: ['gruv', 'skog', 'tillverkning', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF'],
    lat: 65.19, lng: 18.74,
  },
  {
    slug: 'nordmaling',
    name: 'Nordmaling',
    county: 'Västerbotten',
    population: 7100,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 63.57, lng: 19.50,
  },
  {
    slug: 'norsjo',
    name: 'Norsjö',
    county: 'Västerbotten',
    population: 4100,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'gruv', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF'],
    lat: 64.92, lng: 19.49,
  },
  {
    slug: 'robertsfors',
    name: 'Robertsfors',
    county: 'Västerbotten',
    population: 6800,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 64.20, lng: 20.84,
  },
  {
    slug: 'skelleftea',
    name: 'Skellefteå',
    county: 'Västerbotten',
    population: 78800,
    type: 'industrial',
    dominantSectors: ['datacenter', 'tillverkning', 'gruv', 'energi', 'skog'],
    nis2Estimate: 90,
    tillsynsmyndigheter: ['MCF', 'PTS', 'Energimyndigheten'],
    lat: 64.75, lng: 20.95,
  },
  {
    slug: 'sorsele',
    name: 'Sorsele',
    county: 'Västerbotten',
    population: 2400,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 65.53, lng: 17.54,
  },
  {
    slug: 'vilhelmina',
    name: 'Vilhelmina',
    county: 'Västerbotten',
    population: 6700,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 64.62, lng: 16.66,
  },
  {
    slug: 'vindeln',
    name: 'Vindeln',
    county: 'Västerbotten',
    population: 5200,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 64.20, lng: 19.72,
  },
  {
    slug: 'vannas',
    name: 'Vännäs',
    county: 'Västerbotten',
    population: 8800,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 63.91, lng: 19.75,
  },
  {
    slug: 'asele',
    name: 'Åsele',
    county: 'Västerbotten',
    population: 2700,
    type: 'rural',
    dominantSectors: ['skog', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 64.16, lng: 17.36,
  },
  // --- Norrbottens län (övriga) ---
  {
    slug: 'arjeplog',
    name: 'Arjeplog',
    county: 'Norrbotten',
    population: 2700,
    type: 'rural',
    dominantSectors: ['fordon', 'energi', 'skog', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen'],
    lat: 66.05, lng: 17.89,
  },
  {
    slug: 'arvidsjaur',
    name: 'Arvidsjaur',
    county: 'Norrbotten',
    population: 6300,
    type: 'rural',
    dominantSectors: ['försvar', 'fordon', 'skog', 'energi'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 65.59, lng: 19.17,
  },
  {
    slug: 'boden',
    name: 'Boden',
    county: 'Norrbotten',
    population: 28000,
    type: 'industrial',
    dominantSectors: ['försvar', 'tillverkning', 'energi', 'logistik'],
    nis2Estimate: 22,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 65.83, lng: 21.69,
  },
  {
    slug: 'gallivare',
    name: 'Gällivare',
    county: 'Norrbotten',
    population: 17200,
    type: 'industrial',
    dominantSectors: ['gruv', 'tillverkning', 'energi', 'logistik'],
    nis2Estimate: 25,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten', 'Transportstyrelsen'],
    lat: 67.13, lng: 20.65,
  },
  {
    slug: 'haparanda',
    name: 'Haparanda',
    county: 'Norrbotten',
    population: 9400,
    type: 'rural',
    dominantSectors: ['logistik', 'livsmedel', 'tillverkning', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Livsmedelsverket'],
    lat: 65.83, lng: 24.13,
  },
  {
    slug: 'jokkmokk',
    name: 'Jokkmokk',
    county: 'Norrbotten',
    population: 4800,
    type: 'rural',
    dominantSectors: ['energi', 'skog', 'gruv', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 66.61, lng: 19.83,
  },
  {
    slug: 'kalix',
    name: 'Kalix',
    county: 'Norrbotten',
    population: 16100,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 7,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 65.85, lng: 23.16,
  },
  {
    slug: 'kiruna',
    name: 'Kiruna',
    county: 'Norrbotten',
    population: 22800,
    type: 'industrial',
    dominantSectors: ['gruv', 'tillverkning', 'energi', 'forskning'],
    nis2Estimate: 35,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 67.85, lng: 20.22,
  },
  {
    slug: 'pajala',
    name: 'Pajala',
    county: 'Norrbotten',
    population: 6000,
    type: 'rural',
    dominantSectors: ['gruv', 'skog', 'energi', 'VA'],
    nis2Estimate: 5,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 67.21, lng: 23.36,
  },
  {
    slug: 'pitea',
    name: 'Piteå',
    county: 'Norrbotten',
    population: 42700,
    type: 'industrial',
    dominantSectors: ['skog', 'tillverkning', 'hamn', 'energi'],
    nis2Estimate: 30,
    tillsynsmyndigheter: ['MCF', 'Transportstyrelsen', 'Energimyndigheten'],
    lat: 65.32, lng: 21.48,
  },
  {
    slug: 'alvsbyn',
    name: 'Älvsbyn',
    county: 'Norrbotten',
    population: 8100,
    type: 'rural',
    dominantSectors: ['skog', 'tillverkning', 'livsmedel', 'VA'],
    nis2Estimate: 4,
    tillsynsmyndigheter: ['MCF', 'Livsmedelsverket'],
    lat: 65.68, lng: 21.00,
  },
  {
    slug: 'overkalix',
    name: 'Överkalix',
    county: 'Norrbotten',
    population: 3300,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 66.33, lng: 22.85,
  },
  {
    slug: 'overtornea',
    name: 'Övertorneå',
    county: 'Norrbotten',
    population: 4500,
    type: 'rural',
    dominantSectors: ['skog', 'energi', 'livsmedel', 'VA'],
    nis2Estimate: 3,
    tillsynsmyndigheter: ['MCF', 'Energimyndigheten'],
    lat: 66.39, lng: 23.66,
  },
];

export function getKommunBySlug(slug: string): Kommun | undefined {
  return kommuner.find((k) => k.slug === slug);
}

const sectorLabels: Record<string, string> = {
  'fordon': 'Fordon & transportmedel',
  'flyg': 'Flyg- & rymdindustri',
  'tillverkning': 'Tillverkningsindustri',
  'energi': 'Energi & kraftförsörjning',
  'hamn': 'Hamn & sjöfart',
  'logistik': 'Transport & logistik',
  'life-science': 'Life science & läkemedel',
  'halso-sjukvard': 'Hälso- & sjukvård',
  'IT': 'IT & digitala tjänster',
  'finans': 'Bank & finans',
  'offentlig-sektor': 'Offentlig förvaltning',
  'livsmedel': 'Livsmedelsproduktion',
  'VA': 'Vatten & avlopp',
  'skog': 'Skogs- & träindustri',
  'textil': 'Textil & mode',
  'kemi': 'Kemi & petrokemi',
  'stål': 'Stål & metallindustri',
  'gruv': 'Gruv- & mineralnäring',
  'datacenter': 'Datacenter & digital infrastruktur',
  'forskning': 'Forskning & akademi',
  'försvar': 'Försvar & säkerhet',
  'automation': 'Automation & industriell IT',
};

export function getSectorLabel(sector: string): string {
  return sectorLabels[sector] ?? sector;
}

// ── Prose helpers ───────────────────────────────────────────────────
// All visible prose is built from real per-kommun data (population, sectors,
// tillsynsmyndigheter, neighbours, optional named employers). Sentence
// skeletons are chosen deterministically per kommun so two municipalities of
// the same type no longer render near-identical text — this is what lifts the
// pages out of Google's "thin/duplicate → not indexed" bucket.

/**
 * Verified local enrichment — named employers and a local angle for kommuner
 * where these facts are well-established. Kept separate from the main data
 * array so the bulk dataset stays untouched. Only add entries you can verify;
 * absent kommuner fall back to sector-grounded prose (no fabrication).
 */
const kommunEnrichment: Record<string, { namedEmployers?: string[]; localAngle?: string }> = {
  stockholm: {
    namedEmployers: ['Ericsson', 'storbankerna', 'en stor offentlig sektor'],
    localAngle:
      'Som huvudstad rymmer Stockholm en stor del av landets finansiella infrastruktur, statliga myndigheter och datacenter. I sådana verksamheter får driftstörningar snabbt nationell räckvidd, vilket är just det NIS2 är till för att förebygga.',
  },
  goteborg: {
    namedEmployers: ['Volvo Cars', 'Volvo Group', 'SKF', 'AstraZeneca'],
    localAngle:
      'Göteborgs hamn är Skandinaviens största hamn och en samhällsviktig nod för svensk import och export. Hamnens och fordonsindustrins långa leverantörskedjor gör att NIS2-kraven kaskaderar ut till hundratals underleverantörer i regionen.',
  },
  malmo: {
    namedEmployers: ['en stor logistik- och handelssektor', 'life science-kluster i Öresundsregionen'],
    localAngle:
      'Malmö är en knutpunkt i Öresundsregionen med tung logistik, hamn och digital infrastruktur, sektorer som alla berörs direkt av cybersäkerhetslagen.',
  },
  trollhattan: {
    namedEmployers: ['GKN Aerospace', 'Saab'],
    localAngle:
      'Med flyg- och fordonsindustri som GKN Aerospace ställs höga krav på säkerheten i både IT och industriella styrsystem (OT). Som underleverantör till försvars- och flygsektorn möter många företag i Trollhättan dessutom stränga säkerhetskrav uppströms.',
  },
  skovde: {
    namedEmployers: ['Volvo (motorfabriken)', 'Försvarsmakten (Skaraborgs regemente)'],
    localAngle:
      'Skövde är både en industri- och garnisonsstad. Närheten till försvarsverksamhet och tillverkning med industriella styrsystem gör cybersäkerhet och OT-säkerhet till en konkret fråga för många lokala arbetsgivare.',
  },
  linkoping: {
    namedEmployers: ['Saab', 'Ericsson'],
    localAngle:
      'Linköping är ett centrum för flyg- och försvarsindustri. Företag i Saabs leverantörskedja möter ofta höga säkerhetskrav, och cybersäkerhetslagen formaliserar mycket av det arbete som branschen redan känner till.',
  },
  vasteras: {
    namedEmployers: ['ABB', 'Westinghouse'],
    localAngle:
      'Västerås är ett nav för elkraft- och energiteknik. Verksamheter kopplade till energisektorn hör till de mest reglerade under NIS2, med uttryckliga krav på driftsäkerhet och incidentrapportering.',
  },
  eskilstuna: {
    namedEmployers: ['Volvo Construction Equipment'],
    localAngle:
      'Eskilstunas tillverkningsindustri bygger på industriella styrsystem och automation, där OT-säkerhet blir lika viktig som traditionell IT-säkerhet.',
  },
  sodertalje: {
    namedEmployers: ['Scania', 'AstraZeneca'],
    localAngle:
      'Med stora arbetsgivare som Scania och AstraZeneca har Södertälje långa, internationella leverantörskedjor, och NIS2:s krav på leverantörssäkerhet träffar därför många underleverantörer i kommunen.',
  },
  lulea: {
    namedEmployers: ['SSAB', 'datacenter (bl.a. Meta)'],
    localAngle:
      'Luleå kombinerar tung stålindustri med stora datacenter. Både samhällsviktig industri och digital infrastruktur omfattas av cybersäkerhetslagen, vilket gör staden särskilt berörd.',
  },
  kiruna: {
    namedEmployers: ['LKAB'],
    localAngle:
      'Gruvnäringen i Kiruna är samhällsviktig och starkt beroende av industriella styrsystem. Avbrott genom cyberincidenter kan få konsekvenser långt utanför kommunen.',
  },
  gallivare: {
    namedEmployers: ['LKAB', 'Boliden (Aitik)'],
    localAngle:
      'Gällivares gruvindustri vilar på automation och fjärrstyrda processer, en miljö där OT-säkerhet är direkt verksamhetskritisk.',
  },
  sandviken: {
    namedEmployers: ['Sandvik'],
    localAngle:
      'Med materialteknik och avancerad tillverkning som bas är Sandviken beroende av säkra industriella system och en trygg leverantörskedja.',
  },
  karlskrona: {
    namedEmployers: ['Saab Kockums', 'Marinbasen'],
    localAngle:
      'Karlskrona är en marin- och örlogsstad. Närvaron av försvars- och varvsindustri innebär att många lokala verksamheter möter höga säkerhetskrav, både genom lag och genom kundkrav.',
  },
  lund: {
    namedEmployers: ['Tetra Pak', 'Axis Communications', 'Ericsson'],
    localAngle:
      'Lund är ett tech- och forskningskluster med stora forskningsanläggningar och teknikbolag, kunskapsintensiva verksamheter som hanterar stora mängder skyddsvärd information.',
  },
  oxelosund: {
    namedEmployers: ['SSAB'],
    localAngle:
      'Oxelösund präglas av stålverket och hamnen, samhällsviktig infrastruktur där driftsäkerhet och cyberskydd hänger tätt ihop.',
  },
  koping: {
    namedEmployers: ['Volvo'],
    localAngle:
      'Köpings tillverkningsindustri och hamn vid Mälaren gör kommunen beroende av både säkra styrsystem och en robust leverantörskedja.',
  },
  olofstrom: {
    namedEmployers: ['Volvo Cars (pressverket)'],
    localAngle:
      'Olofström domineras av fordonsindustrins pressverk. Som djupt integrerad leverantör till fordonssektorn påverkas företagen direkt av storkundernas NIS2-krav.',
  },
  helsingborg: {
    localAngle:
      'Helsingborgs hamn är en av Sveriges största för gods och färjetrafik, en samhällsviktig logistiknod som omfattas av cybersäkerhetslagens krav på driftsäkerhet.',
  },
  jonkoping: {
    localAngle:
      'Jönköping är ett av landets största logistiknav. Transport- och logistiksektorn är utpekad under NIS2, vilket gör cybersäkerhet till en konkret fråga för många företag i kommunen.',
  },
  sundsvall: {
    localAngle:
      'Sundsvall förenar skogsindustri med flera statliga myndigheter och stora IT-verksamheter, en blandning av samhällsviktiga sektorer som alla berörs av cybersäkerhetslagen.',
  },

  // ── Researched & source-verified enrichment (top municipalities by size) ──
  uppsala: {
    namedEmployers: ['Akademiska sjukhuset', 'Cytiva', 'Fresenius Kabi'],
    localAngle:
      'Uppsala är ett av Nordens ledande life science-kluster med cirka 300 företag och Akademiska sjukhuset som forskningsnav. Tillverkning av läkemedel och medicinteknik samt sjukvårdens kritiska system gör att både NIS2 och kraven på säker OT-miljö blir centrala i regionen.',
  },
  orebro: {
    namedEmployers: ['Universitetssjukhuset Örebro', 'Örebro universitet'],
    localAngle:
      'Örebro ligger logistiskt centralt i Sverige och är ett nav för lager och distribution, med Universitetssjukhuset Örebro som en av länets största arbetsplatser. Samhällsviktig vård och vidsträckta logistikflöden gör att NIS2-kraven på driftsäkerhet och incidentrapportering träffar både offentlig och privat sektor i regionen.',
  },
  norrkoping: {
    namedEmployers: ['Holmen (Bravikens pappersbruk)', 'Siemens Energy', 'Billerud Skärblacka'],
    localAngle:
      'Norrköping är ett tungt industri- och logistiknav där Holmens bruk i Braviken och energiteknik präglar näringslivet. Process- och tillverkningsindustrins driftsystem hör till de mest exponerade under NIS2, med tydliga krav på OT-säkerhet och incidentrapportering.',
  },
  umea: {
    namedEmployers: ['Norrlands universitetssjukhus', 'Umeå universitet', 'Volvo Lastvagnar', 'Komatsu Forest'],
    localAngle:
      'Umeå är norra Sveriges största arbetsplatsområde med Norrlands universitetssjukhus och stark tillverkningsindustri som Volvo Lastvagnar och Komatsu Forest. Samhällsviktig vård och industriell produktion gör att NIS2-kraven och behovet av säkra OT-miljöer väger tungt i regionen.',
  },
  boras: {
    namedEmployers: ['Ellos', 'RISE Research Institutes of Sweden', 'Högskolan i Borås'],
    localAngle:
      'Borås har gått från textilstad till ett nav för e-handel och distanshandel med stora logistik- och orderflöden. Långa leverantörs- och betalningskedjor i handeln gör att NIS2-kraven kaskaderar ut till underleverantörer och IT-tjänster i regionen.',
  },
  gavle: {
    namedEmployers: ['Billerud (Gävle bruk)', 'Gävle hamn', 'Smurfit Westrock'],
    localAngle:
      'Gävle präglas av skogsindustri och en av Sveriges viktigaste hamnar för export av skogs- och oljeprodukter. Hamnens och processindustrins driftsystem är samhällsviktiga noder där NIS2 ställer uttryckliga krav på OT-säkerhet och incidentrapportering.',
  },
  karlstad: {
    namedEmployers: ['Karlstads universitet', 'Centralsjukhuset i Karlstad', 'Valmet'],
    localAngle:
      'Karlstad är ett offentligt och säkerhetspolitiskt nav i Värmland, bland annat med MSB:s största arbetsplats och Centralsjukhuset. Samhällsviktig verksamhet inom vård, krisberedskap och processindustri gör att kraven i NIS2 och cybersäkerhetslagen blir högst påtagliga i regionen.',
  },
  vaxjo: {
    namedEmployers: ['Linnéuniversitetet', 'Volvo Construction Equipment (Braås)', 'Fortnox'],
    localAngle:
      'Växjö kombinerar en växande IT- och fintech-sektor med tillverkning och skogsråvara samt Centrallasarettet som regional vårdnod. Digitala finanstjänster och samhällsviktig vård gör att NIS2-kraven på driftsäkerhet och incidentrapportering träffar flera branscher i regionen.',
  },
  halmstad: {
    namedEmployers: ['HMS Networks', 'Getinge', 'Servera'],
    localAngle:
      'Halmstad är en garnisonsstad där Luftvärnsregementet Lv 6 utgör en del av totalförsvaret, samtidigt som regionen har en stark industri inom medicinteknik och industriell IT. Närvaron av försvar, kritisk tillverkning och stora logistikflöden gör att många lokala verksamheter omfattas av NIS2 och höga säkerhetskrav.',
  },
  kristianstad: {
    namedEmployers: ['Centralsjukhuset Kristianstad', 'The Absolut Company (Åhus)'],
    localAngle:
      'Kristianstad är ett nav för livsmedelsproduktion och regional hälso- och sjukvård med Centralsjukhuset. Både sjukvården och livsmedelsindustrins automatiserade processer räknas som samhällsviktig verksamhet, vilket gör NIS2- och OT-säkerhet centralt i regionen.',
  },
  kungsbacka: {
    localAngle:
      'Kungsbacka är en pendlingskommun till Göteborg med ett brett näringsliv av mindre företag inom handel, bygg och företagstjänster, utan en enskilt dominerande industri. Många lokala bolag är underleverantörer till större verksamheter i Göteborgsregionen, vilket gör att NIS2-kraven kaskaderar ut via kundernas leverantörskedjor.',
  },
  kalmar: {
    namedEmployers: ['Linnéuniversitetet', 'Länssjukhuset i Kalmar', 'Kalmar Hamn'],
    localAngle:
      'Kalmar förenar ett regionsjukhus och ett universitet med hamn och livsmedelsindustri längs Östersjökusten. Kombinationen av hälso- och sjukvård, energiförsörjning och hamnverksamhet innebär att flera lokala aktörer utgör samhällsviktig verksamhet under NIS2.',
  },
  varberg: {
    namedEmployers: ['Ringhals (Vattenfall)', 'Södra Cell Värö'],
    localAngle:
      'I Varbergs kommun ligger Ringhals kärnkraftverk, en av Nordens största elproducenter, samt Södra Cells massabruk i Värö. Närvaron av kärnkraft och processindustri med omfattande styrsystem gör OT-säkerhet och skydd av samhällsviktig energiproduktion till en högst lokal fråga.',
  },
  ostersund: {
    namedEmployers: ['Mittuniversitetet', 'Östersunds sjukhus'],
    localAngle:
      'Östersund är ett regionalt centrum med universitet, sjukhus och återetablerad försvarsnärvaro genom Jämtlands fältjägarkår. Kombinationen av hälso- och sjukvård, forskning och försvar gör att många verksamheter möter höga krav på informationssäkerhet, både via lag och kundkrav.',
  },
  gotland: {
    namedEmployers: ['Region Gotland', 'Cementa (Slite)', 'Rederi AB Gotland', 'Gotlands regemente P 18'],
    localAngle:
      'Gotland har en strategisk position i Östersjön med Gotlands regemente P 18, Cementas anläggning i Slite och färjetrafiken via Rederi AB Gotland. Det utsatta läget och beroendet av ö-baserad energi-, transport- och cementförsörjning gör samhällsviktig verksamhet och OT-säkerhet särskilt känsligt här.',
  },
  falun: {
    namedEmployers: ['Stora Enso', 'Falu lasarett', 'Högskolan Dalarna'],
    localAngle:
      'Falun präglas av offentlig sektor med lasarett och högskola samt en industrihistoria knuten till skogs- och basindustri. Sjukvård och industriella processer gör att flera lokala verksamheter omfattas av NIS2 och behöver säkra både IT och styrsystem.',
  },
  skelleftea: {
    namedEmployers: ['Boliden', 'Lyten (tidigare Northvolt Ett)'],
    localAngle:
      'Skellefteå förenar gruv- och metallindustrin kring Boliden med storskalig batteritillverkning och planerade datacenter på det tidigare Northvolt-området. Både samhällsviktig industri och digital infrastruktur omfattas av cybersäkerhetslagen, vilket gör kommunen särskilt berörd.',
  },
  ornskoldsvik: {
    namedEmployers: ['BAE Systems Hägglunds', 'Domsjö Fabriker', 'Metsä Board (Husum)', 'Bosch Rexroth Mellansel'],
    localAngle:
      'Örnsköldsvik rymmer både försvarsindustri genom BAE Systems Hägglunds tillverkning av stridsfordon och tung skogs- och kemiindustri kring Domsjö Fabriker. Det är verksamheter med höga krav på driftsäkerhet och cyberskydd, där både cybersäkerhetslagen och försvarssekretess spelar in.',
  },
  borlange: {
    namedEmployers: ['SSAB', 'Trafikverket', 'Högskolan Dalarna'],
    localAngle:
      'Borlänge präglas av SSAB:s stålverk och av att vara Trafikverkets huvudort, en kombination av tung processindustri och nationell transportinfrastruktur. Båda är samhällsviktiga verksamheter där OT-säkerhet och cybersäkerhetslagen ställer höga krav.',
  },
  pitea: {
    namedEmployers: ['Smurfit Westrock', 'SCA Munksund', 'SunPine'],
    localAngle:
      'Piteå bygger på skogsindustrin med Europas största kraftlinerbruk och flera massa- och bioraffinaderier nära hamnen. Det är samhällsviktig industri där driftsäkerhet i styrsystem och cyberskydd hänger tätt ihop.',
  },
  nykoping: {
    namedEmployers: ['Stockholm Skavsta flygplats', 'Eberspächer Exhaust Technology Sweden', 'Nyköpings lasarett'],
    localAngle:
      'Nyköping kombinerar Stockholm Skavsta flygplats med fordonsindustri och regionsjukvård. Flygplats och sjukhus är samhällsviktig verksamhet som omfattas av NIS2 och cybersäkerhetslagen, vilket ställer höga krav på kontinuitet och cyberskydd.',
  },
  uddevalla: {
    namedEmployers: ['Uddevalla sjukhus (NU-sjukvården)', 'Volvo Bussar Uddevalla', 'Uddevalla Hamnterminal'],
    localAngle:
      'Uddevalla har regionsjukvård genom NU-sjukvården samt hamn och tillverkningsindustri. Sjukhus och hamn är samhällsviktig verksamhet som omfattas av NIS2 och cybersäkerhetslagen, där driftsäkerhet och cyberskydd är avgörande.',
  },
  motala: {
    namedEmployers: ['Motala Verkstad Group', 'Region Östergötland'],
    localAngle:
      'Motala har en lång verkstads- och industritradition med Motala Verkstad samt logistik- och energiverksamhet längs Göta kanal. Det är produktionsmiljöer där OT-säkerhet och cybersäkerhetslagen blir allt viktigare.',
  },
  lidkoping: {
    namedEmployers: ['Fazer Bageri', 'Berry Superfos Lidköping', 'Lidköpings sjukhus'],
    localAngle:
      'Lidköping har en stark livsmedelsindustri med Fazers bageri som en av kommunens största arbetsgivare, samt sjukvård och tillverkning. Livsmedelsproduktion och sjukvård är samhällsviktiga verksamheter där NIS2 och cybersäkerhetslagen ställer krav på driftsäkerhet.',
  },
  huddinge: {
    namedEmployers: ['Karolinska Universitetssjukhuset Huddinge', 'Karolinska Institutet', 'Södertörns högskola'],
    localAngle:
      'I Flemingsberg samlas Karolinska Universitetssjukhuset, Karolinska Institutet och flera lärosäten i ett av Stockholmsregionens största vård- och forskningskluster, kunskapsintensiva verksamheter som hanterar stora mängder känsliga patient- och forskningsdata. Vården omfattas dessutom direkt av NIS2 som en väsentlig samhällssektor.',
  },
  nacka: {
    namedEmployers: ['Atlas Copco', 'Epiroc', 'Viking Line', 'Dustin'],
    localAngle:
      'I Sickla har flera börsnoterade industri- och teknikbolag som Atlas Copco och Epiroc sina huvudkontor, internationella verksamheter med långa, globala leverantörskedjor där NIS2:s krav på leverantörssäkerhet får bred spridning. Samtidigt drivs lokalt näringsliv i Nacka till stor del av många små företag som dras in i kundernas säkerhetskrav.',
  },
  solna: {
    namedEmployers: ['SEB', 'Telia Company', 'Vattenfall', 'ICA'],
    localAngle:
      'Solna rymmer både life science-klustret i Hagastaden kring Karolinska och stora koncernkontor i Arenastaden för bland andra SEB, Telia och Vattenfall, verksamheter inom finans, energi och telekom som tillhör NIS2:s mest reglerade sektorer. Det gör kommunen till en av regionens tätaste koncentrationer av samhällsviktig och skyddsvärd verksamhet.',
  },
  molndal: {
    namedEmployers: ['AstraZeneca'],
    localAngle:
      'AstraZeneca har ett av sina globala forskningscentrum i Mölndal med flera tusen anställda, en forskningsintensiv läkemedelsverksamhet som hanterar mycket skyddsvärda data och har långa internationella leverantörskedjor. NIS2:s krav på leverantörssäkerhet träffar därför många underleverantörer och teknikbolag i kommunen.',
  },
  sollentuna: {
    localAngle:
      'Sollentuna är en utpräglad pendlar- och handelskommun längs E4 och pendeltågsstråket, med ett näringsliv som domineras av handel och tjänsteföretag. Många invånare arbetar i NIS2-reglerade sektorer i regionen, och lokala små och medelstora företag dras in i större kunders krav på leverantörssäkerhet.',
  },
  taby: {
    localAngle:
      'Täby är en växande pendlar- och handelskommun där näringslivet domineras av handel, företagstjänster och vård snarare än enskilda stora arbetsgivare. Många invånare arbetar i NIS2-reglerade sektorer i Stockholmsområdet, och lokala småföretag möter i ökande grad leverantörskrav på informationssäkerhet från sina större kunder.',
  },
  jarfalla: {
    namedEmployers: ['Saab', 'Silex Microsystems'],
    localAngle:
      'I Järfälla finns säkerhetskänslig verksamhet som Saabs försvars- och högteknologiverksamhet och halvledartillverkaren Silex Microsystems i Veddesta, branscher med höga krav på skydd av kritisk teknik och kontroll över leverantörskedjor. NIS2 och regler kring säkerhetskänslig verksamhet ställer därför långtgående krav på både bolagen och deras lokala underleverantörer.',
  },
  sundbyberg: {
    namedEmployers: ['Swedbank'],
    localAngle:
      'Sundbyberg är Sveriges mest företagstäta kommun med tusentals bolag på en liten yta, och har bland annat Swedbank som stor arbetsgivare, en finansaktör som tillhör NIS2:s mest reglerade sektorer. Den höga tätheten av tjänste- och teknikföretag innebär att många små bolag dras in i större kunders krav på informationssäkerhet och leverantörssäkerhet.',
  },
  haninge: {
    namedEmployers: ['Amfibieregementet (Amf 1)', 'Berga örlogsbas', 'Dagab'],
    localAngle:
      'Haninge garnison med Berga örlogsbas och Amfibieregementet är ett av marinens centra på ostkusten, en utpräglat samhällsviktig miljö där OT- och informationssäkerhet är avgörande. Tillsammans med Dagabs stora logistiknav gör det Haninge till en kommun där driftsäkerhet och försörjningstrygghet ställs på sin spets.',
  },
  botkyrka: {
    namedEmployers: ['PostNord', 'Spendrups Bryggeri'],
    localAngle:
      'Botkyrka är en logistik- och tillverkningstung kommun i södra Storstockholm med stora anläggningar för bland annat PostNord och Spendrups. Sådana flöden av varor och livsmedel vilar på industriella styrsystem och leveranskedjor som omfattas av cybersäkerhetslagens och NIS2:s krav på kontinuitet.',
  },
  sigtuna: {
    namedEmployers: ['Swedavia (Stockholm Arlanda Airport)'],
    localAngle:
      'Sigtuna är värdkommun för Stockholm Arlanda Airport, Sveriges viktigaste flygplats och en av landets mest samhällsviktiga transportnoder med över 20 000 arbetstillfällen. Flygplatsens drift- och styrsystem är klassisk kritisk infrastruktur som omfattas direkt av cybersäkerhetslagens krav.',
  },
  enkoping: {
    namedEmployers: ['Ledningsregementet (Försvarsmakten)'],
    localAngle:
      'Enköpings garnison hyser Ledningsregementet, ett av Försvarsmaktens största förband med ansvar för ledningssystem, signalspaning och cyberförsvar. Få kommuner har en så tydlig koppling mellan lokalt näringsliv och nationell cybersäkerhet.',
  },
  landskrona: {
    namedEmployers: ['BorgWarner Sweden', 'Haldex', 'Landskrona Hamn'],
    localAngle:
      'Landskrona präglas av tung fordonsindustri med BorgWarner och Haldex, samt en aktiv hamn. Som integrerade leverantörer till den globala fordonssektorn påverkas industrin direkt av storkundernas NIS2-krav på leverantörskedjan, samtidigt som hamn och produktion vilar på säkra OT-miljöer.',
  },
  trelleborg: {
    namedEmployers: ['Trelleborgs Hamn'],
    localAngle:
      'Trelleborgs Hamn är Skandinaviens största RoRo- och färjehamn och en av Östersjöns viktigaste godsnoder mot kontinenten. Som samhällsviktig logistikinfrastruktur omfattas hamnens drift- och styrsystem av cybersäkerhetslagens krav på driftsäkerhet.',
  },
  falkenberg: {
    namedEmployers: ['Carlsberg Sverige (Falkenberg)', 'Arla Foods (Falkenberg)'],
    localAngle:
      'Falkenberg är en av Sveriges starkaste livsmedelsorter med Carlsbergs bryggeri och Arlas mejeri, en av Europas största anläggningar för cottage cheese. Sådan storskalig livsmedelsproduktion är samhällsviktig och vilar på automatiserade processstyrsystem som omfattas av NIS2 och cybersäkerhetslagen.',
  },
  hassleholm: {
    namedEmployers: ['Dagab'],
    localAngle:
      'Hässleholm växte fram kring en av Sydsveriges viktigaste järnvägsknutar och är idag ett strategiskt logistik- och distributionsnav. Både järnvägsnoden och de stora lagerverksamheterna utgör samhällsviktig transportinfrastruktur som omfattas av cybersäkerhetslagens krav.',
  },

  // ── Researched & source-verified enrichment, batch 2 ──
  karlskoga: {
    namedEmployers: ['Saab Dynamics', 'BAE Systems Bofors', 'Nammo'],
    localAngle:
      'Karlskoga är en av Sveriges främsta orter för försvars- och ammunitionsindustri med Saab Dynamics och BAE Systems Bofors. Försvarsleverantörer ställs inför höga krav på informationssäkerhet och skydd av kritisk verksamhet, där cybersäkerhet i industriella miljöer blir avgörande.',
  },
  karlshamn: {
    namedEmployers: ['AAK', 'Södra Cell Mörrum', 'Karlshamns Hamn'],
    localAngle:
      'Karlshamn präglas av en djuphamn, processindustri och Karlshamnsverket som är Nordens största reserv- och toppeffektverk. Hamn och energiproduktion är samhällsviktig infrastruktur där driftsäkerhet och cyberskydd hänger tätt ihop under NIS2.',
  },
  stenungsund: {
    namedEmployers: ['Borealis', 'Perstorp', 'Nouryon', 'INEOS Inovyn'],
    localAngle:
      'Stenungsund är hjärtat i Sveriges största kemikluster med Borealis, Perstorp, Nouryon och Inovyn. Petrokemisk processindustri är samhällsviktig och starkt reglerad, där säkra styrsystem (OT) och cyberskydd är centrala för både driftsäkerhet och anläggningssäkerhet.',
  },
  oskarshamn: {
    namedEmployers: ['OKG (kärnkraftverk)', 'Scania', 'Saft'],
    localAngle:
      'Oskarshamn präglas av kärnkraftverket OKG och Scanias hyttillverkning, Kalmar läns största privata arbetsgivare. Kärnkraft och industriell produktion hör till de mest reglerade verksamheterna under NIS2, med uttryckliga krav på driftsäkerhet och skydd av styrsystem.',
  },
  ludvika: {
    namedEmployers: ['Hitachi Energy'],
    localAngle:
      'Ludvika är ett nav för högspänningsteknik och HVDC, med Hitachi Energy (tidigare ABB) som kommunens i särklass största arbetsgivare. Verksamheter kopplade till elkraftsektorn hör till de mest reglerade under NIS2, med tydliga krav på driftsäkerhet och incidentrapportering.',
  },
  boden: {
    namedEmployers: ['Norrbottens regemente (I 19)', 'Stegra'],
    localAngle:
      'Boden är en garnisonsstad med Norrbottens regemente (I 19) och samtidigt ett nav för stora industri- och energietableringar i norr. Försvarsverksamhet och samhällsviktig industri ställer höga krav på informationssäkerhet och skydd av kritisk infrastruktur.',
  },
  strangnas: {
    namedEmployers: ['Pfizer', 'Region Sörmland'],
    localAngle:
      'Strängnäs har en stark försvarstradition och är idag bas för Pfizers läkemedelstillverkning, en av kommunens största privata arbetsgivare. Reglerad tillverkningsindustri ställer höga krav på spårbarhet, driftsäkerhet och skydd av industriella styrsystem.',
  },
  nynashamn: {
    namedEmployers: ['Nynas AB (raffinaderi)', 'Stockholm Norvik Hamn'],
    localAngle:
      'Nynäshamn präglas av Nynas raffinaderi och Stockholm Norvik Hamn, samhällsviktig infrastruktur för drivmedel och godsflöden. Raffinaderi och hamn omfattas av höga krav på driftsäkerhet och cyberskydd, där säkra styrsystem (OT) är avgörande.',
  },
  hoganas: {
    namedEmployers: ['Höganäs AB'],
    localAngle:
      'Höganäs domineras av Höganäs AB, världsledande inom metallpulver och pulvermetallurgi. Avancerad processindustri är beroende av säkra styrsystem och cyberskydd, där driftsäkerhet i produktionen blir affärskritisk.',
  },
  varnamo: {
    namedEmployers: ['3M', 'DS Smith', 'Proton Group'],
    localAngle:
      'Värnamo har ett tätt nätverk av legotillverkare och underleverantörer inom plast, gummi och metall. Som leverantörer till större industrikoncerner får företagen storkundernas NIS2-krav nedförda i leverantörskedjan.',
  },
  nassjo: {
    namedEmployers: ['Trafikverket (centrallager järnväg)', 'Infranord'],
    localAngle:
      'Nässjö är södra Sveriges järnvägsnav med Trafikverkets centrala materialförsörjning och en kombiterminal för godståg. Transport- och järnvägsinfrastrukturen gör orten direkt berörd av NIS2 inom transportsektorn.',
  },
  gislaved: {
    namedEmployers: ['Trioplast', 'KB Components', 'Gislaved Gummi'],
    localAngle:
      'Gislaved präglas av en stark plast- och gummiindustri där en stor del av de förvärvsarbetande finns inom tillverkning. Produktionslinjerna bygger på industriella styrsystem, vilket gör OT-säkerhet centralt för driften.',
  },
  vetlanda: {
    namedEmployers: ['Hydro Extrusion', 'Elitfönster', 'Metsä Tissue'],
    localAngle:
      'Vetlanda är en utpräglad industrikommun med aluminiumextrudering och fönstertillverkning som tunga grenar. Den automatiserade processindustrin gör OT-säkerhet lika viktig som traditionell IT-säkerhet.',
  },
  ljungby: {
    namedEmployers: ['Electrolux Professional', 'Strålfors', 'Ljungby Maskin'],
    localAngle:
      'Ljungbys näringsliv domineras av metall- och verkstadsindustri som sysselsätter en stor andel av de förvärvsarbetande. Den styrsystemberoende tillverkningen gör industriell OT-säkerhet till en kärnfråga.',
  },
  vastervik: {
    namedEmployers: ['CNH Industrial Sweden', 'Saab Barracuda', 'Elfa'],
    localAngle:
      'Västervik har ett antal större tillverkande industrier inom maskin, metall och försvarsmateriel. Som leverantör även till försvars- och fordonssektorn ställs höga krav på säkerhet i både IT och produktionsmiljö.',
  },
  mjolby: {
    namedEmployers: ['Toyota Material Handling'],
    localAngle:
      'Mjölby är Toyota Material Handlings största truckfabrik i Europa med kraftigt automatiserad produktion. Den storskaliga, uppkopplade tillverkningen gör OT-säkerhet och leverantörskrav enligt NIS2 affärskritiska.',
  },
  katrineholm: {
    namedEmployers: ['Kronfågel', 'SKF Mekan'],
    localAngle:
      'Katrineholm kombinerar storskalig livsmedelsproduktion med tung verkstadsindustri som SKF:s lagerhustillverkning. Både livsmedels- och processindustrins styrsystem gör OT-säkerhet till en central riskfråga.',
  },
  ronneby: {
    namedEmployers: ['F17 Blekinge flygflottilj', 'Hanza', 'Tarkett'],
    localAngle:
      'Ronneby präglas av Försvarsmaktens flygflottilj F17 i Kallinge tillsammans med elektronik- och tillverkningsindustri. Närheten till totalförsvaret och kritisk infrastruktur ställer höga krav på säkerhet i både IT och OT.',
  },
  alingsas: {
    namedEmployers: ['Nobia', 'Alingsås lasarett'],
    localAngle:
      'Alingsås har en stark tillverkningsindustri med bland annat köksjätten Nobia, och kombinationen av automatiserad produktion och samhällsviktig sjukvård ställer höga krav på säkra industriella system och en trygg leverantörskedja.',
  },
  harryda: {
    namedEmployers: ['Swedavia (Göteborg Landvetter Airport)', 'LFV'],
    localAngle:
      'Göteborg Landvetter Airport ligger i Härryda och är en samhällsviktig transportnod som omfattas av cybersäkerhetslagens krav, där flygledning och flygplatsdrift bygger på kritiska och skyddsvärda IT- och OT-system.',
  },
  vanersborg: {
    namedEmployers: ['Västra Götalandsregionen', 'Vargön Alloys', 'VBG Group'],
    localAngle:
      'Vänersborg är säte för Västra Götalandsregionens centrala förvaltning och har samtidigt tung processindustri som Vargön Alloys, vilket gör både samhällsviktig offentlig verksamhet och industriella styrsystem till tydliga mål för cybersäkerhetskraven.',
  },
  falkoping: {
    namedEmployers: ['Kinnarps', 'Parker Hannifin'],
    localAngle:
      'Falköping är en industri- och logistikkommun med tillverkare som Kinnarps och ett strategiskt järnvägsläge, vilket gör säker produktion och trygga logistikkedjor centralt för verksamheternas driftsäkerhet.',
  },
  mark: {
    namedEmployers: ['Ludvig Svensson', 'Stora Enso Packaging'],
    localAngle:
      'Mark har en lång textil- och tillverkningstradition med företag som Ludvig Svensson, och dagens avancerade produktion bygger på säkra industriella system och en trygg leverantörskedja.',
  },
  eslov: {
    namedEmployers: ['Orkla Foods Sverige', 'Smurfit Kappa', 'Saint-Gobain Sekurit Scandinavia'],
    localAngle:
      'Eslöv är ett av Sveriges starkaste livsmedelscentra med Orkla Foods största anläggning i landet, och säker livsmedelsproduktion ställer höga krav på skyddade processystem och en trygg leverantörskedja.',
  },
  ystad: {
    localAngle:
      'Ystads hamn är Sveriges största för färjetrafik mot Polen och Bornholm och en samhällsviktig logistiknod som omfattas av cybersäkerhetslagens krav på driftsäkerhet.',
  },
  kavlinge: {
    localAngle:
      'Kävlinge är en växande pendlingskommun i Öresundsregionen med stark koppling till life science och teknik i Lund och Malmö, vilket gör att invånare och lokala företag dagligen rör sig i en av Sveriges mest datadrivna arbetsmarknader med höga krav på informationssäkerhet.',
  },
  laholm: {
    localAngle:
      'Laholm är en kommun med stark livsmedels- och tillverkningsprägel där produktion, vattenförsörjning och energi är samhällsviktiga funktioner, vilket gör säkra styrsystem och driftsäkerhet centralt i takt med att cybersäkerhetslagen och NIS2 skärper kraven.',
  },
  norrtalje: {
    namedEmployers: ['Tiohundra'],
    localAngle:
      'Norrtälje präglas av Roslagens landsbygd och skärgård med Norrtälje sjukhus och vårdbolaget Tiohundra som dominerande arbetsgivare, en verksamhet där patientdata och vårdens driftsäkerhet gör NIS2 och cybersäkerhetslagen högst närvarande. Många lokala företag inom bygg och tillverkning dras dessutom in i större kunders leverantörskrav på informationssäkerhet.',
  },
  tyreso: {
    localAngle:
      'Tyresö är en utpräglad pendlarkommun där kommunen själv är största arbetsgivaren och näringslivet domineras av småföretag inom tjänster, bygg och handel. Eftersom många invånare pendlar in till NIS2-reglerade arbetsgivare i Stockholm möter lokala underleverantörer allt oftare skärpta krav på informationssäkerhet i leveranskedjan.',
  },
  lidingo: {
    localAngle:
      'Lidingö är en ökommun som främst är bostads- och pendlarort, där kommunen är den klart största arbetsgivaren och näringslivet utgörs av tjänste- och serviceföretag. Många boende arbetar i finans-, läkemedels- och techbolag som omfattas av NIS2, vilket gör att även mindre Lidingöföretag dras in i kundernas krav på cybersäkerhet.',
  },
  'upplands-vasby': {
    namedEmployers: ['Mondelez (Marabou)'],
    localAngle:
      'I Upplands Väsby ligger Marabous chokladfabrik, idag en av Mondelez största produktionsanläggningar, och kommunen har ett tydligt inslag av industri och logistik. Uppkopplad produktion och styrsystem gör att tillverkande verksamheter här berörs direkt av NIS2:s krav på säkra industriella nätverk och kontinuitet.',
  },
  varmdo: {
    localAngle:
      'Värmdö består till stor del av öar i Stockholms skärgård och är en pendlar- och besökskommun där kommunen är största arbetsgivaren och bygg, handel och turism dominerar näringslivet. Spridda verksamheter och säsongsberoende drift gör robust IT och kontinuitetsplanering viktigt, samtidigt som lokala leverantörer möter NIS2-krav via sina större uppdragsgivare.',
  },
  osteraker: {
    localAngle:
      'Österåker med tätorten Åkersberga är en växande pendlarkommun med stark entreprenörsanda och många småföretag inom handel, hantverk och en del tillverkning. När invånare och företag knyts till NIS2-reglerade arbetsgivare i regionen blir säkerhetskrav i leverantörsledet en allt vanligare verklighet även för de mindre bolagen.',
  },
  vallentuna: {
    localAngle:
      'Vallentuna är en pendlarkommun vid Roslagsbanan där kommunen är största arbetsgivaren och näringslivet domineras av tjänste- och handelsföretag med ett mindre inslag av tillverkning. Många invånare arbetar i Stockholmsbolag som omfattas av cybersäkerhetslagen, och lokala SME-företag möter därigenom ökade krav på informationssäkerhet från sina kunder.',
  },
  danderyd: {
    namedEmployers: ['Danderyds sjukhus'],
    localAngle:
      'Danderyd domineras av Danderyds sjukhus, ett av Sveriges största akutsjukhus och kommunens i särklass största arbetsgivare, vilket gör vårdens informationssäkerhet och patientdataskydd till en central NIS2-fråga. Den många finanspendlare innebär dessutom att även mindre lokala företag dras in i regulatoriska krav på cybersäkerhet.',
  },
  ekero: {
    namedEmployers: ['Försvarets radioanstalt (FRA)'],
    localAngle:
      'På Lovön i Ekerö ligger Försvarets radioanstalt (FRA), Sveriges signalspaningsmyndighet och en av landets tyngsta aktörer inom cyberförsvar, vilket gör kommunen ovanligt nära förbunden med nationell informationssäkerhet. I övrigt är Ekerö en småskalig ö- och pendlarkommun där lokala företag möter säkerhetskrav främst via kunder och uppdragsgivare i Stockholm.',
  },
  kungalv: {
    namedEmployers: ['ICA Sverige (centrallager Rollsbo)', 'Swedish Match'],
    localAngle:
      'I Kungälv ligger ett av ICAs centrallager och Swedish Match snustillverkning, vilket gör kommunen till en nod för både livsmedelslogistik och industriell produktion. När verksamhetskritiska flöden och produktionssystem ska skyddas blir säkerheten i både IT och industriella styrsystem (OT) en konkret fråga.',
  },
  lerum: {
    localAngle:
      'Lerum är en av Göteborgs klassiska pendlingskommuner med ett näringsliv som domineras av många mindre företag. För dem är NIS2 och cybersäkerhetslagen ofta en ny fråga, samtidigt som de kan vara underleverantörer till större aktörer som omfattas av regelverken.',
  },
  partille: {
    localAngle:
      'Partille är en tätbefolkad pendlingskommun till Göteborg med ett starkt företagsklimat och en stor andel mindre bolag. Många av dem är leverantörer i större värdekedjor, vilket gör att krav från NIS2 och cybersäkerhetslagen når längre ut än man ofta tror.',
  },
  vellinge: {
    localAngle:
      'Vellinge är en utpräglad pendlingskommun till Malmö där näringslivet till stor del består av mindre företag och tjänsteverksamheter. För dessa blir cybersäkerhet och kraven i NIS2 ofta aktuella först som underleverantör till större kunder.',
  },
  staffanstorp: {
    localAngle:
      'Staffanstorp är en växande pendlingskommun mellan Malmö och Lund där näringslivet domineras av mindre företag inom handel, bygg och tjänster. Närheten till Öresundsregionens tech- och life science-kluster gör att många lokala bolag dras in i större kunders krav på informationssäkerhet.',
  },
  angelholm: {
    namedEmployers: ['Koenigsegg Automotive', 'Ängelholms sjukhus'],
    localAngle:
      'På före detta flygflottiljen F10 i Barkåkra har Koenigsegg sin tillverkning av avancerade sportbilar, och i kommunen finns även Ängelholms sjukhus. Både högteknologisk fordonsproduktion och hälso- och sjukvård ställer höga krav på säkerheten i IT och industriella styrsystem (OT), där hälso- och sjukvård dessutom är utpekad under NIS2.',
  },
  hudiksvall: {
    namedEmployers: ['Hexatronic', 'Holmen Iggesund Paperboard'],
    localAngle:
      'Hudiksvall är hjärtat i fiberklustret Fiber Optic Valley med Hexatronics tillverkning av fiberoptisk kabel, och i Iggesund finns Holmens stora kartongbruk. Med tillverkningsindustri och digital infrastruktur sida vid sida blir säkerheten i industriella styrsystem (OT) och leveranskedjor central, områden som lyfts fram i NIS2.',
  },
  'upplands-bro': {
    namedEmployers: ['Ingram Micro', 'Fresenius Kabi'],
    localAngle:
      'I Brunna Logistikpark utanför Bro finns stora logistik- och e-handelsanläggningar samt Fresenius Kabis läkemedelsproduktion. Både logistik och tillverkning av läkemedel är sektorer som pekas ut under NIS2, vilket gör cybersäkerhet till en konkret fråga för många arbetsgivare i kommunen.',
  },
  ale: {
    namedEmployers: ['Nouryon (Bohus)'],
    localAngle:
      'I Bohus driver Nouryon en kemisk anläggning som funnits på platsen i över hundra år och som är kommunens största privata arbetsgivare. Kemisk processindustri ställer höga krav på säkerheten i industriella styrsystem (OT), ett område som blir allt viktigare i takt med NIS2 och cybersäkerhetslagen.',
  },

  // ── Researched & source-verified enrichment, batch 3 ──
  finspang: {
    namedEmployers: ['Siemens Energy', 'Gränges'],
    localAngle:
      'Finspång är ett tungt nav för tillverkning och service av gasturbiner till energisektorn, med pågående satsningar på vätgasdrift och provning. Den typen av kraft- och industriverksamhet hör till de mest reglerade under NIS2, med tydliga krav på driftsäkerhet, OT-säkerhet och incidentrapportering.',
  },
  almhult: {
    namedEmployers: ['IKEA of Sweden', 'Inter IKEA Group'],
    localAngle:
      'Älmhult är IKEA:s födelseort och rymmer koncernens produktutveckling, testlabb och en stor distributionsverksamhet. Sammankopplade logistikflöden och industriella styrsystem gör IT- och OT-säkerhet samt leveranskedjans motståndskraft till centrala frågor i ljuset av NIS2.',
  },
  avesta: {
    namedEmployers: ['Outokumpu Stainless'],
    localAngle:
      'Avesta domineras av Outokumpus stålverk för rostfritt stål, en av kommunens största arbetsgivare. Tillverkande industri med tung processutrustning och OT-miljöer omfattas av NIS2 och behöver särskilt skydd för styrsystem och kontinuerlig produktion.',
  },
  osthammar: {
    namedEmployers: ['Forsmarks Kraftgrupp (Vattenfall)', 'Svensk Kärnbränslehantering (SKB)'],
    localAngle:
      'Östhammar rymmer Forsmarks kärnkraftverk, en av Sveriges största elproducenter, samt SKB:s anläggningar för radioaktivt avfall. Kärnkraft och slutförvar tillhör de mest reglerade och säkerhetskritiska verksamheterna under NIS2, med stränga krav på OT-säkerhet, driftsäkerhet och incidentrapportering.',
  },
  timra: {
    namedEmployers: ['SCA Östrand', 'Sundsvall Timrå Airport (Midlanda)'],
    localAngle:
      'Timrå domineras av SCA Östrand, ett av världens största massabruk för blekt sulfatmassa med omfattande processindustriell OT-miljö. Storskalig processindustri av detta slag omfattas av NIS2 och ställer höga krav på driftsäkerhet, segmentering av styrsystem och incidentrapportering.',
  },
  hammaro: {
    namedEmployers: ['Stora Enso Skoghall (Skoghalls bruk)'],
    localAngle:
      'Hammarös näringsliv domineras av Stora Ensos Skoghalls bruk, en av världens ledande tillverkare av kartong för vätskeförpackningar med tung processindustri och styrsystem. Sådan kritisk tillverkningsindustri omfattas av NIS2 och kräver skydd av OT-miljöer, leveranskedjor och rutiner för incidentrapportering.',
  },
  eksjo: {
    namedEmployers: ['Höglandssjukhuset', 'Göta ingenjörregemente Ing 2'],
    localAngle:
      'Eksjö är en garnisonsstad med Göta ingenjörregemente Ing 2 och regionsjukhuset Höglandssjukhuset. Hälso- och sjukvård räknas som samhällsviktig verksamhet under NIS2, med uttryckliga krav på riskhantering och incidentrapportering för att skydda vårdens drift och patientdata.',
  },
  kristinehamn: {
    namedEmployers: ['Kongsberg Maritime Sweden', 'Nordic Paper Bäckhammar', 'Scana Steel Björneborg'],
    localAngle:
      'Kristinehamn har en lång industri- och marinteknisk tradition, med Kongsberg Maritime som utvecklar och tillverkar propellrar och vattenjet samt pappers- och stålindustri i Bäckhammar och Björneborg. Sådan tillverkning bygger på industriella styrsystem och OT-miljöer, där NIS2 ställer krav på driftsäkerhet och skydd mot driftstörningar.',
  },
  arvika: {
    namedEmployers: ['Volvo CE Arvika', 'Thermia', 'Swegon'],
    localAngle:
      'Arvika är ett tillverkningsnav med Volvo CE som bygger hjullastare samt Thermia och Swegon inom värme- och klimatteknik. Den här typen av automatiserad produktion vilar på OT och industriella styrsystem, där NIS2 ställer krav på cybersäkerhet och kontinuitet för att skydda produktionslinjerna.',
  },
  tierp: {
    namedEmployers: ['Atlas Copco (Tierpverken)', 'Erasteel Kloster', 'Habia Cable'],
    localAngle:
      'Tierps tillverkningsindustri med Atlas Copcos verktygsproduktion och kabel- och stålföretag vilar på industriella styrsystem och automation, där OT-säkerhet blir lika kritisk som traditionell IT-säkerhet.',
  },
  lindesberg: {
    namedEmployers: ['Cummins Meritor', 'Lindesbergs lasarett'],
    localAngle:
      'Lindesbergs tunga fordonsindustri vid Cummins Meritor tillverkar axlar i automatiserade produktionslinjer, samtidigt som Lindesbergs lasarett hanterar känsliga patientdata, vilket gör både OT-säkerhet och informationssäkerhet centralt.',
  },
  hallstahammar: {
    namedEmployers: ['Kanthal (Sandvik)'],
    localAngle:
      'Hallstahammars industriella arv lever vidare genom Kanthals produktion av värmeteknik och resistansmaterial, där processtyrning och automation gör OT-säkerhet till en avgörande fråga.',
  },
  nybro: {
    namedEmployers: ['Kährs (AB Gustaf Kähr)'],
    localAngle:
      'Nybros näringsliv domineras av tillverkningsindustri inom trä, glas och verkstad där en stor andel av arbetskraften finns i produktion, vilket gör automation och OT-säkerhet centralt för kommunens fabriker.',
  },
  mora: {
    namedEmployers: ['FM Mattsson Mora Group', 'Morakniv', 'Mora lasarett'],
    localAngle:
      'Moras tillverkningsindustri med FM Mattssons armaturtillverkning och Morakniv bygger på automatiserade produktionslinjer, där OT-säkerhet blir lika viktig som den IT-säkerhet som skyddar patientdata vid Mora lasarett.',
  },
  sala: {
    namedEmployers: ['Metso Sweden'],
    localAngle:
      'Salas industriella tradition från gruvdriften lever vidare genom Metsos tillverkning av maskiner för mineralberedning, där moderna processtyrsystem gör OT-säkerhet till en nyckelfråga.',
  },
  tranas: {
    namedEmployers: ['Bosch Thermoteknik', 'STIGA Sports'],
    localAngle:
      'Tranås verkstads- och möbelindustri med Bosch Thermotekniks värmepumpstillverkning vilar på automation och uppkopplad produktion, vilket gör OT-säkerhet till en allt viktigare del av industrins skydd.',
  },
  kumla: {
    namedEmployers: ['Anstalten Kumla (Kriminalvården)', 'Orkla'],
    localAngle:
      'Kumla präglas av Kriminalvårdens högsäkerhetsanstalt och ett logistiknav vid E20 och järnvägen, där säkerhetsklassad verksamhet och samhällsviktiga flöden ställer höga krav på både fysisk säkerhet och informationssäkerhet.',
  },
  mariestad: {
    namedEmployers: ['Metsä Tissue (Katrinefors bruk)'],
    localAngle:
      'Mariestads pappersindustri vid Katrinefors bruk drivs av processindustriella styrsystem i en pågående miljardutbyggnad, vilket gör OT-säkerhet avgörande för att skydda kontinuerlig produktion.',
  },
  lomma: {
    namedEmployers: ['Sveriges lantbruksuniversitet (SLU Alnarp)', 'Nolato MediTech', 'KåKå'],
    localAngle:
      'I Lomma ligger SLU:s campus Alnarp med omfattande forsknings- och utbildningsverksamhet, och kommunen har en växande life science-sektor genom bland annat Nolato MediTech. Forskningsdata och medicinteknisk produktion ställer höga krav på informationssäkerhet i linje med ISO 27001 och NIS2.',
  },
  burlov: {
    namedEmployers: ['Hilti Svenska'],
    localAngle:
      'Arlöv i Burlöv är en logistik- och handelsnod intill Malmö med stora lager och terminaler längs E22 och stambanan. Sådana flöden i leveranskedjor gör driftsäkerhet och leverantörsstyrning till en central fråga under cybersäkerhetslagen.',
  },
  svedala: {
    namedEmployers: ['Sandvik SRP'],
    localAngle:
      'I Svedala ligger Sandvik SRP, ett globalt utvecklingscentrum för krossar med rötter i ortens industrihistoria. Tillverkande industri med uppkopplade produktionssystem är ett tydligt mål för de OT-säkerhetskrav som följer av NIS2 och cybersäkerhetslagen.',
  },
  sjobo: {
    localAngle:
      'Sjöbo är en lantlig kommun där livsmedelsproduktion, lantbruk och kommunal VA-verksamhet utgör ryggraden. Just vatten- och avloppsförsörjning räknas som samhällsviktig verksamhet och omfattas av cybersäkerhetslagens krav på robusthet.',
  },
  simrishamn: {
    namedEmployers: ['Plasman Sverige', 'Skillinge Fisk-Impex'],
    localAngle:
      'Simrishamn på Österlen kombinerar en aktiv fiskehamn med tillverkande industri som Plasman, en underleverantör till fordonsindustrin. Hamnverksamhet och just-in-time-leveranser till bilindustrin gör avbrottssäkerhet och leverantörskedjor till en kärnfråga under NIS2.',
  },
  klippan: {
    namedEmployers: ['Klippan Safety', 'Gelita Sweden'],
    localAngle:
      'I Klippan finns Klippan Safety, en systemleverantör av bältes- och fastspänningslösningar till den globala fordonsindustrin, och Gelita Sweden som tillverkar livsmedelsgelatin. Tillverkare djupt inne i internationella leveranskedjor påverkas av NIS2:s krav på leverantörssäkerhet även när de inte själva pekas ut som samhällsviktiga.',
  },
  hoor: {
    localAngle:
      'Höör är en pendlingsort i mellanskåne där handel, vård och mindre tillverkande företag dominerar näringslivet. För kommunens egna samhällsviktiga funktioner, som VA och energidistribution, innebär cybersäkerhetslagen nya krav på riskhantering och incidentrapportering.',
  },
  skurup: {
    namedEmployers: ['Postpac', 'Skanem Skurup'],
    localAngle:
      'Skurup har vuxit fram som en e-handels- och logistiknod där Postpac driver modern lagerverksamhet utmed stambanan. Automatiserade lager och distributionsflöden gör IT- och driftsäkerhet till en affärskritisk fråga i takt med att NIS2 omfattar fler leverantörer.',
  },
  bastad: {
    namedEmployers: ['Båstad Tennis & Hotell'],
    localAngle:
      'Båstad på Bjärehalvön präglas av besöksnäring och tennis, med Nordea Open och stora hotellanläggningar som drar stora folkmängder varje sommar. Säsongstoppar och bokningssystem som hanterar mängder av persondata ställer krav på både GDPR-efterlevnad och driftsäker IT.',
  },
  bollnas: {
    namedEmployers: ['Bruks AB (Bruks Siwertell, Arbrå)'],
    localAngle:
      'Bollnäs näringsliv vilar på skogsteknik och tillverkning, där Bruks i Arbrå bygger flishuggar och transportörer för sågverk och kraftvärmeverk. När maskinstyrning och kraftvärme blir alltmer uppkopplade omfattas både tillverkare och energianläggningar av NIS2:s krav på OT-säkerhet.',
  },
  soderhamn: {
    namedEmployers: ['Vallviks Bruk (Rottneros)', 'USNR / Söderhamn Eriksson'],
    localAngle:
      'Söderhamn präglas av massaindustri och skogsteknik, med Vallviks Bruk som en av Sveriges specialiserade massaproducenter och USNR som tillverkare av sågverksutrustning. Massabrukets processtyrning är en samhällsviktig OT-miljö där NIS2 ställer uttryckliga krav på driftsäkerhet.',
  },
  ljusdal: {
    namedEmployers: ['ExTe Fabriks (Färila)', 'Mekanotjänst i Ljusdal'],
    localAngle:
      'Ljusdal är en utpräglad skogsbygd där ExTe i Färila är världsledande på lastsäkring för timmertransport och Mekanotjänst tillverkar avancerad plåt- och svetsmekanik. Tillverkningsindustrins styrsystem och leveranskedjor omfattas av NIS2:s krav på cybersäkerhet i industriell miljö.',
  },
  solleftea: {
    namedEmployers: ['Sollefteå sjukhus', 'Statkraft (vattenkraftens driftcentral)'],
    localAngle:
      'Sollefteå är en av Sveriges största vattenkraftskommuner och Statkraft styr en stor del av sin svenska vattenkraft från driftcentralen i Sollefteå. Vattenkraftens driftsystem är kritisk infrastruktur där cybersäkerhetslagen och NIS2 ställer höga krav på skydd av OT-miljöer.',
  },
  kramfors: {
    namedEmployers: ['Mondi Dynäs', 'SCA'],
    localAngle:
      'Kramfors industriella ryggrad är massa- och pappersbruket Mondi Dynäs vid Ångermanälven, en storskalig processindustri i hjärtat av Höga Kusten. Brukets driftsystem är en samhällsviktig OT-nod där NIS2 ställer uttryckliga krav på industriell cybersäkerhet.',
  },
  kalix: {
    namedEmployers: ['Billerud Karlsborg'],
    localAngle:
      'Kalix domineras av Billeruds bruk i Karlsborg, världens nordligaste pappersbruk och en av kommunens största privata arbetsgivare. Brukets sulfatprocess och kraftproduktion utgör en samhällsviktig OT-miljö där NIS2 ställer höga krav på driftsäkerhet.',
  },
  harnosand: {
    namedEmployers: ['Länsstyrelsen Västernorrland', 'Kriminalvården', 'Specialpedagogiska skolmyndigheten (SPSM)'],
    localAngle:
      'Härnösand är en utpräglad myndighetsstad med omkring 1 500 statligt anställda fördelade på ett tjugotal myndigheter, från Länsstyrelsen till Riksarkivet och Försvarsmakten. Offentlig förvaltning hanterar känslig information och samhällsviktiga IT-system som omfattas av NIS2 och cybersäkerhetslagens krav.',
  },
  ulricehamn: {
    namedEmployers: ['Emballator Ulricehamns Bleck', 'IRO'],
    localAngle:
      'Ulricehamn har en stark tillverkningstradition där IRO bygger högteknologiska väftmatare för vävmaskiner och Emballator tillverkar metallförpackningar. Den uppkopplade produktionsutrustningen i dessa industrier omfattas av NIS2:s krav på OT- och leveranskedjesäkerhet.',
  },
  solvesborg: {
    namedEmployers: ['Atria Sverige', 'Sölvesborgs Stuveri & Hamn'],
    localAngle:
      'Sölvesborg präglas av livsmedelsindustri och en aktiv hamn på sydostkusten, där Atrias produktion och hamnens godshantering utgör samhällsviktig verksamhet. Hamn- och livsmedelsanläggningars driftsystem omfattas av NIS2:s krav på OT-säkerhet.',
  },
  knivsta: {
    localAngle:
      'Knivsta är en utpräglad pendlingskommun mitt emellan Uppsala och Stockholm med ett växande näringsliv av små och medelstora bolag. Många verksamheter omfattas indirekt av NIS2 som underleverantörer, vilket ställer nya krav på informationssäkerhet även hos mindre företag.',
  },
  salem: {
    localAngle:
      'Salem är en liten pendlingskommun där kommunen själv och dess verksamhet inom vatten, avlopp och energi utgör samhällsviktiga funktioner. Sådan kommunal infrastruktur pekas ut under NIS2 och cybersäkerhetslagen, vilket gör driftsäkerhet och skydd av styrsystem till en aktuell fråga.',
  },
  flen: {
    localAngle:
      'Flen är en gammal industri- och järnvägsort där tillverkning fortsatt är en viktig näring. Industri- och tillverkningssektorn omfattas av NIS2, och OT-säkerhet i produktionsmiljöer blir därmed en konkret fråga för många bolag i kommunen.',
  },
  skara: {
    namedEmployers: ['Jula', 'Scan', 'Skara Sommarland'],
    localAngle:
      'Skara är hemvist för Julas huvudkontor och norra Europas största centrallager i sitt slag, ett logistiknav som omfattas av NIS2. Med livsmedelsproducenter som Scan i kommunen blir både leveranskedjor och industriella styrsystem en cybersäkerhetsfråga.',
  },
  hallsberg: {
    namedEmployers: ['Ahlsell', 'Green Cargo', 'PostNord'],
    localAngle:
      'Hallsberg har Nordens största rangerbangård och ett av regionens viktigaste logistiknav, bland annat Ahlsells centrallager. Transport- och logistiksektorn är utpekad under NIS2, vilket gör cybersäkerhet centralt för ortens många godsflöden.',
  },
  alvesta: {
    namedEmployers: ['Gnutti Carlo Sweden'],
    localAngle:
      'Alvesta är en gammal järnvägsknut där trä- och verkstadsindustri sysselsätter en stor andel av arbetskraften. Tillverkningssektorn omfattas av NIS2, och säkerheten i industriella styrsystem blir därför en praktisk fråga för kommunens producerande företag.',
  },
  tjorn: {
    namedEmployers: ['Wallhamn'],
    localAngle:
      'På Tjörn ligger Wallhamn, en av Sveriges största bilhamnar och öns största privata arbetsgivare. Hamn- och sjöfartsverksamhet pekas ut under NIS2, vilket gör skydd av logistiksystem och driftsäkerhet till en viktig fråga lokalt.',
  },
  vara: {
    namedEmployers: ['Vedum Kök & Bad', 'Swegon'],
    localAngle:
      'Vara är en utpräglad jordbrukskommun på Västgötaslätten med tillverkande bolag som Vedum Kök & Bad som största arbetsgivare. Livsmedelsproduktion och industri omfattas av NIS2, vilket gör säkerhet i produktion och leveranskedjor till en aktuell fråga.',
  },
  'habo-uppsala': {
    namedEmployers: ['Gyproc (Saint-Gobain)', 'Dagab'],
    localAngle:
      'Håbo med Bålsta växer snabbt som logistiknav, bland annat genom Dagabs stora omnilager intill Mälarbanan och E18. Logistik- och tillverkningsverksamhet omfattas av NIS2, vilket gör cybersäkerhet till en konkret fråga för kommunens etablerade och nya företag.',
  },

  // ── Researched & source-verified enrichment, batch 4 ──
  lysekil: {
    namedEmployers: ['Preem (Preemraff Lysekil)'],
    localAngle:
      'Lysekil domineras av Preems raffinaderi, Skandinaviens största, en samhällsviktig anläggning där processtyrning och OT-säkerhet är avgörande för säker drift. Här ställer NIS2 och cybersäkerhetslagen tydliga krav på skyddet av kritisk industriell infrastruktur.',
  },
  monsteras: {
    namedEmployers: ['Södra Cell Mönsterås'],
    localAngle:
      'Mönsterås präglas av Södras stora massabruk, en av världens mest moderna massaindustrier och en samhällsviktig anläggning. Den omfattande processautomationen gör driftsäkerhet och OT-cyberskydd till centrala frågor under NIS2.',
  },
  fagersta: {
    namedEmployers: ['Seco Tools', 'Atlas Copco Secoroc', 'Fagersta Stainless'],
    localAngle:
      'Fagersta är en utpräglad verkstads- och stålort med Seco Tools, Atlas Copco Secoroc och Fagersta Stainless, där avancerad tillverkning och processtyrning ställer höga krav på OT-säkerhet. För dessa industriella aktörer blir NIS2 och robust cyberskydd en förutsättning för stabil produktion.',
  },
  bromolla: {
    namedEmployers: ['Stora Enso Nymölla', 'Ifö'],
    localAngle:
      'Bromölla är en bruksort kring Stora Enso Nymölla och de anrika Iföverken, samhällsviktig pappers- och porslinsindustri med tydligt OT-beroende. Driftsäkerhet och cyberskydd av processystemen blir centralt under NIS2.',
  },
  hagfors: {
    namedEmployers: ['voestalpine Uddeholm'],
    localAngle:
      'Hagfors domineras av Uddeholm, världsledande tillverkare av verktygsstål och en del av voestalpine, med stålverk och processtyrning som kräver hög driftsäkerhet. För denna typ av industriell verksamhet är OT-säkerhet och NIS2-efterlevnad avgörande.',
  },
  'lilla-edet': {
    namedEmployers: ['Essity (Edet bruk)'],
    localAngle:
      'Lilla Edet präglas av Essitys anrika mjukpappersbruk vid Göta älv, en samhällsviktig produktionsanläggning med omfattande processautomation. Driftsäkerhet och cyberskydd av OT-miljön blir centralt i takt med NIS2.',
  },
  arboga: {
    namedEmployers: ['Saab', 'Combitech'],
    localAngle:
      'Arboga har en lång försvarsindustriell historia och Saab expanderar nu kraftigt på orten, en verksamhet med höga krav på informationssäkerhet och skydd av känsliga system. Här blir robust cyberskydd och säkerhetsskydd en grundförutsättning.',
  },
  saffle: {
    namedEmployers: ['Nordic Paper (Säffle bruk)'],
    localAngle:
      'Säffle präglas idag av Nordic Papers bruk som tillverkar naturligt fettätt papper, en samhällsviktig industri med tydligt OT-beroende. Driftsäkerhet och cyberskydd av processystemen är centralt under NIS2.',
  },
  tidaholm: {
    namedEmployers: ['Swedish Match Industries', 'Marbodal'],
    localAngle:
      'Tidaholm har en lång industritradition med Swedish Matchs anrika tändsticksfabrik och köksdelar från Marbodal, tillverkningsindustri med ökande automation. Driftsäkerhet och OT-cyberskydd blir alltmer relevant i takt med NIS2.',
  },
  vimmerby: {
    namedEmployers: ['Metallfabriken Ljunghäll', 'Åbro Bryggeri', 'Astrid Lindgrens Värld'],
    localAngle:
      'Vimmerbys livsmedels- och bryggeriindustri med aktörer som Åbro och Arla bygger på automatiserade produktionslinjer och industriella styrsystem, där OT-säkerhet blir avgörande för driftsäker och kontinuerlig tillverkning.',
  },
  leksand: {
    namedEmployers: ['Leksands Knäckebröd'],
    localAngle:
      'Leksands livsmedelsproduktion med anrika Leksands Knäckebröd vilar på automatiserade bageriprocesser och styrsystem, där OT-säkerhet skyddar både produktionskontinuitet och livsmedelssäkerhet.',
  },
  hedemora: {
    namedEmployers: ['Boliden Mineral'],
    localAngle:
      'Hedemoras industri präglas av gruv- och mineralverksamhet via Boliden, en sektor där industriella styrsystem och OT-miljöer omfattas av både NIS2 och cybersäkerhetslagen.',
  },
  vaggeryd: {
    namedEmployers: ['Dachser Sweden', 'Bring', 'Swedese'],
    localAngle:
      'Vaggeryd har utvecklats till ett logistiknav med terminaler från bland andra Dachser och Bring, där säkra digitala flöden och driftsäkra system är centrala för att leveranskedjorna ska fungera.',
  },
  hultsfred: {
    namedEmployers: ['IKEA Industry Hultsfred', 'Plannja'],
    localAngle:
      'Hultsfreds tillverkningsindustri med stora aktörer som IKEA Industry och Plannja bygger på automatiserade produktionslinjer, där OT-säkerhet blir lika viktig som traditionell IT-säkerhet för att hålla produktionen igång.',
  },
  gotene: {
    namedEmployers: ['Arla Foods'],
    localAngle:
      'Götene är ett nav för svensk mejeriproduktion med Arlas största anläggning i Sverige och en stor pågående investering, där dygnetruntdrift och automatiserade processer gör OT-säkerhet avgörande för livsmedelsförsörjningen.',
  },
  vargarda: {
    namedEmployers: ['Magna Electronics Sweden', 'Autoliv Sverige'],
    localAngle:
      'Vårgårda är ett centrum för fordonssäkerhet med Autolivs tillverkning av krockkuddar och gasgeneratorer samt Magna Electronics, där industriella styrsystem och OT-säkerhet är kritiska i en högautomatiserad produktion.',
  },
  sunne: {
    namedEmployers: ['Rottneros Bruk', 'Anva Polytech'],
    localAngle:
      'Sunnes näringsliv domineras av pappers- och processindustri med Rottneros Bruk, en sektor med kontinuerlig drift där OT-miljöer och industriella styrsystem omfattas av NIS2 och cybersäkerhetslagen.',
  },
  askersund: {
    namedEmployers: ['Boliden Zinkgruvan', 'Aspa Pulp', 'Skyllbergs Bruk'],
    localAngle:
      'Askersunds näringsliv vilar på gruv- och processindustri med Boliden Zinkgruvan och flera bruk, där industriella styrsystem och OT-säkerhet är avgörande för säker och kontinuerlig drift.',
  },
  bjuv: {
    namedEmployers: ['HelloFresh', 'Foodhills'],
    localAngle:
      'I Foodhills livsmedelskluster i gamla Findusfabriken samlas tusentals anställda kring matproduktion och logistik, där sammankopplade processstyrnings- och lagersystem gör driftsäkerhet och OT-skydd till en NIS2-fråga för hela försörjningskedjan.',
  },
  horby: {
    namedEmployers: ['Nolato MediTech', 'Atos Medical'],
    localAngle:
      'Hörby har en stark medicinteknisk tillverkning med bolag som Nolato MediTech och Atos Medical, en bransch där känsliga produktionsdata och spårbarhetskrav ställer höga krav på informationssäkerhet och leverantörsgranskning.',
  },
  astorp: {
    namedEmployers: ['Saint-Gobain Ecophon'],
    localAngle:
      'Med Saint-Gobain Ecophons stora akustikfabrik och flera logistiketableringar längs E4 vilar Åstorps näringsliv på industriell produktion där sammankopplade tillverknings- och transportsystem behöver ett robust OT-säkerhetsarbete.',
  },
  svalov: {
    namedEmployers: ['Lantmännen (växtförädling)'],
    localAngle:
      'Svalöv är ett nav för svensk växtförädling med Lantmännens verksamhet på platsen sedan Svalöf Weibulls dagar, och den långa forskningstraditionen innebär värdefulla forsknings- och sortdata som behöver skyddas mot intrång och industrispionage.',
  },
  'ostra-goinge': {
    namedEmployers: ['Sibbhultsverken', 'Haki'],
    localAngle:
      'I Sibbhult tillverkar Sibbhultsverken fordonskomponenter och Haki ställningssystem för export, en exportinriktad verkstadsindustri där uppkopplade maskiner och produktionsstyrning gör OT-säkerhet och leveranskontinuitet centralt.',
  },
  tomelilla: {
    namedEmployers: ['Österlenmejeriet (Lunnarp)', 'Ingelsta Kalkon'],
    localAngle:
      'Tomelillas näringsliv präglas av Österlens jordbruk och livsmedelsförädling, med mejeriet i Lunnarp och Ingelsta Kalkon som exempel, där känslig livsmedelsproduktion gör driftsäkra styrsystem och avbrottsskydd till en konkret NIS2-fråga.',
  },
  osby: {
    namedEmployers: ['Lekolar', 'Osby Parca'],
    localAngle:
      'Osby är en av landets mest företagstäta kommuner med stark tillverkningsindustri, däribland Osby Parca som bygger värmepannor till fjärrvärme och fastigheter, ett område där uppkopplad värme- och processutrustning ställer krav på industriell cybersäkerhet.',
  },
  morbylanga: {
    namedEmployers: ['Guldfågeln'],
    localAngle:
      'På södra Öland är kycklingproducenten Guldfågeln öns största privata arbetsgivare, och en så omfattande livsmedelsproduktion bygger på automatiserade processlinjer och kylkedjor där driftavbrott och OT-intrång snabbt får stora konsekvenser.',
  },
  orust: {
    namedEmployers: ['Hallberg-Rassy', 'Najad'],
    localAngle:
      'Orust har en lång tradition som centrum för svenskt båtbyggeri med varv som Hallberg-Rassy och Najad i Ellös och Henån, en designtung tillverkning där ritningar och konstruktionsdata utgör värdefulla tillgångar att skydda.',
  },
  stromstad: {
    namedEmployers: ['Nordby Shopping Center', 'Color Line'],
    localAngle:
      'Som gränshandelsort med Nordby Shopping Center och Color Lines färjetrafik till Norge hanterar Strömstad stora flöden av betalkort och resenärsdata, vilket ställer höga krav på driftsäkerhet och dataskydd. Hamnen och färjeläget utgör dessutom lokal infrastruktur där NIS2-kraven på leveranskedjor och kontinuitet blir relevanta.',
  },
  are: {
    namedEmployers: ['SkiStar'],
    localAngle:
      'I Åre samlar SkiStars liftanläggningar och bokningssystem enorma mängder gästdata under hög- och lågsäsong, vilket gör GDPR och säker hantering av betalningar till en central fråga för fjälldestinationen. Liftar, snökanoner och energiförsörjning är samtidigt kritisk infrastruktur där driftstörningar snabbt drabbar hela turistorten.',
  },
  vaxholm: {
    localAngle:
      'Vaxholms läge vid inloppet till Stockholm med fästning, skärgårdsturism och tät pendling gör att besöksnäringens boknings- och betalsystem samlar stora mängder personuppgifter som måste skyddas enligt GDPR. Kommunal vattenförsörjning och färjeförbindelser i skärgården utgör lokal infrastruktur där kontinuitet och säkerhet är avgörande.',
  },
  ockero: {
    namedEmployers: ['Astrid Fiske', 'Rylo (Themis)'],
    localAngle:
      'Öckerö är ett nav för svenskt yrkesfiske med koncerner som Astrid Fiske, och fartygens navigations- och fångstsystem gör att digital säkerhet till havs blir lika viktig som på land. Som ögrupp i Göteborgs skärgård är kommunen beroende av färjetrafik, vattenförsörjning och elnät, lokal infrastruktur där avbrott får direkta konsekvenser.',
  },
  tanum: {
    localAngle:
      'Tanums UNESCO-världsarv med hällristningarna vid Vitlycke drar stora besöksströmmar under sommaren, vilket innebär att museers och turismaktörers boknings- och betalsystem samlar personuppgifter som ska hanteras enligt GDPR. Kommunens vatten- och energiförsörjning utgör samtidigt kritisk lokal infrastruktur där NIS2-tänk kring kontinuitet är motiverat.',
  },
  trosa: {
    namedEmployers: ['Camfil'],
    localAngle:
      'Trosa kombinerar småstadsturism och skärgård med pendling till Stockholm, och under sommarsäsongen samlar besöksnäringens boknings- och betalsystem mängder av personuppgifter som omfattas av GDPR. Med en global industriaktör som Camfil på orten finns dessutom industriell verksamhet där säkra IT- och produktionssystem blir en NIS2-relevant fråga.',
  },
  amal: {
    namedEmployers: ['Spicer Nordiska Kardan (Dana)', 'SEM'],
    localAngle:
      'Åmål vid Vänern har en stark tillverkningstradition med industrier som Spicer Nordiska Kardan och SEM, där sammankopplade produktionssystem gör skyddet mot driftstopp och intrång affärskritiskt. Som del av internationella koncerners leveranskedjor berörs de lokala fabrikerna även indirekt av NIS2-kraven på underleverantörer.',
  },
  kil: {
    localAngle:
      'Kil är en gammal järnvägsknut nära Karlstad där spår, godsflöden och logistik möts, vilket gör att digitala störningar snabbt kan fortplanta sig genom transportkedjan. Kommunens egen vatten- och energiförsörjning utgör lokal infrastruktur där kontinuitet och cybersäkerhet i NIS2-anda är befogat.',
  },
  forshaga: {
    namedEmployers: ['Stora Enso'],
    localAngle:
      'Forshaga nära Karlstad har sina rötter i skogs- och bruksindustrin med Stora Enso som dominerande privat arbetsgivare, där uppkopplade produktionsanläggningar gör skyddet mot driftstopp till en kärnfråga. Som del av en internationell skogskoncerns leveranskedja berörs den lokala verksamheten även av NIS2-kraven på robusthet och kontinuitet.',
  },
  habo: {
    namedEmployers: ['Fagerhults Belysning', 'Sibelco Nordic'],
    localAngle:
      'Habo är en utpräglad tillverkningsort där belysningstillverkaren Fagerhult driver produktion med uppkopplade industrisystem, vilket gör robust OT-säkerhet och NIS2-anpassning högst relevant för ortens näringsliv.',
  },
  heby: {
    namedEmployers: ['Zetterbergs Industri'],
    localAngle:
      'I Heby kombineras kommunal verksamhet med verkstadsindustri som Zetterbergs, och både samhällsviktig förvaltning och tillverkning omfattas i allt högre grad av kraven i NIS2 och cybersäkerhetslagen.',
  },
  soderkoping: {
    localAngle:
      'Söderköping lever på besöksnäring kring Göta kanal och Sankt Annas skärgård, där bokningssystem och betalningar gör skydd av persondata och tillgänglighet affärskritiskt under den korta turistsäsongen.',
  },
  nykvarn: {
    namedEmployers: ['Volkswagen Group Sverige', 'Logicor'],
    localAngle:
      'Nykvarn växer fram som ett av Stockholmsregionens största logistiknav genom Stockholm Syd, och i automatiserade lager och e-handelsflöden blir driftsäkerhet och skydd mot driftstörningar en kärnfråga för leveranskedjornas säkerhet.',
  },
  gnesta: {
    namedEmployers: ['Rekal Svenska', 'Powerbox'],
    localAngle:
      'Gnesta har industri inom kemiteknik och elektronik med företag som Rekal och Powerbox, och i sådan produktion ställer både NIS2 och säkerhet i leveranskedjan krav på skyddade styr- och tillverkningssystem.',
  },
  tingsryd: {
    namedEmployers: ['Holtab', 'Ryds Båtindustri', 'Hammarplast Consumer'],
    localAngle:
      'Tingsryd har stark tillverkningsindustri, bland annat Holtab som bygger transformatorstationer till elnätet, vilket kopplar orten direkt till energisektorns höga krav på OT-säkerhet och NIS2.',
  },
  krokom: {
    namedEmployers: ['C. Hallströms Verkstäder', 'Andritz Hydro'],
    localAngle:
      'I Krokom finns både kommunal samhällsservice och industri som Andritz Hydro, som tillverkar vattenkraftsturbiner, och kopplingen till energiproduktion gör OT-säkerhet och NIS2 särskilt angeläget i den här inlandskommunen.',
  },
  lycksele: {
    namedEmployers: ['Lycksele lasarett (Region Västerbotten)', 'Hedlunda Industri'],
    localAngle:
      'Lycksele är ett inlandsnav där ungefär en tredjedel av de yrkesarbetande verkar inom vård vid lasarettet och Region Västerbotten, och vårdens system gör driftsäkerhet och skydd av patientdata till en samhällsviktig fråga enligt NIS2.',
  },
  stromsund: {
    namedEmployers: ['Engcon', 'GeLab'],
    localAngle:
      'I Strömsund har världsledande Engcon sitt huvudkontor och sin fabrik för tiltrotatorer, och i en så uppkopplad och exportintensiv tillverkning blir skydd av produktionssystem och immateriella tillgångar avgörande för konkurrenskraften.',
  },

  // ── Researched & source-verified enrichment, batch 5 (long tail) ──
  atvidaberg: {
    namedEmployers: ['Scanfil Åtvidaberg'],
    localAngle:
      'I Facits gamla industristad tillverkar Scanfil idag avancerad elektronik till bland annat medicinteknik och energisektorn, områden där NIS2 och säkra leveranskedjor ställer höga krav på OT-miljöns skydd. För en tillverkare med kunder i samhällsviktiga branscher blir robust styrning av industriella styrsystem en konkurrensfråga.',
  },
  ovanaker: {
    namedEmployers: ['Svenska Fönster', 'Edsbyverken'],
    localAngle:
      'Edsbyn är ett tillverkningskluster där Svenska Fönster och Edsbyverken driver storskalig trä- och möbelproduktion med automatiserade produktionslinjer. När maskinparken kopplas upp blir gränsen mellan IT och OT en fråga om både drifttillgänglighet och regelefterlevnad enligt cybersäkerhetslagen.',
  },
  savsjo: {
    namedEmployers: ['Skruf Snus', 'A-Lackering'],
    localAngle:
      'Sävsjö har en stark tillverknings- och livsmedelstradition, där Skruf Snus har hela sin produktion i kommunen. För livsmedelsproducenter med uppkopplade processlinjer är skyddet av produktionsdata och OT-system direkt kopplat till både livsmedelssäkerhet och leveransförmåga.',
  },
  sater: {
    localAngle:
      'Säters näringsliv präglas av många små företag och kommunen är den dominerande arbetsgivaren, vilket gör att samhällsviktig verksamhet som VA, fjärrvärme och vård vilar på kommunala system. Just därför blir kontinuitet och skydd av styrsystemen enligt cybersäkerhetslagen en central fråga för en liten kommun.',
  },
  tranemo: {
    namedEmployers: ['Tranemo Workwear'],
    localAngle:
      'Tranemo är hemort för Tranemo Workwear som utvecklar skyddskläder till energibranschen, industrin och räddningstjänsten, kunder som själva omfattas av NIS2. Som leverantör till samhällsviktiga sektorer behöver textiltillverkaren visa att produktionsdata och kundinformation hanteras säkert.',
  },
  tibro: {
    namedEmployers: ['Swedese Möbler'],
    localAngle:
      'Tibro är ett av Sveriges möbelcentrum med ett kluster av trä- och inredningsföretag, där tillverkare som Swedese driver modern produktion. I takt med att möbelfabrikernas maskiner och logistik digitaliseras behöver klustret skydda både OT-miljöer och designdata mot driftstörningar.',
  },
  torsby: {
    namedEmployers: ['NOTE Torsby', 'Moelven Notnäs Ransby'],
    localAngle:
      'I Torsby möts skogsindustrin och elektroniktillverkningen, med Moelvens sågverk och NOTE som bygger industriell elektronik. När sågverkens styrsystem och kontraktstillverkningens produktionslinjer kopplas upp blir OT-säkerhet avgörande för leveranserna till kunder som ofta själva omfattas av NIS2.',
  },
  borgholm: {
    localAngle:
      'Borgholm tar emot stora besöksströmmar varje år och näringslivet domineras av besöksnäring och lantbruk snarare än stora industriarbetsgivare. För hotell och bokningsaktörer på Öland handlar säkerheten framför allt om att skydda gästernas boknings- och betaluppgifter enligt GDPR under den intensiva sommarsäsongen.',
  },
  nora: {
    namedEmployers: ['Orica Sweden', 'Drillcon'],
    localAngle:
      'Bredvid den klassiska turistjärnvägen i Nora tillverkar Orica sprängmedel i Gyttorp, en verksamhet med både höga säkerhetskrav och uppkopplade industriella processer. För sådan samhällskänslig tillverkning blir skyddet av OT-system och tillträdesstyrning en fråga om mer än bara regelefterlevnad.',
  },
  rattvik: {
    namedEmployers: ['Dalhalla'],
    localAngle:
      'Rättvik lever på turismen med Dalhalla som drar omkring 130 000 besökare varje sommar och säsongsanställer hundratals personer. Vid biljettförsäljning och evenemang samlas stora mängder besökar- och betaluppgifter, vilket gör GDPR och säker hantering av bokningssystemen till en kärnfråga under högsäsong.',
  },
  smedjebacken: {
    namedEmployers: ['Ovako Sweden'],
    localAngle:
      'I Smedjebacken driver Ovako ett stålverk och valsverk med anor sedan 1600-talet, där styrsystem och valslinjer utgör kritisk OT-miljö. För sådan tung processindustri ställer NIS2 och cybersäkerhetslagen krav på att skydda produktionsstyrningen mot driftstopp och intrång.',
  },
  hylte: {
    namedEmployers: ['Hylte Paper'],
    localAngle:
      'Pappersbruket i Hyltebruk är kommunens industriella nav med en pappersmaskin och processtyrning som måste hållas igång dygnet runt. Avbrott i de digitala styrsystemen får direkta konsekvenser för produktionen, vilket gör OT-säkerhet och NIS2-efterlevnad högaktuellt.',
  },
  filipstad: {
    namedEmployers: ['Wasabröd (Barilla)'],
    localAngle:
      'Wasabröd har bakat knäckebröd i Filipstad sedan 1931 och är kommunens största arbetsgivare, numera med en helt ny produktionslinje. Modern livsmedelsproduktion vilar på automatiserade processlinjer där OT-säkerhet och spårbarhet blir avgörande under NIS2.',
  },
  svenljunga: {
    namedEmployers: ['Blåkläder', 'Elmo Sweden'],
    localAngle:
      'Svenljunga har en lång tradition av textil och garveri, där Blåkläder utvecklar arbetskläder och Elmo tillverkar läder till fordons- och möbelindustrin. När traditionell tillverkning digitaliseras behöver dessa exportföretag säkra både produktionssystem och leverantörskedjor enligt NIS2.',
  },
  gagnef: {
    namedEmployers: ['Moelven Dalaträ', 'Åkerströms Björbo', '3M'],
    localAngle:
      'I Gagnef finns bland annat sågverket Moelven Dalaträ och Åkerströms i Björbo som tillverkar industriell radiostyrning för kranar och fordon. Trådlös styrning av tunga maskiner är ett tydligt exempel på OT som måste skyddas, något NIS2 och cybersäkerhetslagen lyfter fram.',
  },
  markaryd: {
    namedEmployers: ['NIBE'],
    localAngle:
      'Markaryd är huvudkontor och tillverkningsort för NIBE, världsledande inom värmepumpar med över 1300 anställda på orten. Storskalig och uppkopplad tillverkning av energiprodukter gör industriell cybersäkerhet och NIS2-efterlevnad till en strategisk fråga.',
  },
  orkelljunga: {
    namedEmployers: ['Continental Bakeries'],
    localAngle:
      'Örkelljunga präglas av tillverkning, handel och kommunikationer, med livsmedelsproducenten bakom varumärken som Gille som största privata arbetsgivare. Automatiserad bageriproduktion och logistik bygger på styrsystem där driftsäkerhet och NIS2 går hand i hand.',
  },
  surahammar: {
    namedEmployers: ['Surahammars Bruk'],
    localAngle:
      'Surahammars Bruk är Skandinaviens enda tillverkare av elektroplåt och en nyckelleverantör till fordonsindustrins elektrifiering. När en sådan unik processindustri digitaliserar sin styrning blir OT-säkerhet och NIS2 avgörande för att leveranserna inte ska stanna.',
  },
  'malung-salen': {
    namedEmployers: ['SkiStar'],
    localAngle:
      'I Sälen driver SkiStar några av Nordens största skidanläggningar med liftar, snökanoner och bokningssystem som alla styrs digitalt. När en hel säsongsekonomi hänger på uppkopplade liftsystem och betallösningar blir cybersäkerhet och NIS2 affärskritiskt.',
  },
  harjedalen: {
    namedEmployers: ['SkiStar', 'Härjeåns Kraft'],
    localAngle:
      'Härjedalens ekonomi vilar på fjällturismen i Vemdalen och Funäsfjällen samtidigt som energibolaget Härjeåns försörjer regionen med el, fjärrvärme och fiber. Både liftanläggningarnas styrsystem och elnätets driftövervakning är samhällsviktig OT som omfattas av NIS2 och cybersäkerhetslagen.',
  },
  munkedal: {
    namedEmployers: ['Arctic Paper Munkedals'],
    localAngle:
      'Munkedals bruk är ett av Europas mest resurseffektiva pappersbruk och bygger nu en ny fastbränslepanna, vilket gör den styrande processindustrin och dess OT-miljö till samhällsviktig verksamhet att skydda. Driftsäker styrning av panna och produktion ställer tydliga krav på cybersäkerhet i industriella system.',
  },
  arjang: {
    namedEmployers: ['HANZA Mechanics Årjäng', 'Flexit Sverige'],
    localAngle:
      'Med tillverkande industri som Hanza och Flexit nära norska gränsen blir uppkopplad produktion och leveranskedjor centrala för kommunens näringsliv. NIS2 lägger ansvar även på underleverantörer, vilket gör säkra OT-nät och robusta leverantörskedjor till en konkret fråga för orten.',
  },
  kinda: {
    namedEmployers: ['Sofidel Sweden', 'Rimaster Electrosystem'],
    localAngle:
      'I Kisa finns både pappersindustri och elektroniktillverkning där produktionen styrs av industriella system som behöver skydd mot driftstopp och intrång. För en mindre kommun blir trygg el- och vattenförsörjning samtidigt grunden i den samhällsviktiga verksamhet som ska säkras.',
  },
  alvkarleby: {
    namedEmployers: ['Vattenfall (vattenkraft och FoU)', 'Stora Enso Skutskär'],
    localAngle:
      'Vattenfalls vattenkraftverk och forskningslaboratorium i Älvkarleby gör orten till en plats där energiproduktion och styrsystem är direkt samhällsviktiga. Skydd av vattenkraftens OT-miljöer ligger i kärnan av både NIS2 och cybersäkerhetslagen.',
  },
  gnosjo: {
    namedEmployers: ['Thule', 'Garo', 'Axelent'],
    localAngle:
      'Gnosjö är en av Sveriges industritätaste kommuner med cirka 250 tillverkande företag och företag som Thule och Garo. När så många små verkstäder kopplar upp maskiner och delar leveranskedjor blir säkra OT-nät och NIS2-anpassade underleverantörer en överlevnadsfråga för hela klustret.',
  },
  degerfors: {
    namedEmployers: ['Outokumpu Stainless'],
    localAngle:
      'Outokumpus valsverk för rostfri grovplåt är Degerfors största privata arbetsgivare och en tung processindustri vars styrsystem måste vara driftsäkra. Skydd av sådan OT-miljö är ett tydligt exempel på vad NIS2 och cybersäkerhetslagen vill värna.',
  },
  bengtsfors: {
    namedEmployers: ['Munksjö (Billingsfors)', 'Rexcell Tissue & Airlaid'],
    localAngle:
      'I Dalsland driver Bengtsfors pappers- och mjukpappersindustri i Billingsfors och Skåpafors vars produktion vilar på styrsystem som inte får stå still. För glesbygdskommunen är dessutom säker el och VA den samhällsviktiga ryggrad som behöver cyberskydd.',
  },
  bollebygd: {
    namedEmployers: ['Hultafors Group', 'Hammar Maskin'],
    localAngle:
      'Bollebygd är en pendlingskommun mellan Borås och Göteborg med verkstäder som Hultafors Group och världsledande Hammar Maskin. Uppkopplad tillverkning och beroendet av regional infrastruktur gör NIS2-frågor om leverantörskedjor och OT-säkerhet relevanta även här.',
  },
  herrljunga: {
    namedEmployers: ['IMI Hydronic Engineering', 'Herrljunga Cider', 'Strängbetong'],
    localAngle:
      'Herrljunga är en gammal järnvägsknut på Västra stambanan med tillverkare som IMI Hydronic och Herrljunga Cider. När produktion och logistik knyts till järnväg och uppkopplade system blir både OT-säkerhet och transportens digitala flöden frågor för NIS2.',
  },
  hofors: {
    namedEmployers: ['Ovako Hofors'],
    localAngle:
      'Ovako Hofors är en av Europas ledande tillverkare av stål för kullager och kommunens dominerande arbetsgivare. En sådan tung processindustri med uppkopplade styrsystem är precis den samhällsviktiga OT-miljö som NIS2 och cybersäkerhetslagen vill skydda.',
  },
  nordanstig: {
    localAngle:
      'Nordanstig är en gles kustkommun vid Bottenhavet där den lokala industrin domineras av exportinriktad precisionstillverkning, exempelvis SMP Parts tiltrotatorer i Ilsbo. När enskilda verkstäder bär en stor del av sysselsättningen blir driftsäkerhet i styrsystem och produktionslinjer avgörande, vilket NIS2 och OT-säkerhet adresserar direkt.',
  },
  haparanda: {
    namedEmployers: ['IKEA Haparanda', 'Pipelife Hafab', 'Stenvalls Trä'],
    localAngle:
      'Haparanda bildar en sammanvuxen gränsstad med Tornio i Finland, vilket innebär dataflöden och leverantörskedjor som löper över två EU-länders gränser. I Pipelife Hafabs automatiserade tillverkning av rör för vatten och avlopp är skyddet av styrsystemen en konkret fråga för både OT-säkerhet och NIS2.',
  },
  mellerud: {
    namedEmployers: ['Emballator Mellerud Plast', 'Daloc', 'Hellbergs Dörrar'],
    localAngle:
      'Mellerud vid Vänerns västra strand har en ovanlig koncentration av tillverkare inom fysiskt skydd, där Daloc och Hellbergs bygger säkerhets- och branddörrar. Den kombinationen gör kommunen till ett tydligt exempel på var fysisk säkerhet och cybersäkerhet möts, samtidigt som plastsprutning och dörrlinjer kräver skyddade industriella styrsystem.',
  },
  uppvidinge: {
    namedEmployers: ['Amokabel'],
    localAngle:
      'Uppvidinge ligger mitt i Glasriket men har också en industribas där Amokabel i Alstermo tillverkar kraftkablar och ledningar för elnät och industri. Som leverantör till kritisk energiinfrastruktur berörs sådan tillverkning både av leverantörskedjekraven i NIS2 och av behovet att säkra produktionens OT-miljö.',
  },
  ange: {
    namedEmployers: ['Permascand', 'Callans Trä'],
    localAngle:
      'Ånge är en gammal järnvägsknut i mitten av Sverige och omges av vattenkraft längs Ljungan och Gimån. Både järnvägens signalsystem och kraftverkens drift hör till energi- och transportsektorer som omfattas av NIS2, där säkra styrsystem är en förutsättning för leveranssäkerheten.',
  },
  emmaboda: {
    namedEmployers: ['Xylem (Flygt)'],
    localAngle:
      'Emmaboda är hemorten för Flygtpumparna och Xylems största tillverkningsenhet i världen, med pumpar som driver vatten- och avloppssystem runt om i världen. Det placerar kommunen mitt i en leverantörskedja för vattensektorn, där både produktionens OT-miljö och de SCADA-styrda anläggningar som utrustningen hamnar i ställer höga säkerhetskrav.',
  },
  sotenas: {
    namedEmployers: ['Orkla Foods (Abba Seafood)', 'Leröy Smögen Seafood', 'Marenor'],
    localAngle:
      'Sotenäs med Kungshamn och Smögen är ett nav för svensk fiskberedning, och Abba Seafoods fabrik i Kungshamn är Orklas enda anläggning för fisktillverkning i landet. Den automatiserade livsmedelsproduktionen och den gränsöverskridande logistiken kring norsk lax gör både OT-säkerhet och NIS2:s krav på livsmedelskedjan högst relevanta.',
  },
  hjo: {
    namedEmployers: ['Emballator Tectubes'],
    localAngle:
      'Hjo är en småstad vid Vättern där Emballator Tectubes tillverkar hundratals miljoner tuber per år åt läkemedels- och livsmedelskunder. Den starkt automatiserade produktionen innebär att avbrott eller manipulation i styrsystemen kan slå mot känsliga leverantörskedjor, vilket gör OT-säkerhet till en kärnfråga.',
  },
  toreboda: {
    namedEmployers: ['Daloc', 'Moelven Töreboda', 'Westerstrand Urfabrik'],
    localAngle:
      'Töreboda är en utpräglad tillverkningskommun där Göta kanal löper genom orten och industrin spänner från säkerhetsdörrar och limträ till livsmedel och tidsystem. Med en så stor andel av sysselsättningen i produktionen blir skyddet av industriella styrsystem och leverantörskedjor en naturlig del av NIS2-arbetet.',
  },
  vingaker: {
    namedEmployers: ['Voith Fabrics Högsjö', 'Nammo Sweden', 'Vingåkers Factory Outlet'],
    localAngle:
      'Vingåker är en gammal textilbygd som idag rymmer allt från Voiths maskinbeklädnad till Nammos ammunitionshantering och det stora fabriksoutletet. Närvaron av försvars- och sprängämnesrelaterad tillverkning höjer kraven på säkerhet, och kombinationen av industriell OT och känslig verksamhet gör NIS2 särskilt aktuellt.',
  },
  grums: {
    namedEmployers: ['Billerud Gruvön'],
    localAngle:
      'Grums präglas av Gruvöns bruk där pappers- och sågverksproduktion utgör samhällsviktig industriell infrastruktur, och dess processtyrsystem (OT) gör cybersäkerhet och NIS2-efterlevnad till en konkret driftsfråga.',
  },
  vannas: {
    localAngle:
      'Vännäs är en gammal järnvägsort vid stambanan nära Umeå där offentlig sektor dominerar arbetsmarknaden, och kommunens egna VA- och energianläggningar räknas som samhällsviktig verksamhet med tydliga krav på driftsäkerhet och informationssäkerhet.',
  },
  lessebo: {
    namedEmployers: ['Lessebo Paper'],
    localAngle:
      'Lessebo lever vidare som pappersort i hjärtat av Glasriket, och bruksindustrins styr- och produktionssystem placerar verksamheten i samma OT-säkerhetsverklighet som NIS2 vill skydda.',
  },
  kungsor: {
    namedEmployers: ['Strängbetong', 'Car-O-Liner', 'Gnutti Carlo'],
    localAngle:
      'Kungsör är en tillverkningsort vid Mälaren med flera industriföretag, och uppkopplade produktionslinjer gör OT-säkerhet och leverantörskedjornas motståndskraft till en växande fråga i takt med nya regelkrav.',
  },
  eda: {
    namedEmployers: ['Charlottenbergs Shoppingcenter', 'Nordic Paper Åmotfors', 'Norma Precision'],
    localAngle:
      'Edas gränshandel i Charlottenberg drar stora flöden av norska besökare och därmed stora mängder kund- och betaldata, vilket gör GDPR och säkra betalsystem centralt vid sidan av industrins egna OT-miljöer.',
  },
  lekeberg: {
    localAngle:
      'Lekeberg med centralorten Fjugesta är en utpendlingskommun mot Örebro med övervägande små företag, och kommunens vatten-, avlopps- och energidrift utgör den samhällsviktiga verksamhet som NIS2 och cybersäkerhetslagen ställer krav på.',
  },
  alvsbyn: {
    namedEmployers: ['Älvsbyhus', 'Polarbröd'],
    localAngle:
      'Älvsbyn är hemort för husfabriken Älvsbyhus och Polarbröds bageri, där industriell produktion och styrsystem innebär att avbrott och intrång i OT-miljön snabbt blir en fråga om leveranssäkerhet.',
  },
  valdemarsvik: {
    namedEmployers: ['Nordic Brass Gusum'],
    localAngle:
      'I kustkommunen Valdemarsvik är Nordic Brass Gusum en av Nordens ledande mässingstillverkare, och den uppkopplade processindustrin gör OT-säkerhet och kontinuitet till en avgörande del av riskarbetet.',
  },
  mullsjo: {
    namedEmployers: ['Kongsberg Automotive', 'Engtex'],
    localAngle:
      'Mullsjö är en pendlings- och tillverkningsort där underleverantörer till fordonsindustrin verkar, och deras roll i större leverantörskedjor gör att kraven på cybersäkerhet ofta drivs på via kundernas NIS2-ansvar.',
  },
  vadstena: {
    localAngle:
      'Vadstena vid Vättern lever på besöksnäring kring slottet och klostret där sommarens turister mångdubblar befolkningen, vilket gör hanteringen av bokningar och besökares persondata till en tydlig GDPR- och informationssäkerhetsfråga.',
  },
  perstorp: {
    namedEmployers: ['Perstorp AB'],
    localAngle:
      'Perstorp Industripark är en av sydvästra Sveriges största kemiindustriplatser där specialkemi tillverkats sedan 1881. Sådana processanläggningar bygger på styrsystem och OT som blir tydliga skyddsobjekt under NIS2 och cybersäkerhetslagen.',
  },
  torsas: {
    namedEmployers: ['Yaskawa Nordic', 'Södra Timber'],
    localAngle:
      'I Torsås tillverkar Yaskawa Nordic industrirobotar och automationsutrustning, en verksamhet som hänger samman med uppkopplad produktion och OT-säkerhet. För en liten kommun innebär det att avancerad tillverkningsteknik finns mitt i ett landsbygdsnäringsliv med skogsindustri och VA-drift.',
  },
  alvdalen: {
    localAngle:
      'Älvdalens skjutfält är Sveriges största militära övningsfält och dess betydelse växer i ett skärpt säkerhetsläge. När försvarsverksamhet, glesbygdens energinät och kommunal VA samsas på samma orter blir robusta OT-miljöer och NIS2-krav högst konkreta även i en liten skogskommun.',
  },
  nordmaling: {
    namedEmployers: ['Masonite Beams'],
    localAngle:
      'I Rundvik utanför Nordmaling driver Masonite Beams en modern fabrik för lättbalkar, ett exempel på den träindustri som präglar kusten. I en liten kommun vilar både sågverk och kommunal vatten- och energiförsörjning på styrsystem som NIS2 och cybersäkerhetslagen ställer nya krav på.',
  },
  karlsborg: {
    namedEmployers: ['Försvarsmakten (Livregementets husarer K3)'],
    localAngle:
      'I Karlsborg ligger Livregementets husarer K3 med fallskärmsjägarskola och Försvarsmaktens överlevnadsskola intill den gamla fästningen. Närheten mellan en stor garnison och kommunal infrastruktur gör skydd av OT och kritiska nät till en påtaglig fråga under NIS2 och cybersäkerhetslagen.',
  },
  orsa: {
    namedEmployers: ['Orsa Grönklitt', 'Kandre'],
    localAngle:
      'Orsa lever på turism kring Grönklitt och Orsa Rovdjurspark samt på skogs- och tillverkningsindustri. När en liten kommun ska skydda vatten, värme och elnät på landsbygden blir robust OT och NIS2-efterlevnad lika viktigt som i större städer.',
  },
  berg: {
    localAngle:
      'Bergs kommun kring Svenstavik är en av Sveriges mest företagstäta kommuner men präglas av små bolag inom skogsbruk, rennäring och turism. På sådan glesbygd ligger sårbarheten i utspridda vatten- och energianläggningar vars styrsystem omfattas av NIS2 och cybersäkerhetslagen.',
  },
  aneby: {
    namedEmployers: ['Attends Healthcare', 'HAGS Aneby'],
    localAngle:
      'I Aneby finns tillverkare som Attends Healthcare och lekplatstillverkaren HAGS, vilket gör industriell produktion till en bärande del av en liten kommun. Uppkopplade produktionslinjer och kommunal infrastruktur skapar samma OT- och NIS2-ansvar som hos större aktörer.',
  },
  robertsfors: {
    namedEmployers: ['CoorsTek', 'Techsam Electronics'],
    localAngle:
      'Robertsfors är en kustnära landsbygdskommun där tillverkare som CoorsTek och Techsam Electronics samsas med ett brett småföretagande. Att skydda spridda VA- och energianläggningar och uppkopplad produktion gör NIS2 och OT-säkerhet konkret även här.',
  },
  fargelanda: {
    namedEmployers: ['Artifex Systems'],
    localAngle:
      'I Färgelanda tillverkas fordonskomponenter åt bland andra Volvo och Scania, numera i regi av Artifex Systems. Sådan underleverantörsproduktion är beroende av uppkopplad OT och leverantörskedjor som NIS2 ställer skärpta krav på.',
  },
  hallefors: {
    namedEmployers: ['Ovako Hällefors', 'Örebro universitet (Campus Grythyttan)'],
    localAngle:
      'I Hällefors driver Ovako tillverkning och bearbetning av specialstål, där styr- och processystemen i valsverk och härdugnar gör driftsäker OT-säkerhet till en förutsättning för produktionen. Stålindustri av den här typen omfattas av både NIS2 och cybersäkerhetslagen, vilket ställer krav på systematiskt informationssäkerhetsarbete.',
  },
  vansbro: {
    namedEmployers: ['Orkla Foods (Vansbro)', 'Monark Exercise'],
    localAngle:
      'Orkla Foods fabrik i Vansbro är en av Sveriges största livsmedelsanläggningar för stenugnsbakad pizza och paj, och de automatiserade produktionslinjerna gör driftkontinuitet och OT-säkerhet affärskritiskt. Som samhällsviktig livsmedelsproduktion berörs verksamheten av NIS2 och behöver strukturerat informationssäkerhetsarbete.',
  },
  vilhelmina: {
    namedEmployers: ['SCA', 'Inpipe Sweden'],
    localAngle:
      'Vilhelmina bygger på skogsbruk och vattenkraft längs Ångermanälven, där fjärrstyrda kraftstationer och dammar gör OT-säkerhet till en fråga om både elförsörjning och dammsäkerhet. Vattenkraftproducenter räknas som samhällsviktiga och omfattas av NIS2 och cybersäkerhetslagen.',
  },
  arvidsjaur: {
    namedEmployers: ['Arctic Falls', 'Tjintokk'],
    localAngle:
      'Arvidsjaur är ett nav för vinterbiltestning, där fordonstillverkare provar bromsar och styrsystem på is och snö och hanterar stora mängder känsliga prototyp- och mätdata. Här blir industrispionage och informationssäkerhet lika viktigt som den fysiska säkerheten på testbanorna.',
  },
  bracke: {
    namedEmployers: ['Gällö Timber'],
    localAngle:
      'Bräcke korsas av både Stambanan och Mittbanan och lever på skogsindustri, där sågverk som Gällö Timber förlitar sig på styrsystem i produktionen. Driftstörningar i OT-miljön kan stoppa hela flödet, vilket gör NIS2-anpassad informationssäkerhet relevant även för mindre industriorter.',
  },
  pajala: {
    namedEmployers: ['Kaunis Iron'],
    localAngle:
      'I Pajala är järnmalmsgruvan Kaunis Iron i Kaunisvaara kommunens helt avgörande arbetsgivare, med tung automation i brytning och anrikning. Gruvdrift av den här storleken är samhällsviktig och beroende av robust OT-säkerhet för att skydda processtyrning mot driftstopp och angrepp.',
  },
  ockelbo: {
    namedEmployers: ['Atlas Copco Secoroc', 'Elis Textil Service'],
    localAngle:
      'Ockelbo har verkstadsindustri som Atlas Copco Secoroc, där tillverkning av borrverktyg vilar på uppkopplade maskiner och styrsystem. När produktionen digitaliseras blir OT-säkerhet och informationssäkerhet en förutsättning för leveranssäkerhet.',
  },
  grastorp: {
    localAngle:
      'Grästorp präglas av jordbruk, livsmedel och mindre industri, och företag som DataVäxt visar hur även lantbruket digitaliseras med uppkopplad teknik. Det gör informationssäkerhet relevant i en bygd som annars förknippas med åkrar snarare än cyberhot.',
  },
  storuman: {
    namedEmployers: ['Vattenfall Vattenkraft', 'Hemavan Alpint'],
    localAngle:
      'Storuman förenar fjällturism i Hemavan och Tärnaby med omfattande vattenkraft, där Vattenfalls kraftstationer styrs och övervakas på distans. Fjärrstyrd kraftproduktion är samhällsviktig och omfattas av NIS2, vilket gör OT-säkerhet central för både elnätet och dammsäkerheten.',
  },
  hogsby: {
    localAngle:
      'Högsby är en liten skogs- och jordbrukskommun längs Emån utan någon dominerande storindustri, där näringslivet bärs upp av kommunen och många små företag. Även här gäller att digitaliserad förvaltning och småföretag behöver grundläggande informationssäkerhet för att stå emot dagens cyberhot.',
  },
  norberg: {
    namedEmployers: ['AB Karl Hedin', 'Strängbetong'],
    localAngle:
      'Med träindustri som AB Karl Hedins sågverk och betongtillverkning samt vindkraftparken Målarberget finns flera anläggningar med styr- och processystem i Norberg. Sådan OT-miljö behöver skyddas i takt med att NIS2 skärper kraven på industriell cybersäkerhet.',
  },
  laxa: {
    namedEmployers: ['Laxå Special Vehicles', 'ESAB'],
    localAngle:
      'Laxå är en tillverknings- och logistikort vid E20 där fordonsindustrin spelar en central roll för sysselsättningen. Digitala produktionsflöden och uppkopplade maskiner gör att robust cybersäkerhet blir avgörande för att verksamheten ska kunna leverera utan avbrott.',
  },
  essunga: {
    namedEmployers: ['Dahrén Sweden', 'Componenta Främmestad'],
    localAngle:
      'I Essunga möts livsmedels- och lantbruksnäring med mekanisk industri som tillverkar komponenter till tunga fordon. När produktion och samhällsviktig livsmedelsförsörjning blir allt mer uppkopplad ökar behovet av att säkra OT-system enligt NIS2.',
  },
  boxholm: {
    namedEmployers: ['Ovako Bar', 'Glada Bonden Mejeri'],
    localAngle:
      'I Boxholm möts tung stålindustri vid Ovakos verk och livsmedelsproduktion på det anrika mejeriet, två verksamheter där styr- och processystem (OT) blir en allt viktigare del av NIS2-arbetet. Ett driftstopp orsakat av en cyberattack kan slå direkt mot både produktion och leveranskedjor.',
  },
  odeshog: {
    localAngle:
      'Ödeshögs näringsliv präglas av småskalighet och gröna näringar nära Vättern, samtidigt som kommunen själv och lokal verkstadsindustri utgör samhällsviktig verksamhet. Här handlar cybersäkerhet lika mycket om att skydda kommunal välfärd och dricksvattenförsörjning som industrins tillverkningssystem.',
  },
  ragunda: {
    namedEmployers: ['SCA Wood (Stugun)'],
    localAngle:
      'Ragunda bär på en av Sveriges viktigaste vattenkraftsmiljöer längs Indalsälven, och tillsammans med skogsförädlingen i Stugun gör det energiproduktion och industriell OT till kärnan i kommunens samhällsviktiga verksamhet. När kraftverkens styrsystem och processindustrins anläggningar omfattas av NIS2 ställs nya krav på kontinuitet och robust cyberförsvar.',
  },
  vindeln: {
    namedEmployers: ['Cranab', 'Rototilt Group', 'Indexator Rotator Systems'],
    localAngle:
      'I Vindeln präglas näringslivet av skogsmaskin- och verkstadsindustri längs Vindelälven, där uppkopplade tillverkningssystem och industriella styrsystem gör OT-säkerhet till en avgörande fråga. För dessa exportföretag innebär NIS2 och säkrad driftteknik ett konkret skydd mot produktionsstopp och intrång.',
  },
  gullspang: {
    namedEmployers: ['Nimo (Nimoverken)', 'Moelven Vänerply'],
    localAngle:
      'Gullspång vilar på vattenkraft och småskalig tillverkningsindustri, vilket gör tillförlitlig el och säkra industriella nät till en grundbult i den lokala samhällsviktiga verksamheten. När produktionen i Hova och Otterbäcken digitaliseras blir cybersäkerhet och NIS2-efterlevnad nödvändiga för att hålla både energiförsörjning och fabriker igång.',
  },
  'dals-ed': {
    namedEmployers: ['Vida Nössemark', 'Pyrotek Scandinavia'],
    localAngle:
      'Med Vidas sågverk i Nössemark och en näringsstruktur byggd på skog och trä nära norska gränsen blir driftsäkra industriella styrsystem och leveranskedjor en kärnfråga för OT-säkerhet enligt NIS2. Gränsläget mot Norge gör dessutom robust kommunikation och kontinuitet i samhällsviktig verksamhet extra angeläget.',
  },
  ljusnarsberg: {
    namedEmployers: ['Kopparbergs Bryggeri', 'Ahlstrom Ställdalen'],
    localAngle:
      'I Kopparberg präglas näringslivet av livsmedelsproduktion vid Kopparbergs Bryggeri och fibertillverkning i Ställdalen, där processindustrins automation behöver skyddas mot cyberangrepp i linje med NIS2. Bergslagens gruv- och industriarv lever vidare i en produktion som idag vilar på sårbara digitala styrsystem.',
  },
  jokkmokk: {
    namedEmployers: ['Vattenfall Vattenkraft'],
    localAngle:
      'I Jokkmokk driver Vattenfall stora vattenkraftverk som Porjus och Letsi, och dessa anläggningar är samhällsviktiga enligt NIS2. Styrsystemen för vattenkraft (OT) måste skyddas mot driftstörningar och cyberangrepp för att trygga elförsörjningen.',
  },
  overtornea: {
    namedEmployers: ['Utbildning Nord'],
    localAngle:
      'Övertorneå ligger vid finska gränsen och Torne älv, med skogsbruk och gränsöverskridande verksamhet som präglar näringslivet. För lokala industri- och energiaktörer innebär cybersäkerhetslagen och NIS2 krav på robusta system även i glesbygd där driften ofta styrs på distans.',
  },
  skinnskatteberg: {
    namedEmployers: ['Systemair'],
    localAngle:
      'Skinnskatteberg har en stark tillverkningsindustri med Systemair som tillverkar ventilationsteknik, och bygden har djupa rötter i skogsbruk och bergshantering. Tillverkande företag med uppkopplade produktionslinjer (OT) berörs av NIS2 och behöver skydda såväl produktionssystem som leveranskedjor.',
  },
  norsjo: {
    namedEmployers: ['Prospekteringsteknik i Norrland (Protek)'],
    localAngle:
      'I Norsjö sitter Protek som arbetar med prospekteringsborrning åt gruvnäringen i Skelleftefältet, och bygden lever nära Bolidens malmer. Gruvprospektering och borrning bygger på digitaliserade fältsystem och mätdata, vilket gör IT- och OT-säkerhet allt viktigare i takt med NIS2.',
  },
  storfors: {
    localAngle:
      'Storfors är en liten bruksort i Bergslagen med rötter i järn- och trådindustrin, omgiven av skog och vatten. Även mindre industri- och energiverksamheter i bruksbygden omfattas av cybersäkerhetslagen och behöver grundläggande skydd för sina styr- och driftsystem.',
  },
  ydre: {
    namedEmployers: ['Camfil', 'Forsnäs'],
    localAngle:
      'Ydre är en mycket liten landsbygdskommun där träindustrin står för en stor del av jobben, med företag som tillverkar faner och träprodukter. Tillverkande småföretag med automatiserade maskiner behöver enligt NIS2 och cybersäkerhetslagen säkra sina produktionssystem trots begränsade IT-resurser.',
  },
  munkfors: {
    namedEmployers: ['voestalpine Precision Strip'],
    localAngle:
      'Munkfors präglas av voestalpine Precision Strip som tillverkar kallvalsat precisionsbandstål med över 350 års brukshistoria på orten. Ett exportberoende stålverk med uppkopplade valsverk och styrsystem är samhällsviktigt och behöver skydda sin OT-miljö i linje med NIS2.',
  },
  overkalix: {
    localAngle:
      'Överkalix är en gles skogskommun vid Kalix älv där skogsbruk och småskalig verkstadsindustri dominerar. För glesbygdens industri- och transportaktörer ställer cybersäkerhetslagen och NIS2 krav på säkra system även när verksamheten är liten och fjärrstyrd.',
  },
  mala: {
    namedEmployers: ['Setra Group (Malå)', 'Hultdin System'],
    localAngle:
      'Malå lever av skogen och gruvnäringen, med Setras sågverk och Hultdin System som tillverkar utrustning till skogs- och anläggningsmaskiner. Boliden bryter malm i närområdet, och både sågverk och gruvnära tillverkning bygger på OT-system som omfattas av NIS2.',
  },
  asele: {
    localAngle:
      'Åsele är en avlägsen skogskommun i Lapplands inland där skogsbruk och mindre verkstads- och transportföretag bär näringslivet. Glesbygdens företag och samhällsviktiga funktioner behöver enligt NIS2 och cybersäkerhetslagen rusta sin digitala säkerhet trots stora avstånd och små marginaler.',
  },
  arjeplog: {
    namedEmployers: ['Colmis', 'Tjintokk'],
    localAngle:
      'Arjeplog är ett globalt nav för vintertestning av fordon där biltillverkare provkör bromsar, drivlinor och uppkopplad körteknik på frusna sjöar. När testanläggningarnas mät- och styrsystem blir alltmer digitaliserade följer också krav på OT-säkerhet och skydd av känsliga prototypdata.',
  },
  dorotea: {
    namedEmployers: ['SoliferPolar (Polarvagnen)', 'Dorotea Mekaniska'],
    localAngle:
      'I Dorotea tillverkas husvagnar och amfibiemaskiner i en industri som bygger på lång verkstadstradition i en liten glesbygdskommun. Även mindre tillverkare blir beroende av uppkopplade produktionssystem, vilket gör NIS2-nära frågor om kontinuitet och leverantörssäkerhet relevanta långt utanför storstäderna.',
  },
  bjurholm: {
    namedEmployers: ['Chip & Circuit Nord'],
    localAngle:
      'Bjurholm är Sveriges minsta kommun till befolkningen, men här finns elektroniktillverkning som levererar kretskort till industri och utvecklingsbolag. Det visar att även de minsta orterna sitter i digitala leverantörskedjor där informationssäkerhet och spårbarhet snabbt blir affärskritiskt.',
  },
  sorsele: {
    namedEmployers: ['Baseco Golv'],
    localAngle:
      'I Sorsele vid Vindelälven förädlas trä till golv i en av kommunens största privata verksamheter, med skogsbruk och rennäring som bas. När även sågverk och träförädling styrs av uppkopplade processystem blir robusthet mot driftstörningar och OT-säkerhet en fråga om hela ortens sysselsättning.',
  },
};

/** Stable 0..n-1 selector derived from the slug (same output every build). */
function variantIndex(k: Kommun, n: number): number {
  let h = 0;
  for (let i = 0; i < k.slug.length; i++) h = (h * 31 + k.slug.charCodeAt(i)) >>> 0;
  return h % n;
}

/**
 * Salted variant picker. Hashes slug + salt + dominant sectors, so each prose
 * slot ("intro-opener", "intro-bridge", "callout", …) varies INDEPENDENTLY
 * rather than every slot keying off the same slug hash. Two municipalities of
 * the same band/type but different counties/sectors therefore render a
 * different *combination* of skeletons — multiplying real text variety and
 * pulling the pages out of Google's near-duplicate cluster.
 */
function pick<T>(k: Kommun, salt: string, arr: T[]): T {
  const seed = `${k.slug}|${salt}|${k.county}|${k.dominantSectors.join(',')}`;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return arr[h % arr.length];
}

/** Swedish list join: "a", "a och b", "a, b och c". */
function svList(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} och ${items[items.length - 1]}`;
}

function sectorList(k: Kommun, limit?: number): string {
  const labels = k.dominantSectors.map(getSectorLabel).map((l) => l.toLowerCase());
  return svList(limit ? labels.slice(0, limit) : labels);
}

/** Resolve named employers from the kommun object or the enrichment map. */
function resolveEmployers(k: Kommun): string[] | undefined {
  return k.namedEmployers ?? kommunEnrichment[k.slug]?.namedEmployers;
}

/** Resolve the local angle from the kommun object or the enrichment map. */
function resolveLocalAngle(k: Kommun): string | undefined {
  return k.localAngle ?? kommunEnrichment[k.slug]?.localAngle;
}

/** Clause naming real local employers, or '' when none are recorded. */
function employerClause(k: Kommun): string {
  const employers = resolveEmployers(k);
  if (!employers || employers.length === 0) return '';
  const v = variantIndex(k, 3);
  const list = svList(employers);
  return [
    ` Verksamheter som ${list} sätter prägel på det lokala näringslivet.`,
    ` Bland de större arbetsgivarna finns ${list}.`,
    ` Lokalt märks aktörer som ${list} tydligt.`,
  ][v];
}

/** Intro paragraph — varies by population band, sectors, employers, variant. */
export function getKommunIntro(k: Kommun): string {
  const band = getPopulationBand(k);
  const sectors = sectorList(k);
  const top3 = sectorList(k, 3);
  const top1 = getSectorLabel(k.dominantSectors[0]).toLowerCase();
  const pop = k.population.toLocaleString('sv-SE');
  const emp = employerClause(k);

  const openers: Record<PopulationBand, string[]> = {
    major: [
      `${k.name} hör till Sveriges större kommuner, med ett brett näringsliv inom ${sectors}.`,
      `Med ${pop} invånare är ${k.name} en av landets folkrikaste kommuner, där ${top3} väger tungt i näringslivet.`,
      `${k.name} är en storstadskommun där ${sectors} samsas i ett diversifierat näringsliv.`,
      `Som en av ${k.county}s största kommuner har ${k.name} ett näringsliv med tyngdpunkt i ${top3}.`,
      `${k.name} är ett ekonomiskt nav i ${k.county}, med ${pop} invånare och stark närvaro inom ${top3}.`,
    ],
    large: [
      `${k.name} är en regional tyngdpunkt i ${k.county} med starka inslag av ${top3}.`,
      `Med omkring ${pop} invånare är ${k.name} en av de större kommunerna i ${k.county}, präglad av ${top3}.`,
      `${k.name} kombinerar ett etablerat näringsliv inom ${top3} med rollen som regionalt centrum.`,
      `${k.name} är en av de folkrikare kommunerna i ${k.county}, där ${top1} sätter tydlig prägel på näringslivet.`,
      `Med ${pop} invånare fungerar ${k.name} som ett regionalt centrum i ${k.county}, med bas i ${top3}.`,
    ],
    mid: [
      `${k.name} är en mellanstor kommun i ${k.county} där ${top3} dominerar näringslivet.`,
      `Med ${pop} invånare har ${k.name} ett näringsliv som vilar tungt på ${top3}.`,
      `I ${k.name} präglas det lokala näringslivet av ${top3}.`,
      `${k.name} är en mellanstor kommun i ${k.county} med ${top1} som en bärande näring.`,
      `Näringslivet i ${k.name} bygger i hög grad på ${top3}, med ${pop} invånare i kommunen.`,
    ],
    small: [
      `${k.name} är en mindre kommun i ${k.county} med ${pop} invånare, där ${top3} betyder mycket lokalt.`,
      `Trots sin storlek har ${k.name} ett näringsliv med tydliga inslag av ${top3}.`,
      `${k.name} är en liten kommun där ${top3} utgör ryggraden i det lokala näringslivet.`,
      `I ${k.name}, en mindre kommun i ${k.county}, är ${top1} en av de viktigaste näringarna.`,
      `Med ${pop} invånare är ${k.name} en liten men företagstät kommun där ${top3} dominerar.`,
    ],
  };

  const bridges = [
    `Både kommunens egna verksamheter och privata företag berörs av NIS2-direktivet och cybersäkerhetslagen.`,
    `Det gör att cybersäkerhetslagen träffar ${k.name} brett, från kommunal förvaltning till privata aktörer och deras leverantörer.`,
    `Flera av dessa sektorer omfattas direkt av NIS2, och leverantörskraven kaskaderar vidare ner i kedjan.`,
    `Därmed berörs verksamheter i ${k.name} av cybersäkerhetslagen både direkt och indirekt, via krav från större kunder.`,
    `Eftersom ${top1} är utpekat under NIS2 påverkas många lokala företag i ${k.name}, inte minst som underleverantörer.`,
  ];

  return `${pick(k, 'intro-opener', openers[band])}${emp} ${pick(k, 'intro-bridge', bridges)} Uppskattningsvis ${k.nis2Estimate} organisationer i ${k.name} berörs direkt.`;
}

/** Callout {title, text} — varies by population band + variant. */
export function getKommunCallout(k: Kommun): { title: string; text: string } {
  const band = getPopulationBand(k);

  if (band === 'major' || band === 'large') {
    return {
      title: pick(k, 'callout-title', [
        'Samordning över flera sektorer',
        'Skala och tillsyn på bred front',
        `Flera regelverk samtidigt i ${k.name}`,
      ]),
      text: pick(k, 'callout-text', [
        `I en kommun av ${k.name}s storlek möter verksamheter ofta flera tillsynsmyndigheter parallellt, här ${svList(k.tillsynsmyndigheter)}. Kommunala bolag kan omfattas i olika sektorer samtidigt, vilket ställer höga krav på samordning. Vår plattform Securapilot ger realtidsöverblick över hela compliance-arbetet.`,
        `Större kommuner som ${k.name} har ett näringsliv som spänner över många NIS2-sektorer, och därmed flera tillsynsmyndigheter att förhålla sig till (${svList(k.tillsynsmyndigheter)}). Det gör samordning till en nyckelfråga. Med Securapilot samlar ni hela efterlevnadsarbetet på ett ställe.`,
      ]),
    };
  }
  if (k.type === 'industrial') {
    return {
      title: pick(k, 'callout-title', [
        'Leverantörskedjor och OT-säkerhet',
        'Industrins säkerhet bortom IT',
        `OT-säkerhet i ${k.name}s industri`,
      ]),
      text: pick(k, 'callout-text', [
        `${k.name} är en utpräglad industrikommun, och då blir OT-säkerhet (styrsystem, SCADA, industriella nät) lika viktig som IT-säkerheten. NIS2 ställer uttryckliga krav på leverantörskedjan, så era storkunders efterlevnad påverkar direkt kraven på er. Vi hjälper er täcka både IT och OT i samma arbete.`,
        `I industrikommuner som ${k.name} sitter mycket av risken i produktionen, alltså i styrsystem och industriella nät snarare än bara i kontorets IT. NIS2 sätter dessutom press uppåt och nedåt i leverantörskedjan. Vi hjälper er säkra både IT och OT utan att produktionen står still.`,
      ]),
    };
  }
  return {
    title: pick(k, 'callout-title', [
      'Proportionellt och anpassat efter er verklighet',
      'Lagom åtgärder för er storlek',
      `Rätt nivå för verksamheter i ${k.name}`,
    ]),
    text: pick(k, 'callout-text', [
      `Cybersäkerhetslagen talar om "lämpliga och proportionella åtgärder". Vi hjälper er tolka vad det betyder konkret för en verksamhet i ${k.name}. Med CISO-as-a-Service får ni strategisk säkerhetsstyrning utan att rekrytera specialister, och med Securapilot löpande koll utan dyra årliga revisioner.`,
      `Alla verksamheter i ${k.name} behöver inte samma åtgärder, lagen kräver det som är proportionellt för just er. Vi hjälper er hitta den nivån, utan överarbete. CISO-as-a-Service ger styrning utan egen rekrytering, och Securapilot håller koll löpande i stället för en dyr årlig revision.`,
    ]),
  };
}

/** Short genuinely-local section — uses localAngle when present. */
export function getKommunLocalSection(k: Kommun): string | null {
  const angle = resolveLocalAngle(k);
  if (angle) return angle;
  // Fall back to a sector-grounded sentence rather than inventing specifics.
  const v = variantIndex(k, 2);
  const top = getSectorLabel(k.dominantSectors[0]).toLowerCase();
  return [
    `Med ${top} som en bärande sektor är ${k.name} extra känsligt för störningar i digitala system och leverantörskedjor, just de risker NIS2 är skapat för att hantera.`,
    `Eftersom ${top} väger tungt lokalt får avbrott och cyberincidenter snabbt konsekvenser för både sysselsättning och samhällsviktig verksamhet i ${k.name}.`,
  ][v];
}

export function getKommunMetaTitle(k: Kommun): string {
  if (k.metaTitle) return k.metaTitle;
  return pick(k, 'meta-title', [
    `Cybersäkerhet & NIS2 i ${k.name}, för företag och kommun | Verit`,
    `IT-säkerhet & NIS2 i ${k.name} — för företag och kommun | Verit`,
    `Cybersäkerhet i ${k.name}: NIS2, ISO 27001 & dataskydd | Verit`,
    `IT- och datasäkerhet i ${k.name} för företag och kommun | Verit`,
  ]);
}

export function getKommunMetaDescription(k: Kommun): string {
  if (k.metaDescription) return k.metaDescription;
  const top = sectorList(k, 3);
  return pick(k, 'meta-desc', [
    `${k.name}s näringsliv inom ${top} berörs av cybersäkerhetslagen. Verit hjälper företag och kommun med NIS2, ISO 27001 och praktisk IT-säkerhet.`,
    `Cybersäkerhetslagen träffar ${k.name} brett, ${k.nis2Estimate} organisationer berörs. Verit hjälper er med NIS2, ISO 27001 och CISO-as-a-Service.`,
    `NIS2 och cybersäkerhetslagen i ${k.name}: vad som gäller för ${top}, och hur Verit hjälper företag och kommun att komma igång pragmatiskt.`,
    `Berörs ert företag i ${k.name} av NIS2? Verit hjälper verksamheter inom ${top} med IT-säkerhet, datasäkerhet och gap-analys. Boka ett kostnadsfritt möte.`,
    `IT- och datasäkerhet för ${k.name}: Verit guidar företag och kommun genom cybersäkerhetslagen, NIS2 och nätverkssäkerhet, anpassat efter er storlek.`,
  ]);
}

/**
 * Varied IT-/data-/nätverkssäkerhet block. Broadens keyword coverage for the
 * striking-distance "IT-säkerhet / datasäkerhet / nätverkssäkerhet {stad}"
 * queries (pos 5–15, 0 clicks) without appending a constant sentence to all
 * pages — every string runs through pick() to preserve text variety.
 */
export function getKommunItSecurity(k: Kommun): { heading: string; body: string } {
  const top1 = getSectorLabel(k.dominantSectors[0]).toLowerCase();
  const heading = pick(k, 'it-heading', [
    `IT- och datasäkerhet för verksamheter i ${k.name}`,
    `IT-säkerhet och nätverkssäkerhet i ${k.name}`,
    `Data- och nätverkssäkerhet för företag i ${k.name}`,
  ]);
  const body = pick(k, 'it-body', [
    `För många verksamheter i ${k.name} börjar cybersäkerhetslagen i det praktiska: IT-säkerhet, datasäkerhet och nätverkssäkerhet i vardagen. Vi hjälper företag och kommun inom ${top1} att gå från enskilda tekniska åtgärder till ett sammanhållet säkerhetsarbete som håller för NIS2 och ISO 27001.`,
    `IT-säkerhet och datasäkerhet är ofta första steget för företag i ${k.name} som vill möta NIS2. Vi ser till att nätverkssäkerhet, åtkomststyrning och incidenthantering hänger ihop i stället för att lösas var för sig, så att ${top1} och övriga sektorer får ett skydd som faktiskt fungerar.`,
    `Bakom kraven i cybersäkerhetslagen ligger konkret IT-säkerhet: skydd av data, härdade nätverk och kontroll på leverantörer. Vi hjälper verksamheter i ${k.name} att stärka data- och nätverkssäkerheten på en nivå som är rimlig för en organisation inom ${top1}.`,
  ]);
  return { heading, body };
}

interface FaqItem {
  question: string;
  answer: string;
}

export function getKommunFaq(k: Kommun): FaqItem[] {
  const faq: FaqItem[] = [
    {
      question: `Vilka verksamheter i ${k.name} berörs av cybersäkerhetslagen?`,
      answer: `Uppskattningsvis ${k.nis2Estimate} medelstora och stora organisationer i ${k.name} berörs direkt av NIS2-direktivet och cybersäkerhetslagen. Det inkluderar verksamheter inom ${sectorList(k)}.${employerClause(k)} Kommunen själv omfattas som offentlig förvaltning, och kommunala bolag inom energi och VA berörs i sina respektive sektorer.`,
    },
    {
      question: `Vilka tillsynsmyndigheter ansvarar för NIS2 i ${k.name}?`,
      answer: `Beroende på sektor övervakas verksamheter i ${k.name} av ${k.tillsynsmyndigheter.join(', ')}. Kommunen som offentlig förvaltning hör under Länsstyrelsen i ${k.county}s län.`,
    },
    {
      question: `Hur kan Verit hjälpa företag i ${k.name}?`,
      answer: `Vi erbjuder gap-analys mot cybersäkerhetslagen, implementeringsstöd för NIS2 och ISO 27001, CISO-as-a-Service och vår GRC-plattform Securapilot. Vi arbetar från Vänersborg och genomför uppdrag digitalt i hela Sverige, så ni slipper betala för restid.`,
    },
  ];

  if (k.type === 'industrial') {
    faq.push({
      question: `Vi är underleverantör i ${k.name}, berörs vi av NIS2?`,
      answer: `Kanske inte direkt av lagen, men era kunder som omfattas av NIS2 kan ställa krav på er cybersäkerhet genom leverantörsavtal. I en kommun som ${k.name} med långa leverantörskedjor är det klokt att ligga steget före.`,
    });
  }

  if (k.type === 'rural') {
    faq.push({
      question: `Gäller cybersäkerhetslagen även ${k.population < 15000 ? 'små' : 'mindre'} kommuner som ${k.name}?`,
      answer: `Ja. Alla kommuner omfattas oavsett storlek. Kraven ska vara proportionella, men grundkraven på riskanalys, incidentrapportering och ledningsutbildning gäller alla. CISO-as-a-Service och Securapilot är särskilt värdefulla för kommuner med begränsade resurser.`,
    });
  }

  if (k.type === 'service-city') {
    faq.push({
      question: `Vi följer redan ISO 27001, räcker det för NIS2?`,
      answer: `ISO 27001 är en utmärkt grund och täcker mycket av det NIS2 kräver. Men cybersäkerhetslagen adderar specifika krav på incidentrapportering (24 timmar), ledningsutbildning och anmälningsplikt som inte ingår i standarden. Vi hjälper er identifiera gapet.`,
    });
  }

  if (k.type === 'major-city') {
    faq.push({
      question: `Hur många företag i ${k.name} berörs av cybersäkerhetslagen?`,
      answer: `Uppskattningsvis ${k.nis2Estimate} medelstora och stora företag i ${k.name} berörs direkt. Dessutom påverkas ett stort antal underleverantörer genom leverantörskrav. Den breda närvaron av NIS2-sektorer gör ${k.name} till en av de mest berörda kommunerna i Sverige.`,
    });
  }

  return faq;
}

/**
 * Prominent, genuinely-local lead block rendered near the top of each page.
 * Combines the local angle (verified specifics where available, otherwise a
 * sector-grounded sentence) with a sentence naming real employers when
 * recorded. This is the single most page-specific block — the strongest signal
 * that the page is distinct rather than a templated duplicate.
 */
export function getKommunLocalLead(k: Kommun): { angle: string; employers?: string } {
  const angle = getKommunLocalSection(k) as string; // never null
  const employers = resolveEmployers(k);
  const employerSentence =
    employers && employers.length
      ? pick(k, 'lead-emp', [
          `Bland de större arbetsgivarna i ${k.name} finns ${svList(employers)}, verksamheter med leverantörskedjor och digitala beroenden som cybersäkerhetslagen tar sikte på.`,
          `Lokalt präglas ${k.name} av aktörer som ${svList(employers)}, där driftsäkerhet och informationssäkerhet är affärskritiskt.`,
        ])
      : undefined;
  return { angle, employers: employerSentence };
}

/** Varied intro line for the "Så kan vi hjälpa" section. */
export function getKommunHelpIntro(k: Kommun): string {
  const top1 = getSectorLabel(k.dominantSectors[0]).toLowerCase();
  return pick(k, 'help-intro', [
    `Vi arbetar med både kommunala verksamheter och privata företag i ${k.name}, och utgår alltid från er storlek och era resurser.`,
    `För verksamheter inom ${top1} i ${k.name} börjar vi med att kartlägga nuläget och prioriterar sedan det som ger mest säkerhet per insats.`,
    `Oavsett om ni är en stor arbetsgivare eller ett mindre bolag i ${k.name} möter vi er där ni står idag.`,
  ]);
}

/** Three "så hjälper vi"-steps, with the build step varied by kommun type. */
export function getKommunSteps(k: Kommun): { num: string; title: string; text: string }[] {
  const buildNote =
    k.type === 'industrial'
      ? 'Från riskanalyser och policyer till incidenthantering, och vid behov säkerhet i industriella styrsystem (OT).'
      : k.type === 'rural'
        ? 'Vi håller det proportionellt: riskanalys, policyer och incidenthantering i en omfattning som passar en mindre organisation.'
        : 'Från riskanalyser och policyer till incidenthanteringsprocesser, anpassat efter er verksamhet.';
  return [
    {
      num: '1',
      title: 'Kolla läget',
      text: `Vi gör en gap-analys som visar var ni står i förhållande till cybersäkerhetslagens krav. Ingen pärm som samlar damm, utan en tydlig bild av vad som faktiskt behöver göras i ${k.name}.`,
    },
    {
      num: '2',
      title: 'Bygg det som saknas',
      text: `Vi hjälper er implementera åtgärder anpassade efter er storlek och resurser. ${buildNote}`,
    },
    {
      num: '3',
      title: 'Håll koll löpande',
      text: 'Med vår plattform Securapilot får ni realtidsöverblick över ert compliance-arbete. Istället för en årlig revision har ni alltid koll på statusen.',
    },
  ];
}

/** Varied lead sentence for the "Berörda sektorer"-section. */
export function getKommunSectorIntro(k: Kommun): string {
  const n = k.dominantSectors.length;
  return pick(k, 'sector-intro', [
    `${k.name}s kommun omfattas av cybersäkerhetslagen som offentlig förvaltning. Kommunala bolag inom energi, vatten och digital infrastruktur berörs dessutom i sina respektive sektorer. Privata medelstora och stora företag inom följande sektorer omfattas:`,
    `Förutom kommunen själv, som offentlig förvaltning, berörs privata verksamheter i ${k.name} inom ${n} utpekade sektorer. Kommunala bolag inom energi och VA omfattas i sina respektive roller. De dominerande sektorerna lokalt:`,
  ]);
}

/** Varied description for the closing CTA banner. */
export function getKommunCtaText(k: Kommun): string {
  return pick(k, 'cta', [
    `Vi berättar gärna mer om hur vi kan hjälpa er organisation i ${k.name} med NIS2, ISO 27001 och cybersäkerhetslagen.`,
    `Boka ett kostnadsfritt möte så går vi igenom vad cybersäkerhetslagen innebär för just er verksamhet i ${k.name}.`,
    `Hör av er så tittar vi tillsammans på hur långt ni har kvar till efterlevnad, och vad nästa steg blir för er i ${k.name}.`,
  ]);
}

/** Great-circle distance in km between two lat/lng points (haversine). */
function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/**
 * Nearest municipalities by great-circle distance — computed deterministically
 * from lat/lng, so every kommun gets neighbour links without manual data entry.
 * Prefers same-county neighbours, then fills from the rest within `maxKm`.
 */
export function getNeighbours(k: Kommun, count = 4, maxKm = 90): Kommun[] {
  const ranked = kommuner
    .filter((o) => o.slug !== k.slug)
    .map((o) => ({ k: o, dist: haversineKm(k.lat, k.lng, o.lat, o.lng) }))
    .sort((a, b) => a.dist - b.dist);

  const sameCounty = ranked.filter((r) => r.k.county === k.county && r.dist <= maxKm);
  const result = sameCounty.slice(0, count).map((r) => r.k);
  if (result.length < count) {
    for (const r of ranked) {
      if (result.length >= count) break;
      if (r.dist > maxKm) break;
      if (!result.includes(r.k)) result.push(r.k);
    }
  }
  // Guarantee at least the two nearest, even beyond maxKm (sparse north).
  if (result.length < 2) {
    for (const r of ranked) {
      if (result.length >= 2) break;
      if (!result.includes(r.k)) result.push(r.k);
    }
  }
  return result;
}

export type PopulationBand = 'small' | 'mid' | 'large' | 'major';

/** Coarse size band — drives sentence selection so prose varies by scale. */
export function getPopulationBand(k: Kommun): PopulationBand {
  if (k.population >= 150000) return 'major';
  if (k.population >= 50000) return 'large';
  if (k.population >= 15000) return 'mid';
  return 'small';
}

/** Group municipalities by county, sorted alphabetically */
export function getKommunerByCounty(): Record<string, Kommun[]> {
  const grouped: Record<string, Kommun[]> = {};
  for (const k of kommuner) {
    if (!grouped[k.county]) grouped[k.county] = [];
    grouped[k.county].push(k);
  }
  for (const county of Object.keys(grouped)) {
    grouped[county].sort((a, b) => a.name.localeCompare(b.name, 'sv'));
  }
  return Object.fromEntries(
    Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b, 'sv')),
  );
}
