import { parseCookies, serializeCookie, isSecure } from './utils/cookies.js';

export default async (req) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const siteUrl = process.env.SITE_URL;
  const secure = isSecure(siteUrl);

  const cookies = parseCookies(req.headers.get('cookie'));
  const savedState = cookies.gh_oauth_state;

  const clearStateCookie = serializeCookie('gh_oauth_state', '', {
    httpOnly: true,
    sameSite: 'Lax',
    path: '/',
    maxAge: 0,
    secure,
  });

  let redirectUrl = '/';
  try {
    redirectUrl = atob(state).split(':').slice(1).join(':') || '/';
  } catch {
    // invalid state encoding, fall back to /
  }

  if (!redirectUrl.startsWith('/') || redirectUrl.startsWith('//')) {
    redirectUrl = '/';
  }

  if (!state || !savedState || state !== savedState) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
        'Set-Cookie': clearStateCookie,
      },
    });
  }

  if (!code) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${redirectUrl}${redirectUrl.includes('?') ? '&' : '?'}auth_error=1`,
        'Set-Cookie': clearStateCookie,
      },
    });
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${redirectUrl}${redirectUrl.includes('?') ? '&' : '?'}auth_error=1`,
          'Set-Cookie': clearStateCookie,
        },
      });
    }

    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'User-Agent': 'keeler-dev-comments',
      },
    });

    if (!userRes.ok) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${redirectUrl}${redirectUrl.includes('?') ? '&' : '?'}auth_error=1`,
          'Set-Cookie': clearStateCookie,
        },
      });
    }

    const user = await userRes.json();

    const tokenCookie = serializeCookie('gh_token', tokenData.access_token, {
      httpOnly: true,
      sameSite: 'Lax',
      path: '/',
      maxAge: 604800,
      secure,
    });

    const userCookie = serializeCookie(
      'gh_user',
      encodeURIComponent(JSON.stringify({ login: user.login, avatarUrl: user.avatar_url })),
      {
        sameSite: 'Lax',
        path: '/',
        maxAge: 604800,
        secure,
      }
    );

    return new Response(null, {
      status: 302,
      headers: [
        ['Location', redirectUrl],
        ['Set-Cookie', clearStateCookie],
        ['Set-Cookie', tokenCookie],
        ['Set-Cookie', userCookie],
      ],
    });
  } catch {
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${redirectUrl}${redirectUrl.includes('?') ? '&' : '?'}auth_error=1`,
        'Set-Cookie': clearStateCookie,
      },
    });
  }
};

export const config = { path: '/api/auth/callback' };
