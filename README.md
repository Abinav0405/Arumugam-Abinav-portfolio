# Arumugam Abinav — Personal Portfolio

Premium personal portfolio for **Arumugam Abinav** — student at Riverside Secondary School, Singapore. Developer, builder, AI enthusiast, aspiring entrepreneur.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (dark default + light toggle)
- Static export for Cloudflare Pages

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (Cloudflare Pages)

```bash
npm run build
```

Deploy the `out/` folder to Cloudflare Pages.

Build settings:

- **Framework preset:** Next.js (static export) or None
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Environment variable:** `NEXT_PUBLIC_SITE_URL=https://your-domain`

> If `akk.sg` already hosts the AKK Engineering company site, use a subdomain such as `abinav.akk.sg` and set `NEXT_PUBLIC_SITE_URL` accordingly.

## Content

Editable data lives in `src/data/`:

| File | Purpose |
|------|---------|
| `site.ts` | Name, SEO, email, socials, school |
| `projects.ts` | Projects + experiments |
| `apps.ts` | Google Play apps |
| `skills.ts` | Skills + interests |
| `journey.ts` | Timeline |

Add project screenshots under `public/projects/`.

## Contact form

The contact form opens the visitor's email client via `mailto:` to `arumugamabinav22@gmail.com`. Swap to Formspree/Web3Forms later if you want server-side delivery without exposing a mailbox flow.
