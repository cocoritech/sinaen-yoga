'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Studio', href: '/bibliotheque' },
  { label: 'Lives', href: '/lives' },
  { label: 'Expériences', href: '/experiences' },
  { label: 'Sounds', href: '/sounds' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(250,244,239,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          color: 'var(--brique)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        Sinaen
      </Link>

      {/* Desktop nav */}
      <nav
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
        className="hidden-mobile"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--deep)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/studio"
          style={{
            padding: '0.6rem 1.4rem',
            background: 'var(--brique)',
            color: 'var(--blush)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          Rejoindre
        </Link>
      </nav>
    </header>
  );
}
