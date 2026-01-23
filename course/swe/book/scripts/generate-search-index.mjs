#!/usr/bin/env node
/**
 * Generate search index from chapter content
 * Run as part of the build process
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHAPTERS_DIR = join(__dirname, '../src/content/chapters');
const OUTPUT_FILE = join(__dirname, '../public/search-index.json');

/**
 * Strip MDX/markdown syntax to get plain text
 */
function stripMarkdown(content) {
  return content
    // Remove frontmatter
    .replace(/^---[\s\S]*?---\n/, '')
    // Remove import statements
    .replace(/^import .+$/gm, '')
    // Remove JSX components (keep text content)
    .replace(/<[^>]+>/g, ' ')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, ' ')
    // Remove inline code
    .replace(/`[^`]+`/g, ' ')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    // Remove headers markers but keep text
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove blockquotes
    .replace(/^>\s*/gm, '')
    // Remove horizontal rules
    .replace(/^---+$/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Normalize whitespace
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract headings from markdown content
 */
function extractHeadings(content) {
  const headings = [];
  const lines = content.split('\n');
  let currentHeading = null;
  let currentContent = [];

  for (const line of lines) {
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);

    if (headingMatch) {
      // Save previous heading's content
      if (currentHeading) {
        headings.push({
          ...currentHeading,
          content: stripMarkdown(currentContent.join('\n')),
        });
      }

      // Start new heading
      const text = headingMatch[2].trim();
      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      currentHeading = { slug, text };
      currentContent = [];
    } else if (currentHeading) {
      currentContent.push(line);
    }
  }

  // Don't forget the last heading
  if (currentHeading) {
    headings.push({
      ...currentHeading,
      content: stripMarkdown(currentContent.join('\n')),
    });
  }

  return headings;
}

/**
 * Extract chapter number from filename
 */
function getChapterNumber(filename) {
  const match = filename.match(/^(\d+)-/);
  return match ? match[1] : '00';
}

async function main() {
  console.log('Generating search index...');

  // Ensure output directory exists
  await mkdir(dirname(OUTPUT_FILE), { recursive: true });

  // Read all chapter files
  let files;
  try {
    files = await readdir(CHAPTERS_DIR);
  } catch (err) {
    console.log('No chapters directory found, creating empty search index');
    await writeFile(OUTPUT_FILE, JSON.stringify({ chapters: [] }, null, 2));
    return;
  }

  const mdxFiles = files.filter(f => f.endsWith('.mdx'));
  const chapters = [];

  for (const file of mdxFiles) {
    const filepath = join(CHAPTERS_DIR, file);
    const content = await readFile(filepath, 'utf-8');

    // Extract frontmatter title
    const titleMatch = content.match(/^---[\s\S]*?title:\s*["']?([^"'\n]+)["']?[\s\S]*?---/);
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.mdx', '');

    const slug = file.replace('.mdx', '');
    const chapterNum = getChapterNumber(file);
    const plainContent = stripMarkdown(content);
    const headings = extractHeadings(content);

    chapters.push({
      slug,
      title,
      chapter: `Ch. ${chapterNum}`,
      content: plainContent.slice(0, 5000), // Limit content size
      headings: headings.slice(0, 20), // Limit headings
    });
  }

  // Sort by chapter number
  chapters.sort((a, b) => {
    const numA = parseInt(getChapterNumber(a.slug));
    const numB = parseInt(getChapterNumber(b.slug));
    return numA - numB;
  });

  const index = { chapters };
  await writeFile(OUTPUT_FILE, JSON.stringify(index, null, 2));

  console.log(`Search index generated: ${chapters.length} chapters indexed`);
}

main().catch(console.error);
