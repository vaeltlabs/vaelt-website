import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-outer">
      <div className="wrap">

        {/* ── Three-column grid ──────────────────────────── */}
        <div className="footer-grid">

          {/* Column A — Brand */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-logo-row" aria-label="VAELT home">
              <img src="/logo/white.png" alt="" aria-hidden="true" className="footer-logo-img" />
              <span className="footer-brand-name">VAELT</span>
            </Link>
            <p className="footer-desc">
              Websites, booking systems, and automations built fast and built right.
            </p>
            <div className="footer-socials">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vaeltlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://web.facebook.com/vaeltlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/vaeltlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column B — Site */}
          <div className="footer-col">
            <span className="footer-col-label">SITE</span>
            <nav className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/#work" className="footer-link">Work</Link>
            </nav>
          </div>

          {/* Column C — Get in touch */}
          <div className="footer-col">
            <span className="footer-col-label">GET IN TOUCH</span>
            <nav className="footer-links">
              <a href="mailto:hello@vaelt.xyz" className="footer-link">hello@vaelt.xyz</a>
              <Link href="/contact" className="footer-link footer-link-cta">
                Book a free audit call &rarr;
              </Link>
            </nav>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div className="footer-bottom">
          <span className="footer-bottom-copy">&copy; 2026 VAELT. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
