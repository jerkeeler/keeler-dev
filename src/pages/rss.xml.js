import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const postEntries = await getCollection('posts', ({ data }) => !data.draft);
  const posts = [...postEntries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    // `<title>` field in output xml
    title: 'keeler.dev',
    // `<description>` field in output xml
    description: "Keeler's posts about programming, hiking, and video games.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // Compute RSS link from post `slug`
      link: `/posts/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
