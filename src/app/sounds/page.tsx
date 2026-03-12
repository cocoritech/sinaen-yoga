import { client } from '@/lib/sanity';
import { playlistsQuery, meditationsQuery } from '@/lib/queries';
import SoundsClient from './SoundsClient';

export const revalidate = 60;

export default async function Sounds() {
  const [playlists, meditations] = await Promise.all([
    client.fetch(playlistsQuery),
    client.fetch(meditationsQuery),
  ]);

  return <SoundsClient playlists={playlists} meditations={meditations} />;
}
