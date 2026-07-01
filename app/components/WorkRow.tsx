'use client';

import { useState } from 'react';

export interface WorkItem {
  number: string;
  title: string;
  type: string;
  detail?: string;
}

interface Props {
  items: WorkItem[];
}

export default function WorkRow({ items }: Props) {
  const [hovering, setHovering] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div
      style={{ borderTop: '1px solid var(--border)' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setHoveredIdx(null); }}
    >
      {items.map((item, i) => {
        const isHovered = hoveredIdx === i;
        const isDimmed = hovering && !isHovered;
        const isExpanded = expandedIdx === i;

        return (
          <div key={i}>
            <div
              className="work-row-grid"
              style={{
                padding: '30px 8px',
                borderBottom: '1px solid var(--border)',
                paddingLeft: isHovered ? '32px' : '8px',
                opacity: isDimmed ? 0.35 : 1,
                transition: 'opacity 0.25s ease, padding-left 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setExpandedIdx(isExpanded ? null : i)}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '18px',
                color: 'var(--bone-dim)',
                letterSpacing: '0.04em',
              }}>
                {item.number}
              </span>

              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3vw, 2.1rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'var(--bone)',
              }}>
                {item.title}
              </span>

              <span className="work-row-type" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '18px',
                color: 'var(--bone-dim)',
                letterSpacing: '0.05em',
                justifySelf: 'end',
              }}>
                {item.type}
              </span>

              {/* Arrow */}
              <span style={{
                color: 'var(--amber)',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                transition: 'opacity 0.25s ease, transform 0.25s ease',
                fontSize: '1.2rem',
                justifySelf: 'end',
              }}>
                →
              </span>
            </div>

            {isExpanded && item.detail && (
              <div style={{
                padding: '24px 8px 32px 68px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-2)',
                color: 'var(--bone-dim)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-body)',
              }}>
                {item.detail}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
