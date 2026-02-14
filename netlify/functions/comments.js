import { parseCookies, serializeCookie, isSecure } from './utils/cookies.js';

const REPO = 'jerkeeler/keeler-dev';

export default async (req) => {
  if (req.method === 'GET') {
    return handleGet(req);
  }
  if (req.method === 'POST') {
    return handlePost(req);
  }
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
};

async function handleGet(req) {
  const url = new URL(req.url);
  const issueParam = url.searchParams.get('issue');

  if (!issueParam || !/^\d+$/.test(issueParam) || Number(issueParam) < 1) {
    return new Response(JSON.stringify({ error: "Missing or invalid 'issue' query parameter" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const issueNumber = Number(issueParam);

  try {
    const ghResponse = await fetch(`https://api.github.com/repos/${REPO}/issues/${issueNumber}/comments`, {
      headers: {
        Accept: 'application/vnd.github.html+json',
        'User-Agent': 'keeler-dev-comments',
      },
    });

    if (ghResponse.status === 404) {
      return jsonResponse({ comments: [], error: 'Issue not found' });
    }

    if (!ghResponse.ok) {
      return new Response(JSON.stringify({ error: 'GitHub API error' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await ghResponse.json();
    const comments = data.map((c) => ({
      id: c.id,
      author: {
        login: c.user?.login ?? 'ghost',
        avatarUrl: c.user?.avatar_url ?? '',
      },
      bodyHtml: c.body_html,
      createdAt: c.created_at,
    }));

    return jsonResponse({ comments });
  } catch {
    return new Response(JSON.stringify({ error: 'GitHub API error' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function handlePost(req) {
  let parsed;
  try {
    parsed = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { issueNumber, body } = parsed;

  if (!Number.isInteger(issueNumber) || issueNumber < 1 || typeof body !== 'string' || !body.trim()) {
    return new Response(
      JSON.stringify({
        error: 'issueNumber must be a positive integer and body must be a non-empty string',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  if (body.trim().length > 65536) {
    return new Response(JSON.stringify({ error: 'Comment body too long' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const cookies = parseCookies(req.headers.get('cookie'));
  const token = cookies.gh_token;

  if (!token) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const ghResponse = await fetch(`https://api.github.com/repos/${REPO}/issues/${issueNumber}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.html+json',
        'User-Agent': 'keeler-dev-comments',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body }),
    });

    if (ghResponse.status === 401 || ghResponse.status === 403) {
      const secure = isSecure(process.env.SITE_URL);
      const clearToken = serializeCookie('gh_token', '', {
        httpOnly: true,
        sameSite: 'Lax',
        path: '/',
        maxAge: 0,
        secure,
      });
      const clearUser = serializeCookie('gh_user', '', {
        sameSite: 'Lax',
        path: '/',
        maxAge: 0,
        secure,
      });
      return new Response(JSON.stringify({ error: 'Session expired' }), {
        status: 401,
        headers: [
          ['Content-Type', 'application/json'],
          ['Set-Cookie', clearToken],
          ['Set-Cookie', clearUser],
        ],
      });
    }

    if (ghResponse.status === 404) {
      return new Response(JSON.stringify({ error: 'Issue not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (ghResponse.status !== 201) {
      return new Response(JSON.stringify({ error: 'Failed to post comment' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const c = await ghResponse.json();
    return new Response(
      JSON.stringify({
        id: c.id,
        author: {
          login: c.user?.login ?? 'ghost',
          avatarUrl: c.user?.avatar_url ?? '',
        },
        bodyHtml: c.body_html,
        createdAt: c.created_at,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to post comment' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function jsonResponse(body) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
    },
  });
}

export const config = { path: '/api/comments' };
