import Nav from '@/components/layout/Nav';
import Link from 'next/link';

export const metadata = {
  title: 'About — Sinaen',
  description: 'Qui est Sinaen ? Parcours, valeurs et manifeste.',
};

export default function About() {
  return (
    <div className="grain">
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          background: 'var(--cream)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '8rem 2rem 4rem',
          gap: '4rem',
        }}
      >
        {/* Photo */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              aspectRatio: '3/4',
              background: 'var(--blush)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brique)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              opacity: 0.6,
            }}
          >
            PHOTO SINAEN
          </div>
          {/* Badge flottant */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              right: '-2rem',
              background: 'var(--abricot)',
              color: 'var(--cream)',
              borderRadius: 'var(--radius-full)',
              padding: '1rem 1.5rem',
              fontFamily: "'Perandory Condensed', Georgia, serif",
              fontSize: '1.1rem',
              whiteSpace: 'nowrap',
              transform: 'rotate(-4deg)',
            }}
          >
            Yoga · Pilates · Holistique
          </div>
        </div>

        {/* Texte */}
        <div>
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
            Qui suis-je
          </p>
          <h1
            style={{
              color: 'var(--brique)',
              marginBottom: '2rem',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
            }}
          >
            Sinaen
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'var(--deep)',
              marginBottom: '1.5rem',
              maxWidth: '480px',
            }}
          >
            Professeure de yoga, pilates et mouvement. Je crois que le corps est
            une boussole — pas un ennemi. Mon travail, c'est de t'aider à
            l'écouter.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--deep)',
              opacity: 0.7,
              maxWidth: '480px',
            }}
          >
            Formée à Paris et à Bali, j'accompagne des femmes dans leur relation
            au mouvement depuis plus de 8 ans. Ma pratique mêle rigueur du
            pilates, fluidité du yoga vinyasa et approche holistique du corps.
          </p>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'var(--pistache)',
          padding: '0.8rem 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: 'ticker 25s linear infinite',
            fontFamily: "'Perandory Condensed', Georgia, serif",
            fontSize: '1.2rem',
            color: 'var(--deep)',
            letterSpacing: '0.1em',
          }}
        >
          {Array(8).fill('MOUVEMENT · RESPIRATION · PRÉSENCE · FORCE · DOUCEUR · ÉQUILIBRE · CORPS · ').join('')}
        </span>
      </div>

      {/* ── PARCOURS ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
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
          Parcours
        </p>
        <h2 style={{ color: 'var(--brique)', marginBottom: '4rem' }}>
          Le chemin
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          {[
            {
              year: '2016',
              title: 'Formation yoga',
              desc: 'Certification 200H à Paris. Première rencontre sérieuse avec la pratique du mouvement conscient.',
            },
            {
              year: '2018',
              title: 'Bali & Pilates',
              desc: 'Formation pilates mat & réforme à Ubud. Découverte de l'approche holistique du corps et du breathwork.',
            },
            {
              year: '2020',
              title: 'Studio en ligne',
              desc: 'Lancement de mes premiers cours en ligne. La communauté grandit, les pratiques s'approfondissent.',
            },
            {
              year: '2022',
              title: 'Lives & Retraites',
              desc: 'Premier programme de retraites IRL. Des espaces de transformation collective, en France et à l'étranger.',
            },
            {
              year: '2024',
              title: 'Sounds & Méditation',
              desc: 'Intégration du breathwork et des méditations guidées. Le son comme outil de régulation du système nerveux.',
            },
            {
              year: '2025',
              title: 'Sinaen.com',
              desc: 'Ouverture du studio en ligne : bibliothèque vidéo, lives, programmes. Tout au même endroit.',
            },
          ].map((item) => (
            <div
              key={item.year}
              style={{
                padding: '2rem',
                borderTop: '1.5px solid var(--brique)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: '2.5rem',
                  color: 'var(--abricot)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                {item.year}
              </span>
              <h3
                style={{
                  color: 'var(--brique)',
                  fontSize: '1.3rem',
                  marginBottom: '0.75rem',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--deep)', opacity: 0.8 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANIFESTE ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: '8rem 2rem',
          background: 'var(--brique)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            color: 'var(--blush)',
            opacity: 0.08,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(5rem, 15vw, 14rem)',
            pointerEvents: 'none',
          }}
        >
          MANIFESTE
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--abricot)',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Ce en quoi je crois
        </p>

        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {[
            'Le corps sait. Notre travail est de l'écouter, pas de le forcer.',
            'Le mouvement n'est pas une punition. C'est un langage.',
            'La régularité bat l'intensité. Toujours.',
            'Bouger ensemble crée quelque chose qu'aucune vidéo ne peut reproduire.',
            'Prendre soin de soi n'est pas un luxe. C'est une nécessité.',
          ].map((phrase, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Perandory Condensed', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'var(--blush)',
                lineHeight: 1.2,
                borderBottom: '1px solid rgba(255,210,217,0.15)',
                paddingBottom: '2rem',
              }}
            >
              {phrase}
            </p>
          ))}
        </div>
      </section>

      {/* ── B2B / CONTACT ─────────────────────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
          background: 'var(--cream)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div>
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
            Collaborations
          </p>
          <h2 style={{ color: 'var(--deep)', marginBottom: '1.5rem' }}>
            Travaillons ensemble
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--deep)',
              opacity: 0.7,
              marginBottom: '2rem',
              maxWidth: '440px',
            }}
          >
            Interventions en entreprise, co-créations de contenu, partenariats
            marques, retraites sur-mesure — si ton projet résonne avec mes
            valeurs, parlons-en.
          </p>
          <a
            href="mailto:contact@sinaen.com"
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
            Envoyer un message
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {[
            { label: 'Interventions entreprise', icon: '◆' },
            { label: 'Retraites sur-mesure', icon: '◆' },
            { label: 'Partenariats marques', icon: '◆' },
            { label: 'Création de contenu', icon: '◆' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '1.25rem 1.5rem',
                border: '1.5px solid var(--blush)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--deep)',
                fontSize: '1rem',
              }}
            >
              <span style={{ color: 'var(--abricot)', fontSize: '0.6rem' }}>{item.icon}</span>
              {item.label}
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
          section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
