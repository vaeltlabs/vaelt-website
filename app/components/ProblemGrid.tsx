'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ModalData {
  tag: string;
  headline: string;
  problem: string;
  solution: string;
  outputs: string[];
}

const CARDS: { tag: string; headline: string; cue: string; modal: ModalData }[] = [
  {
    tag: 'WEBSITE',
    headline: 'Your website is losing you customers',
    cue: 'Visitors search your name, land on your site, and leave before they read a word.',
    modal: {
      tag: 'WEBSITE',
      headline: 'Your website is losing you customers',
      problem: `Your site is the first thing someone checks. Still says 'Under Construction.' Last touched in 2021. They land on it, decide you're not open for business, and leave. Not to a competitor. Just gone.`,
      solution: `A rebuilt site that matches what your business actually looks like. Fast. Clear. Mobile-first. The kind of page that makes someone think "okay, these people know what they're doing" before they've finished reading the headline.`,
      outputs: [
        'Custom build matched to your brand and your market',
        'SEO basics so you show up when someone searches your name',
        `Mobile-first. Tested on the phone already in someone's pocket`,
        'A CMS if you need to update content yourself',
        `Handoff with a short walkthrough so you're never stuck`,
      ],
    },
  },
  {
    tag: 'LEADS',
    headline: `You're losing leads in your DMs`,
    cue: 'Enquiries land in four different places. Some get replies. A few disappear entirely.',
    modal: {
      tag: 'LEADS',
      headline: `You're losing leads in your DMs`,
      problem: `Enquiries land in your Instagram DMs, your WhatsApp, a form on your site if you have one. Some get a reply the same day. Some sit for a week. A few disappear entirely. It's not the leads that are the problem. It's that no system exists to catch them.`,
      solution: `A lead flow that captures every enquiry and replies the same minute. Not a spam blast. A clear "got it, here's what happens next" so the person on the other end doesn't go quiet while you're in the middle of a job.`,
      outputs: [
        'Lead form on your site with instant email notification',
        'Automated first reply so no lead waits more than a minute',
        'Simple tracking so you know how many came in and from where',
        `CRM setup if you need to manage follow-ups properly`,
        'Monthly check to confirm everything is still running clean',
      ],
    },
  },
  {
    tag: 'AUTOMATION',
    headline: `You're the bottleneck in your own business`,
    cue: `You know exactly what you'd automate. You've just never had the free week to do it.`,
    modal: {
      tag: 'AUTOMATION',
      headline: `You're the bottleneck in your own business`,
      problem: `Invoices going out manually. Follow-up emails you keep meaning to send. Status updates that only happen when someone chases you for them. You know exactly what you'd automate if you had a free week. You don't have that week.`,
      solution: `Find the three tasks eating your hours and build the automations. Running the same week. No six-week software onboarding. No new tool you have to learn before it's useful. Just the work that was happening manually, now happening without you.`,
      outputs: [
        `A task audit to find what's actually worth automating first`,
        'Custom workflows built in n8n, Make, or similar',
        'Connected to the tools you already use',
        'Documented so you know what runs and what triggers it',
        'One round of tweaks included after launch',
      ],
    },
  },
];

export default function ProblemGrid() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    if (open !== null) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const active = open !== null ? CARDS[open] : null;

  return (
    <>
      <div className="problem-grid">
        {CARDS.map((card, i) => (
          <button
            key={i}
            className="problem-card"
            onClick={() => setOpen(i)}
            aria-haspopup="dialog"
          >
            <span className="problem-card-tag">{card.tag}</span>
            <h3 className="problem-card-title">{card.headline}</h3>
            <p className="problem-card-cue">{card.cue}</p>
            <span className="problem-card-arrow">SEE THE FIX &rarr;</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={active.modal.headline}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <div className="modal-box">
            <button
              className="modal-close"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              ESC
            </button>

            <p className="modal-tag">{active.modal.tag}</p>
            <h2 className="modal-title">{active.modal.headline}</h2>

            <p className="modal-section-label">THE PROBLEM</p>
            <p className="modal-body">{active.modal.problem}</p>

            <hr className="modal-divider" />

            <p className="modal-section-label">THE SOLUTION</p>
            <p className="modal-body">{active.modal.solution}</p>

            <hr className="modal-divider" />

            <p className="modal-section-label">WHAT YOU GET</p>
            <ul className="modal-list">
              {active.modal.outputs.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary">
              BOOK A FREE AUDIT CALL
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
