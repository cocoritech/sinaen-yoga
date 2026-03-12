'use client';

import { useState } from 'react';

type SanityLiveClass = {
  _id: string;
  title: string;
  date: string;
  type: string;
  duration: number;
  spots: number;
  price: number;
  zoomLink: string;
};

const typeColors: Record<string, string> = {
  flow: 'var(--abricot)',
  mobilite: 'var(--pistache)',
  breathwork: 'var(--rose-sorbet)',
  recovery: 'var(--blush)',
};

function formatLiveDate(isoDate: string) {
  const d = new Date(isoDate);
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['jan', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  return {
    day: days[d.getDay()],
    date: `${d.getDate()} ${months[d.getMonth()]}`,
    time: `${String(d.getHours()).padStart(2, '0')}h${String(d.getMinutes()).padStart(2, '0')}`,
  };
}

export default function LivesClient({ sessions }: { sessions: SanityLiveClass[] }) {
  const [reserved, setReserved] = useState<string[]>([]);

  const toggleReserve = (id: string) =>
    setReserved((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );

  if (sessions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem', opacity: 0.4 }}>
        <p style={{ fontFamily: 'var(--font-body)' }}>
          Aucune session prévue pour le moment ✦
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {sessions.map((s) => {
        const isReserved = reserved.includes(s._id);
        const fmt = formatLiveDate(s.date);

        return (
          <div
            key={s._id}
            className="grid-planning"
            style={{
              alignItems: 'center',
              padding: '1.5rem 2rem',
              borderRadius: 'var(--radius-md)',
              background: isReserved ? 'var(--blush)' : 'var(--white)',
              border: `1.5px solid ${isReserved ? 'var(--brique)' : 'var(--blush)'}`,
              transition: 'all 0.2s',
            }}
          >
            {/* Date + heure */}
            <div>
              <p
                style={{
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: '1.4rem',
                  color: 'var(--brique)',
                  lineHeight: 1,
                }}
              >
                {fmt.day}
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--deep)',
                  opacity: 0.5,
                  marginTop: '0.2rem',
                }}
              >
                {fmt.date} · {fmt.time}
              </p>
            </div>

            {/* Infos session */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: typeColors[s.type] ?? 'var(--blush)',
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Perandory Condensed', Georgia, serif",
                    fontSize: '1.3rem',
                    color: 'var(--deep)',
                  }}
                >
                  {s.title}
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginTop: '0.25rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {s.duration && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.5 }}>
                      {s.duration} min
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'var(--pistache)',
                      background: 'rgba(185,172,57,0.1)',
                      padding: '0.1rem 0.5rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    INCLUS ABONNEMENT
                  </span>
                  {s.spots && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4 }}>
                      {s.spots} places
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bouton */}
            <div style={{ textAlign: 'right' }}>
              {s.zoomLink && isReserved ? (
                <a
                  href={s.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.6rem 1.5rem',
                    background: 'var(--brique)',
                    color: 'var(--blush)',
                    border: '1.5px solid var(--brique)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Rejoindre Zoom ✓
                </a>
              ) : (
                <button
                  onClick={() => toggleReserve(s._id)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    background: isReserved ? 'var(--brique)' : 'transparent',
                    color: isReserved ? 'var(--blush)' : 'var(--brique)',
                    border: '1.5px solid var(--brique)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isReserved ? 'Réservé ✓' : s.price ? `Réserver · ${s.price}€` : 'Réserver'}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
