import { getStore } from '@netlify/blobs';
import type { Context } from '@netlify/functions';
import validSlugs from './valid-slugs.json' with { type: 'json' };

export default async (request: Request, _context: Context) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return new Response(JSON.stringify({ error: 'slug parameter is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!validSlugs.includes(slug)) {
    return new Response(JSON.stringify({ error: 'Invalid slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const store = getStore({ name: 'likes', consistency: 'eventual' });
    const data = (await store.get(`count:${slug}`, { type: 'json' })) as { count: number } | null;

    return new Response(JSON.stringify({ likes: data?.count ?? 0 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch likes' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
