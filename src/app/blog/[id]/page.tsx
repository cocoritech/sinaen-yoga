import Nav from '@/components/layout/Nav';
import Link from 'next/link';

const ARTICLES: Record<string, {
  title: string; category: string; date: string; readTime: string;
  color: string; content: string[]; tagLabel: string; tagHref: string;
}> = {
  '1': {
    title: "Pourquoi la régularité bat toujours l'intensité",
    category: 'Movement', date: '3 mars 2025', readTime: '5 min',
    color: 'var(--abricot)',
    tagLabel: 'Studio →', tagHref: '/bibliotheque',
    content: [
      "On nous a vendu l'idée que plus c'est intense, mieux c'est. Que la douleur est un signe de progrès. Que si tu ne transpires pas, tu n'as pas vraiment travaillé.",
      "C'est faux. Et cette croyance fait plus de mal que de bien.",
      "Le corps humain ne fonctionne pas par pics d'intensité. Il fonctionne par adaptation progressive. Chaque fois que tu pratiques — même 15 minutes, même doucement — tu envoies un signal à ton système nerveux : ce mouvement est important, il fait partie de ma vie.",
      "C'est l'accumulation de ces signaux, jour après jour, qui crée le changement. Pas la session épuisante du samedi qui te laisse sur le canapé tout le dimanche.",
      "La régularité crée de la prévisibilité pour le corps. Et le corps adore la prévisibilité. Il commence à anticiper, à préparer, à s'adapter. C'est là que la vraie transformation opère.",
      "Alors si tu hésites entre une heure intense une fois par semaine et 20 minutes douces cinq fois par semaine : choisis les 20 minutes. Toujours.",
    ],
  },
  '2': {
    title: "Breathwork : ce que la respiration peut faire pour ton système nerveux",
    category: 'Mental Health', date: '24 fév 2025', readTime: '7 min',
    color: 'var(--blush)',
    tagLabel: 'Sounds →', tagHref: '/sounds',
    content: [
      "La respiration est le seul système autonome que tu peux contrôler consciemment. C'est une porte d'entrée directe vers ton système nerveux.",
      "Quand tu es stressée, ta respiration devient rapide et superficielle. Quand tu ralentis consciemment ta respiration, tu envoies un signal inverse au cerveau : tout va bien, on peut se calmer.",
      "Ce n'est pas de la magie. C'est de la biologie. Le nerf vague — qui relie le cerveau aux organes — est directement stimulé par une respiration lente et profonde. Il active la réponse parasympathique : le mode récupération, digestion, repos.",
      "Le breathwork, c'est utiliser ce mécanisme de façon intentionnelle. Que ce soit la cohérence cardiaque (5 secondes inspire, 5 secondes expire), la respiration 4-7-8, ou des techniques plus avancées comme le pranayama : toutes agissent sur ce même axe.",
      "Commencer par 5 minutes par jour suffit. Le matin, avant de regarder ton téléphone. Ou le soir, pour signaler à ton corps que la journée est terminée.",
    ],
  },
  '3': {
    title: "Ce que j'ai appris à Bali sur le mouvement holistique",
    category: 'Lifestyle', date: '12 fév 2025', readTime: '6 min',
    color: 'var(--pistache)',
    tagLabel: 'About →', tagHref: '/about',
    content: [
      "Trois mois à Ubud. C'est long et court à la fois. Long pour désapprendre. Court pour tout absorber.",
      "Ce qui m'a le plus frappée là-bas, c'est que personne ne sépare le corps du reste. La pratique physique n'est jamais juste physique. Elle est toujours reliée à l'énergie, aux émotions, au souffle, à la communauté.",
      "En Occident, on fait du sport pour brûler des calories ou pour 'déstresser'. À Bali, on bouge pour se connecter. À soi, aux autres, à quelque chose de plus grand.",
      "J'ai appris à ralentir. À rester dans une posture pas parce qu'elle est difficile, mais pour voir ce qu'elle révèle. Quelle résistance. Quelle émotion. Quelle histoire le corps raconte.",
      "C'est cette vision que j'ai ramenée avec moi et qui guide tout ce que je propose aujourd'hui. Bouger n'est pas une performance. C'est une conversation.",
    ],
  },
  '4': {
    title: "Mobilité vs flexibilité : arrêtons la confusion",
    category: 'Movement', date: '1 fév 2025', readTime: '4 min',
    color: 'var(--rose-sorbet)',
    tagLabel: 'Lives →', tagHref: '/lives',
    content: [
      "La flexibilité, c'est la capacité d'un muscle à s'étirer passivement. On te pousse dans la posture, tu tiens, tu respires.",
      "La mobilité, c'est différent. C'est la capacité à bouger activement dans toute ton amplitude articulaire. C'est toi qui contrôles le mouvement, avec de la force.",
      "Pourquoi c'est important ? Parce qu'une personne très flexible mais peu mobile est en réalité vulnérable. Elle peut aller loin dans une posture, mais elle n'a pas la force musculaire pour protéger cette amplitude. C'est là que les blessures arrivent.",
      "Le pilates et le yoga fonctionnel travaillent les deux. Mais si tu dois choisir sur quoi te concentrer, choisis la mobilité. Elle te donnera de la flexibilité en bonus, et en plus elle protégera tes articulations.",
      "Tes hanches, tes épaules, ta colonne : ces zones méritent d'être fortes dans toute leur amplitude. Pas juste souples.",
    ],
  },
  '5': {
    title: "Comment j'ai reconstruit ma relation au corps après une blessure",
    category: 'Mental Health', date: '20 jan 2025', readTime: '8 min',
    color: 'var(--brique)',
    tagLabel: 'Expériences →', tagHref: '/experiences',
    content: [
      "J'avais 28 ans. Professeure de yoga depuis deux ans. Et un matin, je me suis réveillée avec une douleur dans le bas du dos que je ne pouvais plus ignorer.",
      "Le diagnostic : hernie discale L4-L5. Repos complet. Pas de yoga pendant 3 mois.",
      "Ces trois mois ont été parmi les plus difficiles de ma vie professionnelle. Mais aussi les plus transformateurs.",
      "J'ai dû apprendre à écouter mon corps autrement. Pas pour le pousser. Pas pour performer. Juste pour comprendre ce qu'il demandait.",
      "J'ai découvert que ma pratique avait été, sans que je m'en rende compte, une forme de contrôle. Et la blessure m'a obligée à lâcher ce contrôle.",
      "Quand je suis revenue sur le tapis, tout avait changé. Ma façon de bouger, ma façon d'enseigner, ma façon de parler du corps. Cette blessure est devenue le fondement de tout ce que je propose aujourd'hui.",
    ],
  },
  '6': {
    title: "Ma routine matinale en 20 minutes (et pourquoi elle fonctionne)",
    category: 'Lifestyle', date: '8 jan 2025', readTime: '3 min',
    color: 'var(--pistache)',
    tagLabel: 'Studio →', tagHref: '/bibliotheque',
    content: [
      "Je ne suis pas une personne du matin. Je l'ai longtemps cru, en tout cas.",
      "Ce qui a tout changé : arrêter de vouloir faire trop. Une heure de pratique le matin, c'est beau sur Instagram. Dans la vraie vie, avec un boulot et une vie sociale, c'est rarement tenable.",
      "20 minutes, en revanche, c'est possible presque tous les jours.",
      "Ma routine : 5 minutes de mobilité articulaire (chevilles, hanches, épaules). 10 minutes de flow debout, sans objectif particulier. 5 minutes de respiration et d'intention.",
      "C'est tout. Ça n'a rien d'impressionnant. Et c'est exactement pour ça que ça fonctionne.",
      "Le cerveau n'a pas besoin d'être convaincu. Le seuil d'entrée est bas. Et une fois que tu es là, sur ton tapis, tu fais toujours plus que prévu.",
    ],
  },
};

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = ARTICLES[params.id];

  if (!article) {
    return (
      <div className="grain">
        <Nav />
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem', paddingTop: '6rem' }}>
          <h1 style={{ color: 'var(--brique)' }}>Article introuvable</h1>
          <Link href="/blog" style={{ color: 'var(--abricot)', textDecoration: 'none' }}>← Retour au blog</Link>
        </section>
      </div>
    );
  }

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
          background: article.color,
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
            {article.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--deep)', opacity: 0.35, fontFamily: 'var(--font-body)' }}>
            {article.date} · {article.readTime} de lecture
          </span>
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
          {article.content.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: i === 0 ? '1.2rem' : '1rem',
                lineHeight: 1.9,
                color: 'var(--deep)',
                opacity: i === 0 ? 0.85 : 0.7,
                fontWeight: i === 0 ? 500 : 400,
              }}
            >
              {para}
            </p>
          ))}

          {/* CTA lié */}
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
              href={article.tagHref}
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
              {article.tagLabel}
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
