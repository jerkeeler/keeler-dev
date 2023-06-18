import fetch from 'node-fetch'

const BUILD_HOOK = process.env.BUILD_HOOK;

const handler = async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  }).then((response) => {
    console.log('Build hook response:', response.json());
  });

  return {
    statusCode: 200,
  };
};

export { handler };
