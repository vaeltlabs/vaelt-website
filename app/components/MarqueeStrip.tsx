const ITEMS = Array(8).fill(null);

export default function MarqueeStrip() {
  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '32px 0',
      overflow: 'hidden',
    }}>
      <div className="marquee-track" aria-hidden="true">
        {[...ITEMS, ...ITEMS].map((_, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: 'var(--bone-dim)',
              whiteSpace: 'nowrap',
              padding: '0 32px',
            }}>
              BUILD RULES
            </span>
            <span style={{
              display: 'inline-block',
              width: '14px',
              height: '14px',
              background: 'var(--amber)',
              transform: 'rotate(45deg)',
              flexShrink: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}
