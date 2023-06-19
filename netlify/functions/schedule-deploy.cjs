const { schedule } = require('@netlify/functions');
const fetch = require('node-fetch');

const BUILD_HOOK = process.env.BUILD_HOOK;

const buildHandler = async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  }).then((response) => {
    console.log('Complete! Go to Netlify to see the build being triggered.');
  });

  return {
    statusCode: 200,
  };
};

exports.handler = schedule('@monthly', buildHandler);
