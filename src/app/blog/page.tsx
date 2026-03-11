'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: 'Pourquoi la régularité bat toujours l\'intensité',
    category: 'movement',
    date: '3 mars 2025',
    readTime: '5 min',
    excerpt: 'On nous a vendu l\'idée que plus c\'est intense, mieux c\'est. Voici pourquoi c\'est faux, et comment une pratique douce mais régulière transforme le corps en profondeur.',
    featured: true,
    color: 'var(--abricot)',
    tag: 'Studio →',
    tagHref: '/bibliotheque',
  },
  {
    id: 2,
    title: 'Breathwork : ce que la respiration peut faire pour ton système nerveux',
    category: 'mental-health',
    date: '24 fév 2025',
    readTime: '7 min',
    excerpt: 'La respiration est le seul système autonome que tu peux contrôler consciemment. C\'est une porte d\'entrée directe vers ton système nerveux.',
    featured: false,
    color: 'var(--blush)',
    tag: 'Sounds →',
    tagHref: '/sounds',
  },
  {
    id: 3,
    title: 'Ce que j\'ai appris à Bali sur le mouvement holistique',
    category: 'lifestyle',
    date: '12 fév 2025',
    readTime: '6 min',
    excerpt: 'Trois mois de formation au cœur d\'Ubud. Une vision du corps, du mouvement et du soin qui a tout changé dans ma pratique.',
    featured: false,
    color: 'var(--pistache)',
    tag: 'About →',
    tagHref: '/about',
  },
  {
    id: 4,
    title: 'Mobilité vs flexibilité : arrêtons la confusion',
    category: 'movement',
    date: '1 fév 2025',
    readTime: '4 min',
    excerpt: 'La flexibilité c\'est passive. La mobilité c\'est active. Comprendre la différence va changer ta pratique et protéger tes articulations.',
    featured: false,
    color: 'var(--rose-sorbet)',
    tag: 'Lives →',
    tagHref: '/lives',
  },
  {
    id: 5,
    title: 'Comment j\'ai reconstruit ma relation au corps après une blessure',
    category: 'mental-health',
    date: '20 jan 2025',
    readTime: '8 min',
    excerpt: 'Une blessure au dos à 28 ans. Le chemin vers la guérison, la patience, et ce que ça m\'a appris sur l\'écoute du corps.',
    featured: false,
    color: 'var(--brique)',
    tag: 'Expériences →',
    tagHref: '/experiences',
  },
  {
    id: 6,
    title: 'Ma routine matinale en 20 minutes (et pourquoi elle fonctionne)',
    category: 'lifestyle',
    date: '8 jan 2025',
    readTime: '3 min',
    excerpt: 'Pas besoin d\'une heure. 20 minutes de mobilité, respiration et intention peuvent changer le ton de toute une journée.',
    featured: false,
    color: 'var(--pistache)',
    tag: 'Studio →',
    tagHref: '/bibliotheque',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'Tout' },
  { key: 'movement', label: 'Movement' },
  { key: 'mental-health', label: 'Mental Health' },
  { key: 'lifestyle', label: 'Lifestyle' },
];

const categoryLabels: Record<string, string> = {
  movement: 'Movement',
  'mental-health': 'Mental Health',
  lifestyle: 'Lifestyle',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = ARTICLES.filter(
    (a) => activeCategory === 'all' || a.category === activeCategory
  );

  const featured = ARTICLES.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || activeCategory !== 'all');

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
          background: 'var(--cream)',
          borderBottom: '1.5px solid var(--blush)',
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
          Réflexions & pratiques
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
          <h1 style={{ color: 'var(--brique)', fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Blog
          </h1>

          {/* Filtres catégorie */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1.5px solid',
                  borderColor: activeCategory === c.key ? 'var(--brique)' : 'var(--blush)',
                  background: activeCategory === c.key ? 'var(--brique)' : 'transparent',
                  color: activeCategory === c.key ? 'var(--blush)' : 'var(--deep)',
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
        </div>
      </section>

      {/* ── ARTICLE FEATURED ──────────────────────────────────────── */}
      {activeCategory === 'all' && featured && (
        <section style={{ padding: '3rem 2rem 0', background: 'var(--cream)' }}>
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              border: '1.5px solid var(--blush)',
              background: 'var(--white)',
            }}
          >
            {/* Image */}
            <div
              style={{
                background: featured.color,
                minHeight: '400px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '2rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  background: 'var(--brique)',
                  color: 'var(--blush)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                À LA UNE
              </span>
              <p
                style={{
                  fontFamily: "'Perandory Condensed', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: 'var(--deep)',
                  lineHeight: 1.1,
                }}
              >
                {featured.title}
              </p>
            </div>

            {/* Contenu */}
            <div
              style={{
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--abricot)',
                    }}
                  >
                    {categoryLabels[featured.category]}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.35 }}>
                    {featured.date} · {featured.readTime} de lecture
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                    color: 'var(--deep)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--deep)',
                    opacity: 0.65,
                  }}
                >
                  {featured.excerpt}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
                <Link
                  href={`/blog/${featured.id}`}
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 2rem',
                    background: 'var(--brique)',
                    color: 'var(--blush)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                  }}
                >
                  Lire l'article
                </Link>
                <Link
                  href={featured.tagHref}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--abricot)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  {featured.tag}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GRILLE ARTICLES ───────────────────────────────────────── */}
      <section style={{ padding: '3rem 2rem 6rem', background: 'var(--cream)' }}>
        {activeCategory === 'all' && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--deep)',
              opacity: 0.4,
              marginBottom: '2rem',
            }}
          >
            Tous les articles
          </p>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {(activeCategory === 'all' ? ARTICLES.filter((a) => !a.featured) : filtered).map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--blush)',
                  background: 'var(--white)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: article.color,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      background: 'rgba(26,20,16,0.2)',
                      color: 'var(--deep)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {categoryLabels[article.category]}
                  </span>
                </div>

                {/* Contenu */}
                <div
                  style={{
                    padding: '1.25rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.35 }}>
                    {article.date} · {article.readTime}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--deep)',
                      lineHeight: 1.3,
                      flex: 1,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--deep)',
                      opacity: 0.55,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.tagHref}
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--abricot)',
                      textDecoration: 'none',
                      marginTop: '0.5rem',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {article.tag}
                  </Link>
                </div>
              </div>
            </Link>
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
