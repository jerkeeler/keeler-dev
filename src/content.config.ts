import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The glob loader uses each post's frontmatter `slug` as its id, falling back to the filename.
const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.optional(z.boolean()),
    tags: z.array(z.string()),
    issueNumber: z.optional(z.number()),
  }),
});

export const collections = {
  posts: postsCollection,
};
