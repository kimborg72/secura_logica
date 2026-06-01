---
title: "Proportionality has an expiry date"
description: "Why a correct risk assessment can still become your biggest vulnerability in an AI-driven organisation. The assessment was true the day it was written — the question is how long it stays that way."
date: 2026-05-27
author: "Kim Borg"
category: "Governance"
draft: false
image: /images/insights/proportionalitet-ar-farskvara.webp
heroImage: /images/insights/hero-proportionalitet-ar-farskvara.webp
tags: ["Risk Management", "AI", "Proportionality", "Cybersecurity Act", "NIS2", "Classification", "Cloud Policy", "Jurisdiction"]
---

A public authority classifies a register. The data is mundane piece by piece, the threat picture is manageable, the supplier has been vetted. The assessment lands on a proportionate level of protection — well considered, documented, signed off by leadership. Everything is done exactly the way it should be.

Six months later, none of it holds. The register has been linked with two other data sources in an analytics project. An AI model has been given access to the whole set to find patterns. The supplier has changed hands and now belongs to a group in a third country. And information that was harmless in pieces can now be used to infer sensitive conclusions when viewed as a whole.

Nobody has made a single new decision. Yet the level of protection is no longer proportionate. It slid there, quietly, while the classification stayed put and pointed at a reality that no longer exists.

This drift is the underrated risk in a highly digitised society. Not that we assess wrong, but that we assess right — and the assessment then quietly stops being valid without anything raising an alarm.

## The assessment is a still image. The system is a film.

A risk assessment captures a moment: this information, this threat picture, this supplier, right now. It's a still photograph. But the organisation the picture is meant to protect doesn't stand still. Datasets grow and aggregate, systems are interconnected, access rights broaden, supply chains shift, and the geopolitical landscape moves.

Each of those variables can on its own move the line for what counts as proportionate. And because they keep moving after the decision is made, the classification by definition trails reality. It was true the day it was written. The question is how long it stays true.

## AI makes the slope steeper

Artificial intelligence doesn't change the principle, but it raises both speed and stakes in three ways that reinforce one another.

**Inference.** The protection value of a dataset is no longer determined only by what it contains, but by what can be *inferred* from it. As the analytical capability of whoever has access grows, the protection value rises — without a single row in the data changing. Information that was classified low because it was harmless in pieces can become sensitive the moment it's aggregated and a model can see the pattern.

**Concentration.** AI initiatives pull data together. Shared platforms and analytics environments draw together information that used to sit apart, making each individual point more sensitive than the sum of the parts suggested.

**Pace.** AI projects scale and connect data sources faster than an organisation's decision cycles can keep up with. The gap between how fast reality changes and how often the classification is revisited grows.

Together this means that the window during which an assessment stays valid is shrinking, while the consequence if it drifts is rising.

## The variable that's hardest to see

Of everything that moves, one thing is especially insidious because it can change without anything visible in your own operations: who can ultimately be compelled to hand over data.

That's not decided by where the server sits, but by which jurisdiction the owner is subject to. A supplier that changes hands, or a sub-supplier further down the chain, can shift the legal reach over your data overnight while the service looks identical to you. The geography hasn't changed. The exposure has. That's exactly why this point needs the tightest monitoring of all.

The Swedish government's cloud policy from 28 May points to this explicitly: companies in certain countries can, under their own laws, be required to hand over data to their authorities even when the data is processed and stored outside that country. In other words, it isn't the server's location that determines who can reach the information — it's who ultimately controls the entity running the service. And that can change without you receiving a single signal in your own operations.

## What the law and policy actually require

The [Cybersecurity Act](/en/insights/nis2-cybersecurity-act), which implements NIS2, was written with this drift in mind. The requirements on risk management measures are not designed as a one-off exercise. Two parts are aimed directly at the drift: the requirement that the risk analysis be recurring, and the requirement to [assess the effectiveness of the security measures that have been put in place](/en/insights/the-maturity-report-isnt-built-for-the-crisis). The law thus acknowledges in plain language that proportionality has an expiry date. It isn't enough to have assessed correctly once.

The government's cloud policy reaches the same conclusion from the other direction. There, digital sovereignty is described not as an absolute requirement but as a scale: higher demands on control should apply where protection value and risks are greatest. It's a sound principle, but a scale only works if you measure again. If you weigh the need for control against the protection value, and the protection value then rises as data is aggregated or an AI model is granted access, you've ended up at the wrong point on the scale without moving. The law and the policy point in the same direction: the trade-off has to be redone when the situation changes, otherwise it protects yesterday's reality.

This is also where most organisations come up short in practice. It's relatively easy to do a first classification and a first gap analysis. The hard part — and the part that usually ends up last — is the mechanism that detects when the ground has shifted under an already approved solution. [An organisation can be fully aligned with both law and policy at deployment and still drift out of compliance](/en/insights/what-was-right-yesterday-isnt-right-today) without noticing.

## From still image to process

The shift isn't about protecting harder. Over-protection is just as much a proportionality failure as under-protection. An organisation that puts the highest level on everything paralyses itself and burns resources where the threat isn't. The shift is about treating proportionality as something you *maintain*, not something you *achieve*. A few concrete steps:

- **Give the classification an expiry horizon.** An assessment without an end date is implicitly assumed to apply forever. Set a point for re-assessment, and assume that point arrives faster in AI-heavy environments.
- **Define re-assessment triggers, not just dates.** Certain events should force a new assessment regardless of the calendar: a new data source gets connected, an AI model gains access to an aggregate, a supplier changes owner or sub-supplier, or a volume crosses a threshold.
- **Classify aggregates as aggregates.** Inference risk arises in the whole, not in the parts. A dataset created by combining several low-classified sources must be reassessed, not inherit the lowest level.
- **Watch the jurisdiction most closely.** Because ownership exposure can shift without visible traces in operations, it needs to be tracked actively, not assumed to be constant.

## The conclusion

The biggest risk in a rapidly digitising, AI-driven organisation isn't that someone makes a poor assessment. It's that a good assessment is allowed to age in silence. Security work that can only show that you assessed correctly at deployment doesn't protect against that. It takes a living process that sees when proportionate becomes disproportionate, and catches it before an incident does it for you.

Proportionality isn't a state you achieve. It's a process you maintain.

Want to know where your classifications stand today — and whether they still hold? [Get in touch](/en/contact).
