#!/usr/bin/env node
/**
 * Sync content from the book/ folder to src/content/chapters/
 *
 * This script:
 * 1. Reads markdown files from the current directory (book/)
 * 2. Adds necessary frontmatter for Astro content collections
 * 3. Renames to .mdx for component support
 * 4. Writes to src/content/chapters/
 *
 * Run with: node scripts/sync-content.mjs
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { existsSync } from 'node:fs';

// Source is the current book folder (markdown files are siblings to src/)
const BOOK_DIR = process.cwd();
const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'chapters');

// Chapter metadata for Mind-Body Fundamentals
const chapterMeta = {
  '00': { title: 'The Sustainable Developer', tier: 1, estimatedMinutes: 5 },
  '01': { title: 'Your Physical Setup', tier: 1, estimatedMinutes: 12 },
  '02': { title: 'The Breath as Tool', tier: 1, estimatedMinutes: 10 },
  '03': { title: 'Movement for the Mind', tier: 1, estimatedMinutes: 15 },
  '04': { title: 'Rhythm of Deep Work', tier: 1, estimatedMinutes: 12 },
  '05': { title: 'Presence in Collaboration', tier: 2, estimatedMinutes: 12 },
  '06': { title: "Facilitator's Guide", tier: 2, estimatedMinutes: 15 },
};

/**
 * Extract chapter number from filename
 */
function getChapterNumber(filename) {
  const match = filename.match(/^(\d{2})-/);
  return match ? match[1] : null;
}

/**
 * Generate frontmatter for a chapter
 */
function generateFrontmatter(chapterNum, originalContent) {
  const meta = chapterMeta[chapterNum] || {};

  // Check if content already has frontmatter
  const hasFrontmatter = originalContent.trimStart().startsWith('---');

  if (hasFrontmatter) {
    // Parse existing frontmatter and merge
    const match = originalContent.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
      return originalContent; // Keep existing frontmatter
    }
  }

  // Generate new frontmatter
  const frontmatter = `---
title: "${meta.title || 'Untitled'}"
tier: ${meta.tier || 1}
estimatedMinutes: ${meta.estimatedMinutes || 10}
---

`;

  return frontmatter + originalContent;
}

/**
 * Add MDX imports to the top of the file
 * Components are imported from the local wrapper components
 */
function addMdxImports(content) {
  const imports = `import { ConceptCard, QuestionBlock, Checkpoint, TryBlock, Callout } from '@repo/book-viewer/components';

`;

  // Insert after frontmatter
  const frontmatterEnd = content.indexOf('---', 4);
  if (frontmatterEnd !== -1) {
    const afterFrontmatter = frontmatterEnd + 4;
    return (
      content.slice(0, afterFrontmatter) +
      '\n' +
      imports +
      content.slice(afterFrontmatter)
    );
  }

  return imports + content;
}

async function syncContent() {
  console.log('Syncing content from book/ to src/content/chapters/...\n');

  // Ensure content directory exists
  if (!existsSync(CONTENT_DIR)) {
    await mkdir(CONTENT_DIR, { recursive: true });
    console.log('Created', CONTENT_DIR);
  }

  // Read book directory for markdown files
  const files = await readdir(BOOK_DIR);
  const mdFiles = files.filter(
    (f) => f.endsWith('.md') && !f.startsWith('README') && f.match(/^\d{2}-/)
  );

  console.log(`Found ${mdFiles.length} chapter files\n`);

  for (const file of mdFiles) {
    const chapterNum = getChapterNumber(file);
    if (!chapterNum) {
      console.log(`Skipping ${file} (no chapter number)`);
      continue;
    }

    // Read original content
    const srcPath = join(BOOK_DIR, file);
    let content = await readFile(srcPath, 'utf-8');

    // Add frontmatter if needed
    content = generateFrontmatter(chapterNum, content);

    // Add MDX imports
    content = addMdxImports(content);

    // Write as .mdx
    const destFilename = file.replace(/\.md$/, '.mdx');
    const destPath = join(CONTENT_DIR, destFilename);
    await writeFile(destPath, content);

    console.log(`✓ ${file} → ${destFilename}`);
  }

  console.log('\nSync complete!');
}

syncContent().catch(console.error);
