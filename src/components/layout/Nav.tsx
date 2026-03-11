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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
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
          background: scrolled || open ? 'rgba(250,244,239,0.95)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: "'Perandory Condensed', Georgia, serif",
            fontSize: '1.8rem',
            color: 'var(--brique)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            zIndex: 101,
          }}
        >
          Sinaen
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hide-mobile">
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
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/bibliotheque"
            style={{
              padding: '0.6rem 1.4rem',
              background: 'var(--brique)',
              color: 'var(--blush)',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            Rejoindre
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 101,
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{
              display: 'block', height: '2px', background: 'var(--brique)',
              borderRadius: '2px',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform 0.2s',
            }} />
            <span style={{
              display: 'block', height: '2px', background: 'var(--brique)',
              borderRadius: '2px',
              opacity: open ? 0 : 1,
              transition: 'opacity 0.2s',
            }} />
            <span style={{
              display: 'block', height: '2px', background: 'var(--brique)',
              borderRadius: '2px',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform 0.2s',
            }} />
          </div>
        </button>
      </header>

      {/* Menu mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--cream)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
        }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'Perandory Condensed', Georgia, serif",
              fontSize: '3rem',
              color: 'var(--brique)',
              textDecoration: 'none',
              lineHeight: 1,
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/bibliotheque"
          onClick={() => setOpen(false)}
          style={{
            marginTop: '1rem',
            padding: '1rem 3rem',
            background: 'var(--brique)',
            color: 'var(--blush)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
          }}
        >
          Rejoindre le studio
        </Link>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
