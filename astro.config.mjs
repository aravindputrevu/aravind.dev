import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aravind.dev',
  integrations: [
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'nord',
      wrap: true
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
