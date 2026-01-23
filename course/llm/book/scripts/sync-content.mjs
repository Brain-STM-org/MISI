#!/usr/bin/env node
/**
 * Sync content from ../ (course/llm/) to src/content/chapters/
 *
 * This script:
 * 1. Reads markdown files from the LLM course folder
 * 2. Adds necessary frontmatter for Astro content collections
 * 3. Renames to .mdx for component support
 * 4. Writes to src/content/chapters/
 *
 * Run with: node scripts/sync-content.mjs
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { existsSync } from 'node:fs';

// Source is the LLM course folder (parent of this book project)
const BOOK_DIR = join(process.cwd(), '..');
const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'chapters');

// Chapter metadata for LLM Fundamentals
const chapterMeta = {
  '00': { title: 'What Is Machine Intelligence?', tier: 1, estimatedMinutes: 25 },
  '01': { title: 'How LLMs Work (Conceptually)', tier: 1, estimatedMinutes: 30 },
  '02': { title: 'The Capability Inflection Point', tier: 1, estimatedMinutes: 20 },
  '03': { title: 'Capabilities & Limitations', tier: 1, estimatedMinutes: 25 },
  '04': { title: 'Your First Conversation', tier: 1, estimatedMinutes: 35 },
  '05': { title: 'Reading AI-Generated Code', tier: 2, estimatedMinutes: 30 },
  '06': { title: 'Prompting Fundamentals', tier: 2, estimatedMinutes: 35 },
  '07': { title: 'Multi-Modal Models', tier: 2, estimatedMinutes: 25 },
  '08': { title: 'Reasoning Models', tier: 2, estimatedMinutes: 25 },
  '09': { title: 'Context & Memory', tier: 2, estimatedMinutes: 20 },
  '10': { title: 'Prompt Injection & AI Security', tier: 3, estimatedMinutes: 40 },
  '11': { title: 'Agentic Loops', tier: 3, estimatedMinutes: 30 },
  '12': { title: 'Developer Workflows', tier: 3, estimatedMinutes: 25 },
  '13': { title: 'The Human-AI Partnership', tier: 3, estimatedMinutes: 30 },
  '14': { title: 'Iterating with AI', tier: 3, estimatedMinutes: 25 },
  '15': { title: 'Bias & Fairness', tier: 4, estimatedMinutes: 30 },
  '16': { title: 'Privacy & Data', tier: 4, estimatedMinutes: 25 },
  '17': { title: 'The Future of Work', tier: 4, estimatedMinutes: 30 },
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
  console.log('Syncing content from ../ to src/content/chapters/...\n');

  // Ensure content directory exists
  if (!existsSync(CONTENT_DIR)) {
    await mkdir(CONTENT_DIR, { recursive: true });
    console.log('Created', CONTENT_DIR);
  }

  // Check if book directory exists
  if (!existsSync(BOOK_DIR)) {
    console.log('Warning: Book directory not found at', BOOK_DIR);
    console.log('Creating empty chapters directory');
    return;
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
