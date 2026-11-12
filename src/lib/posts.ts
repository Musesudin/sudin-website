import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are visible only in `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(body: string | undefined): number {
	const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
