import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkDirective from 'remark-directive';
import { remarkPedagogical, rehypeToc } from '@repo/book-viewer/lib';

// GitHub Pages configuration
// Set via environment variables or defaults for local development
const site = process.env.SITE_URL || 'https://brain-stm-org.github.io';
const base = process.env.BASE_PATH || '/MISI/course/llm/book';

export default defineConfig({
  site,
  base,
  integrations: [
    mdx(),
    react(),
    tailwind(),
  ],
  markdown: {
    // Syntax highlighting with Shiki
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    // Remark plugins run on markdown AST
    remarkPlugins: [
      // First: parse :::directive syntax
      remarkDirective,
      // Then: transform directives to components
      [remarkPedagogical, { chapterSlug: 'default' }],
    ],
    // Rehype plugins run on HTML AST
    rehypePlugins: [
      // Extract TOC from headings
      [rehypeToc, { minDepth: 2, maxDepth: 3 }],
    ],
  },
  // Build output for static hosting
  output: 'static',
});
