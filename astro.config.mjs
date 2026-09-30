import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shaneou-link.github.io',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
