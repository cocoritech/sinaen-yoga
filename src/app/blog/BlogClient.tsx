'use client';

import { useState } from 'react';
import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

type SanityArticle = {
  _id: string;
  title: string;
  slug: string;
  coverImage: any;
  category: string;
  excerpt: string;
  featured: boolean;
  publishedAt: string;
};

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

const categoryColors: Record<string, string> = {
  movement: 'var(--abricot)',
  'mental-health': 'var(--blush)',
  lifestyle: 'var(--pistache)',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  const months = ['jan', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogClient({ articles }: { articles: SanityArticle[] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = articles.filter(
    (a) => activeCategory === 'all' || a.category === activeCategory
  );

  const featured = articles.find((a) => a.featured);
  const rest = activeCategory === 'all'
    ? articles.filter((a) => !a.featured)
    : filtered;

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

      {/* Empty state */}
      {articles.length === 0 && (
        <section style={{ padding: '6rem 2rem', background: 'var(--cream)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', opacity: 0.4 }}>
            Les articles arrivent bientôt ✦
          </p>
        </section>
      )}

      {/* ── ARTICLE FEATURED ──────────────────────────────────────── */}
      {activeCategory === 'all' && featured && (
        <section style={{ padding: '3rem 2rem 0', background: 'var(--cream)' }}>
          <div
            className="grid-hero"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1.5px solid var(--blush)',
              background: 'var(--white)',
            }}
          >
            {/* Image */}
            <div
              style={{
                background: featured.coverImage
                  ? `url(${urlFor(featured.coverImage).width(800).url()}) center/cover`
                  : categoryColors[featured.category] ?? 'var(--abricot)',
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
                    {categoryLabels[featured.category] ?? featured.category}
                  </span>
                  {featured.publishedAt && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.35 }}>
                      {formatDate(featured.publishedAt)}
                    </span>
                  )}
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
                {featured.excerpt && (
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
                )}
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
                <Link
                  href={`/blog/${featured.slug ?? featured._id}`}
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GRILLE ARTICLES ───────────────────────────────────────── */}
      {rest.length > 0 && (
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

          <div className="grid-3">
            {rest.map((article) => (
              <Link
                key={article._id}
                href={`/blog/${article.slug ?? article._id}`}
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
                      background: article.coverImage
                        ? `url(${urlFor(article.coverImage).width(600).url()}) center/cover`
                        : categoryColors[article.category] ?? 'var(--blush)',
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
                      {categoryLabels[article.category] ?? article.category}
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
                    {article.publishedAt && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.35 }}>
                        {formatDate(article.publishedAt)}
                      </span>
                    )}
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
                    {article.excerpt && (
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
                    )}
                  </div>
                </div>
              </Link>
            ))}
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
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,210,217,0.4)' }}>
          © 2025 Sinaen
        </span>
      </footer>
    </div>
  );
}
