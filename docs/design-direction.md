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

## Global Typography Scale (Application Layer)

`design-system.md` §2 defines the raw type tokens. This section defines how those tokens actually get *sized* once real content and long-form headlines are dropped in — learned from building the Services page prototype, where the original scale ran too big/wide for real sentences and stopped feeling engaging.

**Rule of thumb:** every large heading gets a `max-width` in addition to a `clamp()` font-size. Size alone isn't enough to keep a long headline readable — width has to be constrained too, or it reads as a wall of text instead of a statement.

| Role | Family | Weight | Size (`clamp`) | Max-width | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| Hero H1 (page-level) | Clash Display | 600 | `clamp(2.1rem, 4.6vw, 3.6rem)` | 640px | 1.15 | -0.015em |
| Section H2 | Clash Display | 600 | `clamp(1.7rem, 3.6vw, 2.5rem)` | 480px | 1.25 | -0.005em |
| Closing CTA H2 | Clash Display | 600 | `clamp(1.9rem, 4.4vw, 3rem)` | 560px | 1.2 | -0.01em |
| Card / Modal H3 | Clash Display | 600 | `clamp(1.5rem, 2.6vw, 2.1rem)` | 560px | 1.25 | -0.005em |
| Body copy | Satoshi | 400 | 1.1rem–1.2rem | 440px–520px | 1.55–1.65 | — |
| Mono / label | VT323 | 400 | 16px–18px | — | — | 0.06em–0.08em |

**Deprecated from design-system.md's original scale:** Hero H1 at 700 weight / up to `4.2rem`+ and Section H2 up to `2.6rem` — both read as oversized and reduced content to a headline poster rather than a statement someone actually reads. Use the sizes above instead; treat design-system.md §2 as the font-family/weight source of truth, and this table as the size/width source of truth.

**Why weight 600 instead of 700 on most headings:** 700 at the original larger sizes felt heavy on longer sentences. 600 keeps presence without visual shouting once headlines run past 5–6 words.

---

## Global Spacing Rules (Application Layer)

`design-system.md` §3 defines the base 8px spacing scale and Home's section rhythm. Standalone pages (Services, Work, About, Contact — anything that isn't Home) don't inherit Home's exact numbers automatically; use these instead:

| Context | Value | Notes |
|---|---|---|
| Standard section padding | `140px` top + bottom | Same as Home's `section-pad` — the default for any full-width section |
| Hero section padding | `150px` top, `60px`–`70px` bottom | Clears the fixed nav; bottom is tighter since hero flows straight into content |
| Closing CTA section padding | `160px` top + bottom | Slightly more than standard — it's the last thing someone sees, give it room |
| Card/grid gap | `1px` (border-simulated) or `24px`–`32px` | `1px` when cards share a bordered grid (e.g. Services problem grid); `24px`+ for freestanding card rows |
| Container max-width | `1140px` | Same as design-system.md §3 |
| Container padding | `32px` desktop, `20px` mobile | Same as design-system.md §3 |

No page should introduce a new one-off spacing value outside the 8px scale or the table above without a specific reason noted in that page's section of this file.

---

## Content Voice & Copy Rules

This is the actual content direction, not just layout. Applies to every page, every component, every micro-copy string (buttons, labels, form placeholders included).

**Hard rules:**
- **No em dashes, anywhere.** Not in headlines, body copy, labels, comments-that-render-as-UI-text. Use a period, comma, or just start a new sentence instead.
- **No vague filler.** "We help businesses grow" tells nobody anything. Every line should name a specific, recognizable moment — a WhatsApp inbox nobody checks, a site that still says "Under Construction," a spreadsheet someone's manually updating at 11pm. Specific beats broad every time.
- **Second person, direct address.** Write like you're describing something the reader is currently living through, not narrating a case study about "businesses like yours."
- **Short sentences over long ones.** If a sentence needs a comma to hold two ideas, consider splitting it into two sentences instead.
- **No pricing implied or stated**, anywhere outside a genuine quote/proposal context — this was already locked project-wide, restating here since copy is where it's easiest to slip (e.g. "affordable," "budget-friendly" both imply a pricing conversation that hasn't happened yet).

**Voice reference (good vs. flat):**

| Flat / vague | Better |
|---|---|
| "We help you improve your online presence" | "Your website is losing you customers" |
| "A site that still says 'Under Construction' or hasn't been touched since 2021" | "Still says 'Under Construction.' Last touched in 2021." |
| "No pricing pressure on the call, just a clear plan for what we'd build and why" | "Thirty minutes, zero pressure. You'll leave with a plan either way." |

**CTA copy:** always name the actual next action, not a generic verb. "Book a free audit call" over "Get started." "See the fix" over "Learn more."

---

## Visual Asset Rule

No real client screenshots or logos anywhere on the marketing site (locked decision — legal exposure, plus most Work entries are labeled concept/demo builds, not paying clients).

Where a visual is needed to illustrate a point (before/after comparisons, problem-card icons, process diagrams) and there's no real demo asset to show:

- **Build it in code as SVG**, using only the locked palette (`--bg`, `--bg-2`, `--bg-3`, `--bone`, `--bone-dim`, `--amber`, `--border`). Never pull in a stock photo or an external image for this purpose.
- **Before/After comparisons are always 1:1 square** (`aspect-ratio: 1/1` on the container, `viewBox="0 0 300 300"` as the SVG convention), so the two states sit visually even and comparable side by side.
- Every illustrative mockup should read as an abstracted UI (browser chrome, chat bubbles, spreadsheet-like grids, node diagrams) rather than literal text-heavy content — the point is to communicate a state (messy vs. clean, disconnected vs. connected), not to simulate a real screenshot.
- Label illustrative content as such where ambiguity is possible (e.g. Before/After section intro copy stating "Illustrative, not a real client").

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
- Section order: **Hero → Problem Grid → Process → Before/After → CTA → Footer.** Problem Grid replaces the plain `<ServiceList />` teaser pattern — it's a 3-card grid (one problem per pillar: website, leads, automation), each card opening a modal/window reveal (image, problem, solution, output, CTA) rather than an inline expand. No pricing shown in the reveal.
- Page opens with H1 (not the H2 used on Home's services intro) since this is now the page's primary heading. Follow the Hero H1 row in the Global Typography Scale table above, not design-system.md's original larger hero size.
- Process section: fixed 4-step sequence (Audit call → Plan & scope → Build → Launch & handoff), same regardless of which problem card the visitor came from. Numbered circle markers, connected by a horizontal line on desktop.
- Before/After section: one row per pillar (website, leads, automation), each row split into Before/After cells with a 1:1 square illustrative SVG per the Visual Asset Rule above, plus one line of copy per side per the Content Voice rules.
- Close with `<CTABand />` sized per the Closing CTA H2 row above: amber-accented section (not necessarily full-bleed-filled — see the Services prototype's closing CTA treatment), single headline + subline + `.btn-primary` button naming the actual action ("Book a free audit call").
- All copy on this page follows the Content Voice & Copy Rules section above without exception — this page had the most drift from that voice in the first build pass.

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