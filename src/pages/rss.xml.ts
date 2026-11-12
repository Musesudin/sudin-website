import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { CATEGORIES, SITE } from '../consts';
import { getPosts } from '../lib/posts';

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site ?? SITE.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: [CATEGORIES[post.data.category].label, ...post.data.tags],
			link: `/blog/${post.id}/`,
		})),
		customData: `<language>${SITE.locale}</language>`,
	});
}
