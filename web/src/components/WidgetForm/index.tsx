import React, { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pesamentos',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback(): void {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-700">
        Feito com ❤ por{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/sylu4n"
        >
          Luan Simões
        </a>
      </footer>
    </div>
  );
}