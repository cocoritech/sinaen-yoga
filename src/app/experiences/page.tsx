'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { useState } from 'react';

const EVENTS = [
  {
    id: 1,
    type: 'Retraite',
    title: 'Retraite Printemps',
    subtitle: 'Yoga & Reconnexion',
    date: '25 – 27 avril 2025',
    location: 'Luberon, Provence',
    price: 490,
    spots: 12,
    spotsLeft: 4,
    duration: '3 jours',
    color: 'var(--pistache)',
    description: "Un weekend immersif dans les collines du Luberon. Yoga matin et soir, breathwork, repas végétariens partagés, temps libre en nature.",
    includes: ['Hébergement', 'Repas inclus', '6 sessions', 'Cercle de partage'],
  },
  {
    id: 2,
    type: 'Atelier',
    title: 'Atelier Mobilité',
    subtitle: 'Hanches & Colonne',
    date: '12 avril 2025',
    location: 'Paris 11ème',
    price: 65,
    spots: 15,
    spotsLeft: 11,
    duration: '3h',
    color: 'var(--abricot)',
    description: "Un atelier intensif centré sur la libération des hanches et la mobilité de la colonne vertébrale. Idéal si tu passes beaucoup de temps assis.",
    includes: ['Tapis fourni', 'Support PDF', 'Replay 48h'],
  },
  {
    id: 3,
    type: 'Retraite',
    title: 'Retraite Été',
    subtitle: 'Mer & Slow Living',
    date: '18 – 22 juillet 2025',
    location: 'Corse du Sud',
    price: 890,
    spots: 10,
    spotsLeft: 10,
    duration: '5 jours',
    color: 'var(--blush)',
    description: "Cinq jours face à la mer. Pratique quotidienne, baignades, soirées sous les étoiles. Une parenthèse pour recharger vraiment.",
    includes: ['Villa privée', 'Pension complète', '8 sessions', 'Excursion bateau'],
  },
  {
    id: 4,
    type: 'Atelier',
    title: 'Breathwork Collectif',
    subtitle: 'Libération & Énergie',
    date: '3 mai 2025',
    location: 'Paris 3ème',
    price: 45,
    spots: 20,
    spotsLeft: 17,
    duration: '2h',
    color: 'var(--rose-sorbet)',
    description: "Une session de breathwork en groupe guidée par Sinaen. Technique holotropique douce, intégration en cercle, musique live.",
    includes: ['Matelas fourni', 'Boisson chaude', 'Intégration guidée'],
  },
];

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

export default function Experiences() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

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
          Agenda 2025
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {EVENTS.map((e) => (
            <div
              key={e.id}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1.5px solid var(--blush)',
                background: 'var(--white)',
              }}
            >
              {/* Card principale */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '280px 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                {/* Visuel */}
                <div
                  style={{
                    aspectRatio: '4/3',
                    background: e.color,
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
                      {e.type.toUpperCase()}
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
                      { icon: '📅', text: e.date },
                      { icon: '📍', text: e.location },
                      { icon: '⏱', text: e.duration },
                    ].map((info) => (
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

                  <p style={{ fontSize: '0.9rem', color: 'var(--deep)', opacity: 0.7, lineHeight: 1.7, maxWidth: '500px' }}>
                    {e.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {e.includes.map((inc) => (
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

                  <p style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.4 }}>
                    {e.spotsLeft} place{e.spotsLeft > 1 ? 's' : ''} restante{e.spotsLeft > 1 ? 's' : ''}
                  </p>

                  <button
                    style={{
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
                    }}
                  >
                    Réserver
                  </button>

                  <button
                    onClick={() => setSelectedEvent(selectedEvent === e.id ? null : e.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.75rem',
                      color: 'var(--deep)',
                      opacity: 0.4,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    {selectedEvent === e.id ? 'Moins de détails' : 'Plus de détails'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
            <div
              key={i}
              style={{
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--blush)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  background: openFaq === i ? 'var(--blush)' : 'var(--white)',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: '1.1rem',
                  color: 'var(--brique)',
                  textAlign: 'left',
                  gap: '1rem',
                  transition: 'background 0.2s',
                }}
              >
                {item.q}
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
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
              )}
            </div>
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
