export default function BeforeAfter() {
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
            margin: '0 0 12px',
          }}
        >
          What changes
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'var(--bone-dim)',
            margin: '0 0 48px',
            lineHeight: 1.55,
          }}
        >
          Illustrative, not a real client.
        </p>

        <div className="ba-rows-wrap">

          {/* ── WEBSITE ──────────────────────────────────── */}
          <div className="ba-row">
            <div className="ba-cell">
              <span className="ba-cell-label">BEFORE — WEBSITE</span>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="ba-visual" aria-hidden="true">
                <rect x="20" y="30" width="260" height="200" rx="8" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="20" y="30" width="260" height="36" rx="8" fill="#1E1E1E"/>
                <rect x="20" y="54" width="260" height="12" fill="#1E1E1E"/>
                <circle cx="40" cy="48" r="5" fill="#2A2A2A"/>
                <circle cx="56" cy="48" r="5" fill="#2A2A2A"/>
                <circle cx="72" cy="48" r="5" fill="#2A2A2A"/>
                <rect x="90" y="37" width="158" height="18" rx="4" fill="#0D0D0D" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="98" y="43" width="60" height="5" rx="1" fill="#2A2A2A"/>
                <line x1="20" y1="66" x2="280" y2="66" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="28" y="74" width="244" height="24" rx="2" fill="#6B340A"/>
                <rect x="36" y="81" width="44" height="6" rx="1" fill="#B85812"/>
                <rect x="90" y="81" width="72" height="6" rx="1" fill="#B85812"/>
                <rect x="174" y="81" width="48" height="6" rx="1" fill="#B85812"/>
                <rect x="28" y="106" width="80" height="62" rx="4" fill="#0D0D0D" stroke="#2A2A2A" strokeWidth="1"/>
                <line x1="28" y1="106" x2="108" y2="168" stroke="#2A2A2A" strokeWidth="1"/>
                <line x1="108" y1="106" x2="28" y2="168" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="118" y="110" width="94" height="8" rx="2" fill="#2A2A2A"/>
                <rect x="130" y="124" width="60" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="118" y="137" width="80" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="214" y="108" width="58" height="44" rx="4" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="222" y="118" width="40" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="222" y="130" width="32" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="28" y="182" width="72" height="20" rx="4" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="110" y="188" width="80" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="198" y="188" width="50" height="7" rx="2" fill="#2A2A2A"/>
              </svg>
              <p className="ba-copy">Looks abandoned. Last touched in 2021. Visitors search your name, see this, and leave.</p>
            </div>

            <div className="ba-cell" style={{ borderLeft: '1px solid #2A2A2A' }}>
              <span className="ba-cell-label after">AFTER — WEBSITE</span>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="ba-visual" aria-hidden="true">
                <rect x="20" y="30" width="260" height="200" rx="8" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="20" y="30" width="260" height="36" rx="8" fill="#1E1E1E"/>
                <rect x="20" y="54" width="260" height="12" fill="#1E1E1E"/>
                <circle cx="40" cy="48" r="5" fill="#FF7A1A"/>
                <circle cx="56" cy="48" r="5" fill="#2A2A2A"/>
                <circle cx="72" cy="48" r="5" fill="#2A2A2A"/>
                <rect x="90" y="37" width="158" height="18" rx="4" fill="#0D0D0D" stroke="#2A2A2A" strokeWidth="1"/>
                <circle cx="99" cy="46" r="4" fill="none" stroke="#9C9486" strokeWidth="1"/>
                <rect x="107" y="43" width="72" height="5" rx="1" fill="#2A2A2A"/>
                <line x1="20" y1="66" x2="280" y2="66" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="28" y="74" width="244" height="22" fill="#0D0D0D"/>
                <rect x="34" y="81" width="32" height="7" rx="2" fill="#EDE6DA" opacity="0.8"/>
                <rect x="186" y="82" width="22" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="214" y="82" width="22" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="242" y="79" width="22" height="12" rx="3" fill="#FF7A1A"/>
                <rect x="28" y="110" width="188" height="12" rx="2" fill="#EDE6DA" opacity="0.9"/>
                <rect x="28" y="128" width="152" height="10" rx="2" fill="#EDE6DA" opacity="0.55"/>
                <rect x="28" y="148" width="164" height="7" rx="2" fill="#9C9486" opacity="0.5"/>
                <rect x="28" y="161" width="132" height="7" rx="2" fill="#9C9486" opacity="0.35"/>
                <rect x="28" y="182" width="116" height="30" rx="6" fill="#FF7A1A"/>
                <rect x="42" y="193" width="64" height="7" rx="2" fill="#0D0D0D" opacity="0.5"/>
              </svg>
              <p className="ba-copy">Clear, fast, mobile-first. Someone searches your name and knows immediately you're worth calling.</p>
            </div>
          </div>

          {/* ── LEADS ────────────────────────────────────── */}
          <div className="ba-row">
            <div className="ba-cell">
              <span className="ba-cell-label">BEFORE — LEADS</span>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="ba-visual" aria-hidden="true">
                <rect x="22" y="32" width="110" height="52" rx="8" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <path d="M 30 84 L 42 98 L 58 84" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="32" y="44" width="72" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="32" y="57" width="52" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="32" y="70" width="62" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="168" y="24" width="114" height="56" rx="8" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <path d="M 176 80 L 190 96 L 202 80" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="178" y="36" width="84" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="178" y="49" width="64" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="178" y="62" width="76" height="7" rx="2" fill="#2A2A2A"/>
                <circle cx="274" cy="30" r="12" fill="#FF7A1A"/>
                <rect x="270" y="25" width="8" height="10" rx="1" fill="#0D0D0D" opacity="0.6"/>
                <rect x="14" y="118" width="104" height="44" rx="8" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="24" y="130" width="64" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="24" y="143" width="74" height="7" rx="2" fill="#2A2A2A"/>
                <circle cx="110" cy="120" r="8" fill="#FF7A1A" opacity="0.65"/>
                <rect x="162" y="116" width="124" height="50" rx="8" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="172" y="128" width="92" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="172" y="141" width="72" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="172" y="154" width="82" height="7" rx="2" fill="#2A2A2A"/>
                <line x1="120" y1="110" x2="158" y2="118" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="4 4"/>
                <rect x="52" y="202" width="96" height="42" rx="8" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="62" y="214" width="60" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="62" y="227" width="48" height="7" rx="2" fill="#2A2A2A"/>
                <circle cx="52" cy="202" r="9" fill="#FF7A1A" opacity="0.4"/>
                <rect x="212" y="210" width="68" height="54" rx="6" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="222" y="222" width="44" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="222" y="235" width="32" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="222" y="248" width="40" height="7" rx="2" fill="#2A2A2A"/>
              </svg>
              <p className="ba-copy">Four inboxes, no system. Some get replies. Some sit for a week. A few disappear entirely.</p>
            </div>

            <div className="ba-cell" style={{ borderLeft: '1px solid #2A2A2A' }}>
              <span className="ba-cell-label after">AFTER — LEADS</span>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="ba-visual" aria-hidden="true">
                <rect x="90" y="20" width="120" height="62" rx="8" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="104" y="32" width="92" height="8" rx="2" fill="#2A2A2A"/>
                <rect x="104" y="46" width="92" height="8" rx="2" fill="#2A2A2A"/>
                <rect x="104" y="60" width="56" height="14" rx="4" fill="#FF7A1A"/>
                <line x1="150" y1="82" x2="150" y2="106" stroke="#FF7A1A" strokeWidth="2"/>
                <path d="M 144 100 L 150 110 L 156 100" fill="#FF7A1A"/>
                <rect x="68" y="114" width="164" height="64" rx="8" fill="#1E1E1E" stroke="#FF7A1A" strokeWidth="1"/>
                <rect x="82" y="126" width="84" height="7" rx="2" fill="#EDE6DA" opacity="0.75"/>
                <rect x="82" y="139" width="116" height="7" rx="2" fill="#9C9486" opacity="0.5"/>
                <rect x="82" y="152" width="92" height="7" rx="2" fill="#9C9486" opacity="0.3"/>
                <circle cx="220" cy="126" r="6" fill="#FF7A1A"/>
                <line x1="150" y1="178" x2="150" y2="202" stroke="#FF7A1A" strokeWidth="2"/>
                <path d="M 144 196 L 150 206 L 156 196" fill="#FF7A1A"/>
                <rect x="78" y="210" width="144" height="58" rx="8" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <path d="M 90 268 L 104 282 L 118 268" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="92" y="222" width="108" height="7" rx="2" fill="#EDE6DA" opacity="0.75"/>
                <rect x="92" y="235" width="84" height="7" rx="2" fill="#9C9486" opacity="0.5"/>
                <rect x="92" y="248" width="96" height="7" rx="2" fill="#9C9486" opacity="0.3"/>
                <circle cx="256" cy="248" r="16" fill="#FF7A1A" opacity="0.15"/>
                <path d="M 247 248 L 253 254 L 265 241" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="ba-copy">Every lead captured, auto-replied to in under a minute, tracked in one place.</p>
            </div>
          </div>

          {/* ── AUTOMATION ───────────────────────────────── */}
          <div className="ba-row">
            <div className="ba-cell">
              <span className="ba-cell-label">BEFORE — AUTOMATION</span>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="ba-visual" aria-hidden="true">
                <circle cx="160" cy="148" r="74" fill="none" stroke="#2A2A2A" strokeWidth="2"/>
                <circle cx="160" cy="148" r="4" fill="#2A2A2A"/>
                <line x1="160" y1="76" x2="160" y2="84" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="234" y1="148" x2="226" y2="148" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="160" y1="222" x2="160" y2="214" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="86" y1="148" x2="94" y2="148" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="160" y1="148" x2="160" y2="90" stroke="#9C9486" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="160" y1="148" x2="200" y2="148" stroke="#9C9486" strokeWidth="2" strokeLinecap="round"/>
                <rect x="18" y="22" width="124" height="118" rx="6" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="28" y="36" width="10" height="10" rx="2" fill="none" stroke="#2A2A2A" strokeWidth="1.5"/>
                <rect x="44" y="38" width="80" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="28" y="54" width="10" height="10" rx="2" fill="none" stroke="#2A2A2A" strokeWidth="1.5"/>
                <rect x="44" y="56" width="66" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="28" y="72" width="10" height="10" rx="2" fill="none" stroke="#2A2A2A" strokeWidth="1.5"/>
                <rect x="44" y="74" width="84" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="28" y="90" width="10" height="10" rx="2" fill="none" stroke="#2A2A2A" strokeWidth="1.5"/>
                <rect x="44" y="92" width="56" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="28" y="108" width="10" height="10" rx="2" fill="none" stroke="#2A2A2A" strokeWidth="1.5"/>
                <rect x="44" y="110" width="72" height="6" rx="1" fill="#2A2A2A"/>
                <rect x="196" y="224" width="84" height="7" rx="1" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="192" y="233" width="84" height="7" rx="1" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="196" y="242" width="82" height="7" rx="1" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="190" y="251" width="86" height="7" rx="1" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <rect x="194" y="260" width="84" height="7" rx="1" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <circle cx="58" cy="234" r="14" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <line x1="58" y1="248" x2="58" y2="272" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="36" y1="258" x2="80" y2="258" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="58" y1="272" x2="42" y2="288" stroke="#2A2A2A" strokeWidth="2"/>
                <line x1="58" y1="272" x2="74" y2="288" stroke="#2A2A2A" strokeWidth="2"/>
              </svg>
              <p className="ba-copy">Same manual steps, every time. Invoices, follow-ups, status updates — all requiring you.</p>
            </div>

            <div className="ba-cell" style={{ borderLeft: '1px solid #2A2A2A' }}>
              <span className="ba-cell-label after">AFTER — AUTOMATION</span>
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="ba-visual" aria-hidden="true">
                <rect x="12" y="108" width="78" height="52" rx="8" fill="#161616" stroke="#FF7A1A" strokeWidth="1"/>
                <rect x="22" y="120" width="54" height="7" rx="2" fill="#EDE6DA" opacity="0.75"/>
                <rect x="22" y="133" width="40" height="6" rx="2" fill="#9C9486" opacity="0.5"/>
                <circle cx="80" cy="116" r="5" fill="#FF7A1A"/>
                <line x1="90" y1="134" x2="128" y2="134" stroke="#FF7A1A" strokeWidth="2"/>
                <path d="M 122 128 L 132 134 L 122 140" fill="#FF7A1A"/>
                <rect x="110" y="108" width="80" height="52" rx="8" fill="#1E1E1E" stroke="#FF7A1A" strokeWidth="1"/>
                <rect x="120" y="120" width="56" height="7" rx="2" fill="#EDE6DA" opacity="0.75"/>
                <rect x="120" y="133" width="42" height="6" rx="2" fill="#9C9486" opacity="0.5"/>
                <circle cx="178" cy="116" r="5" fill="#FF7A1A"/>
                <line x1="190" y1="134" x2="228" y2="134" stroke="#FF7A1A" strokeWidth="2"/>
                <path d="M 222 128 L 232 134 L 222 140" fill="#FF7A1A"/>
                <rect x="210" y="108" width="78" height="52" rx="8" fill="#161616" stroke="#FF7A1A" strokeWidth="1"/>
                <rect x="220" y="120" width="54" height="7" rx="2" fill="#EDE6DA" opacity="0.75"/>
                <rect x="220" y="133" width="40" height="6" rx="2" fill="#9C9486" opacity="0.5"/>
                <circle cx="278" cy="116" r="5" fill="#FF7A1A"/>
                <rect x="12" y="178" width="276" height="30" rx="6" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1"/>
                <circle cx="28" cy="193" r="5" fill="#FF7A1A"/>
                <rect x="40" y="189" width="80" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="132" y="189" width="48" height="7" rx="2" fill="#2A2A2A"/>
                <rect x="232" y="186" width="44" height="14" rx="3" fill="#FF7A1A" opacity="0.15"/>
                <rect x="238" y="190" width="30" height="6" rx="1" fill="#FF7A1A" opacity="0.6"/>
                <rect x="12" y="222" width="276" height="54" rx="6" fill="#161616" stroke="#2A2A2A" strokeWidth="1"/>
                <path d="M 26 242 L 32 248 L 44 235" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="52" y="238" width="80" height="6" rx="1" fill="#2A2A2A"/>
                <path d="M 26 260 L 32 266 L 44 253" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="52" y="256" width="64" height="6" rx="1" fill="#2A2A2A"/>
              </svg>
              <p className="ba-copy">Three workflows running on their own. You stopped being the trigger.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
