export default {
  name: 'meditation',
  title: 'Méditation guidée',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string', validation: (R: any) => R.required() },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Réveil', value: 'Réveil' },
          { title: 'Breathwork', value: 'Breathwork' },
          { title: 'Sommeil', value: 'Sommeil' },
          { title: 'Urgence calme', value: 'Urgence calme' },
          { title: 'Manifestation', value: 'Manifestation' },
        ],
      },
    },
    { name: 'duration', title: 'Durée (ex: 10 min)', type: 'string' },
    {
      name: 'audioFile',
      title: 'Fichier audio',
      type: 'file',
      options: { accept: 'audio/*' },
      description: 'Upload MP3 ou M4A directement ici',
    },
    {
      name: 'audioUrl',
      title: 'Ou lien audio externe',
      type: 'url',
      description: 'SoundCloud, Vimeo, etc. (si pas d\'upload direct)',
    },
    {
      name: 'color',
      title: 'Couleur',
      type: 'string',
      options: {
        list: [
          { title: 'Abricot', value: 'var(--abricot)' },
          { title: 'Blush', value: 'var(--blush)' },
          { title: 'Pistache', value: 'var(--pistache)' },
          { title: 'Brique', value: 'var(--brique)' },
          { title: 'Rose Sorbet', value: 'var(--rose-sorbet)' },
        ],
      },
    },
    { name: 'order', title: 'Ordre d\'affichage', type: 'number' },
  ],
  orderings: [{ title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category' } },
};
