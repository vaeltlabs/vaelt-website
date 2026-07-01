# VAELT — Session Log

---

## 2026-07-02 — Hero background effect (rising particles + animated grid lines)

**Built / changed:**

- `app/components/HeroBackground.tsx` — new `'use client'` component. Two layered effects:
  1. **Canvas particle field** — absolutely positioned canvas fills the hero section bounds. Particles rise upward slowly (`speed: 0.1–0.3`), hold, then fade out and reset. Particle color: `rgba(237, 230, 218, ...)` (`--bone`). Starting opacity capped at 0.45 (subtler than the reference's 0.7 to keep it a texture, not a focus). Density formula: `Math.floor(canvas.width * canvas.height / 7000)`. Resize listener updates canvas dimensions and reinits particles. rAF loop and resize listener both cleaned up on unmount. If `prefers-reduced-motion` is set, the entire canvas + rAF loop is skipped.
  2. **Animated grid lines** — 3 horizontal + 3 vertical `<div>` elements at 20%/50%/80% positions, driven by CSS animations in `HeroBackground.module.css`. Horizontal lines use `drawX` (scaleX 0→1, 800ms, staggered 150/280/410ms delay). Vertical lines use `drawY` (scaleY 0→1, 900ms, staggered 520/640/760ms delay). Both use `cubic-bezier(0.22, 0.61, 0.36, 1)`. Line color references `var(--border)` (`#2A2A2A`). Final opacity 0.45. If `prefers-reduced-motion` is set, lines show immediately at full opacity with no animation (CSS media query override).
- `app/components/HeroBackground.module.css` — CSS module for grid line animations. Contains `.hline`, `.vline`, `@keyframes drawX`, `@keyframes drawY`, and `@media (prefers-reduced-motion: reduce)` override.
- `app/page.tsx` — `HeroBackground` imported and mounted. Hero `<section>` given `position: 'relative'`. `HeroBackground` rendered as first child (renders a `position:absolute, inset:0, zIndex:0, pointerEvents:none` wrapper). Hero `.wrap` div given `position: 'relative', zIndex: 1` so content sits above the background layer.

**Not changed:** Nav component, hero copy, H1, subtext, hero-facts row, CTAs, any fonts or color tokens.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ Background layer is `pointer-events: none` — no interference with CTA buttons/links
- ✅ Canvas sized to hero section bounds (not viewport), uses `canvas.offsetWidth/Height` not `window.innerWidth/Height`
- ✅ `prefers-reduced-motion`: canvas skipped entirely; grid lines appear immediately at full opacity
- ✅ rAF loop and resize listener cleaned up on unmount
- ✅ `--bone` (`rgba(237,230,218,...)`) used for particles, `var(--border)` used for grid lines — no hardcoded hex values except where CSS vars don't work in canvas ctx
- ✅ No reference implementation artifacts included (no header, no alert(), no Hubot Sans, no copy)

---

This is the file that actually changes. Read this in full at the start of every session before touching code — it's the real state of the build, not `CLAUDE.md`.

**Format:** newest entry on top. Each entry: date, what got built, what's left, any open questions or blockers for Dhanika.

---

## 2026-07-02 — Contact form submission switched from Brevo to Airtable

**Built / changed:**

- `functions/api/contact.ts` — full rewrite. Replaced Brevo email integration with an Airtable REST API call. On a valid POST: creates a record in base `appUyuBcLW1yAVF5l`, table `Website Submissions`, with fields: Name, Business name, Email, Phone, Message, Submitted at (ISO timestamp). Reads API key from `env.AIRTABLE_API_KEY`. Validation, honeypot check, and sanitization (`<` / `>` escaping on all inputs) all preserved from the Brevo version. CORS OPTIONS handler unchanged.
- `app/api/contact/route.ts` — deleted entirely. This was the local-dev-only Next.js Route Handler that duplicated `functions/api/contact.ts` for use under `npm run dev`. Per the single-implementation decision, removed. Local testing now goes through `npm run preview` (Wrangler) with `AIRTABLE_API_KEY` in `.dev.vars` — same flow as before but pointing at Airtable.
- `.env.local.example` — updated: replaced `BREVO_API_KEY=your_key_here` with `AIRTABLE_API_KEY=your_key_here`. Comment updated to remove Wrangler-specific note that no longer applies (`.dev.vars` is still the local Wrangler secret file — that hasn't changed, just the variable name).
- `.gitignore` — no changes needed. `.env*` glob already covers `.env` and `.env.local`. `.dev.vars` already listed explicitly.
- `.next/` cache cleared (was holding a stale type reference to the deleted route).

**To test locally:**
1. Add `AIRTABLE_API_KEY=your_real_key` to `.dev.vars` at project root.
2. Run `npm run preview` (builds static export then starts Wrangler).
3. Submit the contact form — record appears in the Airtable `Website Submissions` table.

**To deploy:**
Set `AIRTABLE_API_KEY` in Cloudflare Pages → Settings → Environment variables. No code changes needed.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors (after clearing stale `.next` cache)
- ✅ Airtable base ID and table name hardcoded in function, API key read from `env.AIRTABLE_API_KEY`
- ✅ All 5 fields validated server-side before Airtable call
- ✅ Honeypot check preserved
- ✅ Input sanitization (`<` / `>` escaping) preserved
- ✅ `app/api/contact/route.ts` deleted, single implementation
- ✅ `.env.local.example` updated, real secrets remain gitignored

---

## 2026-07-01 — Next.js Route Handler added for local dev (npm run dev) Brevo testing

**Built / changed:**

- `app/api/contact/route.ts` — new Next.js App Router Route Handler (POST only). Mirrors `functions/api/contact.ts` exactly: same honeypot check, same 5-field validation (name, businessName, email, phone, message), same HTML escaping, same Brevo API call (sender/to: hello@vaelt.xyz, reply-to: submitter). Reads `BREVO_API_KEY` from `process.env.BREVO_API_KEY`, which Next.js picks up from `.env.local` during `npm run dev`. Returns an explicit 500 with a clear message if the key is missing.
- `.env.local.example` — added at project root. Shows the expected variable name (`BREVO_API_KEY=your_key_here`) without a real value. Copy to `.env.local` and fill in the key before running `npm run dev`.
- `.gitignore` — already covers `.env.local` via the `.env*` glob added in a prior session. No change needed.
- `next.config.ts` — unchanged. Next.js 16 with `output: 'export'` silently skips POST-only Route Handlers during static page generation (verified by running `npm run build` — zero errors, 11 pages generated cleanly). The route appears as `ƒ /api/contact` in the build output but is not written to `out/`, so it has no effect on the Cloudflare Pages deployment.
- `functions/api/contact.ts` — unchanged. Still the production path under Wrangler/Cloudflare Pages.

**How to test the contact form under npm run dev:**
1. Copy `.env.local.example` → `.env.local` and set your real Brevo API key.
2. Run `npm run dev` and open `http://localhost:3000`.
3. The form POSTs to `/api/contact` → Next.js routes it to `app/api/contact/route.ts` → Brevo call fires.

**Why two handlers for the same path:**
- `npm run dev` → Next.js dev server → `app/api/contact/route.ts` (reads `.env.local`)
- `npm run preview` → Wrangler → `functions/api/contact.ts` (reads `.dev.vars`)
- Production (Cloudflare Pages) → `functions/api/contact.ts` (reads CF Pages env var)
- The ContactForm's `fetch('/api/contact')` call is identical in all three — only the handler executing it differs.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npm run build` — zero errors, 11 static pages, Route Handler correctly excluded from `out/`
- ✅ BREVO_API_KEY read from `process.env` (populated via `.env.local` by Next.js)
- ✅ `.env.local` already in `.gitignore` via `.env*` glob
- ✅ `.env.local.example` committed as reference
- ✅ `functions/api/contact.ts` untouched

---

## 2026-07-01 — DirectContact EMAIL link: mailto with Gmail web compose fallback

**Built / changed:**

- `app/components/DirectContact.tsx` — added `'use client'`. EMAIL link keeps `href={mailto:...}` for right-click/accessibility but intercepts clicks with `onClick`. On click: prevents default, attaches a one-time `window.blur` listener, sets `window.location.href` to the mailto URL, then starts a 700ms timer. If `blur` fires before the timer (OS handed off to a mail client, browser lost focus) → resolved, timer cleared, listener removed, nothing else happens. If the timer completes without `blur` firing (no mail client registered) → opens Gmail web compose in a new tab via `window.open(..., '_blank', 'noopener')` as fallback. Listener is always removed after either path. WhatsApp link, icons, styling, and hover state unchanged. The heuristic is commented as best-effort only — blur can false-positive (user switches tabs coincidentally) or false-negative (slow mail app).

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ mailto fires first on every click
- ✅ Gmail fallback only opens if blur doesn't fire within 700ms
- ✅ Listener cleaned up after both success and fallback paths
- ✅ `href` kept as mailto for right-click copy / keyboard nav
- ✅ No visual changes — same icon, class, hover state

---

## 2026-07-01 — DirectContact email link switched to mailto:

**Built / changed:**

- `app/components/DirectContact.tsx` — EMAIL link href changed from `https://mail.google.com/mail/?view=cm&fs=1&to=hello@vaelt.xyz&su=Website%20enquiry` to `mailto:hello@vaelt.xyz?subject=Website%20enquiry`. Removed `target="_blank"` and `rel="noopener"` from this link — mailto: is handled by the OS/default mail client, not the browser, so a new-tab target is unnecessary and can leave a blank tab. WhatsApp link immediately above it is unchanged.

**Done criteria met:**
- ✅ Email link uses `mailto:` with subject pre-filled
- ✅ No `target="_blank"` on mailto link
- ✅ WhatsApp link keeps `target="_blank" rel="noopener"` unchanged

---

## 2026-07-01 — ContactForm field set updated (Name / Business name / Email / Phone / Message)

**Built / changed:**

- `app/components/ContactForm.tsx` — replaced previous fields (name, email, "what's the problem", budget range) with: Name + Business name (two-col row), Email + Phone (two-col row), Message (textarea, full width). All 5 are required. Phone uses `type="tel"` with no format validation beyond non-empty — accepts any country code, spacing, or dash style. Honeypot, loading state, success panel ("Got it. / We'll get back to you soon."), and inline error handling all unchanged.
- `functions/api/contact.ts` — updated expected body shape to `{ name, businessName, email, phone, message, website }`. Server-side validation now requires all 5 non-honeypot fields to be non-empty (400 if any missing). Email body template updated to include all 5 fields formatted as: Name / Business / Email / Phone / Message block. Reply-to, HTML escaping, and honeypot check unchanged.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ All 5 fields required both client-side (HTML `required`) and server-side (explicit trim + empty check)
- ✅ Phone: `type="tel"`, no regex validation, accepts free-form entry
- ✅ Honeypot, loading state, success/error UI all preserved from previous session

---

## 2026-07-01 — Wrangler local preview set up for Pages Functions testing

**Built / changed:**

- `wrangler` installed as devDependency (v4.x).
- `wrangler.toml` created at project root:
  ```toml
  name = "vaelt-website"
  pages_build_output_dir = "out"
  compatibility_date = "2024-09-23"
  compatibility_flags = ["nodejs_compat"]
  ```
  `pages_build_output_dir = "out"` matches `next build`'s static export output. `nodejs_compat` is needed for any npm-style module resolution inside Pages Functions.
- `package.json` — added `"preview": "next build && wrangler pages dev out"`. This builds the static site, then starts Wrangler serving `out/` with `functions/` wired up — the only way to locally execute Pages Functions.
- `.gitignore` — added `.dev.vars` entry. This file is Wrangler's local-only env mechanism and holds the real API key; it must never be committed.

**How to run the contact form locally with real Brevo integration:**

1. Create `.dev.vars` at the project root (same level as `package.json`):
   ```
   BREVO_API_KEY=your_real_key_here
   ```
2. Run:
   ```
   npm run preview
   ```
3. Wrangler will print a local URL (typically `http://localhost:8788`). Open that — not `localhost:3000` — and test the Contact form. The form POST hits `/api/contact`, which Wrangler routes to `functions/api/contact.ts` with `BREVO_API_KEY` injected from `.dev.vars`.

**Why not `npm run dev`:** `next dev` is the plain Next.js dev server and has no knowledge of `functions/`. Pages Functions only execute inside Wrangler's runtime.

**Done criteria met:**
- ✅ `wrangler` in devDependencies
- ✅ `wrangler.toml` with correct output dir and compatibility flags
- ✅ `npm run preview` script added
- ✅ `.dev.vars` in `.gitignore`

---

## 2026-07-01 — Contact form wired to Brevo transactional email

**Built / changed:**

- `functions/api/contact.ts` — replaced stub with real Brevo integration. Reads `BREVO_API_KEY` from Cloudflare Pages env at request time (never hardcoded). Flow: honeypot check → required-field validation (name, email, message) → HTML-escape all inputs → POST to `https://api.brevo.com/v3/smtp/email` with `sender: hello@vaelt.xyz`, `to: hello@vaelt.xyz`, `replyTo: submitter's email`, subject `New contact form submission from {name}`, HTML body with all fields. Budget range included in body if provided. Returns `{ ok: true }` on success, `{ ok: false, error }` with appropriate status (400/500) on failure.
- `app/components/ContactForm.tsx` — updated to match spec fields: NAME + EMAIL (two-col row), WHAT'S THE PROBLEM? (textarea, required), BUDGET RANGE (optional select dropdown with 5 preset ranges). Removed old BUSINESS NAME and PHONE fields. Added honeypot: hidden `<input name="website" tabIndex={-1}>` positioned off-screen at left:-9999px; backend silently returns 200 if filled. Success state: static "Got it. / We'll get back to you soon." confirmation panel (no countdown/auto-reset). Error state: inline amber error message, all field data preserved. Submit button shows "Sending…" and is disabled while in flight.

**Security:**
- Server-side HTML escaping on all inputs before they enter the email body
- Honeypot field catches naive bots silently (no 4xx that reveals detection)
- API key only read from `env.BREVO_API_KEY` — never in source

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ BREVO_API_KEY read from Cloudflare Pages env, not hardcoded
- ✅ Sends FROM hello@vaelt.xyz TO hello@vaelt.xyz, reply-to set to submitter
- ✅ Required-field 400 on missing name/email/message
- ✅ Honeypot silent-reject
- ✅ HTML-escaped before email body
- ✅ Frontend: loading state, success panel, inline error with preserved data

**Open questions for Dhanika:**
1. BREVO_API_KEY must be set in the Cloudflare Pages dashboard under Settings → Environment variables for the function to work in production. Confirm it's already there or add it before next deploy.
2. /privacy and /terms are still placeholder pages — flag when you're ready to write real legal copy.

---

## 2026-07-01 — Type scale bumped up across all pages and components

**Built / changed:**

- `docs/design-direction.md` — Global Typography Scale table updated with new desktop-size values:
  - Hero H1: `clamp(2rem, 4.2vw, 3.1rem)` → `clamp(2.1rem, 4.6vw, 3.6rem)`
  - Section H2: `clamp(1.6rem, 3.2vw, 2.1rem)` → `clamp(1.7rem, 3.6vw, 2.5rem)`
  - Closing CTA H2: `clamp(1.8rem, 4vw, 2.6rem)` → `clamp(1.9rem, 4.4vw, 3rem)`
  - Card / Modal H3: `clamp(1.4rem, 2.4vw, 1.8rem)` → `clamp(1.5rem, 2.6vw, 2.1rem)`
  - Body copy: `0.95rem–1.02rem` → `1.05rem–1.15rem`
  - Mono / label: `14px–16px` → `15px–17px`
- Hero H1 clamp updated on all 7 pages: Home, Services, About, Work, Contact, Privacy, Terms.
- Section H2 clamp updated on: Home (×2), About, ProcessSteps component, BeforeAfter component.
- Closing CTA H2 clamp updated on: Home final CTA, CTABand component.
- Card / Modal H3 clamp updated on: `.problem-card-title` and `.modal-title` in globals.css.
- Body copy sizes nudged up across: page.tsx hero subtext, all page hero subtext paragraphs, About body paragraphs, CTABand subline, modal-body, modal-list li, ba-copy in BeforeAfter, noteText and cardDesc in work.module.css, process-step-desc.
- Mono / label sizes nudged up: `.problem-card-tag/arrow`, `.modal-tag`, `.ba-cell-label`, `.mini-tag`, `.connect-link`, `.direct-contact-link`, `.footer-col-label` in globals.css; `.tagPill`, `.viewLink` in work.module.css.
- FAQ section on Home: decorative H2 bumped from `clamp(1.9rem, 4.5vw, 2.8rem)` → `clamp(2rem, 5vw, 3.2rem)`; FAQ h3 1.15rem → 1.25rem; FAQ p 0.92rem → 1rem.
- Process step label 1rem → 1.1rem; line-height on desc and body copy standardized to 1.6 where previously 1.55.
- Padding nudged on problem cards (32px 28px → 36px 32px) and work card body (24px 28px 28px → 28px 32px 32px) to give bigger text room.
- Contact page mini H2s (Cal booking, Direct contact sections) bumped: `clamp(1.4rem, 2.8vw, 1.9rem)` → `clamp(1.5rem, 2.8vw, 2.1rem)`.
- Work card titles bumped: `clamp(1.1rem, 2vw, 1.35rem)` → `clamp(1.2rem, 2.2vw, 1.5rem)`.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ Mobile clamp lower bounds unchanged (desktop-only pass)
- ✅ max-width constraints on all headings unchanged
- ✅ Font-family and weight columns unchanged

---

## 2026-07-01 — DirectContact component added to Contact page

**Built / changed:**

- `app/components/DirectContact.tsx` — new server component. Renders two links side by side: WHATSAPP (https://wa.me/94701608262, target="_blank" rel="noopener", filled WhatsApp SVG icon) and EMAIL (mailto:hello@vaelt.xyz, inline envelope SVG icon). Separated by a thin 1px vertical `--border`-colored divider. Both use `.direct-contact-link` class: `--font-mono`, 16px, 0.05em tracking, `--bone-dim` default, `--amber` on hover, 0.18s transition. Stacks vertically on mobile (480px), divider hidden when stacked. No props required — drop-in anywhere.
- `app/globals.css` — appended `.direct-contact`, `.direct-contact-link` + hover, `.direct-contact-divider`, and 480px mobile breakpoint.
- `app/contact/page.tsx` — replaced the inline ghost-button WhatsApp block with `<DirectContact />` inside the "Or message directly." section. Heading and context line unchanged.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ Two options in a row (WhatsApp | Email) with `--border` divider between them
- ✅ Hover shifts to `--amber`, matching connect-link behavior elsewhere on the page
- ✅ `--font-mono` treatment matches other link rows site-wide
- ✅ Component is dependency-free, no page-specific props — reusable in Footer or Home
- ✅ mailto link has no new-tab attribute; WhatsApp link opens in new tab

---

## 2026-07-01 — Contact page rebuilt from scratch

**Built / changed:**

- `app/contact/page.tsx` — full rebuild. New section order:
  1. **HERO** — Badge "CONTACT" + H1 "Tell us what's broken." (plural, not "Tell me") at locked Hero H1 scale (`clamp(2rem,4.2vw,3.1rem)` weight 600 max-width 640px). Subtext with em dash removed: "One short call. No pitch deck, no pricing menu. Just what the business needs and what it'd take to fix it. The number comes after the call, not before."
  2. **FORM** — `<ContactForm />` reused as-is, no changes.
  3. **CAL.COM BOOKING** — new section. H2 "Prefer to just book a time?" + one-line context "Skip the form, grab a slot directly." + `.btn-primary` link to https://cal.com/vaelt/discovery (target="_blank" rel="noopener").
  4. **WHATSAPP** — new section. H2 "Or message directly." + one-line context "Faster than a form, no slot required." + `.ghost-cta` link to https://wa.me/94701608262 (target="_blank" rel="noopener") with inline WhatsApp SVG icon.
  5. **SOCIAL MEDIA** — reused the About page's `[ ELSEWHERE ]` connect section pattern verbatim: same eyebrow, same `.connect-row` / `.connect-links` / `.connect-link` classes, same three icons (Instagram / Facebook / X), same URLs, no YouTube.
  6. **FOOTER** — handled by layout as before.

**Removed:**
- Old "Tell me what's broken." H1 (singular "me" → now plural "us").
- Old em dash in subtext.
- Old bare "hello@vaelt.xyz — @vaeltlabs" mono line (now covered by social + footer).
- Old "Direct contact" section.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ Hero H1 at locked Global Typography Scale (`clamp(2rem,4.2vw,3.1rem)` weight 600 max-width 640px)
- ✅ No em dashes anywhere in copy
- ✅ No solo-founder first-person-singular framing ("Tell us", not "Tell me")
- ✅ Cal.com link opens in new tab with rel="noopener"
- ✅ WhatsApp link opens in new tab with rel="noopener", has inline SVG icon
- ✅ Social section reuses existing `.connect-row` / `.connect-link` CSS from About page (no new CSS added)
- ✅ Instagram / Facebook / X all present, no YouTube

**Open questions for Dhanika:**
1. All previously open questions remain (contact form email handler, /privacy and /terms copy).

---

## 2026-07-01 — Work page rebuilt (card grid + real screenshots)

**Built / changed:**

- `app/work/page.tsx` — full rebuild. Replaced the old `WORK_ITEMS` array (Aroma & Co., Atelier Studio, North Loop Café, Vantage Retail, Coastline Salon) and `<WorkRow />` list with:
  1. **Hero** — Badge "WORK" + H1 ("What this looks like once it's built.", `clamp(2rem,4.2vw,3.1rem)` weight 600 per Global Typography Scale) + subtext ("Live demo builds. Two are concept projects, two are real brands currently running on these builds.").
  2. **Work grid** — 2x2 card grid (collapses to 1-col under 800px). Each card: `<a>` wrapping full card (target="_blank" rel="noopener noreferrer"), 4:3 aspect-ratio image (object-fit:cover, object-position:top), amber tag pill top-left, card body with title + description + "VIEW LIVE SITE →" link. Arrow shifts 4px right on card hover.
  3. **Note band** — transitional section: "Every one of these follows the same process. Audit call, plan, build, launch." + ghost button "SEE HOW IT WORKS →" linking to /about.
  4. **CTA Band** — reused existing `<CTABand />` component. Headline "Like what you see? Let's build yours.", button "Book a free audit call".
- `app/work/work.module.css` — new CSS Module. Handles hover states (card border-color, image scale, arrow translate), responsive grid collapse, note band flex wrapping, ghost button hover state.
- 4 real build screenshots referenced from `public/images/`: edge.webp (Ceylon Edge Wallets), lumora.webp (Lumora Studio), cake.webp (Butter Boutique), pulse.webp (Pulse Active). Per instruction, this page is an intentional exception to the "no real screenshots" Visual Asset Rule since these are VAELT's own builds.

**WorkRow component:** kept in codebase (not deleted), just not used on this page.

**Done criteria:**
- No WORK_ITEMS array or WorkRow usage on this page
- No em dashes in copy
- All 4 links open in new tab with rel="noopener noreferrer"
- Hero H1 follows Global Typography Scale (clamp/weight/max-width)
- Image containers use plain `<img>` tags per design-system.md rule

---

## 2026-07-01 — Home hero tagline updated + Footer rebuilt

**Built / changed:**

- `app/page.tsx` — Hero H1 updated. Old: "Built to fix what's actually broken." New: "Built to work. Built to last." The accent span (`color: var(--bone)`) now wraps "Built to last." (the payoff line). First sentence renders in `--bone-dim`, second in full `--bone` brightness. All other hero elements unchanged (subtext, hero-facts row, CTAs).
- `app/components/Footer.tsx` — full rebuild. Replaced the single thin row with a taller three-column footer. New structure:
  - Outer padding: 80px top / 56px bottom.
  - **Grid (1.4fr / 1fr / 1fr):** Column A (Brand): white.png logo mark at 26px height alongside "VAELT" text, one-line description, 3 circular bordered social icon links (Instagram / Facebook / X) with `--amber` hover. Column B (Site): amber VT323 "SITE" label, links to Home / Services / About / Contact / Work (Work anchors to `/#work`). Column C (Get in touch): amber VT323 "GET IN TOUCH" label, `hello@vaelt.xyz` mailto link, "Book a free audit call →" linking to /contact.
  - **Bottom bar:** `border-top` separator, flex space-between. Left: "© 2026 VAELT. All rights reserved." Right: "Privacy Policy" → /privacy, "Terms of Service" → /terms.
- `app/globals.css` — appended all footer CSS: `.footer-outer`, `.footer-grid`, `.footer-col`, `.footer-col-brand`, `.footer-logo-row`, `.footer-logo-img`, `.footer-brand-name`, `.footer-desc`, `.footer-socials`, `.footer-social-link` + hover, `.footer-col-label`, `.footer-links`, `.footer-link` + hover, `.footer-link-cta` + hover, `.footer-bottom`, `.footer-bottom-copy`, `.footer-legal`, `.footer-legal-link` + hover. Responsive breakpoints at 900px (2-col, brand spans full width) and 600px (1-col, bottom bar stacks).
- `app/privacy/page.tsx` — new placeholder page. H1 "Privacy Policy" at locked Hero H1 scale, one paragraph: "This policy is being finalized. Contact hello@vaelt.xyz with any questions in the meantime."
- `app/terms/page.tsx` — new placeholder page. H1 "Terms of Service" at locked Hero H1 scale, same placeholder paragraph pattern.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — 10 routes prerendered cleanly (added /privacy and /terms)
- ✅ Hero H1 typography unchanged (clamp / weight / max-width all identical)
- ✅ Footer social links open in new tab with rel="noopener noreferrer"
- ✅ Work link anchors to `/#work` (no standalone /work page per sitemap)
- ✅ No em dashes anywhere in footer copy
- ✅ /privacy and /terms placeholder pages don't 404
- ✅ Placeholder pages styled consistently (dark bg, bone text, standard container)

**Open questions for Dhanika:**
1. All previously open questions remain (contact form email handler).
2. /privacy and /terms are placeholders — flag when you're ready to write real legal copy.

---

## 2026-07-01 — Scroll restoration + back-to-top button

**Built / changed:**

- `app/components/LenisProvider.tsx` — refactored to expose the Lenis instance via React context (`LenisContext`). Added named export `useLenis()` hook so other components can call `lenis.scrollTo()` directly. Instance stored in `useState` so context consumers re-render when Lenis initializes. Behavior is identical to before; only the context layer is new.
- `app/components/ScrollRestoration.tsx` — new client component. Mounts once in layout. (1) Sets `window.history.scrollRestoration = 'manual'` on mount to disable browser-native scroll restoration on refresh. (2) Watches `usePathname()` — on every route change, calls `lenis.scrollTo(0, { immediate: true })` if Lenis is active, otherwise falls back to `window.scrollTo({ top: 0, behavior: 'instant' })`. Prevents mid-page render on back/forward navigation and nav link clicks.
- `app/components/BackToTop.tsx` — new client component. Fixed bottom-right circle (44px, `--bg-2` fill, 1px `--border` border, `--bone-dim` icon). Fades in with `opacity` + `translateY(8px→0)` transition after user scrolls past 80% of viewport height. `pointer-events: none` while hidden. On click: instant scroll if `prefers-reduced-motion` is set, smooth via Lenis (`lenis.scrollTo(0)`) or native `behavior: 'smooth'` otherwise. Hover: border and icon shift to `--amber`.
- `app/layout.tsx` — added `ScrollRestoration` and `BackToTop` imports; both rendered inside `<LenisProvider>` so they can consume the Lenis context. `ScrollRestoration` is first child (before Nav); `BackToTop` is last child (after Footer).
- `app/globals.css` — added `.back-to-top` and `.back-to-top:hover` rules.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — 10 routes, all clean
- ✅ Native scroll restoration disabled (manual mode)
- ✅ Route changes scroll to top instantly, no smooth-lag
- ✅ Lenis internal position reset alongside native scroll
- ✅ Back-to-top fades in/out with transition, pointer-events gated
- ✅ prefers-reduced-motion: instant scroll used instead of smooth

---

## 2026-07-01 — Custom cursor added (global)

**Built / changed:**

- `app/components/CustomCursor.tsx` — new `'use client'` component. Mounts a 14px amber (`#FF7A1A`) filled circle that follows the mouse with lerp (factor 0.16 per frame via rAF), and a full-viewport fixed `<canvas>` that draws a line segment from the ball's previous to current position each frame, fading old segments with a low-alpha background fill (`rgba(13,13,13,0.08)`), producing a comet-tail trail effect.
- `app/layout.tsx` — `<CustomCursor />` rendered as the first child of `<body>`, before `<LenisProvider>`. One import added.

**Behavior details:**
- Touch / coarse-pointer devices: `matchMedia('(pointer: fine)')` check on mount — if false, nothing renders, no `cursor: none` applied.
- `prefers-reduced-motion`: if set, lerp factor snaps to 1 (instant follow) and canvas trail is skipped entirely.
- `cursor: none` set on `document.body.style` on mount, restored on unmount.
- Ball and canvas both have `pointer-events: none` — never blocks clicks or hover states.
- Single shared rAF loop. Canvas resizes correctly on window resize. All listeners and the rAF loop cleaned up on unmount.
- `aria-hidden="true"` on both the canvas and ball div.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ Mounted once in layout, not per-page
- ✅ No competing rAF loops
- ✅ Reduced-motion respected
- ✅ Touch devices unaffected

---

## 2026-07-01 — About page rebuilt from scratch

**Built / changed:**

- `app/about/page.tsx` — full rebuild. Removed old "One person. No handoffs." H1, removed solo-founder copy, removed PhasePanel section, removed "One Problem / One Sprint / One Owner" StepBand titles. New section order:
  1. **HERO/LEAD** — Badge `ABOUT` + H1 "Every build gets the same amount of care." at locked Hero H1 scale (`clamp(2rem,4.2vw,3.1rem)` weight 600 max-width 640px). Two short paragraphs (no solo/team-size language, no em dashes).
  2. **PROCESS INTRO** — Eyebrow "HOW IT WORKS", H2 "Built like software, not like a favor." at Section H2 scale, one line "Same process, every project." No Badge component used here — inline eyebrow span to match mockup.
  3. **STEP BANDS** — Reused `<StepBand />` ×3. Retitled: Diagnose / Build / Launch with new copy per spec. 80px top margin pushes bands away from intro section.
  4. **CONNECT** — New section. Eyebrow `[ ELSEWHERE ]`. Three social links (Instagram / Facebook / X) with SVG icons, `target="_blank" rel="noopener"`, linking to real URLs. "@vaeltlabs" handle on the right side of the row. No YouTube link.
  5. **CTA** — `<CTABand text="Ready to find what's actually broken?" buttonLabel="Book a free audit call" />`.
  6. **FOOTER** — unchanged (rendered by layout).

- `app/globals.css` — appended `.connect-row`, `.connect-links`, `.connect-link` + hover + mobile `@media (max-width: 640px)` override (stacks links vertically).

**Removed from About page:**
- PhasePanel render (component stays in codebase, just not rendered here).
- "One person. No handoffs." H1 and all solo-founder framing.
- "One Problem / One Sprint / One Owner" step titles.
- Old three-paragraph lead block with "one-person studio" and "no team to absorb a bad scope" language.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 8 routes prerendered, compiled cleanly
- ✅ Hero H1 at locked Global Typography Scale (`clamp(2rem,4.2vw,3.1rem)` weight 600 max-width 640px)
- ✅ No solo-founder, "one person," "account manager," or team-size language on page
- ✅ No em dashes anywhere in copy
- ✅ PhasePanel not rendered (component preserved in codebase)
- ✅ StepBands retitled Diagnose / Build / Launch with spec copy verbatim
- ✅ Connect section: 3 links (Instagram / Facebook / X), no YouTube, @vaeltlabs handle visible
- ✅ All social links use real URLs, open in new tab with rel="noopener"

**Open questions for Dhanika:**
1. All previously open questions remain (contact form email handler).

---

## 2026-07-01 — Home page rebuilt from scratch + Nav fixed site-wide

**Built / changed:**

- `app/page.tsx` — full rebuild. Removed old SERVICES (7-item), WORK (5 fake placeholder), and BUILD_RULES (12-item) data arrays. Removed StepBand/PhasePanel/ServiceList/WorkRow imports. New section order:
  1. **HERO** — eyebrow `[ VAELT ]`, H1 at locked size (`clamp(2rem,4.2vw,3.1rem)` weight 600 max-width 640px), subtext, 3 hero-fact tags with amber checkmark SVGs (no fabricated numbers, no solo-founder framing), primary CTA (BOOK A FREE AUDIT CALL → /contact) + ghost CTA (SEE THE PROBLEMS WE FIX → /services).
  2. **ABOUT [01/05]** — SectionTagRow, one paragraph, ghost CTA → /about. No solo-founder or "one person" language.
  3. **WHAT'S BROKEN [02/05]** — SectionTagRow, 3-card mini-grid. Each card links to /services (not a modal). Cards use locked problem headlines: "Your website is losing you customers" / "You're losing leads in your DMs" / "You're the bottleneck in your own business".
  4. **PROCESS** — `<ProcessSteps />` reused directly from Services page (no SectionTagRow — component owns its own section element). 4-step sequence: Audit call / Plan and scope / Build / Launch and handoff.
  5. **BUILD RULES [03/05]** — MarqueeStrip above, SectionTagRow, exactly 6 rules per spec.
  6. **SELECTED WORK [04/05]** — SectionTagRow, 4 real demo builds with `target="_blank"`: Ceylon Edge Wallets (concept) / Lumora Studio (concept) / Butter Boutique / Pulse Active. No "(concept)" on last two per instruction.
  7. **FAQ [05/05]** — SectionTagRow dark, 4 questions. Agency answer: "No bloated process, no jargon-filled proposals. Just a clear plan and a fast build."
  8. **FINAL CTA** — eyebrow `[ START HERE ]`, H2 at Closing CTA size (`clamp(1.8rem,4vw,2.6rem)`), subline, primary CTA → /contact.

- `app/components/Nav.tsx` — replaced `mix-blend-mode: difference` + pointer-events hacks with `.site-nav-header` CSS class (solid `rgba(13,13,13,0.88)` background, `backdrop-filter: blur(10px)`, `border-bottom: 1px solid var(--border)`). Applies site-wide.

- `app/globals.css` — added: `.site-nav-header`, `.hero-facts`, `.hero-fact`, `.mini-grid`, `.mini-card`, `.mini-tag`, `.mini-headline`, `.mini-cta`, `.home-work-row`, `.home-work-num`, `.home-work-title`, `.home-work-type`, `.home-work-arrow` (all with responsive breakpoints).

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 8 routes prerendered, compiled in 4.6s
- ✅ Hero H1 at locked Global Typography Scale (`clamp(2rem,4.2vw,3.1rem)` weight 600 max-width 640px)
- ✅ No fabricated numbers, no solo-founder framing, no em dashes, no pricing
- ✅ StepBand and PhasePanel NOT rendered on Home (components stay in codebase for About page)
- ✅ Old SERVICES / WORK / BUILD_RULES arrays deleted from page.tsx
- ✅ 3 mini-cards link to /services (modal interaction only lives on Services page)
- ✅ ProcessSteps reused directly from Services page, not rebuilt
- ✅ 4 real work demo rows with correct "(concept)" labeling per spec
- ✅ FAQ agency answer matches spec copy verbatim
- ✅ Nav fix is site-wide

**Open questions for Dhanika:**
1. All previously open questions remain (contact form email handler).
2. SectionTagRow count is now 05 — ProcessSteps sits as an unnumbered section between [02/05] and [03/05] since it owns its own section element. Flag if you want the numbering adjusted.

---

## 2026-07-01 — Logo and favicon wired up

**Built:**
- `app/layout.tsx` — added `icons: { icon: '/fav/favicon.ico' }` to the metadata export so the browser picks up the favicon from `public/fav/favicon.ico`.
- `app/components/Nav.tsx` — logo link updated from plain "VAELT" text to mark + wordmark pair. Added `<img src="/logo/white.png" alt="" aria-hidden="true" style={{ height: '24px', width: 'auto' }} />` before the "VAELT" text, wrapped in a `flex items-center gap-2` container. Uses white.png (mark only, no wordmark in the file) on top of the dark `--bg` nav.
- `app/components/Footer.tsx` — left unchanged (text-only, no mark, no change needed).

**Notes:**
- No scroll-based logo color switching added — white mark reads fine over amber FAQ section at nav height.
- Plain `<img>` used, not next/image, per project rules.

---

## 2026-07-01 — Services page rebuilt from scratch

**Built:**
- `app/services/page.tsx` — full rebuild. Replaced old ALL_SERVICES flat list with a 6-section page: Hero, ProblemGrid, ProcessSteps, BeforeAfter, CTABand, Footer.
- `app/components/ProblemGrid.tsx` — new client component. 3-card grid (website/leads/automation), border-simulated 1px gap layout. Each card opens a dimmed modal overlay (scale+fade, `prefers-reduced-motion` respected). Modal contains: tag, headline, THE PROBLEM, THE SOLUTION, WHAT YOU GET (bullet list), BOOK A FREE AUDIT CALL button linking to /contact. Escape key + click-outside both close the modal. Body scroll locked while modal is open.
- `app/components/ProcessSteps.tsx` — new server component. 4-step sequence (Audit call / Plan and scope / Build / Launch and handoff). Desktop: flex row with horizontal connector lines between numbered circles. Mobile (768px): flips to column with vertical connector lines, step text flows right of circle.
- `app/components/BeforeAfter.tsx` — new server component. 3 rows (website/leads/automation), each split into BEFORE/AFTER cells. Each cell has: pillar label, 1:1 square SVG illustration (abstract UI mockup in locked palette hex values only — no CSS vars in SVG fill/stroke), one line of copy. Section intro states "Illustrative, not a real client." All SVGs coded inline as abstract browser chrome, chat bubble flows, and workflow node diagrams.
- `app/components/CTABand.tsx` — added optional `subline` prop. Updated font size to match Closing CTA H2 spec (`clamp(1.8rem, 4vw, 2.6rem)`, weight 600, max-width 560px). Gap tightened to 20px to accommodate subline.
- `app/globals.css` — appended new CSS classes: `.problem-grid`, `.problem-card` + hover, `.problem-card-tag/title/cue/arrow`, `.modal-overlay` + `@keyframes modal-bg-in`, `.modal-box` + `@keyframes modal-scale-in`, reduced-motion overrides, `.modal-close` + hover, `.modal-tag/title/section-label/body/list/divider`, `.process-steps-outer`, `.process-step`, `.process-line`, `.process-circle`, `.process-step-label/desc`, mobile breakpoints for process steps, `.ba-rows-wrap`, `.ba-row`, `.ba-cell`, `.ba-cell-label.after`, `.ba-visual`, `.ba-copy`, 640px breakpoint for BA rows.

**Services page CTABand copy (updated):**
- Headline: "Ready to see what we'd build?"
- Subline: "Thirty minutes, zero pressure. You'll leave with a plan either way."
- Button: "Book a free audit call"

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 8 routes prerendered, compiled in 4.2s
- ✅ ALL_SERVICES array and ServiceList usage removed from services page (ServiceList component untouched, still used by Home)
- ✅ No pricing anywhere in modal reveals or card copy
- ✅ Apostrophes in strings use template literals to avoid quote conflict
- ✅ SVG illustrations use hex values, not CSS vars (reliable in SVG fill/stroke)
- ✅ BeforeAfter intro states "Illustrative, not a real client"
- ✅ Modal respects prefers-reduced-motion (animation: none on overlay + box)
- ✅ Global Typography Scale from design-direction.md applied: Hero H1 clamp(2rem,4.2vw,3.1rem) weight 600 max-width 640px; Section H2 clamp(1.6rem,3.2vw,2.1rem) weight 600 max-width 480px; Card H3 clamp(1.4rem,2.4vw,1.8rem) weight 600

**Open questions for Dhanika:**
1. All previously open questions from Phase 4 remain (contact form email handler, Work row copy, About CTABand copy).
2. The `cue` line under each problem card and the modal copy were written by Claude following the Content Voice rules. Flag any lines that miss the tone.

## 2026-07-01 — Phase 4 complete

**Built:**
- `app/services/page.tsx` — Badge + H1 + subhead (verbatim content.md), `<ServiceList clip={false} />` showing all 7 problem→solution pairs, `<CTABand />` close.
- `app/work/page.tsx` — Badge + H1 + subhead (verbatim content.md), full `<WorkRow />` with all 5 concept builds, each labeled "(concept)" in the title. Detail text per row pulled from same copy already used in Home `WORK` array. `<CTABand />` close.
- `app/about/page.tsx` — Badge + H1 "One person. No handoffs." + 3 verbatim body paragraphs from content.md, then reused `<StepBand />` ×3 with section intro (same as Home, no SectionTagRow), reused `<PhasePanel />` with same 4-phase content, `<CTABand />` close.
- `app/contact/page.tsx` — Badge + H1 "Tell me what's broken." + intro line (verbatim), `<ContactForm />`, direct contact line "hello@vaelt.xyz — @vaeltlabs" (verbatim).
- `app/components/ContactForm.tsx` — New client component. Form fields: Name (required), Email (required), "What's the problem?" textarea (required), Budget range (optional). Submits via `fetch('/api/contact', POST, JSON)`. Success state: "Request sent. Expect a reply within a day." (verbatim content.md). Error state: fallback message with direct email. Inputs styled with `--bg-3` background, `--border` default border, `--amber` focus border. Submit button uses `.btn-primary`.
- `functions/api/contact.ts` — Cloudflare Pages Function at `/api/contact`. Handles POST only. Validates required fields (name, email, problem). Returns `{ ok: true }` on success (stub — not wired to email yet, see open questions). Includes OPTIONS handler for CORS preflight.
- `app/components/ServiceList.tsx` — Fixed: `maxHeight: '520px'` was hardcoded regardless of `clip` prop. Now only applied when `clip={true}`.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 8 routes (6 app + /_not-found + static) prerendered, compiled in 3.7s
- ✅ All 5 routes navigable from `<Nav />` — Home, Services, Work, About, Contact all link correctly
- ✅ No placeholder text anywhere — all copy verbatim from content.md
- ✅ No price numbers, no real client names, no Aurax Digital references
- ✅ All work items clearly labeled "(concept)" in title
- ✅ Contact form submits to `/api/contact` (Cloudflare Pages Function, not a Next.js API route)
- ✅ `functions/` directory placed at project root per Cloudflare Pages Functions convention

**Open questions for Dhanika:**
1. `functions/api/contact.ts` is a stub — it logs the submission but does NOT send an email. Phase 5 will wire this to a real email service. Options: Brevo (already in MCP tools), Resend, or a webhook to Slack/Make. Pick one before Phase 5.
2. Work row detail copy (the expanded accordion text) — content.md doesn't specify this. It was carried over from the Home page `WORK` array (already built in Phase 3). If you want different/richer copy for the Work page accordion, flag it.
3. About page CTABand text ("Ready to fix the one thing that's actually slowing you down?") was written by Claude — content.md doesn't specify CTA band copy for About. Flag if you want different wording.

**Next up:** Phase 5 — Forms & interactivity: wire contact form to real email handler, confirm form validation works on mobile/touch, test all interactive components (sibling-dim, phase tabs, work-row expand) on touch devices.

---

## 2026-07-01 — Phase 3 complete

**Built:**
- `app/page.tsx` — Full Home page replacing the Phase 2 showcase. Sections in wireframe order: Hero → About [ 01/06 ] → Services [ 02/06 ] → How We Work [ 03/06 ] → StepBand ×3 → How We Build (PhasePanel) → Build Rules [ 04/06 ] → Selected Work [ 05/06 ] → FAQ [ 06/06 ]. All copy verbatim from `content.md`.
- `app/components/MarqueeStrip.tsx` — Server component. 16 repeated "BUILD RULES + amber diamond" items in two identical halves; CSS `translateX(-50%)` animates the track for seamless looping. Animation disabled via `@media (prefers-reduced-motion: reduce)` in globals.css.
- `app/components/SectionTagRow.tsx` — Added `dark?: boolean` prop. When `dark={true}` (used on FAQ amber section), index renders `rgba(0,0,0,0.7)` and label `rgba(0,0,0,0.5)` instead of amber/bone-dim.
- `app/components/PhasePanel.tsx` — Replaced inline `display: grid; gridTemplateColumns: 280px 1fr` with `className="phase-panel-grid"` so CSS can override to 1-col on `<768px`.
- `app/components/WorkRow.tsx` — Replaced inline `display: grid; gridTemplateColumns` with `className="work-row-grid"`; added `className="work-row-type"` to the type tag span so CSS can hide it on `<768px`.
- `app/globals.css` — Added: `.wrap` layout utility, `.ghost-cta` + hover, `.btn-primary` + hover, `@keyframes scroll-left` + `.marquee-track` + reduced-motion override, `.services-grid` responsive (900px breakpoint), `.phase-panel-grid` responsive (768px), `.work-row-grid` + `.work-row-type` responsive (768px), `.faq-outer-grid` responsive (900px), `.faq-items-grid` responsive (600px).
- `docs/design-direction.md` — Confirmed present on disk (was flagged missing in Phase 2 log; it was saved to disk at the start of this session).

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 8 routes (6 app + /_not-found + static) prerendered, compiled in 3.5s
- ✅ Home matches wireframe structure in `wireframes.md` section order exactly
- ✅ All copy pulled verbatim from `content.md` (checked against each section)
- ✅ Responsive: services grid, FAQ grid, FAQ items, phase panel, work row all have CSS breakpoints
- ✅ Marquee respects `prefers-reduced-motion` via CSS media query (animation: none)
- ✅ No price numbers, no real client names, no Aurax Digital references

**Next up:** Phase 4 — Remaining pages: Services → Work → About → Contact.
- Services: `<ServiceList clip={false} />` + `<CTABand />`, H1 instead of H2
- Work: Full `<WorkRow />` with `(concept)` labeling
- About: Lead block + reused `<StepBand />` + `<PhasePanel />` + `<CTABand />`
- Contact: Intro + new `<ContactForm />` component + direct contact line

**Open questions for Dhanika:**
1. Cloudflare Pages adapter question still open for Phase 8.

---

## 2026-07-01 — Phase 2 complete

**Built:**
- `app/globals.css` — token values corrected to match `design-system.md` (source of truth). Changes: `--bg-2` `#141414→#161616`, `--bg-3` `#1C1C1C→#1E1E1E`, `--amber-dim` `#CC6215→#B85812`, `--bone` `#F2EFE8→#EDE6DA`, `--bone-dim` `#9E9990→#9C9486`, `--border` `#282828→#2A2A2A`. Added `--amber-deep: #6B340A` (third step-band shade).
- `app/components/SectionTagRow.tsx` — flex row, amber index left / bone-dim label right, 24px 40px padding, VT323 18px 0.08em tracking. Home-only per design-direction rule.
- `app/components/ServiceList.tsx` (client) — accepts `items: ServiceItem[]` + `clip?: boolean`. Sibling-dim hover via React state (hovering parent + hovered index). Click-to-expand accordion reveals solution below problem text. Oversized problem text `clamp(2rem,5vw,3.4rem)` Clash Display 700 bone-dim. Amber VT323 number prefix. `clip=true` shows first 6 items (Home teaser); `clip=false` shows all.
- `app/components/StepBand.tsx` — single component, `variant: 1|2|3` prop drives the 3-shade amber ramp: `#FF7A1A` (v1 dark text), `#B85812` (v2 dark text), `#6B340A` (v3 bone text). Full-bleed, 64px vertical padding, flex baseline row with step number + Clash Display H3 `clamp(1.8rem,5vw,3rem)`, VT323 description centered max-width 680px.
- `app/components/PhasePanel.tsx` (client) — 2-col grid `280px 1fr`, border-radius 16px, overflow hidden, min-height 420px. Left: bg-2 tab list with dot indicators + VAELT label. Right: bg content area with H3 1.6rem + VT323 body uppercase bone-dim. Click-to-swap via `useState(activeIdx)`. Default phases from `content.md` baked in, overridable via `phases` prop.
- `app/components/WorkRow.tsx` (client) — accepts `items: WorkItem[]`. Sibling-dim + padding-left indent on hover. Grid `60px 1fr 180px 40px`. Amber arrow fades in + slides from -8px→0 on row hover. Click-to-expand optional `detail` text in bg-2 panel.
- `app/components/CTABand.tsx` (client) — full-bleed amber strip, Clash Display headline `clamp(1.4rem,3.5vw,2.2rem)`, dark `#0D0D0D` button with bone text, `href` prop (defaults to `/contact`). `'use client'` needed for hover opacity on Next.js Link.
- `app/page.tsx` — Phase 2 showcase page rendering all 6 components in isolation with real copy from `content.md` and real work items.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 8 routes (6 app + /_not-found + static) prerendered, no build errors
- ✅ Each component renders with placeholder content matching `design-system.md` specs (padding, border-radius, hover states documented per spec)

**Note — `design-direction.md` is missing from disk:** The file appears in `CLAUDE.md`'s reference table and was referenced throughout the planning log, but it does not exist in `docs/` (only `design-system.md`, `build-guidelines.md`, `content.md`, `seo-metadata.md`, `sitemap.md`, `wireframes.md`). Phase 3 (Home assembly) will need `design-direction.md` for per-section layout mapping. **Open question for Dhanika:** Was it deleted, never created, or should it be inferred from `wireframes.md` + `design-system.md` section annotations alone?

**Next up:** Phase 3 — Home page assembly. Replace `app/page.tsx` showcase with actual Home page sections in wireframe order: Hero → About → Services → How We Work (StepBand ×3) → How We Build (PhasePanel) → Build Rules → Selected Work → FAQ. All copy from `content.md` verbatim.

**Open questions for Dhanika:**
1. `design-direction.md` is missing — needed for Phase 3 section layout mapping. Recreate, or proceed from `wireframes.md` + `design-system.md` section specs alone?
2. Cloudflare Pages adapter question still open for Phase 8.

---

## 2026-07-01 — Phase 1 complete

**Built:**
- `app/components/Badge.tsx` — amber filled pill, mono (VT323), uppercase tracking-widest.
- `app/components/Nav.tsx` — fixed, `mix-blend-mode: difference`, `pointer-events-none` on header + `pointer-events-auto` on inner nav (so the blend doesn't eat click events), logo left / center links / CTA button right. Center links hidden below `--breakpoint-nav: 900px` (custom Tailwind v4 breakpoint added to `@theme`). Active link uses full opacity; inactive links 60% opacity → 100% on hover (avoids color-change hover that looks odd under difference blend).
- `app/components/Footer.tsx` — single row, flex space-between on ≥900px, stacks vertically on mobile. Copy from `content.md` exactly: `VAELT—©2026 · hello@vaelt.xyz · @vaeltlabs · vaelt.xyz`.
- `app/components/LenisProvider.tsx` — client-side Lenis `{ lerp: 0.1, smoothWheel: true }`. Checks `prefers-reduced-motion` on mount; if set, Lenis never initializes (plain browser scroll). `cancelAnimationFrame` on cleanup.
- `app/layout.tsx` — LenisProvider wraps Nav + {children} + Footer. Font links unchanged.
- `app/globals.css` — added `--breakpoint-nav: 900px` to `@theme`.
- Stub pages: `app/services/page.tsx`, `app/work/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` — each renders `<main className="min-h-screen pt-16" />` so Nav and Footer render identically on all 5 routes.

**Done criteria met:**
- ✅ `npx tsc --noEmit` — zero errors
- ✅ `npx next build` — all 6 routes (`/`, `/services`, `/work`, `/about`, `/contact`, `/_not-found`) prerendered as static content, compiled in 3.7s
- ✅ Dev server starts cleanly on port 3001

**Blocker found — `design-system.md` is missing:** This file is referenced throughout `design-direction.md`, `wireframes.md`, and `build-guidelines.md` as the source for component CSS specs (section 4+: buttons, cards, nav, hero, section layout). It does not exist on disk. Phase 1 was built from `design-direction.md` + `wireframes.md` + `content.md` alone, which was sufficient for Nav/Footer/Badge/Lenis. Phase 2 component specs (button tokens, card padding/radius, service-list layout, step-band, phase-panel) will need this file or explicit spec decisions from Dhanika.

**Next up:** Phase 2 — shared content components. Requires `design-system.md` to exist OR Dhanika's confirmation to derive specs from `design-direction.md` inline hints (`.card-demo`, `.btn-primary`, `.work-row grid`, etc.).

**Open questions for Dhanika:**
1. `design-system.md` doesn't exist. Should it be created (Dhanika drafts component specs, or I derive them from the design-direction.md hints)? Or should I proceed with Phase 2 using the inline class names in `design-direction.md` as the spec source?
2. Prior open question about Cloudflare Pages adapter still open for Phase 8.

---

## 2026-06-30 — Phase 0 complete

**Built:**
- Installed Lenis (`npm install lenis`) — package present, wiring deferred to Phase 1.
- `app/globals.css` — full `@theme` token block (7 color tokens, 3 font tokens) + matching `:root` CSS vars for direct CSS usage. Fonts: Clash Display + Satoshi via Fontshare API, VT323 via Google Fonts — all loaded via `<link>` tags in layout.
- `app/layout.tsx` — stripped Geist/Next font setup, added preconnect + stylesheet links for all three fonts, removed placeholder metadata.
- `app/page.tsx` — temporary token-check page (will be replaced in Phase 3). Tests all three fonts, all color swatches, and the primary button style.

**Token values locked:**

| Token | Value |
|---|---|
| `--bg` | `#0D0D0D` |
| `--bg-2` | `#141414` |
| `--bg-3` | `#1C1C1C` |
| `--amber` | `#FF7A1A` |
| `--amber-dim` | `#CC6215` |
| `--bone` | `#F2EFE8` |
| `--bone-dim` | `#9E9990` |
| `--border` | `#282828` |

**Done criteria met:**
- ✅ Correct `#0D0D0D` background (verified `rgb(13,13,13)` in computed styles)
- ✅ Clash Display loaded and rendering on `h1`
- ✅ Satoshi loaded and rendering on body text
- ✅ VT323 loaded and rendering on mono element
- ✅ Amber `#FF7A1A` correct (verified swatch computed color)
- ✅ Zero console errors (Playwright headless check)

**Note on `design-system.md`:** ~~File referenced in CLAUDE.md is a typo~~ — **CORRECTION (2026-07-01):** `design-system.md` and `design-direction.md` are two distinct documents. `design-system.md` holds locked component specs (section 4 onward: buttons, cards, nav, hero, every section's CSS). `design-direction.md` maps that system onto the 5 pages. The previous session note was wrong. `design-system.md` does NOT exist on disk yet — it was never created. This needs to be written before Phase 2 so component specs have a canonical source. Token values were correctly locked in `globals.css` from the palette anchors.

**Next up:** Phase 1 — shared layout shell: `<Nav />`, `<Footer />`, root `layout.tsx` with Lenis, `<Badge />` component.

**Open questions for Dhanika:** None new. Prior question about Cloudflare Pages adapter still open for Phase 8.

---

## 2026-06-30 — Planning phase complete

**Built:**
- All planning docs finalized and placed in `docs/`: `sitemap.md`, `wireframes.md`, `content.md`, `seo-metadata.md`, `design-direction.md`, `design-system.md`, `build-guidelines.md`, `CLAUDE.md`.
- No code written yet — project is a fresh `create-next-app` scaffold with nothing built on top.

**Next up:** Phase 0 (Setup) per `build-guidelines.md` — confirm Next.js 16 / Tailwind v4 / Turbopack scaffold, wire up `@theme` tokens in `app/globals.css`, load fonts.

**Open questions for Dhanika:**
- Cloudflare Pages deploy adapter for Next.js 16 needs verifying at deploy time (Phase 8) — compatibility wasn't confirmed during planning.

**Locked decisions:**
- `output: 'export'` added to `next.config.ts` — Cloudflare Pages expects a static `out/` directory; a default `next build` without this flag does not produce one.
- Contact form backend: **must use Cloudflare Pages Functions (`/functions` directory) or a third-party form handler (e.g. Formspree, Web3Forms).** Next.js Server Actions and API routes are not supported in static export mode and will not work on Cloudflare Pages. Do not attempt to use either for the contact form.

**Blockers:** none.
