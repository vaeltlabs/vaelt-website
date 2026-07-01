'use client';

import { useState } from 'react';

export interface ServiceItem {
  number: string;
  problem: string;
  solution: string;
}

interface Props {
  items: ServiceItem[];
  clip?: boolean;
}

export default function ServiceList({ items, clip = false }: Props) {
  const [hovering, setHovering] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const displayed = clip ? items.slice(0, 6) : items;

  return (
    <nav
      style={clip ? { maxHeight: '520px', overflowY: 'auto' } : undefined}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setHoveredIdx(null); }}
    >
      {displayed.map((item, i) => {
        const isHovered = hoveredIdx === i;
        const isDimmed = hovering && !isHovered;
        const isExpanded = expandedIdx === i;

        return (
          <div
            key={i}
            style={{
              borderBottom: '1px solid var(--border)',
              paddingLeft: isHovered ? '14px' : '0',
              opacity: isDimmed ? 0.35 : 1,
              transition: 'opacity 0.2s ease, padding-left 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setExpandedIdx(isExpanded ? null : i)}
          >
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              padding: '20px 8px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '18px',
                color: 'var(--amber)',
                letterSpacing: '0.06em',
                flexShrink: 0,
              }}>
                {item.number}
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--bone-dim)',
                lineHeight: 1.05,
              }}>
                {item.problem}
              </span>
            </div>

            {isExpanded && (
              <div style={{
                padding: '0 8px 24px 50px',
                color: 'var(--bone)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-body)',
              }}>
                {item.solution}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
