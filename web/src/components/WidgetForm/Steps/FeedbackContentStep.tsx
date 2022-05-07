import { ArrowLeft } from 'phosphor-react';
import React, { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { api } from '../../../server/api';
import { CloseButton } from '../../CloseButton';
import { Loading } from '../Loading';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshoat] = useState<string | null>(null);

  const [comment, setComment] = useState('');
  const [isSendFeedback, setIsSendFeeback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    setIsSendFeeback(true);

    console.log(screenshot);
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendFeeback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft
            onClick={onFeedbackRestartRequested}
            weight="bold"
            className="w-4 h-4 top-5"
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

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes oque está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshoat={screenshot}
            onScreenshotTook={setScreenshoat}
          />

          <button
            disabled={!comment || isSendFeedback}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
