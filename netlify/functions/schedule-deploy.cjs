const { schedule } = require('@netlify/functions');

const BUILD_HOOK = process.env.BUILD_HOOK;

const buildHandler = async () => {
  const response = await fetch(BUILD_HOOK, { method: 'POST' });
  if (!response.ok) {
    console.error(`Build hook returned ${response.status}`);
    return { statusCode: 502 };
  }

  console.log('Complete! Go to Netlify to see the build being triggered.');
  return { statusCode: 200 };
};

exports.handler = schedule('@monthly', buildHandler);
