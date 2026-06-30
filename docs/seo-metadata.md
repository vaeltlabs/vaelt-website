# VAELT — SEO Metadata

Per-page title, meta description, and OG tags. Brand is VAELT only (Aurax Digital fully sunset — no references anywhere). Social handle: @vaeltlabs.

---

## Global

- **Site name:** VAELT
- **Default OG image:** `/og-default.png` (1200×630, dark bg, amber wordmark — design per design-system.md logo lockup)
- **Twitter/X handle:** @vaeltlabs
- **Favicon:** V-mark only, amber stroke on dark, per design-system.md SVG
- **robots:** index, follow (all 5 pages)
- **canonical base:** https://vaelt.xyz

---

## Home — `/`

```
title: VAELT — Websites and Systems That Run Themselves
description: VAELT builds fast, no-fluff websites and the booking/automation systems behind them. One founder, no handoffs, no agency bloat. Book a free audit.
og:title: VAELT — Websites and Systems That Run Themselves
og:description: Fast websites and lightweight automation, built by one person, start to finish.
og:url: https://vaelt.xyz/
og:type: website
```

---

## Services — `/services`

```
title: Services — VAELT
description: No service menu, no jargon — just the problem your business has right now and what fixing it actually looks like. See what VAELT builds.
og:title: What's Actually Broken? — VAELT Services
og:description: Problem-first, not feature-first. See what VAELT fixes and how.
og:url: https://vaelt.xyz/services
og:type: website
```

---

## Work — `/work`

```
title: Work — VAELT
description: A look at the range of builds VAELT ships — landing pages, catalog sites, booking systems, and lead automation. Concept builds shown.
og:title: Selected Work — VAELT
og:description: What VAELT builds, in practice.
og:url: https://vaelt.xyz/work
og:type: website
```

---

## About — `/about`

```
title: About — VAELT
description: VAELT is a one-person studio. No account manager, no handoffs — you work directly with the person building your site or system.
og:title: One Person. No Handoffs. — About VAELT
og:description: Why VAELT runs as a solo studio, and what that means for how fast things ship.
og:url: https://vaelt.xyz/about
og:type: website
```

---

## Contact — `/contact`

```
title: Contact — VAELT
description: Tell VAELT what's broken. One short call, no pricing menu — the number comes after the call, not before.
og:title: Book a Free Audit — VAELT
og:description: One short call to figure out what the business actually needs.
og:url: https://vaelt.xyz/contact
og:type: website
```

---

## Notes for Claude Code implementation

- Use Next.js 16 App Router `metadata` export (or `generateMetadata`) per route — not a single global `<head>` block.
- Pull title/description directly from this file per route; don't paraphrase further.
- No structured data (JSON-LD) for pricing/offers — site carries no prices, so Product/Offer schema should be omitted to avoid contradicting the on-page no-pricing model. LocalBusiness or Organization schema is fine if Dhanika wants it later.
