import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkDirective from 'remark-directive';
import { remarkPedagogical } from './src/lib/remark-pedagogical';
import { rehypeToc } from './src/lib/rehype-toc';

export default defineConfig({
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
      // Note: chapterSlug will be injected per-file in the content collection
      [remarkPedagogical, { chapterSlug: 'default' }],
    ],
    // Rehype plugins run on HTML AST
    rehypePlugins: [
      // Extract TOC from headings
      [rehypeToc, { minDepth: 2, maxDepth: 3 }],
    ],
  },
  // For GitHub Pages deployment
  // site: 'https://yourusername.github.io',
  // base: '/senior_internship',
});
