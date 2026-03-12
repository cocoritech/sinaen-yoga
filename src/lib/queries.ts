export const videosQuery = `*[_type == "video"] | order(publishedAt desc) {
  _id,
  title,
  category,
  duration,
  intensity,
  thumbnail,
  isNew,
  vimeoId,
  description
}`;

export const upcomingLivesQuery = `*[_type == "liveClass" && dateTime(date) > dateTime(now())] | order(date asc) {
  _id,
  title,
  date,
  type,
  duration,
  spots,
  price,
  zoomLink
}`;

export const recentReplaysQuery = `*[_type == "liveClass" && defined(replayVimeoId)] | order(date desc) [0..5] {
  _id,
  title,
  date,
  type,
  duration,
  replayVimeoId
}`;

export const eventsQuery = `*[_type == "event"] | order(startDate asc) {
  _id,
  title,
  subtitle,
  type,
  coverImage,
  startDate,
  endDate,
  location,
  price,
  spots,
  description,
  includes,
  stripeLink
}`;

export const articlesQuery = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  category,
  excerpt,
  featured,
  publishedAt
}`;

export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  category,
  excerpt,
  body,
  publishedAt
}`;

export const articleSlugsQuery = `*[_type == "article" && defined(slug.current)] {
  "slug": slug.current
}`;

export const playlistsQuery = `*[_type == "playlist"] | order(order asc) {
  _id,
  name,
  mood,
  description,
  tracks,
  duration,
  spotifyUrl,
  coverImage,
  color
}`;

export const meditationsQuery = `*[_type == "meditation"] | order(order asc) {
  _id,
  title,
  category,
  duration,
  "audioUrl": coalesce(audioFile.asset->url, audioUrl),
  color
}`;
