# keeler.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/593e4c46-fc9a-4444-8847-8eeb6f089ed0/deploy-status)](https://app.netlify.com/sites/keeler-dev/deploys)

[keeler.dev](https://keeler.dev) is made using [astro](https://astro.build/) and is deployed using [netlify](https://www.netlify.com/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Images

Make sure images are in a reasonable format before adding them to the website. Both for git reasons (not great with large binaries) and to reduce bandwidth usage. I would suggest using [ImageMagick](https://imagemagick.org/script/mogrify.php) and a command like:

```$bash
mogrify -resize 1000 -quality 75 -format jpg *.*
```
