---
title: "Stop chasing CRA. Start building securely."
description: "The Cyber Resilience Act is already in force, with major obligations phasing in through 2027. The most common mistake is starting from the regulation. Flip the order — build securely with OWASP as your reference, and compliance becomes a by-product."
date: 2026-06-02
author: "Kim Borg"
category: "Cybersecurity"
draft: false
image: /images/insights/sluta-jaga-cra-borja-bygga-sakert.webp
heroImage: /images/insights/hero-sluta-jaga-cra-borja-bygga-sakert.webp
tags: ["CRA", "Cyber Resilience Act", "OWASP", "ASVS", "SAMM", "Security by Design", "Secure Development", "Compliance"]
---

The Cyber Resilience Act has already entered into force. The major obligations phase in step by step through 2027, which can sound like there's plenty of time. There really isn't. It rather means that the right moment to improve how you work is now, while you can still do it at a calm pace and not under pressure.

The most common mistake is to start from the regulation. You read the CRA, get worried, and ask how to become compliant. It's an understandable reaction, but it's often the wrong starting point. When a regulation becomes the starting point, security turns into [a documentation project to tick off](/en/insights/our-software-wont-solve-your-problem), instead of a property of the product.

One small note before we go on. You don't need to be a developer to follow this text. Every term is explained as we go.

## Flip the order

Start with security by design instead. Build securely because you want a good, reliable product, not because an authority demands it. When security is built into how you work, compliance becomes considerably easier to demonstrate later. [You don't do two jobs. You do one job properly](/en/insights/proportionality-has-an-expiry-date), and the documentation becomes a by-product of that.

This isn't a theoretical stance. It's how the teams who succeed best with regulatory compliance actually work. They don't chase the requirements after the fact. They've already built most of what the requirements describe, because it's simply good engineering.

## This is where OWASP comes in

OWASP is a non-profit community that has produced free, practical standards for secure development. The material is made by people who actually build, review, and secure systems in the real world. It isn't legal text to be interpreted — it's knowledge you can use directly in everyday work.

Three parts are especially useful for getting started.

**[ASVS](https://owasp.org/www-project-application-security-verification-standard/)** gives concrete security requirements to build and verify against, level by level. Instead of a vague ambition to be secure, the team gets a list of controls that can be ticked off and tested. It becomes clear what is done and what remains.

**[Cheat Sheets](https://cheatsheetseries.owasp.org/)** translate security principles into practical day-to-day decisions. When a developer faces a concrete choice — for example how passwords should be handled or how input should be validated — there is a short, reliable answer to lean on.

**[SAMM](https://owaspsamm.org/)** helps you measure and mature your security work over time. It gives a picture of where you stand today and a realistic path forward, so improvements happen step by step instead of in one big lift.

The nice thing is that these three tools fit together. ASVS says what should be achieved, Cheat Sheets help the team make the right decisions along the way, and SAMM keeps track that the whole matures in the right direction.

## What happens when the team works like this

Something changes in how the CRA feels. The regulation stops being an upcoming compliance project to panic about, and instead becomes a confirmation of work you are already doing.

The requirements feel familiar, because you already work with many of the principles and processes the regulation is built on. Compliance becomes easier to demonstrate and document, rather than a separate track running alongside development. When an auditor asks how you handle vulnerabilities or verify security requirements, the answer is already in how you work. You don't have to invent it after the fact.

It's worth being honest about one thing. OWASP doesn't replace legal interpretation. There are parts of the CRA that deal with formal obligations, reporting, and accountability, and other expertise is needed there. But for the technical core — how you actually build and secure the product — OWASP gives the team something more useful than a legal text. Concrete ways of working, controls, and decisions that can be put to use directly.

## How to take the first step

Starting doesn't have to be big. A reasonable first step is to look at ASVS and choose a level that fits your product and your risk. Go through the list together with the team and mark what you already do. Many are surprised how much is already in place. What isn't done becomes a concrete backlog instead of a vague worry.

In parallel, you can make Cheat Sheets a natural reference in development work, so that secure decisions become the easy choice in everyday work. SAMM can wait until you want to take a more structured grip on maturity over time.

The point is to flip the question. Don't aim only at passing CRA. Aim at building securely with OWASP as your support. Then you've already laid the foundation for a large part of compliance, and the rest becomes considerably less daunting.

If you want to get going but aren't sure where to start, [get in touch](/en/contact) and I'll help you find the right first step.
