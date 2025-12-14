/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#24d1f8',
          dark: '#1b96b4',
        },
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover'],
    margin: ['responsive', 'first', 'last'],
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
