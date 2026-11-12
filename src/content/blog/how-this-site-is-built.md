---
title: 'How this site is built (and why it costs nothing to run)'
description: 'Astro, Markdown files, GitHub, and Vercel: a simple, fast setup for a personal blog that I fully own.'
pubDate: 2026-11-12
category: tech
tags: ['astro', 'web', 'vercel']
---

I wanted three things from a personal site: it should be **fast**, **cheap** (ideally free), and **mine**, meaning my writing lives in plain files I control rather than in someone else's database.

## The stack

| Piece | What it does |
| --- | --- |
| [Astro](https://astro.build) | Turns my Markdown files into plain, fast HTML pages |
| GitHub | Stores every post and keeps the full history |
| [Vercel](https://vercel.com) | Rebuilds and hosts the site whenever I push |
| `sudin.com.np` | My domain, pointed at Vercel |

## Publishing a post

Every post is a Markdown file in `src/content/blog/`. The top of the file holds a little metadata:

```md
---
title: 'My new post'
description: 'One sentence that sums it up.'
pubDate: 2026-11-12
category: fitness   # fitness | tech | life
tags: ['strength']
---

Write here…
```

Then I commit and push. Vercel picks up the change, rebuilds, and the post is live a minute later. No servers, no admin panel, no monthly bill.

## Why not WordPress or Medium?

Both are fine, but I didn't want to maintain a server, and I didn't want my writing locked inside a platform. With plain files, I can move hosts in an afternoon and my posts come with me.
