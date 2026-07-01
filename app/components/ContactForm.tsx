'use client';

import { useState, FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'sent' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [fields, setFields] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
    website: '', // honeypot — must stay empty
  });

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields(f => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setState('sent');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-3)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '12px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: '1.1rem',
    color: 'var(--bone)',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '16px',
    letterSpacing: '0.06em',
    color: 'var(--bone-dim)',
    marginBottom: '8px',
  };

  function focusAmber(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = 'var(--amber)';
  }
  function blurBorder(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = 'var(--border)';
  }

  if (state === 'sent') {
    return (
      <div style={{
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '48px 28px',
        maxWidth: '560px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 600,
          color: 'var(--bone)',
          margin: '0 0 12px',
        }}>
          Got it.
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem',
          lineHeight: 1.6,
          color: 'var(--bone-dim)',
          margin: 0,
        }}>
          We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '28px',
        maxWidth: '560px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Honeypot — hidden from real users, visible to bots */}
      <div style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={set('website')}
        />
      </div>

      <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>NAME</label>
          <input
            type="text"
            required
            value={fields.name}
            onChange={set('name')}
            style={inputStyle}
            onFocus={focusAmber}
            onBlur={blurBorder}
          />
        </div>
        <div>
          <label style={labelStyle}>BUSINESS NAME</label>
          <input
            type="text"
            required
            value={fields.businessName}
            onChange={set('businessName')}
            style={inputStyle}
            onFocus={focusAmber}
            onBlur={blurBorder}
          />
        </div>
      </div>

      <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>EMAIL</label>
          <input
            type="email"
            required
            value={fields.email}
            onChange={set('email')}
            style={inputStyle}
            onFocus={focusAmber}
            onBlur={blurBorder}
          />
        </div>
        <div>
          <label style={labelStyle}>PHONE</label>
          <input
            type="tel"
            required
            value={fields.phone}
            onChange={set('phone')}
            style={inputStyle}
            onFocus={focusAmber}
            onBlur={blurBorder}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>MESSAGE</label>
        <textarea
          required
          rows={5}
          value={fields.message}
          onChange={set('message')}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={focusAmber}
          onBlur={blurBorder}
        />
      </div>

      {state === 'error' && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem',
          color: 'var(--amber)',
          margin: 0,
        }}>
          Something went wrong. Try emailing hello@vaelt.xyz directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary"
        style={{
          opacity: state === 'submitting' ? 0.6 : 1,
          cursor: state === 'submitting' ? 'wait' : 'pointer',
        }}
      >
        {state === 'submitting' ? 'Sending…' : 'Send →'}
      </button>
    </form>
  );
}
