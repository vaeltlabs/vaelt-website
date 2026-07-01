'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from './LenisProvider';

export default function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, lenis]);

  return null;
}
