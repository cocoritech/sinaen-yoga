'use client';

import { useState, useRef } from 'react';
import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

type Playlist = {
  _id: string;
  name: string;
  mood: string;
  description: string;
  tracks: number;
  duration: string;
  spotifyUrl: string;
  coverImage: any;
  color: string;
};

type Meditation = {
  _id: string;
  title: string;
  category: string;
  duration: string;
  audioUrl: string;
  color: string;
};

export default function SoundsClient({
  playlists,
  meditations,
}: {
  playlists: Playlist[];
  meditations: Meditation[];
}) {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (med: Meditation) => {
    if (playing === med._id) {
      audioRef.current?.pause();
      setPlaying(null);
    } else {
      if (audioRef.current) audioRef.current.pause();
      if (med.audioUrl) {
        audioRef.current = new Audio(med.audioUrl);
        audioRef.current.play();
        audioRef.current.onended = () => setPlaying(null);
      }
      setPlaying(med._id);
    }
  };

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

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--abricot)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
          Musiques & Méditations
        </p>
        <h1 style={{ color: 'var(--blush)', fontSize: 'clamp(3rem, 8vw, 7rem)', position: 'relative', zIndex: 1, marginBottom: '1.5rem' }}>
          Sounds
        </h1>
        <p style={{ color: 'var(--blush)', opacity: 0.7, fontSize: '1.05rem', maxWidth: '480px', position: 'relative', zIndex: 1 }}>
          Des playlists pensées pour accompagner chaque pratique, et des méditations guidées à écouter quand tu en as besoin.
        </p>
      </section>

      {/* ── PLAYLISTS ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'var(--deep)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--abricot)', marginBottom: '1rem' }}>
          Spotify
        </p>
        <h2 style={{ color: 'var(--blush)', marginBottom: '3rem' }}>Playlists</h2>

        {playlists.length === 0 ? (
          <p style={{ color: 'var(--blush)', opacity: 0.3, fontFamily: 'var(--font-body)', textAlign: 'center', padding: '3rem' }}>
            Les playlists arrivent bientôt ✦
          </p>
        ) : (
          <div className="grid-2">
            {playlists.map((pl) => (
              <div
                key={pl._id}
                className="grid-playlist"
                style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,210,217,0.1)' }}
              >
                {/* Cover */}
                <div
                  style={{
                    background: pl.coverImage
                      ? `url(${urlFor(pl.coverImage).width(300).url()}) center/cover`
                      : pl.color ?? 'var(--brique)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    minHeight: '140px',
                  }}
                >
                  {!pl.coverImage && '♪'}
                </div>

                {/* Infos */}
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.04)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontFamily: "'Perandory Condensed', Georgia, serif", fontSize: '1.6rem', color: 'var(--blush)', lineHeight: 1 }}>
                    {pl.name}
                  </p>
                  {pl.mood && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--blush)', opacity: 0.5 }}>{pl.mood}</p>
                  )}
                  {pl.description && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--blush)', opacity: 0.35, lineHeight: 1.6 }}>{pl.description}</p>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    {(pl.tracks || pl.duration) && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--blush)', opacity: 0.3 }}>
                        {pl.tracks ? `${pl.tracks} titres` : ''}{pl.tracks && pl.duration ? ' · ' : ''}{pl.duration ?? ''}
                      </span>
                    )}
                    {pl.spotifyUrl ? (
                      <a
                        href={pl.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
                          textDecoration: 'none',
                        }}
                      >
                        <span style={{ color: '#1DB954', fontSize: '0.9rem' }}>♫</span>
                        Écouter
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.7rem', color: 'var(--blush)', opacity: 0.2 }}>Bientôt</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--blush)', opacity: 0.3, textAlign: 'center' }}>
          Playlists disponibles sur Spotify — un compte gratuit suffit pour écouter.
        </p>
      </section>

      {/* ── MÉDITATIONS ───────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem 6rem', background: 'var(--cream)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--abricot)', marginBottom: '1rem' }}>
          Voix de Sinaen
        </p>
        <h2 style={{ color: 'var(--deep)', marginBottom: '3rem' }}>Méditations guidées</h2>

        {meditations.length === 0 ? (
          <p style={{ opacity: 0.4, fontFamily: 'var(--font-body)', textAlign: 'center', padding: '3rem' }}>
            Les méditations arrivent bientôt ✦
          </p>
        ) : (
          <div className="grid-3">
            {meditations.map((m) => (
              <div
                key={m._id}
                style={{ borderRadius: 'var(--radius-md)', border: '1.5px solid var(--blush)', padding: '1.5rem', background: 'var(--white)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  {m.category && (
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brique)', opacity: 0.6 }}>
                      {m.category}
                    </span>
                  )}
                  {m.duration && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4 }}>{m.duration}</span>
                  )}
                </div>

                <p style={{ fontFamily: "'Perandory Condensed', Georgia, serif", fontSize: '1.2rem', color: 'var(--deep)', lineHeight: 1.2 }}>
                  {m.title}
                </p>

                {/* Waveform décoratif */}
                <div style={{ height: '32px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${20 + Math.sin(i * 0.8) * 12}px`,
                        background: playing === m._id ? (m.color ?? 'var(--brique)') : 'var(--blush)',
                        borderRadius: '2px',
                        transition: 'background 0.3s',
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => togglePlay(m)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem',
                    background: playing === m._id ? 'var(--brique)' : 'var(--blush)',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    color: playing === m._id ? 'var(--blush)' : 'var(--brique)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-body)',
                    cursor: m.audioUrl ? 'pointer' : 'default',
                    transition: 'all 0.2s',
                    opacity: m.audioUrl ? 1 : 0.5,
                  }}
                >
                  {playing === m._id ? '⏸ Pause' : '▶ Écouter'}
                </button>
              </div>
            ))}
          </div>
        )}

        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--deep)', opacity: 0.35, textAlign: 'center' }}>
          Méditations accessibles avec l'abonnement studio.
        </p>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ padding: '2rem', background: 'var(--deep)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: "'Perandory Condensed', Georgia, serif", fontSize: '1.5rem', color: 'var(--blush)', textDecoration: 'none' }}>
          Sinaen
        </Link>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,210,217,0.4)' }}>
          © 2025 Sinaen
        </span>
      </footer>
    </div>
  );
}
