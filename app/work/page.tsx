import Badge from '../components/Badge';
import CTABand from '../components/CTABand';
import styles from './work.module.css';

const PROJECTS = [
  {
    title: 'Ceylon Edge Wallets (concept)',
    tag: 'E-COMMERCE',
    image: '/images/edge.webp',
    href: 'https://ceylonedge-byaurax.vercel.app/',
    desc: 'A product storefront for handcrafted faux leather wallets. Full catalog, product detail pages, and a WhatsApp-based checkout flow.',
  },
  {
    title: 'Lumora Studio (concept)',
    tag: 'WEBSITE',
    image: '/images/lumora.webp',
    href: 'https://lumorastudio-aurax.vercel.app/',
    desc: 'A lookbook-style catalog site for a fashion boutique. Built around browsing by collection, with inquiries routed straight to WhatsApp.',
  },
  {
    title: 'Butter Boutique',
    tag: 'WEBSITE',
    image: '/images/cake.webp',
    href: 'https://butter-boutique-colombo.vercel.app/',
    desc: 'A full brand site for a cake and dessert boutique. Menu, locations, and ordering information, built to convert a hungry visitor fast.',
  },
  {
    title: 'Pulse Active',
    tag: 'E-COMMERCE',
    image: '/images/pulse.webp',
    href: 'https://pulseactive-website.vercel.app/',
    desc: 'An activewear storefront with full product pages and a WhatsApp ordering flow, built for a brand that needed to look premium from day one.',
  },
];

export default function Work() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '150px',
        paddingBottom: '64px',
      }}>
        <div className="wrap">
          <Badge>WORK</Badge>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
            fontWeight: 600,
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            color: 'var(--bone)',
            margin: '24px 0 20px',
            maxWidth: '640px',
          }}>
            What this looks like once it&apos;s built.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'var(--bone-dim)',
            maxWidth: '520px',
            margin: 0,
          }}>
            Live demo builds. Two are concept projects, two are real brands currently running on these builds.
          </p>
        </div>
      </section>

      {/* Work grid */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="wrap">
          <div className={styles.grid}>
            {PROJECTS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  <img src={p.image} alt={p.title} />
                  <span className={styles.tagPill}>{p.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <span className={styles.viewLink}>
                    VIEW LIVE SITE <span className={styles.viewArrow}>&#8594;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Note band */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="wrap">
          <div className={styles.noteBand}>
            <p className={styles.noteText}>
              Every one of these follows the same process. Audit call, plan, build, launch.
            </p>
            <a href="/about" className={styles.ghostBtn}>
              SEE HOW IT WORKS &#8594;
            </a>
          </div>
        </div>
      </section>

      <CTABand
        text="Like what you see? Let's build yours."
        buttonLabel="Book a free audit call"
      />
    </main>
  );
}
