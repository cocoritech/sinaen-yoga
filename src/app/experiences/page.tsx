import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { eventsQuery } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';

export const revalidate = 60;

const FAQ = [
  {
    q: "Comment réserver une place ?",
    a: "Clique sur le bouton Réserver, choisis ton mode de paiement (comptant ou en plusieurs fois dès 100€) et tu recevras une confirmation par email dans les minutes qui suivent.",
  },
  {
    q: "Quelle est la politique d'annulation ?",
    a: "Annulation gratuite jusqu'à 30 jours avant l'événement. Entre 30 et 14 jours : remboursement à 50%. Moins de 14 jours : aucun remboursement, mais ta place peut être cédée à quelqu'un d'autre.",
  },
  {
    q: "Le paiement en plusieurs fois est-il disponible ?",
    a: "Oui, pour tout achat supérieur à 100€. Tu peux payer en 2 ou 3 fois sans frais, directement au moment du checkout via Stripe.",
  },
  {
    q: "Les retraites sont-elles adaptées aux débutants ?",
    a: "Toutes les pratiques sont adaptables. Sinaen guide chaque posture avec des variations accessibles à tous les niveaux.",
  },
];

const eventColors: Record<string, string> = {
  Retraite: 'var(--pistache)',
  Atelier: 'var(--abricot)',
};

function formatEventDate(startDate: string, endDate?: string) {
  const d = new Date(startDate);
  const months = ['jan', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  if (!endDate) return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  const e = new Date(endDate);
  if (d.getMonth() === e.getMonth()) {
    return `${d.getDate()} – ${e.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
  return `${d.getDate()} ${months[d.getMonth()]} – ${e.getDate()} ${months[e.getMonth()]} ${d.getFullYear()}`;
}

export default async function Experiences() {
  const events = await client.fetch(eventsQuery);

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
          background: 'var(--pistache)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h1
          style={{
            color: 'var(--cream)',
            opacity: 0.1,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(4rem, 16vw, 13rem)',
            pointerEvents: 'none',
          }}
        >
          IRL
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
          Dans la vraie vie
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
          Expériences
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
          Retraites, ateliers, rendez-vous dans la vraie vie. Pour aller plus loin, ensemble, dans un espace dédié.
        </p>
      </section>

      {/* ── EVENTS ────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'var(--cream)' }}>
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
          Prochains événements
        </p>
        <h2 style={{ color: 'var(--deep)', marginBottom: '3rem' }}>
          Agenda
        </h2>

        {events.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.4 }}>
            <p style={{ fontFamily: 'var(--font-body)' }}>
              Les prochains événements arrivent bientôt ✦
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {events.map((e: any) => {
              const color = eventColors[e.type] ?? 'var(--blush)';
              const dateStr = formatEventDate(e.startDate, e.endDate);

              return (
                <div
                  key={e._id}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1.5px solid var(--blush)',
                    background: 'var(--white)',
                  }}
                >
                  <div className="grid-event" style={{ alignItems: 'center' }}>
                    {/* Visuel */}
                    <div
                      style={{
                        aspectRatio: '4/3',
                        background: e.coverImage
                          ? `url(${urlFor(e.coverImage).width(500).url()}) center/cover`
                          : color,
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1.5rem',
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            background: 'rgba(26,20,16,0.2)',
                            borderRadius: 'var(--radius-full)',
                            padding: '0.2rem 0.75rem',
                            fontSize: '0.7rem',
                            letterSpacing: '0.1em',
                            color: 'var(--deep)',
                            marginBottom: '0.5rem',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {e.type?.toUpperCase()}
                        </span>
                        <p
                          style={{
                            fontFamily: "'Perandory Condensed', Georgia, serif",
                            fontSize: '1.6rem',
                            color: 'var(--deep)',
                            lineHeight: 1,
                          }}
                        >
                          {e.title}
                        </p>
                      </div>
                    </div>

                    {/* Infos */}
                    <div style={{ padding: '2rem 0' }}>
                      <p
                        style={{
                          fontFamily: "'Perandory Condensed', Georgia, serif",
                          fontSize: '1.8rem',
                          color: 'var(--deep)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {e.title}
                        {e.subtitle && (
                          <span
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '1rem',
                              color: 'var(--deep)',
                              opacity: 0.5,
                              marginLeft: '0.75rem',
                            }}
                          >
                            — {e.subtitle}
                          </span>
                        )}
                      </p>

                      <div
                        style={{
                          display: 'flex',
                          gap: '1.5rem',
                          marginBottom: '1rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        {[
                          { icon: '📅', text: dateStr },
                          e.location && { icon: '📍', text: e.location },
                        ].filter(Boolean).map((info: any) => (
                          <span
                            key={info.text}
                            style={{
                              fontSize: '0.85rem',
                              color: 'var(--deep)',
                              opacity: 0.6,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                            }}
                          >
                            {info.icon} {info.text}
                          </span>
                        ))}
                      </div>

                      {e.description && (
                        <p style={{ fontSize: '0.9rem', color: 'var(--deep)', opacity: 0.7, lineHeight: 1.7, maxWidth: '500px' }}>
                          {e.description}
                        </p>
                      )}

                      {e.includes?.length > 0 && (
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                          {e.includes.map((inc: string) => (
                            <span
                              key={inc}
                              style={{
                                fontSize: '0.75rem',
                                padding: '0.2rem 0.75rem',
                                background: 'var(--blush)',
                                borderRadius: 'var(--radius-full)',
                                color: 'var(--brique)',
                                fontFamily: 'var(--font-body)',
                              }}
                            >
                              {inc}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Prix + CTA */}
                    <div
                      style={{
                        padding: '2rem',
                        textAlign: 'right',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.75rem',
                        minWidth: '180px',
                      }}
                    >
                      {e.price && (
                        <div>
                          <p
                            style={{
                              fontFamily: "'Perandory Condensed', Georgia, serif",
                              fontSize: '2.5rem',
                              color: 'var(--brique)',
                              lineHeight: 1,
                            }}
                          >
                            {e.price}€
                          </p>
                          {e.price >= 100 && (
                            <p style={{ fontSize: '0.7rem', color: 'var(--deep)', opacity: 0.4 }}>
                              ou 3× {Math.round(e.price / 3)}€
                            </p>
                          )}
                        </div>
                      )}

                      {e.spots && (
                        <p style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4 }}>
                          {e.spots} place{e.spots > 1 ? 's' : ''}
                        </p>
                      )}

                      <a
                        href={e.stripeLink ?? '#'}
                        target={e.stripeLink ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          padding: '0.75rem 1.75rem',
                          background: 'var(--brique)',
                          color: 'var(--blush)',
                          border: 'none',
                          borderRadius: 'var(--radius-full)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          letterSpacing: '0.05em',
                          cursor: 'pointer',
                          width: '100%',
                          textAlign: 'center',
                          textDecoration: 'none',
                          boxSizing: 'border-box',
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── GALERIE ───────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: 'var(--blush)' }}>
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
          Souvenirs
        </p>
        <h2 style={{ color: 'var(--brique)', marginBottom: '3rem' }}>
          Galerie
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '1rem',
          }}
        >
          {[
            { span: 'span 2', bg: 'var(--abricot)', ratio: '16/7' },
            { span: '1', bg: 'var(--pistache)', ratio: '1/1' },
            { span: '1', bg: 'var(--rose-sorbet)', ratio: '1/1' },
            { span: '1', bg: 'var(--brique)', ratio: '4/3' },
            { span: '1', bg: 'var(--abricot)', ratio: '4/3' },
            { span: '1', bg: 'var(--blush)', ratio: '4/3', border: '1px solid var(--brique)' },
          ].map((cell, i) => (
            <div
              key={i}
              style={{
                gridColumn: cell.span === 'span 2' ? 'span 2' : undefined,
                aspectRatio: cell.ratio,
                background: cell.bg,
                borderRadius: 'var(--radius-md)',
                border: cell.border,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                color: 'rgba(26,20,16,0.3)',
                letterSpacing: '0.1em',
              }}
            >
              PHOTO
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
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
          Questions fréquentes
        </p>
        <h2 style={{ color: 'var(--deep)', marginBottom: '3rem' }}>FAQ</h2>

        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {FAQ.map((item, i) => (
            <details
              key={i}
              style={{
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--blush)',
                overflow: 'hidden',
              }}
            >
              <summary
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--white)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: '1.1rem',
                  color: 'var(--brique)',
                  textAlign: 'left',
                  gap: '1rem',
                  listStyle: 'none',
                }}
              >
                {item.q}
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>+</span>
              </summary>
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  background: 'var(--white)',
                  borderTop: '1px solid var(--blush)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  color: 'var(--deep)',
                  opacity: 0.8,
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
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
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,210,217,0.4)' }}>
          © 2025 Sinaen
        </span>
      </footer>
    </div>
  );
}
