'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { useState } from 'react';

const SESSIONS = [
  {
    id: 1,
    day: 'Lundi',
    date: '17 mars',
    time: '07h30',
    title: 'Morning Vinyasa',
    type: 'flow',
    duration: 60,
    spots: 8,
    spotsLeft: 3,
    abonne: true,
    price: 12,
    replay: false,
  },
  {
    id: 2,
    day: 'Mercredi',
    date: '19 mars',
    time: '12h00',
    title: 'Pilates Express',
    type: 'mobilite',
    duration: 30,
    spots: 12,
    spotsLeft: 9,
    abonne: true,
    price: 10,
    replay: false,
  },
  {
    id: 3,
    day: 'Jeudi',
    date: '20 mars',
    time: '19h00',
    title: 'Yin & Breathwork',
    type: 'breathwork',
    duration: 75,
    spots: 15,
    spotsLeft: 15,
    abonne: true,
    price: 15,
    replay: false,
  },
  {
    id: 4,
    day: 'Samedi',
    date: '22 mars',
    time: '09h00',
    title: 'Flow du weekend',
    type: 'flow',
    duration: 60,
    spots: 20,
    spotsLeft: 0,
    abonne: true,
    price: 12,
    replay: false,
  },
  {
    id: 5,
    day: 'Dimanche',
    date: '23 mars',
    time: '10h00',
    title: 'Slow Recovery',
    type: 'recovery',
    duration: 45,
    spots: 15,
    spotsLeft: 11,
    abonne: false,
    price: 10,
    replay: false,
  },
];

const REPLAYS = [
  { id: 10, title: 'Morning Vinyasa — 10 mars', type: 'flow', duration: 60 },
  { id: 11, title: 'Pilates Core — 12 mars', type: 'mobilite', duration: 45 },
  { id: 12, title: 'Breathwork Reset — 13 mars', type: 'breathwork', duration: 30 },
];

const typeColors: Record<string, string> = {
  flow: 'var(--abricot)',
  mobilite: 'var(--pistache)',
  breathwork: 'var(--rose-sorbet)',
  recovery: 'var(--blush)',
};

export default function Lives() {
  const [reserved, setReserved] = useState<number[]>([]);

  const toggleReserve = (id: number) =>
    setReserved((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );

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
          background: 'var(--abricot)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h1
          style={{
            color: 'var(--cream)',
            opacity: 0.12,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(5rem, 18vw, 14rem)',
            pointerEvents: 'none',
          }}
        >
          LIVE
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            opacity: 0.7,
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Classes en direct
        </p>
        <h1
          style={{
            color: 'var(--cream)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            position: 'relative',
            zIndex: 1,
            marginBottom: '1.5rem',
          }}
        >
          Live Classes
        </h1>
        <p
          style={{
            color: 'var(--cream)',
            opacity: 0.85,
            fontSize: '1.05rem',
            maxWidth: '480px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Chaque semaine, des sessions en direct via Zoom. Inclus dans
          l'abonnement studio, ou à la carte.
        </p>

        {/* Badges info */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
            position: 'relative',
            zIndex: 1,
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: '✦', text: 'Inclus abonnement' },
            { icon: '●', text: 'Via Zoom' },
            { icon: '◆', text: 'Replay en bibliothèque' },
          ].map((b) => (
            <span
              key={b.text}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-full)',
                padding: '0.4rem 1rem',
                fontSize: '0.8rem',
                color: 'var(--cream)',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.05em',
              }}
            >
              <span style={{ fontSize: '0.5rem' }}>{b.icon}</span>
              {b.text}
            </span>
          ))}
        </div>
      </section>

      {/* ── PLANNING ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: '4rem 2rem',
          background: 'var(--cream)',
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
          Semaine du 17 au 23 mars
        </p>
        <h2 style={{ color: 'var(--deep)', marginBottom: '3rem' }}>
          Planning
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {SESSIONS.map((s) => {
            const isReserved = reserved.includes(s.id);
            const isFull = s.spotsLeft === 0;

            return (
              <div
                key={s.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  alignItems: 'center',
                  gap: '2rem',
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
                    {s.day}
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--deep)',
                      opacity: 0.5,
                      marginTop: '0.2rem',
                    }}
                  >
                    {s.date} · {s.time}
                  </p>
                </div>

                {/* Infos session */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: typeColors[s.type],
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
                      <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.5 }}>
                        {s.duration} min
                      </span>
                      {s.abonne && (
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
                      )}
                      {!isFull && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4 }}>
                          {s.spotsLeft} place{s.spotsLeft > 1 ? 's' : ''} restante{s.spotsLeft > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bouton */}
                <div style={{ textAlign: 'right' }}>
                  {isFull ? (
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.5rem',
                        background: 'var(--blush)',
                        color: 'var(--deep)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        opacity: 0.6,
                      }}
                    >
                      Complet
                    </span>
                  ) : (
                    <button
                      onClick={() => toggleReserve(s.id)}
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
                      {isReserved ? 'Réservé ✓' : `Réserver · ${s.price}€`}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── REPLAYS ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: '4rem 2rem 6rem',
          background: 'var(--blush)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--brique)',
            marginBottom: '1rem',
          }}
        >
          Tu as raté une session ?
        </p>
        <h2 style={{ color: 'var(--brique)', marginBottom: '3rem' }}>
          Replays récents
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {REPLAYS.map((r) => (
            <Link
              key={r.id}
              href="/bibliotheque"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: 'var(--white)',
                  border: '1px solid rgba(116,29,40,0.15)',
                }}
              >
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: typeColors[r.type],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ▶
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(26,20,16,0.6)',
                      color: 'white',
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {r.duration} min
                  </span>
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <p
                    style={{
                      fontFamily: "'Perandory Condensed', Georgia, serif",
                      fontSize: '1rem',
                      color: 'var(--deep)',
                      fontWeight: 400,
                    }}
                  >
                    {r.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            href="/bibliotheque"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.5rem',
              border: '1.5px solid var(--brique)',
              color: 'var(--brique)',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            Voir toute la bibliothèque →
          </Link>
        </div>
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
