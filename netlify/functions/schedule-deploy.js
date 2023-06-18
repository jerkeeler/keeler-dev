import { schedule } from '@netlify/functions';
import fetch from 'node-fetch'

const BUILD_HOOK = process.env.BUILD_HOOK;

const buildHandler = async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  }).then((response) => {
    console.log("Complete! Go to Netlify to see the build being triggered.");
  });

  return {
    statusCode: 200,
  };
};

const handler = schedule('@hourly', buildHandler)

export { handler };
