import { getCollection, type CollectionEntry } from 'astro:content';
import type { BlogTag } from '../content.config';

export type BlogPost = CollectionEntry<'blog'>;

/** All non-draft blog posts, sorted by pubDate desc. */
export const getAllPosts = async (): Promise<BlogPost[]> => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
};

/** N most recent non-draft blog posts. */
export const getRecentPosts = async (n: number): Promise<BlogPost[]> => {
  const all = await getAllPosts();
  return all.slice(0, n);
};

/** All posts that carry the given tag. */
export const getPostsByTag = async (tag: BlogTag): Promise<BlogPost[]> => {
  const posts = await getCollection(
    'blog',
    ({ data }) => !data.draft && data.tags.includes(tag),
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
};

/** All unique tags actually used by published posts, with counts. */
export const getUsedTags = async (): Promise<
  { tag: BlogTag; count: number }[]
> => {
  const posts = await getAllPosts();
  const counts = new Map<BlogTag, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
};

/** Format an ISO date as YYYY-MM-DD. */
export const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

/** Estimate reading time in minutes (Chinese + English mixed: ~300 chars/min). */
export const readingTime = (body: string | undefined): number => {
  if (!body) return 1;
  const chars = body.replace(/\s+/g, '').length;
  return Math.max(1, Math.ceil(chars / 600));
};
