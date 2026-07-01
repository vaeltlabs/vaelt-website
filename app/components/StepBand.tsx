interface Props {
  step: string;
  title: string;
  description: string;
  variant: 1 | 2 | 3;
}

const VARIANTS = {
  1: { bg: '#FF7A1A', fg: '#0D0D0D', divider: 'rgba(0,0,0,0.18)' },
  2: { bg: '#B85812', fg: '#0D0D0D', divider: 'rgba(0,0,0,0.18)' },
  3: { bg: '#6B340A', fg: '#EDE6DA', divider: 'rgba(237,230,218,0.18)' },
} as const;

export default function StepBand({ step, title, description, variant }: Props) {
  const { bg, fg, divider } = VARIANTS[variant];

  return (
    <div style={{ background: bg, padding: '64px 0', width: '100%' }}>
      <div style={{
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '0 32px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '24px',
          borderBottom: `1px solid ${divider}`,
          paddingBottom: '24px',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '20px',
            color: fg,
            opacity: 0.6,
            letterSpacing: '0.06em',
            flexShrink: 0,
          }}>
            {step}
          </span>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: fg,
            margin: 0,
            lineHeight: 1.05,
          }}>
            {title}
          </h3>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '20px',
          color: fg,
          opacity: 0.8,
          maxWidth: '680px',
          margin: '18px auto 0',
          textAlign: 'center',
          letterSpacing: '0.03em',
          lineHeight: 1.5,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}
