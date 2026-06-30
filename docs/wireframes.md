# VAELT — Wireframes (ASCII)

Structure only — no final copy. Component names map to `design-system.md`. Final copy lives in `content.md`.

---

## Home — `/`

```
+-----------------------------------------------------------+
| NAV  [fixed, mix-blend-mode:difference]                   |
| VAELT      Home  Services  Work  About      [Book Call ->]|
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| HERO  [min-height:100vh]                                  |
|                                                             |
|   <hero-h1, .bright span on final word/phrase>            |
|                                                             |
|   ------------------------------------------               |
|   <stat 1>   <stat 2>   <stat 3>      <- hero-stats        |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| [ 01 / 06 ]                              ABOUT             |
|  [BADGE: ABOUT]                                            |
|  <lead paragraph, max-width 760px>          <- .lead       |
|  [ START HERE -> ]                          <- about-cta   |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| [ 02 / 06 ]                            SERVICES            |
|  LEFT (1fr)             |  RIGHT (1.3fr) - scrollable      |
|  ------------------------|  ------------------------------ |
|  <intro headline>        | 01  <problem 1>             ->  |
|  <intro body>             | 02  <problem 2>                |
|  [ LET'S TALK -> ]        | 03  <problem 3>                |
|                            | 04  <problem 4>                |
|                            | 05  <problem 5>                |
|                            |  <- sibling-dim hover, click   |
|                            |     reveals solution copy      |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| [ 03 / 06 ]                         HOW WE WORK             |
|  [BADGE]                                                    |
|  <h2 headline>                                              |
|  <mono note>                                                |
+-----------------------------------------------------------+
+---------------[ STEP BAND 1 ]------------------------------+
| 01   <step 1 title>                                         |
|      <step 1 description>                                   |
+-------------------------------------------------------------+
+---------------[ STEP BAND 2 ]------------------------------+
| 02   <step 2 title>   - <step 2 description>                |
+-------------------------------------------------------------+
+---------------[ STEP BAND 3 ]------------------------------+
| 03   <step 3 title>   - <step 3 description>                |
+-------------------------------------------------------------+

+-----------------------------------------------------------+
|                    PHASE PANEL [bordered, 280px|1fr]       |
|  +--------------+----------------------------------------+ |
|  | VAELT         |  01. <phase 1 title>                   | |
|  | * Phase 1     |  <phase 1 body>                         | |
|  | o Phase 2     |                                          | |
|  | o Phase 3     |                                          | |
|  | o Phase 4     |                                          | |
|  +--------------+----------------------------------------+ |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| [marquee strip, looping]                                   |
| [ 04 / 06 ]                          BUILD RULES            |
|  <intro paragraph>                                          |
|  001. <rule 1>                                              |
|  002. <rule 2>                                              |
|  ... (12 total)                                             |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| [ 05 / 06 ]                       SELECTED WORK              |
|  <work-head headline + body>                                |
|  ---------------------------------------------------------  |
|  01  <demo build 1>          <type tag>         ->          |
|  02  <demo build 2>          <type tag>         ->          |
|  03  <demo build 3>          <type tag>         ->          |
|  -- demo/concept names only, no real client brands --        |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| FAQ  [full-bleed amber bg, 1fr|1.4fr]                       |
|  <big H2, hard line breaks>   | 001  <question 1>           |
|                                 |      <answer 1, no numbers>|
|                                 | 002  <question 2>           |
|                                 | 003  <question 3>           |
|                                 | 004  <question 4>           |
+-----------------------------------------------------------+

+-----------------------------------------------------------+
| FOOTER                                                       |
| VAELT--(c)2026   hello@vaelt.xyz  @vaeltlabs    vaelt.xyz   |
+-----------------------------------------------------------+
```

---

## Services — `/services`

```
+-----------------------------------------------------------+
| NAV                                                          |
+-----------------------------------------------------------+
| PAGE INTRO                                                    |
|  [BADGE: SERVICES]                                            |
|  <h1: "What's actually broken?">                              |
|  <one-line subhead>                                            |
+-----------------------------------------------------------+
| FULL PROBLEM LIST  [reuses .service-list pattern, no clip]    |
|  01  <problem 1>                                       ->     |
|      <expands inline on click -> solution copy>               |
|  02  <problem 2>                                        ->    |
|  03  <problem 3>                                        ->    |
|  04  <problem 4>                                        ->    |
|  05  <problem 5>                                        ->    |
|  06  <problem 6>                                        ->    |
|  07  <problem 7>                                        ->    |
+-----------------------------------------------------------+
| CTA BAND  [full-bleed, amber or card-demo style]               |
|  <line: book the audit>          [ Book a free audit -> ]      |
+-----------------------------------------------------------+
| FOOTER                                                          |
+-----------------------------------------------------------+
```

---

## Work — `/work`

```
+-----------------------------------------------------------+
| NAV                                                          |
+-----------------------------------------------------------+
| PAGE INTRO                                                    |
|  [BADGE: WORK]                                                |
|  <h1: "What this looks like in practice.">                    |
|  <subhead: concept builds, not live client sites>             |
+-----------------------------------------------------------+
| WORK LIST  [reuses .work-row grid: 60px 1fr 180px 40px]       |
|  01  <demo build 1>          <type tag>         ->            |
|  02  <demo build 2>          <type tag>         ->            |
|  03  <demo build 3>          <type tag>         ->            |
|  04  <demo build 4>          <type tag>         ->            |
|  05  <demo build 5>          <type tag>         ->            |
|  (click -> detail panel or modal: problem solved, what's in it)|
+-----------------------------------------------------------+
| CTA BAND                                                       |
+-----------------------------------------------------------+
| FOOTER                                                          |
+-----------------------------------------------------------+
```

---

## About — `/about`

```
+-----------------------------------------------------------+
| NAV                                                          |
+-----------------------------------------------------------+
| ABOUT LEAD  [expanded version of Home's .about block]         |
|  [BADGE: ABOUT]                                                |
|  <h1: founder framing>                                          |
|  <2-3 paragraphs: solo founder, no-handoffs pitch, who built it>|
+-----------------------------------------------------------+
| HOW WE WORK  [reused 3-step band from Home]                     |
+-----------------------------------------------------------+
| HOW WE BUILD  [reused 4-phase panel from Home]                  |
+-----------------------------------------------------------+
| CTA BAND                                                          |
+-----------------------------------------------------------+
| FOOTER                                                            |
+-----------------------------------------------------------+
```

---

## Contact — `/contact`

```
+-----------------------------------------------------------+
| NAV                                                          |
+-----------------------------------------------------------+
| INTRO  [reuses .about-style lead pattern]                     |
|  [BADGE: CONTACT]                                              |
|  <h1: "Tell me what's broken.">                                |
|  <line: what happens on the call, no quote given here>          |
+-----------------------------------------------------------+
| CONTACT FORM  [styled like .card-demo, max-width ~560px]        |
|  Name        [_______________]                                  |
|  Email       [_______________]                                  |
|  What's the problem?  [_______________________] (textarea)      |
|  Budget range (optional)  [_______________]                     |
|  [ Send -> ]                                                     |
+-----------------------------------------------------------+
| DIRECT CONTACT                                                    |
|  hello@vaelt.xyz   @vaeltlabs                                     |
+-----------------------------------------------------------+
| FOOTER                                                              |
+-----------------------------------------------------------+
```
