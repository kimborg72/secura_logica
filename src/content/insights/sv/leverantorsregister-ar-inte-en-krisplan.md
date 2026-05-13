---
title: "Ert leverantörsregister är inte en krisplan"
description: "När larmet går räcker det inte att veta vilka leverantörer ni har. Ni behöver veta vad som faktiskt slutar fungera — och vem som ska besluta vad. Från lista till beroendekarta."
date: 2026-05-12
author: "Kim Borg"
category: "Kontinuitet"
draft: false
image: /images/insights/leverantorsregister-ar-inte-en-krisplan.webp
heroImage: /images/insights/hero-leverantorsregister-ar-inte-en-krisplan.webp
tags: ["Leverantörshantering", "Kontinuitet", "Beroendekartläggning", "NIS2", "Cybersäkerhetslagen", "Ledningsansvar", "CISO"]
---

Föreställ er en helt vanlig tisdag. Klockan är 09:14. En medarbetare ringer IT och säger att hen inte kommer in i ärendesystemet. Två minuter senare ringer någon till. Sedan ytterligare fem. Inom en kvart står det klart att ingen kan logga in – inte i ärendesystemet, inte i mejlen, inte i ekonomisystemet. Allt är "uppe". Men inloggningen hos er identitetsleverantör svarar inte.

Vad gör ni nu?

Om svaret är "vi tar fram leverantörsregistret och ser vem vi har avtal med" – då har ni samma utgångsläge som de flesta organisationer i Sverige idag. Och det är inte tillräckligt.

## Registret berättar vad ni har. Inte vad som händer.

Nästan alla organisationer har ett leverantörsregister. Namn, kontrakt, klassificering, senaste granskning. Det är ordnat, prydligt och i många fall ett krav från NIS2 och [cybersäkerhetslagen](/insikter/nis2-cybersakerhetslagen).

Men ett register är en lista. Det är organiserat efter vem ni har avtal med – inte efter vad som faktiskt måste fungera för att verksamheten ska kunna leverera.

Och i det glappet uppstår problemet. För när något händer är frågan sällan "vem har vi avtal med?". Frågan är:

- Vilka beslut kan vi inte fatta just nu?
- Vilka tjänster mot medborgare, kunder eller patienter slutar fungera?
- Hur länge klarar vi oss innan det blir verkliga konsekvenser?
- Vem hos oss ska bestämma vad – och med vilket mandat?

De frågorna besvaras inte av ett register. De besvaras av en beroendekarta.

## Vad "går sönder" egentligen betyder

När ledningsgrupper pratar om driftstörningar tänker många instinktivt på att en server kraschar eller att ett datacenter brinner. Det händer, men det är inte det vanliga.

Det vanliga är mer odramatiskt – och mer förrädiskt:

- **Inloggningen slutar fungera.** Allt är "uppe", men ingen kommer in. Mejl, ärendesystem, ekonomi – samtliga otillgängliga eftersom de förlitar sig på samma identitetstjänst.
- **Ett certifikat går ut.** Två system slutar lita på varandra. Integrationen tystnar. Det syns inte förrän någon undrar varför fakturorna inte kommer fram.
- **En SaaS-leverantör fryser kontot** mitt i en avtalstvist eller efter en utebliven betalning. Tekniken fungerar perfekt. Ni har bara inte längre rätt att använda den.
- **Supporten svarar inte.** Inte under SLA-tiden, inte under första timmen, inte under den tredje. Avtalet säger en sak. Verkligheten en annan.
- **Underleverantörer ni inte visste fanns har problem.** Er SaaS-leverantör använder en annan SaaS som använder en molntjänst som just nu har störningar. Ni har avtal med en. [Verkligheten har fem](/insikter/leveranskedjan-din-storsta-risk).

Inget av detta står i leverantörsregistret. Det måste kartläggas separat.

## Beroendekartan – från lista till handlingsförmåga

En beroendekarta är inte ett dokument. Det är en modell över verksamheten där varje viktig förmåga – att fatta beslut i bygglovsärenden, att betala ut löner, att ta emot patienter – är kopplad till de system, leverantörer och människor som måste fungera för att förmågan ska finnas kvar.

Den gör fyra saker som ett register inte kan göra:

**1. Den visar vad som faktiskt slutar fungera.** När identitetstjänsten är nere räcker det inte att veta att Microsoft är leverantör. Ni behöver veta att 340 medarbetare inte kan fatta beslut, att tre lagstadgade svarstider löper, och att e-tjänsterna utåt fortfarande tar emot ärenden som ingen kan hantera.

**2. Den pekar ut vem som beslutar vad.** En allvarlig störning utlöser sällan ett beslut. Den utlöser tio. Ska e-tjänsten stängas utåt? Ska manuella rutiner aktiveras? Ska medborgare informeras? Vem har mandat att besluta vad – och vem är backup om den personen är på semester? Det måste vara klart innan krisen, inte under den.

**3. Den ger en realistisk bild av uthållighet.** "Hur länge klarar vi oss?" är frågan ledningen alltid ställer. Utan karta blir svaret en gissning. Med karta blir svaret konkret: ekonomi klarar två arbetsdagar eftersom fakturor kan vänta, men löneutbetalningar har en hård deadline på fredag. Det förändrar prioriteringen helt.

**4. Den gör eskaleringen skarpare.** Skillnaden mellan "vår tjänst hos er funkar dåligt" och "er störning blockerar 340 medarbetare från lagstadgade beslut och vi har svarstider som löper" är enorm. Det första är ett supportärende. Det andra flyttar er högt upp i leverantörens prioriteringskö.

## Vad NIS2 och cybersäkerhetslagen faktiskt kräver

Här finns en vanlig missuppfattning. [NIS2 och cybersäkerhetslagen](/insikter/nis2-cybersakerhetslagen) kräver att ni har ordning på era leverantörer – kontrakt, klassificering, granskning. Det är leverantörshantering.

De kräver inte beroendekartläggning explicit. Men de kräver att ni ska kunna hantera incidenter, upprätthålla kontinuitet och rapportera påverkan på samhällsviktig verksamhet inom korta tidsramar. Det är inte möjligt utan att veta vad som faktiskt slutar fungera när en leverantör tystnar.

Med andra ord: leverantörsregistret uppfyller bokstaven. Beroendekartan uppfyller andan – och är det som gör att ni inte står handfallna när det verkligen smäller.

## Var börjar man?

Det enkla svaret: börja inte med tekniken. Börja med verksamheten.

Lista era fem till tio viktigaste förmågor. Inte system – förmågor. "Fatta beslut i bygglovsärenden." "Betala ut löner i tid." "Ta emot akuta patienter." För varje förmåga, ställ tre frågor:

1. Vilka system, tjänster och leverantörer måste fungera för att den här förmågan ska finnas?
2. Vad gör vi om var och en av dem är otillgänglig i sex timmar? I 24 timmar? I tre dagar?
3. Vem hos oss bestämmer vad i varje scenario – och vem är backup?

Det är inte ett tekniskt arbete. Det är ett ledningsarbete. IT kan hjälpa till med kartläggningen, men prioriteringen och beslutsmandaten ägs av verksamheten.

## När det är dags att ta in hjälp

För många organisationer är det här arbetet som ständigt skjuts framåt. Inte för att det saknas insikt om att det behövs, utan för att vardagen är full av andra prioriteringar – och för att kompetensen att leda arbetet ofta inte finns internt.

Det är exakt där VER&IT kommer in. Med vår tjänst [CISO-as-a-Service](/tjanster/ciso-as-a-service) får ni en erfaren säkerhetschef som leder beroendekartläggningen tillsammans med er ledning – utan att ni behöver rekrytera. Och med [SecuraPilot](/securapilot), vår plattform för informationssäkerhet, samlas registret, beroenden, kontinuitetsplaner och incidenthantering på ett ställe så att kartan inte blir ett pdf-dokument som åldras i en mapp.

Resultatet är inte fler dokument. Det är att ledningen, nästa gång larmet går, faktiskt vet vad som händer – och vad ni ska göra.

Den som har ett leverantörsregister har en lista med namn.
Den som har en beroendekarta har en plan.

Vill ni veta hur en beroendekartläggning skulle se ut i er organisation? [Hör av er till oss på VER&IT](/kontakt) – första samtalet är förstås kostnadsfritt.
