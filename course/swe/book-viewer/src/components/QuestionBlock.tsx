/**
 * QuestionBlock - Interactive reflection questions with reveal
 *
 * Pedagogical basis: Active recall (Roediger & Karpicke)
 * Testing yourself is more effective than re-reading
 * Desirable difficulty: hiding the answer creates beneficial struggle
 *
 * Usage in MDX:
 * <QuestionBlock id="q1" chapterSlug="00-your-development-environment">
 *   <div slot="question">What is the terminal?</div>
 *   <div slot="answer">A text-based interface for interacting with your computer.</div>
 * </QuestionBlock>
 */

import { useState, useEffect, type ReactNode, Children, isValidElement } from 'react';
import { useStore } from '@nanostores/react';
import { progressStore, revealQuestion } from '../lib/progress';

interface QuestionBlockProps {
  id: string;
  chapterSlug: string;
  children?: ReactNode;
  // Alternative: pass question and answer as props
  question?: ReactNode;
  answer?: ReactNode;
}

/**
 * Extract slotted content from children
 */
function extractSlots(children: ReactNode): { question: ReactNode; answer: ReactNode } {
  let question: ReactNode = null;
  let answer: ReactNode = null;
  const otherChildren: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const slot = child.props?.slot;
      if (slot === 'question') {
        question = child.props.children || child;
      } else if (slot === 'answer') {
        answer = child.props.children || child;
      } else {
        otherChildren.push(child);
      }
    } else {
      otherChildren.push(child);
    }
  });

  // If no slots found, treat all children as the question
  if (!question && otherChildren.length > 0) {
    question = otherChildren;
  }

  return { question, answer };
}

export function QuestionBlock({
  id,
  chapterSlug,
  children,
  question: questionProp,
  answer: answerProp,
}: QuestionBlockProps) {
  const progress = useStore(progressStore);
  const [isRevealed, setIsRevealed] = useState(false);

  // Extract question and answer from children or props
  const { question: slotQuestion, answer: slotAnswer } = extractSlots(children);
  const question = questionProp || slotQuestion;
  const answer = answerProp || slotAnswer;

  // Check if already revealed in a previous session
  useEffect(() => {
    const revealed = progress.chapters[chapterSlug]?.questionsRevealed || [];
    setIsRevealed(revealed.includes(id));
  }, [progress, chapterSlug, id]);

  const handleReveal = () => {
    setIsRevealed(true);
    revealQuestion(chapterSlug, id);
  };

  return (
    <div className="my-6 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Reflection Question</span>
        </div>

        <div className="text-gray-800 dark:text-gray-200 mb-4 prose prose-sm dark:prose-invert max-w-none">
          {question}
        </div>

        {answer && (
          <>
            {!isRevealed ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Take a moment to think about your answer before revealing...
                </p>
                <button
                  onClick={handleReveal}
                  className="px-4 py-2 bg-amber-100 dark:bg-amber-800/50 text-amber-700 dark:text-amber-300 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-700/50 transition-colors text-sm font-medium"
                >
                  Reveal Answer
                </button>
              </div>
            ) : (
              <div className="pt-3 border-t border-amber-200 dark:border-amber-700/50">
                <div className="text-sm text-amber-600 dark:text-amber-400 mb-2 font-medium">Answer:</div>
                <div className="text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none">
                  {answer}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionBlock;
