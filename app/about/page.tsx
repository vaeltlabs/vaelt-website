import Badge from '../components/Badge';
import StepBand from '../components/StepBand';
import CTABand from '../components/CTABand';

export default function About() {
  return (
    <main>

      {/* HERO / LEAD */}
      <section style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '150px',
        paddingBottom: '120px',
      }}>
        <div className="wrap">
          <Badge>ABOUT</Badge>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            maxWidth: '640px',
            color: 'var(--bone)',
            margin: '22px 0 28px',
          }}>
            Every build gets the same amount of care.
          </h1>
          <div style={{ maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.65,
              color: 'var(--bone-dim)',
              margin: 0,
            }}>
              VAELT builds websites, booking systems, and automations that solve the actual problem you came in with. No jargon-filled proposals, no months-long timeline for a fix that should take days.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.65,
              color: 'var(--bone-dim)',
              margin: 0,
            }}>
              The work has to be worth doing properly. That&apos;s the only thing that decides what gets taken on.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS INTRO */}
      <section style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '100px',
        paddingBottom: '0',
      }}>
        <div className="wrap">
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
          }}>
            HOW IT WORKS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
            letterSpacing: '-0.005em',
            lineHeight: 1.25,
            maxWidth: '480px',
            color: 'var(--bone)',
            margin: '14px 0 16px',
          }}>
            Built like software, not like a favor.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'var(--bone-dim)',
            margin: 0,
          }}>
            Same process, every project.
          </p>
        </div>
      </section>

      {/* STEP BANDS */}
      <div style={{ marginTop: '80px' }}>
        <StepBand
          variant={1}
          step="01"
          title="Diagnose"
          description="We find the one thing actually slowing the business down and build the fix for that first."
        />
        <StepBand
          variant={2}
          step="02"
          title="Build"
          description="Most builds ship inside a single focused sprint, not a quarter-long retainer with nothing to show for it."
        />
        <StepBand
          variant={3}
          step="03"
          title="Launch"
          description="It goes live, tested, with a walkthrough on exactly how to run it. Nothing stays locked behind us."
        />
      </div>

      {/* CONNECT */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: '100px 0',
      }}>
        <div className="wrap">
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            letterSpacing: '0.08em',
            color: 'var(--amber)',
          }}>
            [ ELSEWHERE ]
          </span>
          <div className="connect-row">
            <div className="connect-links">
              <a
                href="https://www.instagram.com/vaeltlabs"
                target="_blank"
                rel="noopener"
                className="connect-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                INSTAGRAM
              </a>
              <a
                href="https://web.facebook.com/vaeltlabs"
                target="_blank"
                rel="noopener"
                className="connect-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                FACEBOOK
              </a>
              <a
                href="https://x.com/vaeltlabs"
                target="_blank"
                rel="noopener"
                className="connect-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
                X / TWITTER
              </a>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '16px',
              letterSpacing: '0.05em',
              color: 'var(--bone-dim)',
            }}>
              @vaeltlabs
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        text="Ready to find what's actually broken?"
        buttonLabel="Book a free audit call"
      />

    </main>
  );
}
