import Badge from '../components/Badge';
import ContactForm from '../components/ContactForm';
import DirectContact from '../components/DirectContact';
import CalEmbed from '../components/CalEmbed';

export default function Contact() {
  return (
    <main>

      {/* HERO */}
      <section style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '160px',
        paddingBottom: '80px',
      }}>
        <div className="wrap">
          <Badge>CONTACT</Badge>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            maxWidth: '640px',
            color: 'var(--bone)',
            margin: '22px 0 24px',
          }}>
            Tell us what&apos;s broken.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: 'var(--bone-dim)',
            maxWidth: '560px',
            margin: 0,
          }}>
            One short call. No pitch deck, no pricing menu. Just what the business needs and what it&apos;d take to fix it. The number comes after the call, not before.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="wrap">
          <ContactForm />
        </div>
      </section>

      {/* CAL.COM BOOKING */}
      <section style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}>
        <div className="wrap">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: 'var(--bone)',
            margin: '0 0 32px',
          }}>
            Prefer to just book a time?
          </h2>
          <CalEmbed />
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}>
        <div className="wrap">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: 'var(--bone)',
            margin: '0 0 10px',
          }}>
            Or message directly.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'var(--bone-dim)',
            margin: '0 0 28px',
          }}>
            Faster than a form, no slot required.
          </p>
          <DirectContact />
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: '80px 0',
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

    </main>
  );
}
