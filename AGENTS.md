# Repository Guidelines

## Project Structure & Module Organization

- `src/` is the core Astro site. Key areas: `src/pages/` for routes, `src/layouts/` for page shells, `src/components/` for reusable UI, and `src/content/` for markdown/content collections (posts live in `src/content/posts/`).
- `src/assets/` holds source images/styles that are processed by Astro; `public/` is for static assets served as-is (e.g., `public/favicon.png`).
- `netlify/functions/` contains Netlify Functions (currently `schedule-deploy.cjs`).
- Build output goes to `dist/`.

## Build, Test, and Development Commands

- `npm install` installs dependencies.
- `npm run dev` starts the Astro dev server at `http://localhost:3000`.
- `npm run build` builds the production site into `dist/`.
- `npm run preview` serves the production build locally.
- `npm run format` runs Prettier across the repo.
- `npm run astro -- <command>` runs Astro CLI helpers (e.g., `npm run astro -- check`).

## Coding Style & Naming Conventions

- Use Prettier with the repo config in `.prettierrc.cjs`; formatting is enforced via Husky + lint-staged on commit.
- Indentation and line wrapping follow Prettier defaults for Astro, JS/TS, CSS, and Markdown.
- Components in `src/components/` use PascalCase filenames (e.g., `Navbar.astro`), while folders are lowercase (e.g., `components/posts/`).

## Testing Guidelines

- No automated test framework is configured yet. If you add tests, document the command in `package.json` and update this file.

## Commit & Pull Request Guidelines

- Commit messages in history are short, imperative sentences (e.g., "Fix typo on now page"). Follow that style.
- PRs should include a clear description, link related issues if any, and add screenshots/GIFs for visual changes.

## Configuration & Deployment Notes

- Site configuration lives in `astro.config.mjs`, `tailwind.config.cjs`, and `tsconfig.json`.
- Deploys are handled by Netlify; ensure `netilfy.toml` and `netlify/functions/` stay in sync with production behavior.
