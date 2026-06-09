import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site for GitHub Pages project page:
//   https://aakarshsingh.github.io/tanya-portfolio/
// If the repo is named differently (or a custom domain is used), update
// `site` and `base` to match — `base` must be the repo name for project pages.
export default defineConfig({
  site: 'https://aakarshsingh.github.io',
  base: '/tanya-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
