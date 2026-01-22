/**
 * Rehype plugin to extract table of contents from headings
 *
 * Extracts h2 and h3 headings, generates slugs, and adds id attributes.
 * Exposes TOC data via vfile.data.toc
 */

import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';
import GithubSlugger from 'github-slugger';
import type { Root, Element } from 'hast';
import type { Plugin } from 'unified';
import type { VFile } from 'vfile';

export interface TocEntry {
  depth: number;
  text: string;
  slug: string;
}

export interface TocData {
  toc: TocEntry[];
}

/**
 * Check if a node is an element
 */
function isElement(node: any): node is Element {
  return node.type === 'element';
}

/**
 * Check if element is a heading (h1-h6)
 */
function isHeading(node: Element): boolean {
  return /^h[1-6]$/.test(node.tagName);
}

/**
 * Get heading depth from tag name
 */
function getHeadingDepth(tagName: string): number {
  return parseInt(tagName.charAt(1), 10);
}

export interface RehypeTocOptions {
  /** Minimum heading level to include (default: 2) */
  minDepth?: number;
  /** Maximum heading level to include (default: 3) */
  maxDepth?: number;
}

/**
 * Rehype plugin to extract TOC and add heading IDs
 */
export const rehypeToc: Plugin<[RehypeTocOptions?], Root> = (options = {}) => {
  const { minDepth = 2, maxDepth = 3 } = options;

  return (tree: Root, file: VFile) => {
    const slugger = new GithubSlugger();
    const toc: TocEntry[] = [];

    visit(tree, 'element', (node: Element) => {
      if (!isHeading(node)) return;

      const depth = getHeadingDepth(node.tagName);

      // Skip headings outside our range
      if (depth < minDepth || depth > maxDepth) return;

      // Extract text content
      const text = toString(node).trim();
      if (!text) return;

      // Generate slug
      const slug = slugger.slug(text);

      // Add id attribute to the heading
      node.properties = node.properties || {};
      node.properties.id = slug;

      // Add anchor link class for styling
      node.properties.className = [
        ...(Array.isArray(node.properties.className)
          ? node.properties.className
          : []),
        'heading-anchor',
      ];

      // Add to TOC
      toc.push({ depth, text, slug });
    });

    // Attach TOC data to the file
    file.data.toc = toc;
  };
};

export default rehypeToc;
