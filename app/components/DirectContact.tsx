'use client';

const MAILTO = 'mailto:hello@vaelt.xyz?subject=Website%20enquiry';
const GMAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@vaelt.xyz&su=Website%20enquiry';
// Heuristic timeout: if the window hasn't blurred within this window, assume no mail client handled it.
// This is inherently imperfect — there's no browser API that confirms a mailto: handoff succeeded.
// False positives: blur can fire for unrelated reasons (user switches tabs manually right after clicking).
// False negatives: a slow-launching mail app might not steal focus within the timeout.
// Best-effort only.
const HANDOFF_TIMEOUT_MS = 700;

function handleEmailClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();

  let resolved = false;

  function cleanup() {
    window.removeEventListener('blur', onBlur);
  }

  function onBlur() {
    if (resolved) return;
    resolved = true;
    cleanup();
    // blur fired — assume mail client opened, do nothing further
  }

  window.addEventListener('blur', onBlur, { once: true });
  window.location.href = MAILTO;

  setTimeout(() => {
    if (resolved) return;
    resolved = true;
    cleanup();
    window.open(GMAIL, '_blank', 'noopener');
  }, HANDOFF_TIMEOUT_MS);
}

export default function DirectContact() {
  return (
    <div className="direct-contact">
      <a
        href="https://wa.me/94701608262"
        target="_blank"
        rel="noopener"
        className="direct-contact-link"
      >
        {/* WhatsApp — official brand path */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.658A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.066 16.56c-.252.71-1.473 1.356-2.015 1.401-.515.043-1.002.205-3.38-.703-2.852-1.1-4.698-3.99-4.839-4.177-.14-.186-1.15-1.528-1.15-2.917s.728-2.072.987-2.354c.259-.283.564-.354.752-.354l.542.01c.174.008.407-.066.638.487.24.574.813 1.987.884 2.131.07.143.117.311.023.499-.094.187-.14.302-.28.465-.14.163-.294.363-.42.488-.14.14-.287.292-.123.572.163.28.727 1.196 1.562 1.937 1.073.957 1.979 1.252 2.259 1.392.28.14.443.117.607-.07.163-.187.7-.817.887-1.097.187-.28.374-.233.632-.14.257.093 1.635.771 1.915.912.28.14.467.21.537.326.07.117.07.677-.182 1.387z"/>
        </svg>
        WHATSAPP
      </a>

      <span className="direct-contact-divider" aria-hidden="true" />

      <a
        href={MAILTO}
        onClick={handleEmailClick}
        className="direct-contact-link"
      >
        {/* Email envelope */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <polyline points="2,4 12,14 22,4" />
        </svg>
        EMAIL
      </a>
    </div>
  );
}
