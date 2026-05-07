# Säkerhetspolicy för verit.se

## Rapportera en sårbarhet

Hittar du en säkerhetsbrist i verit.se eller relaterade tjänster — skicka ett mail till **security@verit.se**.

Vi svarar inom **5 arbetsdagar**. Skicka gärna med:

- En beskrivning av sårbarheten och dess potentiella påverkan.
- Steg för att reproducera (URL, payload, request).
- Eventuell exploatering eller proof-of-concept.
- Ditt namn för att kunna ge erkännande (frivilligt).

Vi följer principen om **coordinated disclosure**. Publicera inte detaljer offentligt innan vi har haft chans att åtgärda problemet.

## Omfattning

- `https://verit.se` (huvudwebbplats)
- `https://www.verit.se`
- `https://stats.securapilot.com` (Matomo-instans)

Out of scope:

- Tredjepartsleverantörer (Google Maps, MapLibre/CARTO).
- Subdomäner som inte listas ovan.
- Saker som täcks av automatiska skanners (saknad SRI på Google Maps, etc) — dessa är dokumenterade residualer nedan.

## Säkerhetsåtgärder

### HTTP-headers

Säkerhets-headers sätts av wrapper-server ([server.mjs](server.mjs)) som körs framför Astros standalone-handler — så att även prerenderade statiska filer får headers (Astro middleware kör annars bara för SSR-rutter):

- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options: DENY` + CSP `frame-ancestors 'none'`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` deaktiverar kamera, mikrofon, geolocation, payment, USB.
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-origin`
- `Content-Security-Policy-Report-Only` med `'self' 'unsafe-inline'` för script/style (jfr residualer nedan).

### CSRF-skydd

API-endpointen [`/api/contact`](src/pages/api/contact.ts) använder Origin-validering mot allowlist (verit.se, www.verit.se) — OWASP:s rekommenderade moderna metod. Honeypot-fält och rate limiting (5 requests/15min/IP) finns dessutom. Token-baserade CSRF-cookies används **inte** eftersom sajten inte har sessions.

### Övrigt

- Mail skickas via mail relay (ingen SMTP exponerad).
- TinaCMS admin-gränssnitt är publikt på `/admin` men kräver autentisering mot tinajs.io för att redigera.
- Inga tredjepartscookies. Matomo-tracking kräver explicit consent.

## Kända residualer

Vissa fynd från automatiska skanners är dokumenterade som accepterade residualer:

| Fynd | Anledning |
|---|---|
| Google Maps JS API utan SRI | Google roterar bundlen — SRI är inte möjligt enligt Maps EULA. |
| `style-src 'unsafe-inline'` | Astro 5 + Tailwind v4 injicerar scoped styles + view-transitions. Hardening pågår. |
| `script-src 'unsafe-inline'` | Sajten är till största delen prerenderad — per-request nonces fungerar inte i statisk HTML. Komponenterna har förberetts med nonce-attribut för framtida hardening till SSR-only. |
| ZAP "Absence of Anti-CSRF Tokens" | False positive — Origin-validering är OWASP-rekommenderad ekvivalent. |
| ZAP "Suspicious Comments" på `XXX` | False positive — `ESSESESSXXX` är SWIFT/BIC-kod (SEB). |
