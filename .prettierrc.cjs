module.exports = {
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
