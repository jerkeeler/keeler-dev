import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://keeler.dev',
  integrations: [
    sitemap(),
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
