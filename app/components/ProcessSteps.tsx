import React from 'react';

const STEPS = [
  {
    num: '01',
    label: 'Audit call',
    desc: `We talk through what's broken, what's costing you, and what matters most to fix first.`,
  },
  {
    num: '02',
    label: 'Plan and scope',
    desc: `You get a written plan. Exactly what gets built, what it does, and what problem it solves.`,
  },
  {
    num: '03',
    label: 'Build',
    desc: `We build it. One progress update at the midpoint. Handoff when it's done and tested.`,
  },
  {
    num: '04',
    label: 'Launch and handoff',
    desc: `It goes live. Walkthrough included. One round of tweaks after launch, at no extra cost.`,
  },
];

export default function ProcessSteps() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--border)',
        padding: '140px 0',
      }}
    >
      <div className="wrap">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.005em',
            lineHeight: 1.25,
            color: 'var(--bone)',
            maxWidth: '480px',
            margin: '0 0 64px',
          }}
        >
          How it works
        </h2>

        <div className="process-steps-outer">
          {STEPS.map((step, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="process-line" aria-hidden="true" />}
              <div className="process-step">
                <div className="process-circle">{step.num}</div>
                <div className="process-step-label">{step.label}</div>
                <div className="process-step-desc">{step.desc}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
