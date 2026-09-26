import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yaditio.github.io',
  base: '/Yaditio-Website',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
