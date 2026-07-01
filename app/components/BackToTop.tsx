'use client';
import { useEffect, useState } from 'react';
import { useLenis } from './LenisProvider';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (lenis) {
      lenis.scrollTo(0, { immediate: instant });
    } else {
      window.scrollTo({ top: 0, behavior: instant ? ('instant' as ScrollBehavior) : 'smooth' });
    }
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
