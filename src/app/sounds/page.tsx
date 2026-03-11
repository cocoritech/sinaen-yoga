'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { useState } from 'react';

const PLAYLISTS = [
  {
    id: 1,
    name: 'Solaire',
    mood: 'Énergie & éveil',
    tracks: 18,
    duration: '1h12',
    color: 'var(--abricot)',
    spotifyId: null,
    description: 'Pour démarrer la journée avec légèreté. Rythmes doux, fréquences montantes.',
  },
  {
    id: 2,
    name: 'Slow Motion',
    mood: 'Détente & lâcher-prise',
    tracks: 22,
    duration: '1h34',
    color: 'var(--blush)',
    spotifyId: null,
    description: 'Pour les pratiques lentes, les soirées et les moments de récupération profonde.',
  },
  {
    id: 3,
    name: 'Flow State',
    mood: 'Concentration & mouvement',
    tracks: 15,
    duration: '58 min',
    color: 'var(--pistache)',
    spotifyId: null,
    description: 'La playlist des vinyasa et des pilates dynamiques. Rythme soutenu, intention claire.',
  },
  {
    id: 4,
    name: 'Terre',
    mood: 'Ancrage & silence',
    tracks: 12,
    duration: '48 min',
    color: 'var(--brique)',
    spotifyId: null,
    description: 'Sons naturels et drones graves pour les pratiques yin, le breathwork et la méditation.',
  },
];

const MEDITATIONS = [
  {
    id: 1,
    title: 'Scan corporel du matin',
    duration: '10 min',
    category: 'Réveil',
    color: 'var(--abricot)',
  },
  {
    id: 2,
    title: 'Respiration 4-7-8',
    duration: '8 min',
    category: 'Breathwork',
    color: 'var(--blush)',
  },
  {
    id: 3,
    title: 'Méditation du soir',
    duration: '15 min',
    category: 'Sommeil',
    color: 'var(--brique)',
  },
  {
    id: 4,
    title: 'Ancrage en 5 minutes',
    duration: '5 min',
    category: 'Urgence calme',
    color: 'var(--pistache)',
  },
  {
    id: 5,
    title: 'Visualisation créatrice',
    duration: '20 min',
    category: 'Manifestation',
    color: 'var(--rose-sorbet)',
  },
  {
    id: 6,
    title: 'Cohérence cardiaque',
    duration: '6 min',
    category: 'Breathwork',
    color: 'var(--abricot)',
  },
];

export default function Sounds() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="grain">
      <Nav />

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: 'var(--deep)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cercles décoratifs */}
        {[
          { size: '40vw', top: '-10%', left: '-5%', color: 'var(--brique)', opacity: 0.3 },
          { size: '30vw', top: '20%', right: '-8%', color: 'var(--rose-sorbet)', opacity: 0.15 },
          { size: '20vw', bottom: '-10%', left: '30%', color: 'var(--abricot)', opacity: 0.2 },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: c.size,
              height: c.size,
              borderRadius: '50%',
              background: c.color,
              opacity: c.opacity,
              top: c.top,
              left: c.left,
              right: c.right,
              bottom: c.bottom,
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
        ))}

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--abricot)',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Musiques & Méditations
        </p>
        <h1
          style={{
            color: 'var(--blush)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            position: 'relative',
            zIndex: 1,
            marginBottom: '1.5rem',
          }}
        >
          Sounds
        </h1>
        <p
          style={{
            color: 'var(--blush)',
            opacity: 0.7,
            fontSize: '1.05rem',
            maxWidth: '480px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Des playlists pensées pour accompagner chaque pratique, et des méditations guidées à écouter quand tu en as besoin.
        </p>
      </section>

      {/* ── PLAYLISTS ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'var(--deep)' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--abricot)',
            marginBottom: '1rem',
          }}
        >
          Spotify
        </p>
        <h2 style={{ color: 'var(--blush)', marginBottom: '3rem' }}>
          Playlists
        </h2>

        <div
          className="grid-2" 
        >
          {PLAYLISTS.map((pl) => (
            <div
              key={pl.id}
              className="grid-playlist" style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255,210,217,0.1)',
              }}
            >
              {/* Cover */}
              <div
                style={{
                  background: pl.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  minHeight: '140px',
                }}
              >
                ♪
              </div>

              {/* Infos */}
              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Perandory Condensed', Georgia, serif",
                    fontSize: '1.6rem',
                    color: 'var(--blush)',
                    lineHeight: 1,
                  }}
                >
                  {pl.name}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--blush)', opacity: 0.5 }}>
                  {pl.mood}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--blush)', opacity: 0.35, lineHeight: 1.6 }}>
                  {pl.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--blush)', opacity: 0.3 }}>
                    {pl.tracks} titres · {pl.duration}
                  </span>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255,210,217,0.1)',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.4rem 1rem',
                      color: 'var(--blush)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ color: '#1DB954', fontSize: '0.9rem' }}>♫</span>
                    Écouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Spotify */}
        <p
          style={{
            marginTop: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--blush)',
            opacity: 0.3,
            textAlign: 'center',
          }}
        >
          Playlists disponibles sur Spotify — un compte gratuit suffit pour écouter.
        </p>
      </section>

      {/* ── MÉDITATIONS ───────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem 6rem', background: 'var(--cream)' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--abricot)',
            marginBottom: '1rem',
          }}
        >
          Voix de Sinaen
        </p>
        <h2 style={{ color: 'var(--deep)', marginBottom: '3rem' }}>
          Méditations guidées
        </h2>

        <div
          className="grid-3" 
        >
          {MEDITATIONS.map((m) => (
            <div
              key={m.id}
              style={{
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--blush)',
                padding: '1.5rem',
                background: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--brique)',
                    opacity: 0.6,
                  }}
                >
                  {m.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4 }}>
                  {m.duration}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: '1.2rem',
                  color: 'var(--deep)',
                  lineHeight: 1.2,
                }}
              >
                {m.title}
              </p>

              {/* Waveform placeholder */}
              <div
                style={{
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${20 + Math.sin(i * 0.8) * 12 + Math.random() * 8}px`,
                      background: playing === m.id ? m.color : 'var(--blush)',
                      borderRadius: '2px',
                      transition: 'background 0.3s',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setPlaying(playing === m.id ? null : m.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem',
                  background: playing === m.id ? 'var(--brique)' : 'var(--blush)',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  color: playing === m.id ? 'var(--blush)' : 'var(--brique)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {playing === m.id ? '⏸ Pause' : '▶ Écouter'}
              </button>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: '2rem',
            fontSize: '0.8rem',
            color: 'var(--deep)',
            opacity: 0.35,
            textAlign: 'center',
          }}
        >
          Méditations accessibles avec l'abonnement studio.
        </p>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: '2rem',
          background: 'var(--deep)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Perandory Condensed', Georgia, serif",
            fontSize: '1.5rem',
            color: 'var(--blush)',
            textDecoration: 'none',
          }}
        >
          Sinaen
        </Link>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,210,217,0.4)' }}>
          © 2025 Sinaen
        </span>
      </footer>
    </div>
  );
}
