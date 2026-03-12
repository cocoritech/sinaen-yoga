export default {
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom', type: 'string', validation: (R: any) => R.required() },
    { name: 'mood', title: 'Ambiance (ex: Énergie & éveil)', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
    { name: 'tracks', title: 'Nombre de titres', type: 'number' },
    { name: 'duration', title: 'Durée (ex: 1h12)', type: 'string' },
    { name: 'spotifyUrl', title: 'Lien Spotify', type: 'url' },
    { name: 'coverImage', title: 'Pochette', type: 'image', options: { hotspot: true } },
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
  preview: { select: { title: 'name', subtitle: 'mood', media: 'coverImage' } },
};
