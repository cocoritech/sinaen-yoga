import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { articleBySlugQuery, articleSlugsQuery } from '@/lib/queries';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(articleSlugsQuery);
  return slugs.map((s) => ({ id: s.slug }));
}

const categoryColors: Record<string, string> = {
  movement: 'var(--abricot)',
  'mental-health': 'var(--blush)',
  lifestyle: 'var(--pistache)',
};

const categoryLabels: Record<string, string> = {
  movement: 'Movement',
  'mental-health': 'Mental Health',
  lifestyle: 'Lifestyle',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  const months = ['jan', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function renderBody(body: any[]) {
  if (!body?.length) return null;
  return body.map((block: any, i: number) => {
    if (block._type === 'block') {
      const text = block.children?.map((child: any) => child.text).join('') ?? '';
      if (!text) return null;
      if (block.style === 'h2') {
        return (
          <h2
            key={i}
            style={{
              fontSize: '1.6rem',
              color: 'var(--deep)',
              marginTop: '1rem',
              lineHeight: 1.2,
            }}
          >
            {text}
          </h2>
        );
      }
      if (block.style === 'h3') {
        return (
          <h3
            key={i}
            style={{
              fontSize: '1.2rem',
              color: 'var(--deep)',
              marginTop: '0.75rem',
            }}
          >
            {text}
          </h3>
        );
      }
      return (
        <p
          key={i}
          style={{
            fontSize: i === 0 ? '1.15rem' : '1rem',
            lineHeight: 1.9,
            color: 'var(--deep)',
            opacity: i === 0 ? 0.85 : 0.7,
          }}
        >
          {text}
        </p>
      );
    }
    if (block._type === 'image' && block.asset) {
      return (
        <img
          key={i}
          src={urlFor(block).width(680).url()}
          alt=""
          style={{ width: '100%', borderRadius: 'var(--radius-md)', margin: '1rem 0' }}
        />
      );
    }
    return null;
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug: id });

  if (!article) notFound();

  const color = categoryColors[article.category] ?? 'var(--abricot)';

  return (
    <div className="grain">
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: article.coverImage
            ? `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${urlFor(article.coverImage).width(1200).url()}) center/cover`
            : color,
        }}
      >
        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            color: 'var(--deep)',
            opacity: 0.5,
            textDecoration: 'none',
            marginBottom: '2rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          ← Blog
        </Link>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--deep)', opacity: 0.5, fontFamily: 'var(--font-body)' }}>
            {categoryLabels[article.category] ?? article.category}
          </span>
          {article.publishedAt && (
            <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.35, fontFamily: 'var(--font-body)' }}>
              {formatDate(article.publishedAt)}
            </span>
          )}
        </div>

        <h1
          style={{
            color: 'var(--deep)',
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            maxWidth: '800px',
            lineHeight: 1.05,
          }}
        >
          {article.title}
        </h1>
      </section>

      {/* ── CONTENU ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 2rem 6rem',
          background: 'var(--cream)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {article.excerpt && (
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'var(--deep)',
                opacity: 0.75,
                fontWeight: 500,
                fontStyle: 'italic',
              }}
            >
              {article.excerpt}
            </p>
          )}

          {article.body?.length > 0 ? (
            renderBody(article.body)
          ) : (
            <p style={{ opacity: 0.4, fontFamily: 'var(--font-body)' }}>
              Contenu en cours de rédaction…
            </p>
          )}

          {/* CTA */}
          <div
            style={{
              marginTop: '2rem',
              padding: '2rem',
              background: 'var(--blush)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p style={{ fontFamily: "'Perandory Condensed', Georgia, serif", fontSize: '1.3rem', color: 'var(--brique)' }}>
              Envie de passer à la pratique ?
            </p>
            <Link
              href="/bibliotheque"
              style={{
                padding: '0.75rem 2rem',
                background: 'var(--brique)',
                color: 'var(--blush)',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Studio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RETOUR BLOG ───────────────────────────────────────────── */}
      <section style={{ padding: '2rem', background: 'var(--cream)', borderTop: '1px solid var(--blush)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--abricot)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            ← Tous les articles
          </Link>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ padding: '2rem', background: 'var(--deep)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: "'Perandory Condensed', Georgia, serif", fontSize: '1.5rem', color: 'var(--blush)', textDecoration: 'none' }}>
          Sinaen
        </Link>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,210,217,0.4)' }}>
          © 2025 Sinaen
        </span>
      </footer>
    </div>
  );
}
