import Nav from '@/components/layout/Nav';
import Link from 'next/link';

export const metadata = {
  title: 'Studio — Sinaen',
  description: "Rejoins le studio en ligne de Sinaen. Abonnement mensuel ou programmes à l'unité.",
};

const PLANS = [
  {
    name: 'À la carte',
    price: null,
    priceLabel: 'Dès 10€',
    period: 'par session',
    color: 'var(--blush)',
    accent: 'var(--brique)',
    features: [
      'Lives à la carte',
      'Programmes vidéo one-shot',
      'Accès au contenu acheté',
      'Paiement 3× dès 100€',
    ],
    cta: 'Voir les lives',
    ctaHref: '/lives',
    featured: false,
  },
  {
    name: 'Studio',
    price: 29,
    priceLabel: '29€',
    period: 'par mois',
    color: 'var(--brique)',
    accent: 'var(--blush)',
    features: [
      'Bibliothèque vidéo complète',
      'Lives inclus chaque semaine',
      'Méditations guidées',
      'Playlists Sounds',
      'Nouveau contenu chaque semaine',
      'Annulation à tout moment',
    ],
    cta: "S'abonner",
    ctaHref: '#',
    featured: true,
  },
  {
    name: 'Studio Annuel',
    price: 249,
    priceLabel: '249€',
    period: 'par an · soit 20€/mois',
    color: 'var(--deep)',
    accent: 'var(--blush)',
    features: [
      'Tout le plan Studio',
      '2 mois offerts',
      'Accès prioritaire aux retraites',
      'Session Q&A mensuelle exclusive',
    ],
    cta: "S'abonner",
    ctaHref: '#',
    featured: false,
  },
];

export default function Studio() {
  return (
    <div className="grain">
      <Nav />

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: 'var(--cream)',
          textAlign: 'center',
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
          Rejoindre
        </p>
        <h1
          style={{
            color: 'var(--brique)',
            marginBottom: '1.5rem',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
          }}
        >
          Le Studio
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--deep)',
            opacity: 0.65,
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          Choisis la formule qui te correspond. Sans engagement, sans prise de tête.
        </p>
      </section>

      {/* ── PLANS ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '0 2rem 6rem',
          background: 'var(--cream)',
        }}
      >
        <div className="grid-3" style={{ alignItems: 'stretch', maxWidth: '960px', margin: '0 auto' }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: 'var(--radius-lg)',
                background: plan.color,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                border: plan.featured ? '2px solid var(--brique)' : 'none',
                transform: plan.featured ? 'scale(1.03)' : 'none',
              }}
            >
              {plan.featured && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--abricot)',
                    color: 'var(--cream)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    padding: '0.3rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  LE PLUS POPULAIRE
                </span>
              )}

              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: plan.accent,
                    opacity: 0.6,
                    marginBottom: '0.5rem',
                  }}
                >
                  {plan.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Perandory Condensed', Georgia, serif",
                    fontSize: '3.5rem',
                    color: plan.accent,
                    lineHeight: 1,
                  }}
                >
                  {plan.priceLabel}
                </p>
                <p style={{ fontSize: '0.8rem', color: plan.accent, opacity: 0.5, marginTop: '0.3rem' }}>
                  {plan.period}
                </p>
              </div>

              <div
                style={{
                  height: '1px',
                  background: plan.accent,
                  opacity: 0.15,
                }}
              />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.9rem',
                      color: plan.accent,
                      opacity: 0.85,
                    }}
                  >
                    <span style={{ fontSize: '0.5rem', flexShrink: 0, opacity: 0.6 }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '1rem',
                  background: plan.featured ? 'var(--abricot)' : `${plan.accent}22`,
                  color: plan.featured ? 'var(--cream)' : plan.accent,
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  border: plan.featured ? 'none' : `1.5px solid ${plan.accent}44`,
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Réassurance */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            'Annulation à tout moment',
            'Paiement sécurisé Stripe',
            'Accès immédiat après paiement',
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.8rem',
                color: 'var(--deep)',
                opacity: 0.45,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ color: 'var(--pistache)', fontSize: '0.6rem' }}>✓</span>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── FAQ RAPIDE ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'var(--blush)' }}>
        <h2 style={{ color: 'var(--brique)', marginBottom: '3rem', textAlign: 'center' }}>
          Questions
        </h2>
        <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            {
              q: "Puis-je annuler à tout moment ?",
              a: "Oui, sans frais et sans condition. L'annulation prend effet à la fin de la période en cours.",
            },
            {
              q: "Comment accéder au contenu après abonnement ?",
              a: "Dès le paiement validé, tu accèdes à l'ensemble de la bibliothèque vidéo, aux lives et aux sons.",
            },
            {
              q: "Les lives sont-ils toujours inclus ?",
              a: "Oui, toutes les sessions live de la semaine sont incluses dans l'abonnement Studio et Annuel.",
            },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(116,29,40,0.15)', paddingBottom: '1.5rem' }}>
              <p
                style={{
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: '1.2rem',
                  color: 'var(--brique)',
                  marginBottom: '0.5rem',
                }}
              >
                {item.q}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--deep)', opacity: 0.65, lineHeight: 1.7 }}>
                {item.a}
              </p>
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
