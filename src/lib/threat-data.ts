/* ---------- types ---------- */

interface KevVulnerability {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  dueDate: string;
  knownRansomwareCampaignUse: 'Known' | 'Unknown';
}

interface KevFeed {
  title: string;
  catalogVersion: string;
  dateReleased: string;
  count: number;
  vulnerabilities: KevVulnerability[];
}

interface NvdCve {
  id: string;
  descriptions: { lang: string; value: string }[];
  metrics?: {
    cvssMetricV31?: { cvssData: { baseScore: number; baseSeverity: string } }[];
    cvssMetricV40?: { cvssData: { baseScore: number; baseSeverity: string } }[];
  };
  published: string;
}

interface NvdResponse {
  totalResults: number;
  vulnerabilities: { cve: NvdCve }[];
}

export type ThreatLayer = 'attacks' | 'malware' | 'blocklist' | 'urlhaus' | 'compromised' | 'ciarmy';

export interface AttackSource {
  country: string;
  code: string;
  count: number;
  lat: number;
  lng: number;
  layer: ThreatLayer;
}

export interface ThreatData {
  kev: {
    total: number;
    last30Days: number;
    ransomwareCount: number;
    recentVulnerabilities: {
      cveID: string;
      vendor: string;
      product: string;
      name: string;
      dateAdded: string;
      ransomware: boolean;
    }[];
    topVendors: { name: string; count: number }[];
  };
  nvd: {
    last7Days: number;
    criticalCount: number;
    highCount: number;
    recentCritical: {
      id: string;
      description: string;
      score: number;
      severity: string;
      published: string;
    }[];
  };
  attackSources: AttackSource[];
  updatedAt: string;
}

/* ---------- cache ---------- */

const CACHE_TTL = 60 * 60 * 1000; // 1 hour
let cachedData: ThreatData | null = null;
let cacheTimestamp = 0;

/* ---------- helpers ---------- */

/** Fetch with a timeout to prevent slow APIs from blocking the page. */
function fetchWithTimeout(url: string | URL, init?: RequestInit, timeoutMs = 10_000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url.toString(), { ...init, signal: controller.signal }).finally(() => clearTimeout(timer));
}

function daysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

function getCvssScore(cve: NvdCve): { score: number; severity: string } {
  const v40 = cve.metrics?.cvssMetricV40?.[0]?.cvssData;
  if (v40) return { score: v40.baseScore, severity: v40.baseSeverity };
  const v31 = cve.metrics?.cvssMetricV31?.[0]?.cvssData;
  if (v31) return { score: v31.baseScore, severity: v31.baseSeverity };
  return { score: 0, severity: 'NONE' };
}

/* ---------- country centroids ---------- */

const countryCentroids: Record<string, { lat: number; lng: number; name: string }> = {
  US: { lat: 39.8, lng: -98.5, name: 'United States' },
  CN: { lat: 35.9, lng: 104.2, name: 'China' },
  RU: { lat: 61.5, lng: 105.3, name: 'Russia' },
  DE: { lat: 51.2, lng: 10.5, name: 'Germany' },
  NL: { lat: 52.1, lng: 5.3, name: 'Netherlands' },
  GB: { lat: 55.4, lng: -3.4, name: 'United Kingdom' },
  FR: { lat: 46.2, lng: 2.2, name: 'France' },
  IN: { lat: 20.6, lng: 79.0, name: 'India' },
  BR: { lat: -14.2, lng: -51.9, name: 'Brazil' },
  KR: { lat: 35.9, lng: 127.8, name: 'South Korea' },
  JP: { lat: 36.2, lng: 138.3, name: 'Japan' },
  VN: { lat: 14.1, lng: 108.3, name: 'Vietnam' },
  TW: { lat: 23.7, lng: 121.0, name: 'Taiwan' },
  ID: { lat: -0.8, lng: 113.9, name: 'Indonesia' },
  SG: { lat: 1.4, lng: 103.8, name: 'Singapore' },
  UA: { lat: 48.4, lng: 31.2, name: 'Ukraine' },
  CA: { lat: 56.1, lng: -106.3, name: 'Canada' },
  AU: { lat: -25.3, lng: 133.8, name: 'Australia' },
  PL: { lat: 51.9, lng: 19.1, name: 'Poland' },
  IT: { lat: 41.9, lng: 12.6, name: 'Italy' },
  SE: { lat: 60.1, lng: 18.6, name: 'Sweden' },
  ES: { lat: 40.5, lng: -3.7, name: 'Spain' },
  TR: { lat: 39.0, lng: 35.2, name: 'Turkey' },
  TH: { lat: 15.9, lng: 100.9, name: 'Thailand' },
  MX: { lat: 23.6, lng: -102.6, name: 'Mexico' },
  ZA: { lat: -30.6, lng: 22.9, name: 'South Africa' },
  AR: { lat: -38.4, lng: -63.6, name: 'Argentina' },
  HK: { lat: 22.4, lng: 114.1, name: 'Hong Kong' },
  IL: { lat: 31.0, lng: 34.9, name: 'Israel' },
  IR: { lat: 32.4, lng: 53.7, name: 'Iran' },
  PK: { lat: 30.4, lng: 69.3, name: 'Pakistan' },
  BD: { lat: 23.7, lng: 90.4, name: 'Bangladesh' },
  RO: { lat: 45.9, lng: 24.97, name: 'Romania' },
  CZ: { lat: 49.8, lng: 15.5, name: 'Czech Republic' },
  BG: { lat: 42.7, lng: 25.5, name: 'Bulgaria' },
  CO: { lat: 4.6, lng: -74.3, name: 'Colombia' },
  CL: { lat: -35.7, lng: -71.5, name: 'Chile' },
  EG: { lat: 26.8, lng: 30.8, name: 'Egypt' },
  NG: { lat: 9.1, lng: 8.7, name: 'Nigeria' },
  KE: { lat: -0.02, lng: 37.9, name: 'Kenya' },
};

/* ---------- IP geolocation helper ---------- */

interface IpApiResult {
  query: string;
  countryCode?: string;
  lat?: number;
  lon?: number;
  status?: string;
}

async function batchGeolocate(ips: string[]): Promise<Map<string, IpApiResult>> {
  const geoMap = new Map<string, IpApiResult>();
  if (ips.length === 0) return geoMap;

  const geoRes = await fetchWithTimeout('http://ip-api.com/batch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ips.slice(0, 100).map((ip) => ({
      query: ip,
      fields: 'query,countryCode,lat,lon,status',
    }))),
  });

  if (!geoRes.ok) return geoMap;
  const geoData: IpApiResult[] = await geoRes.json();

  for (const g of geoData) {
    if (g.status === 'success' && g.countryCode) {
      geoMap.set(g.query, g);
    }
  }
  return geoMap;
}

function aggregateByCountry(
  geoMap: Map<string, IpApiResult>,
  layer: ThreatLayer,
  countPerIp?: Map<string, number>,
): AttackSource[] {
  const countryAgg = new Map<string, number>();

  for (const [ip, geo] of geoMap) {
    const code = geo.countryCode!;
    const count = countPerIp?.get(ip) ?? 1;
    countryAgg.set(code, (countryAgg.get(code) || 0) + count);
  }

  return [...countryAgg.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25)
    .map(([code, count]) => {
      const centroid = countryCentroids[code];
      const fallback = [...geoMap.values()].find((g) => g.countryCode === code);
      return {
        country: centroid?.name || code,
        code,
        count,
        lat: centroid?.lat ?? fallback?.lat ?? 0,
        lng: centroid?.lng ?? fallback?.lon ?? 0,
        layer,
      };
    })
    .filter((s) => s.lat !== 0 || s.lng !== 0);
}

/* ---------- Source 1: SANS ISC Country data (232 countries) ---------- */

interface SansCountryEntry {
  country: string;
  reports: number;
  sources: number;
  targets: number;
}

async function fetchSansCountryData(): Promise<AttackSource[]> {
  const res = await fetchWithTimeout('https://isc.sans.edu/api/country/US?json', {
    headers: {
      'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)',
      Accept: 'application/json',
    },
  });
  if (!res.ok) throw new Error(`SANS ISC country responded ${res.status}`);
  const data: SansCountryEntry[] = await res.json();

  return data
    .filter((c) => c.country && countryCentroids[c.country] && c.reports > 0)
    .sort((a, b) => b.reports - a.reports)
    .slice(0, 30)
    .map((c) => ({
      country: countryCentroids[c.country].name,
      code: c.country,
      count: c.reports,
      lat: countryCentroids[c.country].lat,
      lng: countryCentroids[c.country].lng,
      layer: 'attacks' as ThreatLayer,
    }));
}

/* ---------- Source 2: ThreatFox malware C2 servers ---------- */

async function fetchThreatFoxC2(): Promise<AttackSource[]> {
  const res = await fetchWithTimeout('https://threatfox.abuse.ch/export/json/recent/', {
    headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' },
  });
  if (!res.ok) throw new Error(`ThreatFox responded ${res.status}`);
  const data: Record<string, { ioc_value: string; ioc_type: string }[]> = await res.json();

  // Extract IPs from ip:port entries
  const ips: string[] = [];
  for (const entries of Object.values(data)) {
    for (const e of entries) {
      if (e.ioc_type === 'ip:port') {
        const ip = e.ioc_value.split(':')[0];
        if (ip && !ips.includes(ip)) ips.push(ip);
      }
    }
  }

  if (ips.length === 0) return [];
  const geoMap = await batchGeolocate(ips);
  return aggregateByCountry(geoMap, 'malware');
}

/* ---------- Source 3: Blocklist.de (sampled) ---------- */

async function fetchBlocklistDe(): Promise<AttackSource[]> {
  const res = await fetchWithTimeout('https://lists.blocklist.de/lists/all.txt', {
    headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' },
  });
  if (!res.ok) throw new Error(`Blocklist.de responded ${res.status}`);
  const text = await res.text();
  const allIps = text.trim().split('\n').filter((l) => l && !l.startsWith('#'));

  // Sample 100 random IPs for geolocation (ip-api.com max 100 per batch)
  const sampled: string[] = [];
  const step = Math.max(1, Math.floor(allIps.length / 100));
  for (let i = 0; i < allIps.length && sampled.length < 100; i += step) {
    sampled.push(allIps[i]);
  }

  if (sampled.length === 0) return [];
  const geoMap = await batchGeolocate(sampled);
  return aggregateByCountry(geoMap, 'blocklist');
}

/* ---------- Source 4: URLhaus (abuse.ch) — malware distribution ---------- */

async function fetchUrlhaus(): Promise<AttackSource[]> {
  const res = await fetchWithTimeout('https://urlhaus.abuse.ch/downloads/csv_recent/', {
    headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' },
  });
  if (!res.ok) throw new Error(`URLhaus responded ${res.status}`);
  const text = await res.text();

  // Extract IPs from URLs like http://1.2.3.4:1234/path
  const ipRegex = /https?:\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
  const ips: string[] = [];
  for (const line of text.split('\n')) {
    if (line.startsWith('#') || line.startsWith('"id"')) continue;
    const match = line.match(ipRegex);
    if (match && !ips.includes(match[1])) ips.push(match[1]);
  }

  if (ips.length === 0) return [];
  const geoMap = await batchGeolocate(ips);
  return aggregateByCountry(geoMap, 'urlhaus');
}

/* ---------- Source 5: Emerging Threats — compromised IPs ---------- */

async function fetchEmergingThreats(): Promise<AttackSource[]> {
  const res = await fetchWithTimeout('https://rules.emergingthreats.net/blockrules/compromised-ips.txt', {
    headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' },
  });
  if (!res.ok) throw new Error(`Emerging Threats responded ${res.status}`);
  const text = await res.text();
  const ips = text.trim().split('\n').filter((l) => l && !l.startsWith('#') && /^\d/.test(l));

  if (ips.length === 0) return [];
  const geoMap = await batchGeolocate(ips);
  return aggregateByCountry(geoMap, 'compromised');
}

/* ---------- Source 6: CI Army — known bad IPs ---------- */

async function fetchCiArmy(): Promise<AttackSource[]> {
  const res = await fetchWithTimeout('https://cinsscore.com/list/ci-badguys.txt', {
    headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' },
  });
  if (!res.ok) throw new Error(`CI Army responded ${res.status}`);
  const text = await res.text();
  const allIps = text.trim().split('\n').filter((l) => l && !l.startsWith('#') && /^\d/.test(l));

  // Sample 100 from ~15K IPs
  const sampled: string[] = [];
  const step = Math.max(1, Math.floor(allIps.length / 100));
  for (let i = 0; i < allIps.length && sampled.length < 100; i += step) {
    sampled.push(allIps[i]);
  }

  if (sampled.length === 0) return [];
  const geoMap = await batchGeolocate(sampled);
  return aggregateByCountry(geoMap, 'ciarmy');
}

/* ---------- Combined attack sources ---------- */

async function fetchAttackSources(): Promise<AttackSource[]> {
  const results = await Promise.allSettled([
    fetchSansCountryData(),
    fetchThreatFoxC2(),
    fetchBlocklistDe(),
    fetchUrlhaus(),
    fetchEmergingThreats(),
    fetchCiArmy(),
  ]);

  const labels = ['SANS ISC', 'ThreatFox', 'Blocklist.de', 'URLhaus', 'Emerging Threats', 'CI Army'];
  const sources: AttackSource[] = [];

  results.forEach((r, i) => {
    if (r.status === 'fulfilled') sources.push(...r.value);
    else console.error(`${labels[i]} fetch failed:`, r.reason);
  });

  return sources;
}

/* ---------- data fetching ---------- */

async function fetchKev(): Promise<ThreatData['kev']> {
  // Primary: official CISA GitHub mirror (not behind Akamai WAF that blocks datacenter IPs)
  // Fallback: original cisa.gov URL (works from residential IPs)
  const kevUrls = [
    'https://raw.githubusercontent.com/cisagov/kev-data/main/known_exploited_vulnerabilities.json',
    'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json',
  ];
  const kevInit = { headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' } };

  let res: Response | null = null;
  for (const url of kevUrls) {
    try {
      const r = await fetchWithTimeout(url, kevInit, 30_000);
      if (r.ok) { res = r; break; }
    } catch { /* try next URL */ }
  }
  if (!res) throw new Error('CISA KEV: all sources failed');
  const feed: KevFeed = await res.json();

  const thirtyDaysAgo = daysAgo(30);
  const recent = feed.vulnerabilities
    .filter((v) => v.dateAdded >= thirtyDaysAgo)
    .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));

  const ransomwareCount = feed.vulnerabilities.filter(
    (v) => v.knownRansomwareCampaignUse === 'Known',
  ).length;

  const today = new Date().toISOString().slice(0, 10);
  const activeVulns = feed.vulnerabilities.filter((v) => v.dueDate >= today);
  const vendorCounts = new Map<string, number>();
  for (const v of activeVulns) {
    vendorCounts.set(v.vendorProject, (vendorCounts.get(v.vendorProject) || 0) + 1);
  }
  const topVendors = [...vendorCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  const recentVulnerabilities = feed.vulnerabilities
    .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
    .slice(0, 10)
    .map((v) => ({
      cveID: v.cveID,
      vendor: v.vendorProject,
      product: v.product,
      name: v.vulnerabilityName,
      dateAdded: v.dateAdded,
      ransomware: v.knownRansomwareCampaignUse === 'Known',
    }));

  return {
    total: feed.count,
    last30Days: recent.length,
    ransomwareCount,
    recentVulnerabilities,
    topVendors,
  };
}

async function fetchNvd(): Promise<ThreatData['nvd']> {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const url = new URL('https://services.nvd.nist.gov/rest/json/cves/2.0');
  url.searchParams.set('pubStartDate', weekAgo.toISOString());
  url.searchParams.set('pubEndDate', now.toISOString());
  url.searchParams.set('resultsPerPage', '100');

  const res = await fetchWithTimeout(url.toString(), {
    headers: { 'User-Agent': 'Verit-ThreatDashboard/1.0 (https://verit.se)' },
  });
  if (!res.ok) throw new Error(`NVD responded ${res.status}`);
  const data: NvdResponse = await res.json();

  let criticalCount = 0;
  let highCount = 0;
  const criticalCves: ThreatData['nvd']['recentCritical'] = [];

  for (const { cve } of data.vulnerabilities) {
    const { score, severity } = getCvssScore(cve);
    if (severity === 'CRITICAL') {
      criticalCount++;
      if (criticalCves.length < 5) {
        const desc = cve.descriptions.find((d) => d.lang === 'en')?.value || '';
        criticalCves.push({
          id: cve.id,
          description: desc.length > 200 ? desc.slice(0, 197) + '...' : desc,
          score,
          severity,
          published: cve.published,
        });
      }
    } else if (severity === 'HIGH') {
      highCount++;
    }
  }

  return {
    last7Days: data.totalResults,
    criticalCount,
    highCount,
    recentCritical: criticalCves,
  };
}

export async function fetchThreatData(): Promise<ThreatData> {
  if (cachedData && Date.now() - cacheTimestamp < CACHE_TTL) {
    return cachedData;
  }

  const [kev, nvd, attacks] = await Promise.allSettled([fetchKev(), fetchNvd(), fetchAttackSources()]);

  const result: ThreatData = {
    kev: kev.status === 'fulfilled'
      ? kev.value
      : { total: 0, last30Days: 0, ransomwareCount: 0, recentVulnerabilities: [], topVendors: [] },
    nvd: nvd.status === 'fulfilled'
      ? nvd.value
      : { last7Days: 0, criticalCount: 0, highCount: 0, recentCritical: [] },
    attackSources: attacks.status === 'fulfilled' ? attacks.value : [],
    updatedAt: new Date().toISOString(),
  };

  if (kev.status === 'rejected') console.error('CISA KEV fetch failed:', kev.reason);
  if (nvd.status === 'rejected') console.error('NVD fetch failed:', nvd.reason);
  if (attacks.status === 'rejected') console.error('SANS ISC fetch failed:', attacks.reason);

  if (kev.status === 'fulfilled' || nvd.status === 'fulfilled') {
    cachedData = result;
    cacheTimestamp = Date.now();
  }

  return result;
}
