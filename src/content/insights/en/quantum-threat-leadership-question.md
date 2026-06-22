---
title: "The quantum threat is a leadership question, not a technical one"
description: "The quantum threat isn't about when the quantum computer arrives, but how long your information must stay secret. Here's how to begin the move to post-quantum cryptography."
date: 2026-06-22
author: "Kim Borg"
category: "Governance"
draft: false
image: /images/insights/kvanthotet-ledningsfraga.webp
heroImage: /images/insights/hero-kvanthotet-ledningsfraga.webp
tags: ["Post-Quantum Cryptography", "Cryptography", "Quantum Threat", "NIS2", "Crypto Agility", "Information Security", "Governance", "Leadership Accountability"]
---

Your encrypted information may already have been copied. It just hasn't been decrypted yet.

That sounds dramatic, but the mechanism is simple and well documented. It even has its own name. *Harvest now, decrypt later.* An adversary collects encrypted traffic today and stockpiles it. Then they wait for the day a quantum computer can decrypt the lot.

## The wrong question and the right one

The most common objection to acting on the quantum threat sounds reasonable. Quantum computers capable of breaking today's encryption don't exist yet, so why spend time on it now.

But that takes the wrong question as its starting point. The question isn't when the quantum computer arrives. The question is how long your information needs to stay secret.

Think about what you actually protect. Incident records, whistleblower cases, sensitive personal data, trade secrets and security documentation. Information like that may need protecting for ten years or more. Information with that long a confidentiality lifespan is, in practice, already exposed. Whoever collects it today doesn't need to read it today. It's enough to read it before the need for protection runs out.

## The window is closing faster than many think

The real obstacle to a quantum computer that threatens encryption was never really about the number of qubits. It was about error correction and scalability, that is, about keeping the computations stable for long enough.

That's exactly where progress is now moving fast, and part of the explanation is AI. Machine learning has turned out to be surprisingly effective at precisely the kind of error correction and optimisation that quantum systems require.

Here it pays to be precise. AI doesn't break the encryption. The mathematics behind today's algorithms holds, and an AI is at bottom just computation on ordinary computers. But AI is clearing away one of the last practical obstacles to the quantum computer that can. That makes the question more urgent.

Nor is everything equally at risk. Symmetric encryption, such as AES with sufficient key length, withstands quantum attacks. The problem lies in public-key cryptography, that is, RSA and ECC, used for key exchange and digital signatures. That's where the work has to begin.

## The EU has already set the direction

This is no longer just a technical discussion. The EU and its member states have agreed on a coordinated roadmap for the move to post-quantum cryptography, and it sets out concrete milestones.

The transition should be under way by the end of 2026 at the latest. For critical infrastructure the direction is clearer still. Protection should be converted as soon as possible and by 2030 at the latest. Remaining systems should follow towards 2035, as far as is practically possible.

The roadmap is formally a recommendation, but it shouldn't be dismissed as non-binding. For organisations covered by [NIS2 and the Cybersecurity Act](/en/services/nis2) it takes effect through national implementation, supervision and the requirements imposed across the supply chain. Anyone waiting for an explicit clause risks starting too late.

## Why it's a leadership decision

Here's the point that's easy to miss. The move to post-quantum cryptography isn't a task to push down the organisation and tick off. It's a leadership decision.

The decisive questions aren't technical, they're strategic. What information can't we afford to lose in ten years. How much risk are we prepared to accept in the meantime. And who here actually owns the transition. That question of ownership is often the hardest, and it's one reason a [CISO as a service](/en/services/ciso-as-a-service) can be the right route for an organisation that lacks the function internally.

These are questions that belong at the leadership table, not in a technical backlog. The technology comes after.

## Where you begin

The first step isn't to replace all your cryptography. That would be neither possible nor meaningful. The first step is to gain visibility.

Begin with two things. Find out where in your systems you actually use public-key cryptography, such as RSA and ECC. And [classify your information](/en/services/iso27001) by how long it needs to be protected.

Together that gives you a cryptographic inventory, preferably in a structured format. It becomes the foundation for everything that follows. Once you know where the sensitive cryptography sits and how long the information behind it has to last, you can prioritise. Then cryptographic status becomes something you can measure and govern, not something you merely assume.

One principle carries the whole of this work. Build for crypto agility. The organisation that can swap an algorithm without rebuilding the entire system is the one that handles both 2030 and whatever comes after. It's about versioning the algorithm itself, not just the key.

Method first. Tools second. Security always.

## Conclusion

The quantum threat is neither science fiction nor a distant future concern. It's a consequence of two curves moving at the same time. The maturing of quantum computers and AI's ability to accelerate it. Both point the same way, and both mean the time to prepare is shrinking.

The organisation that begins with an honest mapping stands stronger than the one waiting for proof. The question to bring to your next leadership meeting is simple. What information would hurt you most if it were decrypted ten years from now.

At VER&IT we help municipalities, public authorities and companies move from worry to plan. If you want to know where your cryptography stands today, a cryptographic inventory is the right first step. [Get in touch](/en/contact), and we'll talk through your quantum readiness.
