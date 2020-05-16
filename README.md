# keeler.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/371d03a4-f192-480f-a5da-0e551bea79da/deploy-status)](https://app.netlify.com/sites/kind-agnesi-dd5ea1/deploys)

[keeler.dev](https://keeler.dev) is made using [gatsby](https://github.com/gatsbyjs/gatsby) and is deployed using [netlify](https://www.netlify.com/). Development uses the standard gatsby flow. Gatsby docs can be found [here for more information](https://www.gatsbyjs.org/docs/).

## Development


1. Install the [gatsby-cli](https://www.npmjs.com/package/gatsby-cli) globally
2. Clone this repo
3. Use gatsby cli for development
4. Visit [localhost:8000](localhost:8000) to view

```bash
# 1.
npm install -g gatsby-cli
# 2.
git clone git@github.com:jerkeeler/keeler-dev.git
# 3.
gatsby develop
```

## Deployment

Netlify handles all deployment automatically and seamlessly. All you have to do is push to master. Netlify will automatically run `gatsby build` and publish the files to their cdn. You will receive an email notification when a new deploy goes out.

## Images

Make sure images are in a reasonable format before adding them to the website. Both for git reasons (not great with large binaries) and to reduce bandwidth usage. I would suggest a command something like:
```$bash
mogrify -resize 1600 -quality 75 -format jpg *.*
```
