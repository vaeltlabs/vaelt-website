'use client';

import Link from 'next/link';

interface Props {
  text: string;
  buttonLabel: string;
  href?: string;
  subline?: string;
}

export default function CTABand({ text, buttonLabel, href = '/contact', subline }: Props) {
  return (
    <div style={{
      background: 'var(--amber)',
      padding: '64px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.9rem, 4.4vw, 3rem)',
        fontWeight: 600,
        letterSpacing: '-0.01em',
        color: '#0D0D0D',
        margin: 0,
        maxWidth: '560px',
        lineHeight: 1.2,
      }}>
        {text}
      </p>

      {subline && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem',
          color: 'rgba(13,13,13,0.65)',
          margin: 0,
          maxWidth: '440px',
          lineHeight: 1.55,
        }}>
          {subline}
        </p>
      )}

      <Link
        href={href}
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '1rem',
          background: '#0D0D0D',
          color: 'var(--bone)',
          padding: '14px 28px',
          borderRadius: '8px',
          display: 'inline-block',
          textDecoration: 'none',
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
