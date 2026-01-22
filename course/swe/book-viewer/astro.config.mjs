import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    mdx(),
    react(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // Base path for GitHub Pages deployment
  // Uncomment and adjust if deploying to a subdirectory
  // base: '/senior_internship',
});
