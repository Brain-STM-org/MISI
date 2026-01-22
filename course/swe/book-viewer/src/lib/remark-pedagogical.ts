/**
 * Remark plugin to transform pedagogical directives into MDX components
 *
 * Transforms container directives into MDX JSX elements:
 *   :::concept{#id}        → <ConceptCard id="id" chapterSlug={slug}>
 *   :::question{#id}       → <QuestionBlock id="id" chapterSlug={slug}>
 *   :::checkpoint{#id}     → <Checkpoint id="id" chapterSlug={slug}>
 *   :::try                 → <TryBlock>
 *
 * Requires remark-directive to be run first to parse the :::syntax
 */

import { visit, SKIP } from 'unist-util-visit';
import type { Root, Paragraph, Text, List, ListItem } from 'mdast';
import type { Plugin } from 'unified';

// MDX JSX node types
interface MdxJsxAttribute {
  type: 'mdxJsxAttribute';
  name: string;
  value: string | { type: 'mdxJsxAttributeValueExpression'; value: string };
}

interface MdxJsxFlowElement {
  type: 'mdxJsxFlowElement';
  name: string;
  attributes: MdxJsxAttribute[];
  children: any[];
}

// Directive node from remark-directive
interface ContainerDirective {
  type: 'containerDirective';
  name: string;
  attributes?: Record<string, string>;
  children: any[];
}

interface LeafDirective {
  type: 'leafDirective';
  name: string;
  attributes?: Record<string, string>;
  children: any[];
}

type Directive = ContainerDirective | LeafDirective;

interface RemarkPedagogicalOptions {
  chapterSlug?: string;
}

function isContainerDirective(node: any): node is ContainerDirective {
  return node.type === 'containerDirective';
}

function isLeafDirective(node: any): node is LeafDirective {
  return node.type === 'leafDirective';
}

function isDirective(node: any): node is Directive {
  return isContainerDirective(node) || isLeafDirective(node);
}

/**
 * Create an MDX JSX attribute
 */
function attr(name: string, value: string): MdxJsxAttribute {
  return {
    type: 'mdxJsxAttribute',
    name,
    value,
  };
}

/**
 * Create an MDX JSX element
 */
function jsxElement(
  name: string,
  attributes: MdxJsxAttribute[],
  children: any[]
): MdxJsxFlowElement {
  return {
    type: 'mdxJsxFlowElement',
    name,
    attributes,
    children,
  };
}

/**
 * Extract text content from a list for checkpoint items
 */
function extractChecklistItems(children: any[]): string[] {
  const items: string[] = [];

  for (const child of children) {
    if (child.type === 'list') {
      for (const listItem of child.children || []) {
        if (listItem.type === 'listItem') {
          // Extract text from the list item
          const text = extractText(listItem);
          if (text) {
            items.push(text);
          }
        }
      }
    }
  }

  return items;
}

/**
 * Recursively extract text content from a node
 */
function extractText(node: any): string {
  if (node.type === 'text') {
    return node.value;
  }
  if (node.children) {
    return node.children.map(extractText).join('');
  }
  return '';
}

/**
 * Find and split children at a leaf directive
 */
function splitAtDirective(
  children: any[],
  directiveName: string
): { before: any[]; after: any[] } {
  const before: any[] = [];
  const after: any[] = [];
  let found = false;

  for (const child of children) {
    if (!found && isLeafDirective(child) && child.name === directiveName) {
      found = true;
      // The directive's children become the start of 'after'
      if (child.children && child.children.length > 0) {
        after.push(...child.children);
      }
    } else if (found) {
      after.push(child);
    } else {
      before.push(child);
    }
  }

  return { before, after };
}

let globalIndex = 0;

/**
 * Main remark plugin for pedagogical directives
 */
export const remarkPedagogical: Plugin<[RemarkPedagogicalOptions?], Root> = (
  options = {}
) => {
  const { chapterSlug = 'unknown' } = options;

  return (tree: Root) => {
    visit(tree, (node, index, parent) => {
      if (!isDirective(node) || index === undefined || !parent) return;

      const { name, attributes = {}, children } = node;
      const id = attributes.id || `${name}-${globalIndex++}`;

      let replacement: MdxJsxFlowElement | null = null;

      switch (name) {
        case 'concept': {
          replacement = jsxElement(
            'ConceptCard',
            [attr('id', id), attr('chapterSlug', chapterSlug)],
            children
          );
          break;
        }

        case 'question': {
          // Split at ::reveal to get question and answer
          const { before: questionContent, after: answerContent } =
            splitAtDirective(children, 'reveal');

          // Create wrapper divs for question and answer content
          const questionWrapper = jsxElement(
            'Fragment',
            [],
            questionContent.length > 0 ? questionContent : children
          );

          const answerWrapper = jsxElement('Fragment', [], answerContent);

          // QuestionBlock expects question and answer as JSX children
          // We'll use a data attribute approach
          replacement = jsxElement(
            'QuestionBlock',
            [attr('id', id), attr('chapterSlug', chapterSlug)],
            [
              jsxElement('div', [attr('slot', 'question')], questionContent.length > 0 ? questionContent : children),
              ...(answerContent.length > 0
                ? [jsxElement('div', [attr('slot', 'answer')], answerContent)]
                : []),
            ]
          );
          break;
        }

        case 'checkpoint': {
          // Extract checklist items
          const items = extractChecklistItems(children);

          // Pass items as JSON string attribute
          replacement = jsxElement(
            'Checkpoint',
            [
              attr('id', id),
              attr('chapterSlug', chapterSlug),
              attr('items', JSON.stringify(items)),
            ],
            []
          );
          break;
        }

        case 'try': {
          // Split at ::hint
          const { before: exerciseContent, after: hintContent } =
            splitAtDirective(children, 'hint');

          replacement = jsxElement(
            'TryBlock',
            hintContent.length > 0
              ? [attr('hasHint', 'true')]
              : [],
            [
              jsxElement('div', [attr('slot', 'exercise')], exerciseContent.length > 0 ? exerciseContent : children),
              ...(hintContent.length > 0
                ? [jsxElement('div', [attr('slot', 'hint')], hintContent)]
                : []),
            ]
          );
          break;
        }

        case 'callout': {
          const type = attributes.type || 'info';
          replacement = jsxElement(
            'Callout',
            [attr('type', type)],
            children
          );
          break;
        }

        case 'reveal':
        case 'hint':
          // These are handled by their parent directives
          // If encountered standalone, just render children
          replacement = jsxElement('div', [], children);
          break;

        default:
          // Unknown directive, skip
          return;
      }

      if (replacement) {
        (parent.children as any[])[index] = replacement;
        return SKIP;
      }
    });
  };
};

export default remarkPedagogical;
