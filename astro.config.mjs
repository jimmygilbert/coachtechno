import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://coachtechno.com',
  integrations: [
    vue(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
