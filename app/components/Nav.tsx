'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-nav-header">
      <nav className="flex items-center justify-between px-8 h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold text-bone tracking-tight"
        >
          <img src="/logo/white.png" alt="" aria-hidden="true" style={{ height: '24px', width: 'auto' }} />
          VAELT
        </Link>

        <ul className="hidden nav:flex items-center gap-8" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={[
                  'font-body text-sm tracking-widest uppercase transition-opacity',
                  pathname === href ? 'text-bone opacity-100' : 'text-bone opacity-60 hover:opacity-100',
                ].join(' ')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="bg-amber text-bg font-body font-semibold text-sm tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-amber-dim transition-colors"
        >
          Book Call →
        </Link>
      </nav>
    </header>
  );
}
