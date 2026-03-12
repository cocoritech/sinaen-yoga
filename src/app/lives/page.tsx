import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { upcomingLivesQuery, recentReplaysQuery } from '@/lib/queries';
import LivesClient from './LivesClient';

export const revalidate = 60;

const typeColors: Record<string, string> = {
  flow: 'var(--abricot)',
  mobilite: 'var(--pistache)',
  breathwork: 'var(--rose-sorbet)',
  recovery: 'var(--blush)',
};

function formatDate(isoDate: string) {
  const d = new Date(isoDate);
  const months = ['jan', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

export default async function Lives() {
  const [sessions, replays] = await Promise.all([
    client.fetch(upcomingLivesQuery),
    client.fetch(recentReplaysQuery),
  ]);

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
          Prochaines sessions
        </p>
        <h2 style={{ color: 'var(--deep)', marginBottom: '3rem' }}>
          Planning
        </h2>

        <LivesClient sessions={sessions} />
      </section>

      {/* ── REPLAYS ───────────────────────────────────────────────── */}
      {replays.length > 0 && (
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

          <div className="grid-3">
            {replays.map((r: any) => (
              <Link
                key={r._id}
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
                      background: typeColors[r.type] ?? 'var(--blush)',
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
                    {r.duration && (
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
                    )}
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
                    {r.date && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4, marginTop: '0.25rem' }}>
                        {formatDate(r.date)}
                      </p>
                    )}
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
      )}

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
