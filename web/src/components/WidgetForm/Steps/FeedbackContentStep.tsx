import { ArrowLeft } from 'phosphor-react';
import React from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button type="button">
          <ArrowLeft
            onClick={onFeedbackRestartRequested}
            weight="bold"
            className="w-4 h-4 top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent roundend-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          placeholder="Conte com detalhes oque está acontecendo..."
        ></textarea>
      </form>
    </>
  );
}
