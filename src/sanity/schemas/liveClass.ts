export default {
  name: 'liveClass',
  title: 'Live Class',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string', validation: (R: any) => R.required() },
    { name: 'date', title: 'Date & heure', type: 'datetime', validation: (R: any) => R.required() },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['flow', 'mobilite', 'breathwork', 'recovery'] },
    },
    { name: 'duration', title: 'Durée (minutes)', type: 'number' },
    { name: 'spots', title: 'Nombre de places', type: 'number' },
    { name: 'price', title: 'Prix non-abonné (€)', type: 'number' },
    { name: 'zoomLink', title: 'Lien Zoom', type: 'url' },
    { name: 'replayVimeoId', title: 'ID Vimeo du replay', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
  orderings: [{ title: 'Date (prochain)', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'date' } },
};
