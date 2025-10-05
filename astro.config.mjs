// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/web_kesehatan/',
  vite: {
    build: {
      assetsInlineLimit: 0,
      copyPublicDir: true
    }
  }
});