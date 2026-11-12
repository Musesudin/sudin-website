// ─────────────────────────────────────────────────────────────
//  Site-wide settings. Edit this file to personalise the site.
// ─────────────────────────────────────────────────────────────

export const SITE = {
	title: 'Sudin',
	description:
		'Notes on fitness, technology, and the things I care about — written by Sudin.',
	author: 'Sudin',
	url: 'https://sudin.com.np',
	locale: 'en',
	email: 'hello@sudin.com.np', // TODO: change to your real email
};

/** Social links shown on the Contact page and in the footer. Remove any you don't use. */
export const SOCIALS: { label: string; href: string; handle: string }[] = [
	{ label: 'GitHub', href: 'https://github.com/Musesudin', handle: '@Musesudin' },
	{ label: 'Instagram', href: 'https://instagram.com/', handle: 'TODO' },
	{ label: 'X / Twitter', href: 'https://x.com/', handle: 'TODO' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/', handle: 'TODO' },
];

/** Blog categories. The key is used in post frontmatter and in URLs (/category/<key>). */
export const CATEGORIES = {
	fitness: {
		label: 'Fitness',
		description: 'Training, nutrition, recovery, and building habits that last.',
	},
	tech: {
		label: 'Tech',
		description: 'Software, tools, gadgets, and what I am building or learning.',
	},
	life: {
		label: 'Life & more',
		description: 'Books, ideas, travel, and everything else I like to talk about.',
	},
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];
