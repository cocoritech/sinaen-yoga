import { client } from '@/lib/sanity';
import { videosQuery } from '@/lib/queries';
import BibliothequeClient from './BibliothequeClient';

export const revalidate = 60;

export default async function Bibliotheque() {
  const videos = await client.fetch(videosQuery);
  return <BibliothequeClient videos={videos} />;
}
