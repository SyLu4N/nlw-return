import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import { Loading } from './Loading';

interface ScreenshoatButtonProps {
  onScreenshotTook: (sreenshot: string | null) => void;
  screenshoat: string | null;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshoat,
}: ScreenshoatButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(
      document.querySelector('html') as HTMLElement,
    );
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshoat) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 roudend-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshoat})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}
