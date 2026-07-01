'use client';

import { useState } from 'react';

interface Phase {
  id: string;
  label: string;
  title: string;
  body: string;
}

interface Props {
  phases?: Phase[];
}

const DEFAULT_PHASES: Phase[] = [
  {
    id: 'discovery',
    label: 'Discovery',
    title: 'Phase 01 — Discovery',
    body: 'WE START WITH A SHORT CALL, NOT A QUESTIONNAIRE. WHAT\'S SLOWING THE BUSINESS DOWN, WHAT\'S ALREADY WORKING, AND WHAT THE SITE OR SYSTEM ACTUALLY NEEDS TO DO. SCOPE AND THE NUMBER GET LOCKED BEFORE ANYTHING STARTS.',
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Phase 02 — Design',
    body: 'A DIRECTION GETS BUILT AROUND THE BUSINESS, NOT A TEMPLATE. YOU SEE IT BEFORE A SINGLE LINE OF CODE GETS WRITTEN, SO THERE ARE NO SURPRISES AT HANDOFF.',
  },
  {
    id: 'build',
    label: 'Build',
    title: 'Phase 03 — Build',
    body: 'THE ACTUAL BUILD HAPPENS FAST — USUALLY DAYS, NOT WEEKS — BECAUSE THE SCOPE WAS LOCKED UPFRONT AND THE STACK STAYS LEAN BY DEFAULT.',
  },
  {
    id: 'launch',
    label: 'Launch',
    title: 'Phase 04 — Launch',
    body: 'LAUNCH ISN\'T THE END. THE SITE OR SYSTEM GETS TESTED ON REAL DEVICES, REAL CONNECTIONS, AND HANDED OVER WITH A CARE PLAN IF YOU WANT ONE.',
  },
];

export default function PhasePanel({ phases = DEFAULT_PHASES }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = phases[activeIdx];

  return (
    <div className="phase-panel-grid">
      {/* Tab list */}
      <div style={{
        background: 'var(--bg-2)',
        padding: '28px',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '1.1rem',
          color: 'var(--bone)',
          marginBottom: '16px',
        }}>
          VAELT
        </div>

        {phases.map((phase, i) => {
          const isActive = activeIdx === i;
          return (
            <button
              key={phase.id}
              onClick={() => setActiveIdx(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                background: isActive ? 'var(--bg-3)' : 'transparent',
                color: isActive ? 'var(--bone)' : 'var(--bone-dim)',
                fontSize: '16px',
                fontFamily: 'var(--font-body)',
                fontWeight: isActive ? 600 : 400,
                textAlign: 'left',
                transition: 'background 0.2s, color 0.2s',
                width: '100%',
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: isActive ? 'var(--amber)' : 'var(--bg-3)',
                flexShrink: 0,
                transition: 'background 0.2s',
              }} />
              {phase.label}
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--bg)',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          fontWeight: 700,
          color: 'var(--bone)',
          margin: '0 0 20px',
        }}>
          {active.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '18px',
          lineHeight: 1.8,
          color: 'var(--bone-dim)',
          maxWidth: '560px',
          margin: 0,
          letterSpacing: '0.02em',
        }}>
          {active.body}
        </p>
      </div>
    </div>
  );
}
