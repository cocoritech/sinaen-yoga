'use client';

import { useState } from 'react';
import Nav from '@/components/layout/Nav';
import Link from 'next/link';

const VIDEOS = [
  { id: 1, title: 'Morning Flow', category: 'flow', duration: 30, intensity: 'doux', thumbnail: null, new: true },
  { id: 2, title: 'Pilates Core', category: 'mobilite', duration: 45, intensity: 'moyen', thumbnail: null, new: false },
  { id: 3, title: 'Breathwork Reset', category: 'breathwork', duration: 10, intensity: 'doux', thumbnail: null, new: false },
  { id: 4, title: 'Deep Recovery', category: 'recovery', duration: 60, intensity: 'doux', thumbnail: null, new: false },
  { id: 5, title: 'Power Vinyasa', category: 'flow', duration: 45, intensity: 'fort', thumbnail: null, new: true },
  { id: 6, title: 'Hip Opener', category: 'mobilite', duration: 30, intensity: 'moyen', thumbnail: null, new: false },
  { id: 7, title: 'Méditation guidée', category: 'breathwork', duration: 10, intensity: 'doux', thumbnail: null, new: false },
  { id: 8, title: 'Full Body Stretch', category: 'recovery', duration: 30, intensity: 'doux', thumbnail: null, new: false },
  { id: 9, title: 'Pilates Réforme', category: 'mobilite', duration: 60, intensity: 'fort', thumbnail: null, new: true },
];

const CATEGORIES = [
  { key: 'all', label: 'Tout' },
  { key: 'flow', label: 'Flow' },
  { key: 'mobilite', label: 'Mobilité' },
  { key: 'breathwork', label: 'Breathwork' },
  { key: 'recovery', label: 'Recovery' },
];

const DURATIONS = [
  { key: 'all', label: 'Toutes durées' },
  { key: 10, label: '10 min' },
  { key: 30, label: '30 min' },
  { key: 45, label: '45 min' },
  { key: 60, label: '60 min' },
];

const INTENSITIES = [
  { key: 'all', label: 'Toutes intensités' },
  { key: 'doux', label: 'Doux' },
  { key: 'moyen', label: 'Moyen' },
  { key: 'fort', label: 'Intense' },
];

const categoryColors: Record<string, string> = {
  flow: 'var(--abricot)',
  mobilite: 'var(--pistache)',
  breathwork: 'var(--rose-sorbet)',
  recovery: 'var(--blush)',
};

export default function Bibliotheque() {
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState<number | 'all'>('all');
  const [intensity, setIntensity] = useState('all');
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = VIDEOS.filter((v) => {
    if (category !== 'all' && v.category !== category) return false;
    if (duration !== 'all' && v.duration !== duration) return false;
    if (intensity !== 'all' && v.intensity !== intensity) return false;
    if (search && !v.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const toggleFav = (id: number) =>
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);

  return (
    <div className="grain">
      <Nav />

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '3rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: 'var(--brique)',
        }}
      >
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
          Studio en ligne
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <h1 style={{ color: 'var(--blush)', fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Bibliothèque
          </h1>
          {/* Recherche */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: 'rgba(255,210,217,0.1)',
                border: '1.5px solid rgba(255,210,217,0.3)',
                borderRadius: 'var(--radius-full)',
                padding: '0.75rem 1.5rem',
                color: 'var(--blush)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                width: '280px',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── FILTRES ───────────────────────────────────────────────── */}
      <div
        style={{
          background: 'var(--cream)',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--blush)',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          position: 'sticky',
          top: '0',
          zIndex: 50,
        }}
      >
        {/* Catégories */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid',
                borderColor: category === c.key ? 'var(--brique)' : 'var(--blush)',
                background: category === c.key ? 'var(--brique)' : 'transparent',
                color: category === c.key ? 'var(--blush)' : 'var(--deep)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div style={{ width: '1px', height: '24px', background: 'var(--blush)' }} />

        {/* Durée */}
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          style={{
            background: 'transparent',
            border: '1.5px solid var(--blush)',
            borderRadius: 'var(--radius-full)',
            padding: '0.4rem 1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'var(--deep)',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {DURATIONS.map((d) => (
            <option key={String(d.key)} value={String(d.key)}>{d.label}</option>
          ))}
        </select>

        {/* Intensité */}
        <select
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          style={{
            background: 'transparent',
            border: '1.5px solid var(--blush)',
            borderRadius: 'var(--radius-full)',
            padding: '0.4rem 1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'var(--deep)',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {INTENSITIES.map((i) => (
            <option key={i.key} value={i.key}>{i.label}</option>
          ))}
        </select>

        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--deep)', opacity: 0.5 }}>
          {filtered.length} vidéo{filtered.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* ── GRILLE VIDÉOS ─────────────────────────────────────────── */}
      <section
        style={{
          padding: '3rem 2rem 6rem',
          background: 'var(--cream)',
          minHeight: '60vh',
        }}
      >
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.4 }}>
            <p>Aucune vidéo trouvée</p>
          </div>
        ) : (
          <div
            className="grid-3" 
          >
            {filtered.map((video) => (
              <div
                key={video.id}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: 'var(--white)',
                  border: '1px solid var(--blush)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: categoryColors[video.category] ?? 'var(--blush)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Play button */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}
                  >
                    ▶
                  </div>

                  {/* Badge NEW */}
                  {video.new && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        background: 'var(--brique)',
                        color: 'var(--blush)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      NOUVEAU
                    </span>
                  )}

                  {/* Durée */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(26,20,16,0.7)',
                      color: 'var(--white)',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {video.duration} min
                  </span>

                  {/* Favori */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFav(video.id); }}
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    {favorites.includes(video.id) ? '♥' : '♡'}
                  </button>
                </div>

                {/* Infos */}
                <div style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <h3
                      style={{
                        fontSize: '1rem',
                        color: 'var(--deep)',
                        fontFamily: "'Perandory Condensed', Georgia, serif",
                        fontWeight: 400,
                      }}
                    >
                      {video.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--deep)',
                        opacity: 0.5,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {video.intensity}
                    </span>
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: '0.5rem',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--brique)',
                      opacity: 0.7,
                    }}
                  >
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'rgba(255,210,217,0.4)',
          }}
        >
          © 2025 Sinaen
        </span>
      </footer>
    </div>
  );
}
