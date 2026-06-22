---
title: "Kvanthotet är en ledningsfråga, inte en teknikfråga"
description: "Kvanthotet handlar inte om när kvantdatorn kommer, utan om hur länge er information måste vara hemlig. Så börjar ni övergången till postkvantkryptografi."
date: 2026-06-22
author: "Kim Borg"
category: "Styrning"
draft: false
image: /images/insights/kvanthotet-ledningsfraga.webp
heroImage: /images/insights/hero-kvanthotet-ledningsfraga.webp
tags: ["Postkvantkryptografi", "Kryptografi", "Kvanthot", "NIS2", "Kryptoagilitet", "Informationssäkerhet", "Styrning", "Ledningsansvar"]
---

Er krypterade information kan redan vara kopierad. Den är bara inte dekrypterad än.

Det låter dramatiskt, men mekanismen är enkel och väl dokumenterad. Den har till och med ett eget namn. *Harvest now, decrypt later.* En motståndare samlar in krypterad trafik idag och lägger den på hög. Sedan väntar de på den dag då en kvantdator kan dekryptera alltihop.

## Fel fråga och rätt fråga

Den vanligaste invändningen mot att agera på kvanthotet låter rimlig. Kvantdatorer som kan knäcka dagens kryptering finns inte ännu, så varför lägga tid på det nu.

Men det gör fel fråga till utgångspunkt. Frågan är inte när kvantdatorn kommer. Frågan är hur länge er information behöver vara hemlig.

Tänk på vad ni faktiskt skyddar. Incidentunderlag, visselblåsarärenden, känsliga personuppgifter, affärshemligheter och säkerhetsdokumentation. Sådant kan behöva skyddas i tio år eller mer. Information med så lång konfidentialitetslivslängd är i praktiken redan utsatt. Den som samlar in den idag behöver inte kunna läsa den idag. Det räcker att kunna läsa den innan skyddsbehovet upphör.

## Tidsfönstret krymper snabbare än många tror

Det stora hindret för en kvantdator som hotar kryptering har egentligen aldrig handlat om antalet qubitar. Det har handlat om felkorrigering och skalbarhet, alltså om att hålla beräkningarna stabila tillräckligt länge.

Just där går utvecklingen snabbt nu, och en del av förklaringen är AI. Maskininlärning har visat sig vara förvånansvärt effektiv på precis den typ av felkorrigering och optimering som kvantsystem kräver.

Här gäller det att vara exakt. AI knäcker inte krypteringen. Matematiken bakom dagens algoritmer står sig, och en AI är i grunden bara beräkningar på vanliga datorer. Men AI röjer undan ett av de sista praktiska hindren för den kvantdator som väl kan. Det gör frågan mer brådskande.

Allt är inte heller lika hotat. Symmetrisk kryptering, som AES med tillräcklig nyckellängd, står emot kvantangrepp. Problemet ligger i publik nyckelkryptografi, alltså RSA och ECC, som används för nyckelutbyte och digitala signaturer. Det är där arbetet ska börja.

## EU har redan pekat ut riktningen

Det här är inte längre bara en teknisk diskussion. EU och medlemsstaterna har enats om en samordnad färdplan för övergången till postkvantkryptografi, och den ger konkreta hållpunkter.

Övergången bör vara påbörjad senast vid utgången av 2026. För kritisk infrastruktur är riktningen ännu tydligare. Skyddet bör vara omställt så snart som möjligt och senast 2030. Resterande system ska följa fram mot 2035, så långt det är praktiskt möjligt.

Färdplanen är formellt en rekommendation, men den ska inte avfärdas som oförbindande. För verksamheter som omfattas av [NIS2 och cybersäkerhetslagen](/tjanster/nis2) får den verkan genom nationell implementering, tillsyn och de krav som ställs i leveranskedjan. Den som väntar på en uttrycklig paragraf riskerar att börja för sent.

## Därför är det ett ledningsbeslut

Här ligger poängen som lätt missas. Övergången till postkvantkryptografi är inte en uppgift att skicka nedåt i organisationen och bocka av. Det är ett ledningsbeslut.

De avgörande frågorna är inte tekniska, de är strategiska. Vilken information har vi inte råd att förlora om tio år. Hur stor risk är vi beredda att acceptera under tiden. Och vem hos oss äger övergången på riktigt. Den frågan om ägarskap är ofta den svåraste, och den är en av anledningarna till att en [CISO som tjänst](/tjanster/ciso-as-a-service) kan vara rätt väg för den som saknar funktionen internt.

Det är frågor som hör hemma vid ledningsbordet, inte i en teknisk backlog. Tekniken kommer sedan.

## Var ni börjar

Det första steget är inte att byta ut all kryptografi. Det vore varken möjligt eller meningsfullt. Det första steget är att skaffa er insyn.

Börja med två saker. Ta reda på var i era system ni faktiskt använder publik nyckelkryptografi, som RSA och ECC. Och [klassificera er information](/tjanster/iso27001) efter hur länge den behöver vara skyddad.

Tillsammans ger det er en kryptoinventering, gärna i ett strukturerat format. Den blir grunden för allt som följer. När ni vet var den känsliga kryptografin sitter och hur länge informationen bakom den behöver hålla, kan ni prioritera. Då blir kryptografisk status något ni kan mäta och styra, inte något ni bara antar.

En princip bär hela det här arbetet. Bygg för kryptoagilitet. Den organisation som kan byta algoritm utan att bygga om hela systemet är den som klarar både 2030 och det som kommer efter. Det handlar om att versionera själva algoritmen, inte bara nyckeln.

Metod först. Verktyg sedan. Säkerhet alltid.

## Slutsats

Kvanthotet är varken science fiction eller en avlägsen framtidsfråga. Det är en konsekvens av två kurvor som rör sig samtidigt. Kvantdatorernas mognad och AI:s förmåga att påskynda den. Båda pekar åt samma håll, och båda gör att tiden att förbereda sig krymper.

Den verksamhet som börjar med en ärlig kartläggning står starkare än den som väntar på beviset. Frågan att ta med till nästa ledningsmöte är enkel. Vilken information skulle skada er mest om den dekrypterades om tio år.

Vi på VER&IT hjälper kommuner, myndigheter och företag att gå från oro till plan. Vill ni veta var er kryptografi står idag är en kryptoinventering rätt första steg. [Hör av er till oss](/kontakt), så tar vi ett samtal om er kvantberedskap.
