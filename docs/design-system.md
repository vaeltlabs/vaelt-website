# VAELT Design System
> Theme name: **Acid Amber**

---

## 1. Color Tokens

| Token | Hex | Semantic Use |
|---|---|---|
| `--bg` | `#0D0D0D` | Primary page background |
| `--bg-2` | `#161616` | Cards, panels, surface layer |
| `--bg-3` | `#1E1E1E` | Active states, elevated surfaces |
| `--bone` | `#EDE6DA` | Primary text |
| `--bone-dim` | `#9C9486` | Secondary text, metadata, placeholders |
| `--amber` | `#FF7A1A` | Accent — CTAs, tags, highlights, logo mark |
| `--amber-dim` | `#B85812` | Hover/pressed state on amber elements |
| `--border` | `#2A2A2A` | Dividers, card outlines, input borders |

**Selection highlight:** `background: #FF7A1A; color: #0D0D0D`

---

## 2. Typography

### Font Stack

| Role | Family | Weights | CSS var |
|---|---|---|---|
| Headings | Clash Display | 500 / 600 / 700 | `--font-display` |
| Body / UI copy | Satoshi | 400 / 500 / 700 | `--font-body` |
| Labels / tags / mono | VT323 | 400 (only weight) | `--font-mono` |

**Load:**
```
https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,600,700,900&display=swap
https://fonts.googleapis.com/css2?family=VT323&display=swap
```

### Type Scale

| Style | Family | Weight | Size | Tracking | Line-height | Usage |
|---|---|---|---|---|---|---|
| H1 | Clash Display | 700 | 48px | -0.01em | — | Page heroes, section statements |
| H2 | Clash Display | 600 | 35px (2.2rem) | -0.01em | — | Section headings |
| H3 | Clash Display | 600 | 24px (1.5rem) | — | — | Card titles, sub-headings |
| Body | Satoshi | 400 | 17px (1.05rem) | — | 1.6 | Paragraphs, UI copy |
| Label | VT323 | 400 | 20px | 0.06em | — | Tags, eyebrow text, section markers |

**Hero H1:** `clamp(2.2rem, 5.5vw, 3.6rem)` — fluid, letter-spacing -0.01em, line-height 1.05

---

## 3. Spacing Scale

Base unit: **8px**

| Token | Value | Usage |
|---|---|---|
| `sp-1` | 8px | Inline gaps, icon padding |
| `sp-2` | 16px | Tight component padding |
| `sp-3` | 24px | Standard padding, gap between siblings |
| `sp-4` | 32px | Container padding (`.wrap` horizontal) |
| `sp-5` | 48px | Section tag-row padding, component groups |
| `sp-6` | 64px | Step-band padding, large component spacing |
| `sp-7` | 96px | — |
| `sp-8` | 128px | — |

**Section vertical rhythm:**
- Standard section: `140px` top + bottom (`section-pad`)
- About section: `200px` top + bottom
- How-we-work intro: `160px` top, `120px` bottom
- Phase panel inner: `140px` top + bottom

**Container:** `max-width: 1140px`; `padding: 0 32px` desktop, `0 20px` mobile.

---

## 4. Components

### Button — Primary
```css
font-family: var(--font-body);
font-weight: 700;
font-size: 0.95rem;
background: var(--amber);
color: #0D0D0D;
padding: 14px 28px;
border-radius: 8px;
display: inline-block;
```
Hover: `background: var(--amber-dim)` (`#B85812`)

### Button — Secondary / Ghost
```css
font-family: var(--font-body);
font-weight: 600;
font-size: 0.95rem;
border: 1px solid var(--border);
color: var(--bone);
padding: 14px 28px;
border-radius: 8px;
display: inline-block;
```
Hover: `border-color: var(--amber); background: rgba(255,122,26,0.06)`

### Button — Ghost Mono (inline CTA)
```css
display: inline-flex;
align-items: center;
gap: 10px;
border: 1px solid var(--border);
padding: 14px 22px;
border-radius: 4px;
font-family: var(--font-mono);
font-size: 11px (or 18px VT323);
letter-spacing: 0.06em;
transition: border-color .2s ease, background .2s ease;
```
Hover: `border-color: var(--amber); background: rgba(255,122,26,0.06)`

### Card
```css
background: var(--bg-2);
border: 1px solid var(--border);
border-radius: 12px;
padding: 28px;
```
Card tag (eyebrow): `font-family: var(--font-mono); font-size: 15px; color: var(--amber);`
Card title: `font-family: var(--font-display); font-weight: 600; font-size: 1.3rem;`
Card body: `color: var(--bone-dim); font-size: 0.9rem;`

### Tag / Badge
```css
font-family: var(--font-mono);
font-size: 18px;
letter-spacing: 0.06em;
background: var(--amber);
color: #0D0D0D;
display: inline-block;
padding: 4px 14px;
border-radius: 4px;
```

### Section Tag Row
```css
display: flex;
justify-content: space-between;
align-items: center;
padding: 24px 40px 0;
font-family: var(--font-mono);
font-size: 11px (JBMono) or 18px (VT323);
letter-spacing: 0.08em;
color: var(--bone-dim);
```
Index number: `color: var(--amber)`

---

## 5. Logo Lockup

**Mark:** V-shape SVG — two diagonal strokes meeting at a bottom point.

```svg
<svg width="32" height="32" viewBox="0 0 28 28" fill="none">
  <path d="M2 4L14 24L26 4" stroke="#FF7A1A" stroke-width="3"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

**Wordmark:** "VAELT"
- Font: Clash Display, weight 700
- Size: 1.8rem
- Letter-spacing: 0.02em
- Gap between mark and wordmark: 12px

**On dark:** mark stroke `#FF7A1A`, wordmark `var(--bone)` (`#EDE6DA`)
**On light:** mark stroke `#0D0D0D`, wordmark `#0D0D0D`

---

## 6. Taglines

**Primary:** "Websites and systems that run themselves."
**Alt 1:** "Built once. Working forever."
**Alt 2:** "AI-built. Business-ready."

---

## 7. Section Structure

Sections are numbered `[ 01 / 06 ]` through `[ 06 / 06 ]` via a section-tag-row at the top — **Home page only**, see design-direction.md for why this doesn't carry to other pages. All sections have `border-top: 1px solid var(--border)` and `position: relative`.

---

### NAV

**Layout:** Fixed header, full-width, flex row — logo left · links center · CTA right
**Behavior:** `position: fixed; z-index: 100; mix-blend-mode: difference`
**Font:** Mono, 11px (or 13px for logo), letter-spacing 0.04em
**CTA:** Filled amber button (8px 16px padding, border-radius 4px)
**Mobile:** Center links hidden below 900px

---

### HERO `[ header ]`

**Layout:** Full-viewport column, flex `justify-content: center`, `min-height: 100vh`
**Padding:** `120px` top (clears fixed nav), `60px` bottom

**Content slots:**
1. `hero-inner` — H1 headline, fluid `clamp(2.6rem,7vw,5.5rem)`, weight 700, tracking -0.03em, line-height 1.02. Dimmed base color with `.bright` span at full white/bone.
2. `hero-stats` — flex row of 3 stat blocks at bottom of hero, `margin-top: 80px`. Each block: bold number/label on top, mono caption below.

**Mobile:** Stats wrap to 2-col, gap reduces.

---

### ABOUT `[ 01 / 06 ]`

**Layout:** Single column, constrained width, large vertical padding (200px top+bottom)
**Content slots:**
1. Section tag-row (index + "ABOUT")
2. Badge pill — amber filled, mono text
3. Lead paragraph — `clamp(1.4rem,2.6vw,2rem)`, weight 500, max-width 760px
4. Ghost mono CTA — "START HERE →"

---

### SERVICES `[ 02 / 06 ]`

**Layout:** 2-column grid — `1fr 1.3fr` — left editorial, right scrollable list
**Padding:** `section-pad` (140px top+bottom) on inner `.wrap`

**Left column:**
- H2 headline (max-width 420px)
- Body copy, bone-dim
- Ghost mono CTA "LET'S TALK →"

**Right column — Service List:**
- Scrollable `<nav>`, `max-height: 520px`, thin scrollbar
- Each item: oversized link text `clamp(2rem,5vw,3.4rem)`, weight 700, tracking -0.02em
- Default color: `--bone-dim` at reduced opacity (dim state)
- **Sibling-dim interaction:** on `mouseenter` parent gets `.hovering` class → all links dim; hovered link brightens + `padding-left: 14px` indent
- Each item prefix: amber mono number tag, `font-size: 13px`
- Separator: `border-bottom: 1px solid var(--border)` between items

**Mobile:** Single column stack below 900px.

---

### HOW WE WORK `[ 03 / 06 ]`

**Layout:** Section contains only the intro headline; step content lives in 3 sibling `<div>` blocks *outside* the section.

**Section content:**
- Section tag-row
- Badge "HOW WE WORK"
- H2 headline — `clamp(2rem,5.5vw,4rem)`, weight 700, tracking -0.02em, max-width 900px
- Mono note — dim caption below H2

**Padding:** 160px top, 120px bottom

---

### STEP BANDS `[ 3 full-bleed divs, outside sections ]`

**Layout:** 3 stacked full-width divs, graduated amber/dark background — do not use the honey-clone reference's red values; derive 3 graduated steps from `--amber` (e.g. full amber → amber-dim → a darker custom shade) so the band sequence still reads as escalating without breaking the locked palette.

**Each band:**
- Outer padding: `64px 0`
- `.wrap` row: flex `align-items: baseline`, step number + H3 title, `border-bottom` divider inside band
- Step description: mono `12px`, centered, `max-width: 680px`, `padding-top: 18px`

**Step number font:** Mono 13px, weight 600
**H3 size:** `clamp(1.8rem,5vw,3rem)`, weight 700, tracking -0.02em

---

### PHASE PANEL `[ unnamed section ]`

**Layout:** Centered heading + 2-column bordered panel
**Padding:** `140px 0` (`phase-section`)

**Panel grid:** `280px 1fr`, bordered, `border-radius: 16px`, `overflow: hidden`, `min-height: 420px`

**Left — Tab list (`.phase-tabs`):**
- Background `--bg-2`, padding 28px, `border-right: 1px solid var(--border)`
- Title "VAELT" in bold 1.1rem
- 4 phase tabs, each with dot indicator
- Tab: `padding: 14px 16px; border-radius: 8px; font-size: 14px`
- Active tab: background `--bg-3`, dot color amber, text `--bone`
- Inactive: text `--bone-dim`, dot `--bg-3`
- Transition: `background .2s, color .2s`

**Right — Content area (`.phase-content`):**
- Padding 40px, flex column centered
- H3 phase title: 1.6rem, weight 700
- Body: mono 12.5px, line-height 1.8, color `--bone-dim`, max-width 560px, uppercase

**Interaction:** Click tab → JS swaps `active` class + updates content innerHTML (or React state equivalent)

**Mobile:** Single column stack below 768px.

---

### MARQUEE / BUILD RULES `[ 04 / 06 ]`

**Layout:** Two sub-sections inside one section.

**Marquee strip:**
- `border-top + border-bottom: 1px solid var(--border)`, `padding: 32px 0`, `overflow: hidden`
- Scrolling text track: `animation: scroll-left 26s linear infinite`, `translateX(0 → -50%)`
- Text: `clamp(2.4rem,6vw,4.5rem)`, weight 700, color `--bone-dim` (very dim)
- Diamond separator: `14×14px` amber filled square
- Reduced-motion: animation disabled, static text shown instead

**Rules list:**
- Section tag-row with `padding-top: 48px` override
- Centered intro paragraph: `max-width: 640px`, `font-size: 0.95rem`, color `--bone-dim`
- Rules list: `max-width: 760px`, mono `14px`, color `--bone-dim`, `line-height: 2.3`, bold prefix for each number
- Bottom padding: `120px` on list container

---

### WORK LIST `[ 05 / 06 ]`

**Layout:** Section with work-head + bordered row list

**Head:** H2 + body copy (`max-width: 480px`)

**Row grid:** `60px 1fr 180px 40px` — number · title · type tag · arrow
- Row padding: `30px 8px`
- Separator: `border-bottom: 1px solid var(--border)`, top border on container
- Title size: `clamp(1.3rem,3vw,2.1rem)`, weight 700, tracking -0.01em
- Type tag: mono 11px, dim, tracking 0.05em
- Arrow: amber, initially `opacity: 0; transform: translateX(-8px)`

**Sibling-dim interaction:**
- `mouseenter` on container → `.hovering` → all rows `opacity: 0.35`
- Hovered row: `opacity: 1 !important; padding-left: 24px`
- Arrow: `opacity: 1; transform: translateX(0)` — transition `.25s`

**Mobile:** Grid collapses to `36px 1fr 30px`, type tag hidden.

---

### FAQ `[ 06 / 06 ]`

**Layout:** Full-bleed section with accent background, 2-column grid inside

**Background:** Amber fill (`#FF7A1A`)
**Padding:** `140px 0`

**Outer grid:** `1fr 1.4fr`, gap 60px

**Left:** Big H2 — `clamp(2.2rem,6vw,4rem)`, weight 800, tracking -0.02em, line-height 1.05, hard line breaks
**Right:** 2×2 grid of FAQ items (gap 48px 40px)

**FAQ item:**
- Number badge: dark bg, accent-colored mono text, `font-size: 11px`, `padding: 5px 10px; border-radius: 4px`, `margin-bottom: 14px`
- H3: 1.3rem, weight 700
- Body: 0.95rem, line-height 1.6, 75% opacity dark text (on amber bg)

**Mobile:** Outer grid collapses to 1-col below 900px; FAQ grid collapses below 600px.

---

### FOOTER

**Layout:** Single row, flex `space-between`, `flex-wrap`, gap 20px
**Padding:** `60px 0`

**Slots:**
1. Logo wordmark (left)
2. Email + social links — mono 11px, dim, hover to full brightness
3. Domain text — mono 11px, very dim

---

## 8. Motion / Interaction Patterns

| Pattern | Trigger | Behavior |
|---|---|---|
| Sibling-dim | `mouseenter` on list container | Parent gets `.hovering` → children dim; hovered child brighten + indent |
| Phase tabs | Click tab | Active class swap + content replace |
| Marquee | Continuous | `translateX(0 → -50%)` on duplicated track, 26s linear infinite |
| CTA hover | Hover on ghost button | Border color → amber, subtle amber background wash |
| Work row arrow | Hover on row | Arrow fades in + slides in from left (-8px → 0) |
| Smooth scroll | Page load | Lenis `{ lerp: 0.1, smoothWheel: true }` |
| Reveal | Scroll | Scroll-triggered fade/slide on section entry |

---

## 9. Responsive Breakpoints

| Breakpoint | Rule |
|---|---|
| `< 900px` | Services 2-col → 1-col; FAQ outer grid → 1-col; nav center links hidden |
| `< 768px` | Hero stats wrap; phase panel → 1-col; work row drops type tag; `.wrap` padding → 20px |
| `< 640px` | Font pair grid → 1-col |
| `< 600px` | FAQ items → 1-col |

---

## 10. Implementation Notes

- **No `next/image`** — use plain `<img>` tags with `.webp` assets.
- **Tailwind v4** — tokens go in `app/globals.css` as `@theme` CSS custom properties, not `tailwind.config.js`.
- **Client components** only when browser APIs, animation libraries, or `useState` are needed.
- **Amber is the only accent color.** No red, no secondary accent — every "graduated" effect (e.g. step bands) derives from amber/dark variants, not a second hue.
- **Section pattern:** each page section should have `border-top: 1px solid var(--border)` and a section-tag-row at the top — Home only, per design-direction.md.
- **Sibling-dim JS pattern:** `mouseenter` adds `.hovering` to parent, `mouseleave` removes it. CSS handles child opacity via `.parent.hovering .child { opacity: 0.35 }` + `:hover` override.