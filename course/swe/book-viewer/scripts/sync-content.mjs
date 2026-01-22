#!/usr/bin/env node
/**
 * Sync content from ../book/ to src/content/chapters/
 *
 * This script:
 * 1. Reads markdown files from the book folder
 * 2. Adds necessary frontmatter for Astro content collections
 * 3. Renames to .mdx for component support
 * 4. Writes to src/content/chapters/
 *
 * Run with: node scripts/sync-content.mjs
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { existsSync } from 'node:fs';

const BOOK_DIR = join(process.cwd(), '..', 'book');
const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'chapters');

// Chapter metadata (matches src/lib/chapters.ts)
const chapterMeta = {
  '00': { title: 'Your Development Environment', tier: 1, estimatedMinutes: 20 },
  '01': { title: 'What is Source Code?', tier: 1, estimatedMinutes: 20 },
  '02': { title: 'GitHub Setup Guide', tier: 1, estimatedMinutes: 30 },
  '03': { title: 'Understanding Diffs', tier: 1, estimatedMinutes: 25 },
  '04': { title: 'Your First Commit', tier: 1, estimatedMinutes: 30 },
  '05': { title: 'Branches and Merging', tier: 2, estimatedMinutes: 30 },
  '06': { title: 'Pull Requests', tier: 2, estimatedMinutes: 30 },
  '07': { title: 'Testing Fundamentals', tier: 2, estimatedMinutes: 25 },
  '08': { title: 'Debugging Techniques', tier: 2, estimatedMinutes: 25 },
  '09': { title: 'Dependencies & Packages', tier: 2, estimatedMinutes: 20 },
  '10': { title: 'Build Pipelines', tier: 3, estimatedMinutes: 20 },
  '11': { title: 'O11y: Understanding Your Code', tier: 3, estimatedMinutes: 25 },
  '12': { title: 'Iterative Design', tier: 3, estimatedMinutes: 20 },
  '13': { title: 'Timeless Principles', tier: 3, estimatedMinutes: 25 },
  '14': { title: 'Communication', tier: 3, estimatedMinutes: 20 },
  '15': { title: 'Ethics in Software', tier: 3, estimatedMinutes: 45 },
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
estimatedMinutes: ${meta.estimatedMinutes || 20}
---

`;

  return frontmatter + originalContent;
}

/**
 * Add MDX imports to the top of the file
 */
function addMdxImports(content) {
  const imports = `import ConceptCard from '../../components/ConceptCard';
import QuestionBlock from '../../components/QuestionBlock';
import Checkpoint from '../../components/Checkpoint';
import TryBlock from '../../components/TryBlock';
import Callout from '../../components/Callout';

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
  console.log('Syncing content from book/ to content/chapters/...\n');

  // Ensure content directory exists
  if (!existsSync(CONTENT_DIR)) {
    await mkdir(CONTENT_DIR, { recursive: true });
    console.log('Created', CONTENT_DIR);
  }

  // Read book directory
  const files = await readdir(BOOK_DIR);
  const mdFiles = files.filter(
    (f) => f.endsWith('.md') && !f.startsWith('README')
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
