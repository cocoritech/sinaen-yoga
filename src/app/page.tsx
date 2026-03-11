import Nav from '@/components/layout/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grain">
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          background: 'var(--blush)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'end',
          padding: '0 2rem 3rem',
          paddingTop: '6rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cercle décoratif */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'var(--abricot)',
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />

        {/* Texte gauche */}
        <div style={{ zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--brique)',
              marginBottom: '1.5rem',
            }}
          >
            Yoga · Pilates · Bien-être holistique
          </p>

          <h1
            style={{
              color: 'var(--brique)',
              lineHeight: 0.9,
              marginBottom: '2rem',
            }}
          >
            Move.<br />
            <span style={{ color: 'var(--deep)' }}>Breathe.</span><br />
            Be.
          </h1>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/studio"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'var(--brique)',
                color: 'var(--blush)',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              Rejoindre le studio
            </Link>
            <Link
              href="/lives"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: 'var(--brique)',
                border: '1.5px solid var(--brique)',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              Voir les lives
            </Link>
          </div>
        </div>

        {/* Placeholder photo droite */}
        <div
          style={{
            zIndex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '480px',
              aspectRatio: '3/4',
              background: 'var(--rose-sorbet)',
              borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brique)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              opacity: 0.6,
            }}
          >
            PHOTO SINAEN
          </div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'var(--brique)',
          padding: '0.8rem 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: 'ticker 20s linear infinite',
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            color: 'var(--blush)',
            letterSpacing: '0.1em',
          }}
        >
          {Array(8).fill('YOGA · PILATES · BREATHWORK · MOBILITÉ · RECOVERY · MEDITATION · ').join('')}
        </span>
      </div>

      {/* ── 3 PILIERS ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
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
          L'univers Sinaen
        </p>
        <h2
          style={{
            color: 'var(--deep)',
            marginBottom: '4rem',
            maxWidth: '600px',
          }}
        >
          Trois façons de bouger avec toi
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {[
            {
              num: '01',
              title: 'Studio en ligne',
              desc: 'Bibliothèque de vidéos à la demande — yoga, pilates, breathwork. À ton rythme, quand tu veux.',
              color: 'var(--blush)',
              accent: 'var(--brique)',
              href: '/bibliotheque',
              cta: 'Explorer',
            },
            {
              num: '02',
              title: 'Live Classes',
              desc: "Sessions en direct chaque semaine. Une heure ensemble, en vrai. Inclus dans l'abonnement.",
              color: 'var(--abricot)',
              accent: 'var(--cream)',
              href: '/lives',
              cta: 'Voir le planning',
            },
            {
              num: '03',
              title: 'Expériences IRL',
              desc: 'Retraites, ateliers, rendez-vous dans la vraie vie. Pour aller plus loin, ensemble.',
              color: 'var(--pistache)',
              accent: 'var(--deep)',
              href: '/experiences',
              cta: 'Découvrir',
            },
          ].map((p) => (
            <div
              key={p.num}
              style={{
                background: p.color,
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '380px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  color: p.accent,
                  opacity: 0.5,
                }}
              >
                {p.num}
              </span>
              <h3
                style={{
                  color: p.accent,
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: p.accent,
                  opacity: 0.8,
                  flex: 1,
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>
              <Link
                href={p.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: p.accent,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── TÉMOIGNAGES ───────────────────────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
          background: 'var(--brique)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            color: 'var(--blush)',
            marginBottom: '3rem',
            opacity: 0.15,
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            position: 'absolute',
            top: '2rem',
            left: '1rem',
            pointerEvents: 'none',
          }}
        >
          ILS DISENT
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginTop: '6rem',
          }}
        >
          {[
            {
              quote: "Sinaen m'a aidé à retrouver une relation douce avec mon corps. Ses cours sont comme une respiration.",
              name: 'Marie L.',
              role: 'Abonnée studio',
            },
            {
              quote: "Les lives du lundi sont devenus mon rituel de la semaine. Je ne loupe plus jamais.",
              name: 'Clara R.',
              role: 'Membre depuis 6 mois',
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,210,217,0.08)',
                border: '1px solid rgba(255,210,217,0.15)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                  color: 'var(--blush)',
                  lineHeight: 1.3,
                  marginBottom: '1.5rem',
                }}
              >
                "{t.quote}"
              </p>
              <p
                style={{
                  color: 'var(--abricot)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                }}
              >
                {t.name} · {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: '8rem 2rem',
          background: 'var(--cream)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--abricot)',
          }}
        >
          Prête à commencer ?
        </p>
        <h2 style={{ color: 'var(--brique)', maxWidth: '700px' }}>
          Ton corps mérite qu'on s'en occupe avec amour
        </h2>
        <Link
          href="/studio"
          style={{
            padding: '1.2rem 3rem',
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
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--blush)',
          }}
        >
          Sinaen
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'rgba(255,210,217,0.4)',
            letterSpacing: '0.05em',
          }}
        >
          © 2025 Sinaen · Tous droits réservés
        </span>
      </footer>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          section[style] { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
