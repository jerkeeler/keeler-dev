# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Astro dev server (localhost:3000)
- `netlify dev` — Full local dev with Netlify Functions + Blobs
- `npm run build` — Production build to `dist/`
- `npm run preview` — Serve production build locally
- `npm run format` — Prettier across the repo
- `npm run astro -- check` — TypeScript diagnostics for Astro files

No test framework is configured.

## Architecture

Astro 5 static site (keeler.dev) deployed on Netlify. Blog posts are markdown in a content collection; everything else is static pages.

### Key paths

- `src/pages/` — File-based routing. `posts/[...slug].astro` generates a page per blog post.
- `src/layouts/Layout.astro` — Single layout wrapping all pages (navbar, footer, dark mode, meta tags).
- `src/content/posts/*.md` — Blog posts with Zod-validated frontmatter (`title`, `description`, `date`, `tags`, `draft`).
- `src/content/config.ts` — Content collection schema definition.
- `netlify/functions/` — Serverless API endpoints (like counter). Use `.ts` not `.mts` — the project has `"type": "module"`.
- `src/utils.ts` — Shared utilities (currently `formatPostDate`).

### Like system

The like counter (`LikeButton.astro`) is the main interactive feature:

- `netlify/functions/like.ts` — POST, increments count in Netlify Blobs, rate-limits to 10 per IP via SHA256 hash.
- `netlify/functions/get-likes.ts` — GET, returns total count for a slug.
- Client does optimistic updates, syncs localStorage with server responses on both success and 429.
- Local dev blob storage lives in `.netlify/blobs-serve/` (delete to reset).

### Styling

Tailwind 3 with `darkMode: 'class'`. Dark mode toggled via localStorage key `theme` and a `dark` class on `<html>`. Typography plugin styles blog post prose. Component-scoped `<style>` blocks for non-Tailwind CSS (animations, etc.).

## Conventions

- Prettier enforced via Husky + lint-staged on commit (config in `.prettierrc.cjs`).
- Component filenames are PascalCase; folder names are lowercase.
- Commit messages: short, imperative (e.g., "Fix typo on now page").
- Draft posts (`draft: true`) are visible in dev but filtered out in production builds.
- Markdown supports math (remark-math + rehype-katex) and figure captions (rehype-figure).
