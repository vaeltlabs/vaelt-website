# VAELT — Design Direction (Application Layer)

This file does NOT redefine tokens — the design system is locked in `design-system.md` (Acid Amber: `#FF7A1A` on `#0D0D0D`, Clash Display / Satoshi / VT323). This file only maps that system onto the 5 pages and flags anything page-specific.

---

## Stack notes for Claude Code

- Next.js 16 (App Router, Turbopack default, Node 20+), TypeScript, `src/` dir.
- Tailwind v4 — tokens go in `app/globals.css` under `@theme`, not `tailwind.config.js`.
- Fonts: Clash Display + Satoshi via Fontshare CSS API, VT323 via Google Fonts (URLs in design-system.md §2).
- No `next/image` — plain `<img>` with `.webp` assets, per design-system.md §10.
- Smooth scroll via Lenis (`{ lerp: 0.1, smoothWheel: true }`), client-side only.
- Reduced-motion: marquee and Lenis both need a `prefers-reduced-motion` fallback (disable animation, instant scroll).

---

## Shared components (build once, reuse across pages)

| Component | Used on |
|---|---|
| `<Nav />` | All 5 pages |
| `<Footer />` | All 5 pages |
| `<Badge />` | Home, About, Services, Contact |
| `<SectionTagRow index="01/06" label="ABOUT" />` | Home only (sequential numbering only makes sense within one scrolling page) |
| `<ServiceList items={problems} expandable />` | Home (teaser, max-height clipped + scroll) and Services (full, no clip) |
| `<StepBand />` × 3 | Home and About |
| `<PhasePanel />` | Home and About |
| `<WorkRow />` | Home (teaser, 5 rows) and Work (full list) |
| `<FAQGrid />` | Home only |
| `<CTABand />` | Services, Work, About (new component — not in original reference, needed since those pages end without a natural FAQ/marquee closer) |
| `<ContactForm />` | Contact only |

**On `[ NN / 06 ]` section-tag-row numbering:** this only makes sense on Home, where it's literally counting down a single scroll. Don't carry numbered tags onto Services/Work/About/Contact — those are standalone pages, not steps in a sequence. Use the `<Badge />` alone on those pages instead.

---

## Page-by-page application

### Home — `/`
Full reference structure as built in the honey-clone/design-system files. This is the canonical implementation; every component gets built here first, then extracted for reuse.

### Services — `/services`
- Reuse `<ServiceList />` but pass `clip={false}` — no `max-height: 520px` scroll clip, every problem card shows.
- Page opens with H1 (not the H2 used on Home's services intro) since this is now the page's primary heading.
- Close with `<CTABand />`: amber-filled full-bleed strip, single line + "Book a free audit →" button. Reuse `.btn-primary` token.

### Work — `/work`
- Reuse `<WorkRow />` at full length (5 rows shown, more can be added later as concept builds grow).
- Each row should be clickable into an expanded state (accordion or modal) showing: problem solved, what's included, optional concept-demo link. Keep this lightweight — no new design language, reuse `.card-demo` styling for the expanded content.
- No real client names/logos. Every row gets a small `(concept)` suffix in the type tag area or directly in the title — keep it visible, not hidden in fine print.

### About — `/about`
- `.about` lead-paragraph pattern, but H1 instead of the Home version's implicit heading (Home's About has no visible H1, About page needs one).
- Reuse `<StepBand />` ×3 and `<PhasePanel />` directly — same content, same components, just placed on this page instead of (or in addition to) Home depending on whether Home stays full-length or gets trimmed later.
- Close with `<CTABand />`.

### Contact — `/contact`
- Reuse `.about`-style intro block (Badge + H1 + short paragraph), not the full lead-paragraph treatment.
- `<ContactForm />` is the one genuinely new component: style it like `.card-demo` (bg-2, border, 12px radius, 28px padding) but full form width up to ~560px, centered.
- Inputs: background `--bg-3`, border `--border`, focus state border → `--amber`. Labels in `--font-mono`, small caps, `--bone-dim`.
- Submit button: `.btn-primary` styling exactly.
- No pricing field with a dropdown of fixed tiers — "Budget range" should be a free-text or open-ended select, not implying a menu.

---

## Things to NOT carry over from the honey-clone reference

- Red palette (`#FF4D4D`, `#F2473E`, etc.) — ignore entirely, use amber tokens only.
- JetBrains Mono / Inter — replaced by VT323 / Clash Display / Satoshi.
- The original FAQ's literal cost answer — already rewritten in `content.md` to stay vague (no numbers).
- Real-sounding client names in Work — already replaced with clearly-labeled concept builds in `content.md`.
