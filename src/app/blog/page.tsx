import { client } from '@/lib/sanity';
import { articlesQuery } from '@/lib/queries';
import BlogClient from './BlogClient';

export const revalidate = 60;

export default async function Blog() {
  const articles = await client.fetch(articlesQuery);
  return <BlogClient articles={articles} />;
}
