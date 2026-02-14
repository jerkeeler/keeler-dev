import { serializeCookie, isSecure } from './utils/cookies.js';

export default async (req) => {
  const referer = req.headers.get('referer') || '/';
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

  return new Response(null, {
    status: 302,
    headers: [
      ['Location', referer],
      ['Set-Cookie', clearToken],
      ['Set-Cookie', clearUser],
    ],
  });
};

export const config = { path: '/api/auth/logout' };
