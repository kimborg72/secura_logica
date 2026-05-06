---
title: "What was right yesterday isn't right today"
description: "Europe isn't stuck with the hyperscalers by force. We made good decisions and stopped reconsidering them. NIS2, DORA and the Cybersecurity Act now make reconsideration a formal duty."
date: 2026-05-05
author: "Kim Borg"
category: "Governance"
draft: false
image: /images/insights/ratt-igar-inte-ratt-idag.webp
heroImage: /images/insights/hero-ratt-igar-inte-ratt-idag.webp
tags: ["Sovereignty", "Vendor Dependence", "DORA", "NIS2", "Cybersecurity Act", "Governance", "Hyperscaler"]
---

There's a story taking root in the European debate about digital sovereignty. It says we're stuck with the American hyperscalers. That we never had a choice. That geopolitics could pull the rug out from under us any day. That we're victims of circumstances we couldn't control.

The story is comfortable. It's also wrong.

What happened wasn't that we made bad decisions. What happened was that we made good decisions, and then stopped reconsidering them.

That distinction decides what happens next.

## Good decisions have a shelf life

When a Swedish public agency or company chose Microsoft 365 in 2015, it was a good decision. The cost was manageable. Availability was high. The skills existed in the labour market. Security was better than the in-house alternative. The risk of geopolitical friction was theoretical.

When the same organisation added identity, then files, then reporting, then AI services, each step was also rational. Each one could be defended with the same argument as the first. Each one built on the previous.

This isn't where the problem started.

The problem started when the world around the decisions changed, but the decisions themselves were never reconsidered. When that reconsideration didn't happen, the consequences became visible across several dimensions at once.

## The bill that grew in the meantime

The first dimension is financial.

Microsoft made its first broad commercial price increase on Microsoft 365 in March 2022, between 8 and 25 percent. It was the first substantial increase since Office 365 launched in 2011. In April 2023 a 15 percent increase followed for Swedish customers, tied to a new biannual currency adjustment mechanism against the USD. These weren't standalone decisions any more. It was a structural mechanism that allowed prices to be adjusted twice a year.

In January 2025, consumer prices for Microsoft 365 Personal and Family were raised for the first time in over a decade, between 30 and 43 percent, while Copilot was bundled into the service. In April 2025 all annual licences with monthly billing went up 5 percent, and Power BI Pro by up to 40 percent. On 4 December 2025 Microsoft announced another global price adjustment effective 1 July 2026, between 5 and 33 percent, justified by AI and security features that can't be opted out of.

For a Swedish organisation, the cumulative licence cost for standard packages has risen on the order of 70 to 100 percent since 2020, depending on package, contract form and add-ons. As a worked example: for a municipality with 2,000 employees, that's the difference between roughly 1.2 million and 2.2 million SEK per year for the lowest licence tier alone, before Copilot, security add-ons or Power BI are counted.

Broadcom has, since acquiring VMware in 2023, pushed through price increases that according to the trade association CISPE exceed 1,000 percent, in some cases up to 1,500 percent. In January 2026 Broadcom also ended its European VMware Cloud Service Provider programme, which prompted CISPE to file a formal competition complaint with the European Commission in March 2026. For customers whose workloads are certified only for VMware, switching isn't a configuration question but an architecture exercise that takes time and costs serious money.

This isn't competition. It's pricing power over organisations that no longer have an exit.

## The security that gets quietly cut

When the licence budget grows faster than the IT budget as a whole, the saving happens somewhere else. It happens to security skills that can't be hired any more. To incident response that gets postponed. To redundancy architecture that never gets built. To log monitoring that gets outsourced to the lowest bidder. To training that was cut last round.

This isn't theory. It's what every CISO sees in their budget right now. The money that used to protect the organisation now finances staying with the supplier that raised the price. It's a reallocation from proactive security to passive dependency funding, and it happens without any board explicitly making the call.

The second security dimension is systemic. [Concentration itself is a vulnerability](/en/insights/supply-chain-your-biggest-risk). When a large share of Europe's digital infrastructure sits with two or three providers, every disruption at any of them becomes a systemic event.

In October 2025 two such events happened nine days apart. On 20 October, AWS region US-EAST-1 went down for around 15 hours after a DNS-related configuration error. Thousands of services were knocked out globally, from airlines and payment systems to healthcare platforms. On 29 October, Azure Front Door went down after an inadvertent configuration change. Microsoft 365, Outlook, Xbox, Copilot and third-party services at Alaska Airlines and Hawaiian Airlines, among others, were all knocked offline. Estimated economic damage from the Azure event alone runs to as much as 16 billion USD.

Neither was an attack. Both were configuration errors.

A motivated attacker looking for maximum impact already has the map. It's the same map that every European government has when they plan continuity exercises and find no independent nodes to fall back on. Concentration isn't only a competition policy question. It's an attack surface. And we designed it ourselves, one migration at a time, every time we picked the easiest option.

## The legal question that's no longer theoretical

The third dimension is jurisdictional, and even there what was previously described as theoretical has become documented.

On 6 February 2025, the Trump administration issued an executive order placing the ICC's Chief Prosecutor Karim Khan under American sanctions. In May 2025, Associated Press reported that Khan had lost access to his Microsoft email and had moved his correspondence to Proton. Microsoft has denied that it disabled the account and stated that the ICC made the move itself. The exact technical sequence is still disputed, but the outcome isn't: one of the world's most consequential legal actors lost access to his digital workplace after an American government decision. On 31 October 2025 the ICC confirmed it is moving from Microsoft Office to Germany's OpenDesk.

On 10 June 2025, Anton Carniaux, Microsoft France's directeur des affaires publiques et juridiques, testified under oath before the French Senate's inquiry committee. Asked whether he could guarantee that French citizen data would never be handed to American authorities without French government approval, he replied: "Non, je ne peux pas le garantir." The legal truth, he said, is that technical and contractual safeguards can reduce the risk but not negate the effect of an American court order against an American company.

The CLOUD Act is no longer an abstract risk in a legal seminar. It's a documented legal fact with practical consequences, confirmed under oath.

## What the legislator actually did

Three regulations have now come into force with a shared underlying logic. [The Cybersecurity Act 2025:1506, NIS2 and DORA no longer accept that supplier choice is an operational matter](/en/insights/six-frameworks-one-governance-model) decided once and then forgotten.

NIS2 article 20 places [responsibility for cybersecurity measures directly at board level](/en/insights/cybersecurity-act-leadership-accountability), with personal liability for members who haven't ensured risk management is in place. DORA goes further for the financial sector and requires formal handling of concentration risk across ICT providers, with documented exit strategies that must be auditable. The Cybersecurity Act has been in force in Swedish law since 15 January 2026, with the Swedish Civil Defence Agency (MCF) as the coordinating authority and sector-specific supervisors across 18 sectors, including PTS for digital infrastructure, the Energy Agency for energy and Finansinspektionen for financial actors.

These aren't three different regulations that happen to address similar things. It's a coordinated shift of responsibility upwards in the organisation, combined with a requirement for ongoing reconsideration. Not as a one-time decision. As a continuous governance process.

That shift is what makes the victim narrative so attractive right now. When responsibility was distributed and static, no one could be singled out. When responsibility is concentrated, personal and dynamic, an explanation is needed that doesn't land with the person now holding the bag.

The story that we were forced into this position is one such explanation. It just doesn't work regulatorily. And it doesn't work financially either, because the cash drain is visible in every quarterly report.

## The landscape that's actually being built

It's worth lifting the gaze here. Johan Linåker at RISE published a broad survey in March 2026 of digital sovereignty initiatives in Sweden and Europe. The picture he paints is more hopeful than the debate often suggests.

In Sweden, AI-verkstaden brings together Försäkringskassan and Skatteverket to strengthen civil preparedness and digital sovereignty. The SAFOS platform that Försäkringskassan is developing offers open communication and collaboration tools to other agencies. The City of Helsingborg is doing hands-on dependency mapping of its IT estate. Sambruk gathers more than half of Sweden's municipalities around joint collaboration projects with growing focus on open solutions. Alingsås and Sundsvall are running practical open-source work. Sundsvall's Eneo platform for AI is growing. The KB models are being developed. RESIST and WASP are investing in research.

In Europe, Germany has its centre for digital sovereignty, ZenDIS, with the OpenDesk productivity suite. France has DINUM with La Suite Numérique and has announced a move to Linux-based operating systems. Schleswig-Holstein has migrated about 80 percent of its dependencies away from non-European providers. Aarhus and Amsterdam are making the same directional choice. Denmark has produced a national roadmap. At EU level, EDIC-DC is forming, a collaboration body for digital commons that Italy and Luxembourg have already joined.

Linåker's diagnosis is sharp: the knowledge exists, both through frameworks and through pioneers. The initiatives exist, both nationally and locally. The problem is that they remain fragmented and lack coordination and a coherent strategy.

It's a correct observation. And it places responsibility at the right level: political coordination needs to come from political level. But that doesn't mean individual organisations should wait. The opposite. Fragmentation at system level isn't solved by individual organisations, but every individual organisation can start with its own structure. And if enough of them do, coordination becomes easier when it eventually comes.

## Reconsideration isn't regret

This is a distinction that matters.

Reconsidering a decision doesn't mean admitting the decision was wrong. It means acknowledging that the conditions have changed. An organisation that moved from local servers to the cloud in 2015 made the right decision then. The same organisation reconsidering that decision in 2026 is also making the right decision, because the world in which the first decision was made no longer exists.

The problem isn't the decisions. The problem is the absence of a reconsideration process.

In most organisations there's no formal mechanism for regularly asking the question: is this still the right choice? Contracts renew automatically. Integrations deepen. Skills are built around existing platforms. An organisational inertia is created where reconsideration becomes an active act, while continued use is passive.

That's where the governance structure breaks. Not in the decisions themselves, but in the absence of a cycle that forces reconsideration before a regulator does.

## What you can actually do

The first task isn't to switch supplier. It's to establish a reconsideration cycle.

Which decisions were made five years ago based on conditions that no longer apply? Which dependencies emerged gradually without ever being formally approved? Which contracts renew next year, and what would it take for that renewal to become an actual reconsideration rather than a formality?

The second task is to separate deliberate dependencies from accumulated ones. A deliberate dependency has an owner, an exit plan and a documented reasoning for why the benefit outweighs the risk under current conditions. An accumulated dependency has none of this. The first is manageable. The second is a ticking regulatory debt.

The third task is to build reconsideration into ongoing governance. Concentration risk across ICT providers needs to be reported to the board regularly, not at crisis. Changes in regulation, geopolitics and supplier terms need to trigger formal reviews. It's not the board's fault that it doesn't see something no one shows it. But after NIS2 and DORA it's the board's responsibility to ask to see it. And as we noted in [The maturity report is written for the board](/en/insights/the-maturity-report-isnt-built-for-the-crisis): a board that has only read about the risk hasn't tested its ability to handle it.

The fourth task is to treat new decisions differently. The next contract renewal, the next system choice, the next AI integration aren't standalone decisions. They are additions to an already existing risk position under conditions that will change again.

## Sovereignty isn't a state

The discussion of digital sovereignty has got stuck in a false binary. Either you stay with the hyperscalers, or you rebuild everything. That framing serves no one.

Försäkringskassan and Skatteverket put it pragmatically in their government assignment on AI-verkstaden: full control in the literal sense is "in most cases probably an impossibility for a country like Sweden." Nor is it the goal. The goal is "an acceptable level of digital sovereignty and good preparedness."

That's the right framing. Sovereignty isn't a state you achieve. It's an ability to continually reconsider your decisions when conditions change.

An organisation can stay on the same platform for ten years and still be sovereign, if the decision to stay is made deliberately, regularly, and with visibility over the alternatives. Another organisation can migrate to EU-based infrastructure and still be unsovereign, if the migration was a one-time decision that's never reconsidered.

It isn't the platform that decides. It's the cycle.

## What's left

What was right yesterday isn't right today, or for the future. That isn't an accusation against those who made yesterday's decisions. It's a description of what's required of those making today's.

Because there was a choice. There were a hundred choices. Each of them was made by someone, somewhere in the organisation, often without the cumulative effect ever becoming visible to anyone with a mandate to do something about it.

It isn't coercion. It's [governance debt](/en/insights/compliance-cost-governance-debt). And governance debt can be paid down. One item at a time.

The question isn't whether you chose right once. The question is whether the organisation has a structure that can choose right again, as costs keep rising, concentration keeps growing, regulations keep tightening and conditions keep changing.

Sovereignty doesn't start with a platform. It doesn't start with a strategy. It starts with an inventory, a contract, an identity system, an architecture principle. It starts with someone saying: I own this decision, and the next time it's made, it'll be made with eyes open.

It isn't grand. But it's real.

Need help establishing a reconsideration cycle for your ICT suppliers, or building the governance DORA and NIS2 now require? [Contact us](/en/contact) for a complimentary assessment.
