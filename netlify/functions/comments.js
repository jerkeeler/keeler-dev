const REPO = 'jerkeeler/keeler-dev';

export default async (req) => {
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
};

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
