import Link from 'next/link';
import SectionTagRow from './components/SectionTagRow';
import ProcessSteps from './components/ProcessSteps';
import MarqueeStrip from './components/MarqueeStrip';
import HeroBackground from './components/HeroBackground';

const BUILD_RULES = [
  'Ship in days, not months.',
  'Fix the most expensive problem first.',
  'One owner, start to finish. No ticket queue.',
  'Scope gets locked before the build starts.',
  "If it doesn't load fast, it doesn't ship.",
  'Nothing goes live untested on a real phone.',
];

const FAQ_ITEMS = [
  {
    number: '001',
    question: "What's this going to cost?",
    answer:
      "Depends what you actually need. A landing page is a different job than a full booking system. You'll know the number before the call ends.",
  },
  {
    number: '002',
    question: 'How fast can this happen?',
    answer:
      "Most builds ship in days, not months. Bigger systems take a bit longer, and you'll know the timeline upfront.",
  },
  {
    number: '003',
    question: 'Do you take small or one-off projects?',
    answer: "If it's worth doing properly, yes.",
  },
  {
    number: '004',
    question: 'What makes this different from a normal agency?',
    answer: 'No bloated process, no jargon-filled proposals. Just a clear plan and a fast build.',
  },
];

const WORK_ITEMS = [
  {
    num: '01',
    title: 'Ceylon Edge Wallets (concept)',
    type: 'E-COMMERCE',
    href: 'https://ceylonedge-byaurax.vercel.app/',
  },
  {
    num: '02',
    title: 'Lumora Studio (concept)',
    type: 'WEBSITE',
    href: 'https://lumorastudio-aurax.vercel.app/',
  },
  {
    num: '03',
    title: 'Butter Boutique',
    type: 'WEBSITE',
    href: 'https://butter-boutique-colombo.vercel.app/',
  },
  {
    num: '04',
    title: 'Pulse Active',
    type: 'E-COMMERCE',
    href: 'https://pulseactive-website.vercel.app/',
  },
];

const HERO_FACTS = [
  'SHIPS IN DAYS, NOT MONTHS',
  'BUILT AROUND HOW YOU WORK',
  'NO PRICING SURPRISES',
];

const ARROW_PATH = 'M5 12h14M13 6l6 6-6 6';
const CHECK_PATH = 'M20 6L9 17l-5-5';

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 0 60px',
        position: 'relative',
      }}>
        <HeroBackground />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
            marginBottom: '20px',
          }}>
            [ VAELT ]
          </span>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            maxWidth: '640px',
            color: 'var(--bone-dim)',
            margin: 0,
          }}>
            Built to work.{' '}
            <span style={{ color: 'var(--bone)' }}>Built to last.</span>
          </h1>

          <p style={{
            marginTop: '22px',
            maxWidth: '480px',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'var(--bone-dim)',
            fontFamily: 'var(--font-body)',
          }}>
            Websites, booking systems, and automations, built fast and built right. No jargon, no waiting weeks for a reply.
          </p>

          <div className="hero-facts">
            {HERO_FACTS.map((fact) => (
              <div key={fact} className="hero-fact">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF7A1A"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d={CHECK_PATH} />
                </svg>
                {fact}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">BOOK A FREE AUDIT CALL</Link>
            <Link href="/services" className="ghost-cta">SEE THE PROBLEMS WE FIX →</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT [ 01 / 05 ] ────────────────────────────── */}
      <section style={{
        borderTop: '1px solid var(--border)',
        position: 'relative',
        padding: '120px 0',
      }}>
        <SectionTagRow index="01 / 05" label="ABOUT" />
        <div className="wrap" style={{ marginTop: '48px' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
            marginBottom: '20px',
          }}>
            [ ABOUT ]
          </span>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
            color: 'var(--bone)',
            maxWidth: '680px',
            lineHeight: 1.5,
            margin: '0 0 32px',
          }}>
            VAELT builds the websites and systems businesses actually need, without the bloat of a typical agency process. Clear plans, fast builds, no jargon in the proposal.
          </p>
          <Link href="/about" className="ghost-cta">MORE ON HOW THIS WORKS →</Link>
        </div>
      </section>

      {/* ── SERVICES TEASER [ 02 / 05 ] ──────────────────── */}
      <section style={{
        borderTop: '1px solid var(--border)',
        position: 'relative',
        padding: '120px 0',
      }}>
        <SectionTagRow index="02 / 05" label="WHAT'S BROKEN" />
        <div className="wrap" style={{ marginTop: '48px' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
            marginBottom: '14px',
          }}>
            [ WHAT&apos;S BROKEN ]
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
            letterSpacing: '-0.005em',
            lineHeight: 1.25,
            maxWidth: '480px',
            color: 'var(--bone)',
            margin: '0 0 12px',
          }}>
            Three places businesses usually lose money without noticing
          </h2>

          <p style={{
            color: 'var(--bone-dim)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            maxWidth: '440px',
            margin: '0 0 48px',
            fontFamily: 'var(--font-body)',
          }}>
            Click through to see the exact fix for each.
          </p>

          <div className="mini-grid">
            <Link href="/services" className="mini-card">
              <span className="mini-tag">01 / WEBSITE</span>
              <div className="mini-headline">Your website is losing you customers</div>
              <div className="mini-cta">
                SEE THE FIX
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={ARROW_PATH} />
                </svg>
              </div>
            </Link>
            <Link href="/services" className="mini-card">
              <span className="mini-tag">02 / LEADS</span>
              <div className="mini-headline">You&apos;re losing leads in your DMs</div>
              <div className="mini-cta">
                SEE THE FIX
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={ARROW_PATH} />
                </svg>
              </div>
            </Link>
            <Link href="/services" className="mini-card">
              <span className="mini-tag">03 / AUTOMATION</span>
              <div className="mini-headline">You&apos;re the bottleneck in your own business</div>
              <div className="mini-cta">
                SEE THE FIX
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={ARROW_PATH} />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS (reuse ProcessSteps from Services page) ── */}
      <ProcessSteps />

      {/* ── BUILD RULES [ 03 / 05 ] ───────────────────────── */}
      <section>
        <MarqueeStrip />
        <SectionTagRow index="03 / 05" label="BUILD RULES" />
        <div className="wrap" style={{ paddingTop: '48px', paddingBottom: '120px' }}>
          <ol style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: 0,
            listStyle: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            color: 'var(--bone-dim)',
            lineHeight: 2.1,
          }}>
            {BUILD_RULES.map((rule, i) => (
              <li key={i} style={{ display: 'flex', gap: '14px' }}>
                <span style={{ color: 'var(--bone)', fontWeight: 700, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SELECTED WORK [ 04 / 05 ] ─────────────────────── */}
      <section style={{
        borderTop: '1px solid var(--border)',
        position: 'relative',
        padding: '120px 0',
      }}>
        <SectionTagRow index="04 / 05" label="SELECTED WORK" />
        <div className="wrap" style={{ marginTop: '48px' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
            marginBottom: '14px',
          }}>
            [ SELECTED WORK ]
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
            letterSpacing: '-0.005em',
            lineHeight: 1.25,
            maxWidth: '480px',
            color: 'var(--bone)',
            margin: '0 0 12px',
          }}>
            What this looks like in practice
          </h2>

          <p style={{
            color: 'var(--bone-dim)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            maxWidth: '440px',
            margin: '0 0 48px',
            fontFamily: 'var(--font-body)',
          }}>
            Live demo builds. Click through to see the actual site.
          </p>

          {WORK_ITEMS.map(({ num, title, type, href }) => (
            <a
              key={num}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-work-row"
            >
              <span className="home-work-num">{num}</span>
              <span className="home-work-title">{title}</span>
              <span className="home-work-type">{type}</span>
              <svg
                className="home-work-arrow"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d={ARROW_PATH} />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* ── FAQ [ 05 / 05 ] ───────────────────────────────── */}
      <section style={{
        background: '#FF7A1A',
        padding: '120px 0',
        borderTop: '1px solid var(--border)',
      }}>
        <SectionTagRow index="05 / 05" label="FAQ" dark />
        <div className="wrap" style={{ marginTop: '48px' }}>
          <div className="faq-outer-grid">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
                color: '#0D0D0D',
                margin: 0,
              }}>
                You&apos;ve got<br />
                questions.<br />
                We&apos;ve got<br />
                answers.
              </h2>
            </div>

            <div className="faq-items-grid">
              {FAQ_ITEMS.map((item) => (
                <div key={item.number}>
                  <div style={{
                    display: 'inline-block',
                    background: '#0D0D0D',
                    color: 'var(--amber)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '16px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    marginBottom: '12px',
                    letterSpacing: '0.04em',
                  }}>
                    {item.number}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0D0D0D',
                    margin: '0 0 8px',
                  }}>
                    {item.question}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'rgba(13,13,13,0.72)',
                    margin: 0,
                  }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: '140px 0',
        textAlign: 'center',
      }}>
        <div className="wrap">
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
            marginBottom: '20px',
          }}>
            [ START HERE ]
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.4vw, 3rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: 'var(--bone)',
            maxWidth: '560px',
            margin: '0 auto 20px',
          }}>
            Ready to see what&apos;s actually broken?
          </h2>
          <p style={{
            color: 'var(--bone-dim)',
            fontSize: '1.1rem',
            maxWidth: '420px',
            margin: '0 auto 40px',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
          }}>
            Thirty minutes, zero pressure. You&apos;ll leave with a plan either way.
          </p>
          <Link href="/contact" className="btn-primary">BOOK A FREE AUDIT CALL</Link>
        </div>
      </section>

    </main>
  );
}
