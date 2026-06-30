# VAELT — Build Guidelines (Phases)

Build in this order. Each phase should be fully working before the next starts — don't jump ahead to Home page polish while shared components are still unstable.

---

## Phase 0 — Setup

- `npx create-next-app@latest` with TypeScript, Tailwind, App Router, `src/` dir, ESLint.
- Confirm Node 20+, confirm Turbopack is running by default.
- Install Lenis for smooth scroll.
- Set up `app/globals.css` with the full `@theme` token block from `design-system.md` §1–3 (colors, fonts, spacing).
- Load fonts: Fontshare API for Clash Display + Satoshi, Google Fonts for VT323 (URLs in `design-system.md` §2).
- Confirm tokens render correctly on a blank test page before building anything else.

**Done when:** blank page renders with correct background, correct fonts loading, no console errors.

---

## Phase 1 — Shared layout shell

- Build `<Nav />` — fixed, `mix-blend-mode: difference`, logo + center links + CTA button. Mobile: center links hidden below 900px.
- Build `<Footer />` — single row, flex space-between, wraps on mobile.
- Build root `layout.tsx` wiring Nav + Footer around page content, with Lenis initialized client-side.
- Build `<Badge />` component (amber filled pill, mono text).

**Done when:** Nav and Footer render identically across an empty `/`, `/services`, `/work`, `/about`, `/contact` route set.

---

## Phase 2 — Shared content components

Build these once, reused across pages per `design-direction.md`:

- `<ServiceList items={} clip={boolean} />` — sibling-dim hover, click-to-expand problem→solution cards.
- `<StepBand />` ×3 — the One Problem / One Sprint / One Owner full-bleed bands.
- `<PhasePanel />` — the 4-tab Discovery/Design/Build/Launch panel with click-to-swap content.
- `<WorkRow />` — sibling-dim hover work list row, expandable.
- `<CTABand />` — new component (not in original reference), full-bleed amber strip with one line + button, used to close Services/Work/About.
- `<SectionTagRow index label />` — Home-only, per the numbering rule in `design-direction.md`.

**Done when:** each component renders correctly in isolation with placeholder content, matches `design-system.md` component specs exactly (padding, border-radius, hover states).

---

## Phase 3 — Home page (`/`)

Assemble in order: Hero → About (short) → Services (teaser, clipped) → How We Work (StepBand ×3) → How We Build (PhasePanel) → Build Rules (marquee + list) → Selected Work (teaser, 5 rows) → FAQ → Footer.

Pull all copy from `content.md` verbatim. This is the canonical page — get it fully right here before extracting anything further.

**Done when:** Home matches the wireframe structure in `wireframes.md`, all copy is final (not placeholder), responsive down to mobile, marquee respects `prefers-reduced-motion`.

---

## Phase 4 — Remaining pages

Build in this order: Services → Work → About → Contact (roughly easiest to hardest, and Contact depends on nothing else being done first).

- **Services:** `<ServiceList clip={false} />` + `<CTABand />`.
- **Work:** Full `<WorkRow />` list with `(concept)` labeling, expandable detail.
- **About:** Lead block + reused `<StepBand />` + `<PhasePanel />` + `<CTABand />`.
- **Contact:** Intro block + new `<ContactForm />` component (styled per `design-direction.md` Contact section) + direct contact line.

**Done when:** all 5 routes are live and navigable from `<Nav />`, no broken links, no leftover placeholder text anywhere.

---

## Phase 5 — Forms & interactivity

- Wire `<ContactForm />` to an actual submission handler (decide: Server Action writing to email/webhook, or a simple API route — flag the choice in `session-log.md` since it wasn't specified upfront).
- Confirm form validation (required fields, email format) and the "Request sent" confirmation state from `content.md`.
- Confirm all click/hover interactions (sibling-dim, phase tabs, work-row expand) work on touch devices, not just mouse hover.

**Done when:** form actually submits somewhere real (or to a logged stub if backend isn't ready), all interactive components work on mobile/touch.

---

## Phase 6 — SEO & metadata

- Add per-route `metadata` exports using `seo-metadata.md` verbatim — title, description, OG tags.
- Add favicon (V-mark SVG, per `design-system.md` §5).
- Confirm canonical URLs, robots settings.
- Skip JSON-LD pricing/offer schema entirely per the note in `seo-metadata.md`.

**Done when:** every route has correct, distinct metadata — verify by viewing page source, not just trusting the code.

---

## Phase 7 — QA pass

- Test every page at mobile (375px), tablet (768px), desktop (1400px) per the breakpoints in `design-system.md` §9.
- Test keyboard navigation and visible focus states.
- Test `prefers-reduced-motion` actually disables marquee + Lenis smooth scroll.
- Run a Lighthouse pass — flag anything under ~90 performance in `session-log.md`.
- Confirm zero references to Aurax Digital, zero visible price numbers, zero real client names anywhere in rendered output (not just source).

**Done when:** QA checklist above is clean. Log any known issues that didn't get fixed in `session-log.md` rather than silently shipping them.

---

## Phase 8 — Deploy

- Build for Cloudflare Pages (confirm whether Next.js 16 needs `@cloudflare/next-on-pages` or the OpenNext Cloudflare adapter at time of deploy — verify current compatibility before assuming either works out of the box).
- Point at the existing vaelt.xyz domain / Cloudflare Pages project, or confirm a fresh project if Dhanika wants a clean deploy history.
- Smoke-test the live deploy on an actual phone, not just desktop devtools.

**Done when:** vaelt.xyz is live with the new build, all 5 routes resolve correctly in production, no console errors on the live domain.
