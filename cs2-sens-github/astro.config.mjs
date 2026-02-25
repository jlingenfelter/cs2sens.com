import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cs2sens.com',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
