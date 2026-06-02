import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://AL1N3WAJ.github.io',
  base: '/alinewaj',
  integrations: [tailwind()],
  output: 'static',
  prefetch: true
});
