import Badge from '../components/Badge';
import ProblemGrid from '../components/ProblemGrid';
import ProcessSteps from '../components/ProcessSteps';
import BeforeAfter from '../components/BeforeAfter';
import CTABand from '../components/CTABand';

export default function Services() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '150px',
          paddingBottom: '64px',
        }}
      >
        <div className="wrap">
          <Badge>SERVICES</Badge>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              lineHeight: 1.15,
              color: 'var(--bone)',
              maxWidth: '640px',
              margin: '24px 0 20px',
            }}
          >
            Something in your business is{' '}
            <span style={{ color: 'var(--amber)' }}>bleeding money</span>.
            Let&apos;s find it.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--bone-dim)',
              maxWidth: '480px',
              margin: 0,
            }}
          >
            Pick the problem below. We&apos;ll open it up and show you the exact fix.
            No pricing, no pitch. Just the plan.
          </p>
        </div>
      </section>

      {/* ── Problem Grid ──────────────────────────────────── */}
      <section
        style={{
          paddingTop: '0',
          paddingBottom: '140px',
        }}
      >
        <div className="wrap">
          <ProblemGrid />
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <ProcessSteps />

      {/* ── Before / After ────────────────────────────────── */}
      <BeforeAfter />

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTABand
        text="Ready to see what we'd build?"
        subline="Thirty minutes, zero pressure. You'll leave with a plan either way."
        buttonLabel="Book a free audit call"
      />

    </main>
  );
}
