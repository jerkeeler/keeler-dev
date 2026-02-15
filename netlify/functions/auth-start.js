/**
 * GitHub OAuth - Start (via GitHub App user authorization)
 *
 * SETUP REQUIRED:
 * 1. Create a GitHub App: GitHub Settings → Developer settings → GitHub Apps → New
 *    - App name: "keeler.dev Comments" (or any name)
 *    - Callback URL: https://keeler.dev/api/auth/callback
 *    - Permissions: Issues → Read & Write
 *    - Webhook: uncheck Active
 *    - Install on only jerkeeler/keeler-dev
 * 2. Set Netlify environment variables:
 *    - GITHUB_CLIENT_ID: from the GitHub App
 *    - GITHUB_CLIENT_SECRET: from the GitHub App (generate a client secret)
 *    - SITE_URL: https://keeler.dev
 */
import { serializeCookie, isSecure } from './utils/cookies.js';

export default async (req) => {
  const url = new URL(req.url);
  const redirect = url.searchParams.get('redirect') || '/';
  const siteUrl = process.env.SITE_URL;
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!siteUrl || !clientId) {
    console.error('OAuth start failed: missing SITE_URL or GITHUB_CLIENT_ID env vars');
    return new Response('Server configuration error', { status: 500 });
  }

  const uuid = crypto.randomUUID();
  const state = btoa(`${uuid}:${redirect}`);

  const stateCookie = serializeCookie('gh_oauth_state', state, {
    httpOnly: true,
    sameSite: 'Lax',
    path: '/',
    maxAge: 900,
    secure: isSecure(siteUrl),
  });

  const githubUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(`${siteUrl}/api/auth/callback`)}` +
    `&state=${encodeURIComponent(state)}`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubUrl,
      'Set-Cookie': stateCookie,
    },
  });
};

export const config = { path: '/api/auth/start' };
