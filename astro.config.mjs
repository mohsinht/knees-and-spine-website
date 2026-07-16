import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kneesandspine.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
});
