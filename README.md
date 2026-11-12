# sudin.com.np

My personal website and blog: fitness, tech, and things I like to talk about.

Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).

## Write a new post

1. Create a file in `src/content/blog/`, e.g. `src/content/blog/my-first-squat-pr.md`. The file name becomes the URL (`/blog/my-first-squat-pr/`).
2. Start it with this frontmatter:

   ```md
   ---
   title: 'My first squat PR'
   description: 'One sentence that sums up the post.'
   pubDate: 2026-11-20
   category: fitness        # fitness | tech | life
   tags: ['strength', 'squat']
   draft: false             # true = only visible locally
   ---

   Your post in Markdown…
   ```

3. Commit and push to `main`. Vercel rebuilds and the post goes live in about a minute.

You can write posts directly on GitHub: open the `src/content/blog` folder, click **Add file → Create new file**, paste the template, and commit. You don't need a computer setup.

Images go in `public/images/` and are referenced as `![alt text](/images/photo.jpg)`.

## Personalise

| What | Where |
| --- | --- |
| Name, email, social links, categories | `src/consts.ts` |
| About page text | `src/pages/about.astro` |
| Projects | `src/content/projects/*.md` |
| Colours and fonts | `src/styles/global.css` |

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into ./dist
```

## Deploy & domain

1. On [vercel.com/new](https://vercel.com/new), import the `Musesudin/sudin-website` repo (Vercel auto-detects Astro; keep the defaults).
2. In the Vercel project, open **Settings → Domains** and add `sudin.com.np` and `www.sudin.com.np`.
3. At your `.np` DNS provider, add the records Vercel shows. Typically:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`

   Or switch the domain's nameservers to Vercel's (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
4. HTTPS is issued automatically once DNS propagates.
