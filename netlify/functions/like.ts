import { getStore } from '@netlify/blobs';
import { createHash } from 'node:crypto';
import type { Context } from '@netlify/functions';
import validSlugs from './valid-slugs.json' with { type: 'json' };

const STORE_NAME = 'likes';
const MAX_LIKES_PER_IP = 10;

export default async (request: Request, context: Context) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let slug: string;
  try {
    const body = await request.json();
    slug = body.slug;
  } catch {
    return new Response(JSON.stringify({ error: 'slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!slug) {
    return new Response(JSON.stringify({ error: 'slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!validSlugs.includes(slug)) {
    console.warn(`Invalid slug requested: "${slug}"`);
    return new Response(JSON.stringify({ error: 'Invalid slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const hashedIp = createHash('sha256')
    .update(context.ip ?? 'unknown')
    .digest('hex');
  const store = getStore({ name: STORE_NAME, consistency: 'strong' });

  try {
    const ipData = (await store.get(`ip:${slug}:${hashedIp}`, { type: 'json' })) as { count: number } | null;
    const currentIpLikes = ipData?.count ?? 0;

    if (currentIpLikes >= MAX_LIKES_PER_IP) {
      console.log(`Rate limit hit for slug="${slug}"`);

      const totalData = (await store.get(`count:${slug}`, { type: 'json' })) as { count: number } | null;
      return new Response(
        JSON.stringify({ error: 'Like limit reached', likes: totalData?.count ?? 0, userLikes: MAX_LIKES_PER_IP }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    let newTotal: number | undefined;

    for (let attempt = 0; attempt < 3; attempt++) {
      const result = await store.getWithMetadata(`count:${slug}`, { type: 'json' });

      if (result === null) {
        const createResult = await store.setJSON(`count:${slug}`, { count: 1 }, { onlyIfNew: true });
        if (createResult.modified) {
          newTotal = 1;
          break;
        }
        continue;
      }

      newTotal = result.data.count + 1;
      const writeResult = await store.setJSON(`count:${slug}`, { count: newTotal }, { onlyIfMatch: result.etag });

      if (writeResult.modified) {
        break;
      }

      // ETag conflict, retry
      newTotal = undefined;
    }

    if (newTotal === undefined) {
      return new Response(JSON.stringify({ error: 'Failed to save like, please try again' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await store.setJSON(`ip:${slug}:${hashedIp}`, { count: currentIpLikes + 1 });

    console.log(`Like recorded for slug="${slug}" total=${newTotal}`);

    return new Response(JSON.stringify({ likes: newTotal, userLikes: currentIpLikes + 1 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(`Failed to save like for slug="${slug}"`, err);
    return new Response(JSON.stringify({ error: 'Failed to save like, please try again' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
