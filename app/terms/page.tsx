export default function Terms() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '140px', paddingBottom: '140px' }}>
      <div className="wrap" style={{ maxWidth: '640px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)',
          letterSpacing: '-0.015em',
          lineHeight: 1.15,
          color: 'var(--bone)',
          margin: '0 0 28px',
        }}>
          Terms of Service
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem',
          lineHeight: 1.6,
          color: 'var(--bone-dim)',
          margin: 0,
        }}>
          These terms are being finalized. Contact{' '}
          <a
            href="mailto:hello@vaelt.xyz"
            style={{ color: 'var(--amber)', textDecoration: 'none' }}
          >
            hello@vaelt.xyz
          </a>
          {' '}with any questions in the meantime.
        </p>
      </div>
    </main>
  );
}
