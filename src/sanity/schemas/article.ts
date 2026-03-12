export default {
  name: 'article',
  title: 'Article de blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'coverImage', title: 'Image de couverture', type: 'image', options: { hotspot: true } },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: { list: [
        { title: 'Movement', value: 'movement' },
        { title: 'Mental Health', value: 'mental-health' },
        { title: 'Lifestyle', value: 'lifestyle' },
      ]},
    },
    { name: 'excerpt', title: 'Extrait', type: 'text', rows: 3 },
    {
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
    { name: 'featured', title: 'Article à la une ?', type: 'boolean', initialValue: false },
    { name: 'publishedAt', title: 'Date de publication', type: 'datetime' },
  ],
  orderings: [{ title: 'Date (récent)', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'coverImage' } },
};
