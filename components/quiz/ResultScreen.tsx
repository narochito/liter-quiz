"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PromoBlock } from "@/components/quiz/PromoBlock";
import { formatShareText } from "@/lib/quiz";
import type { Product } from "@/types/product";
import type { Quiz, QuizComputedResult } from "@/types/quiz";

type ResultScreenProps = {
  quiz: Quiz;
  result: QuizComputedResult;
  products: Product[];
  onRestart: () => void;
};

export function ResultScreen({
  quiz,
  result,
  products,
  onRestart,
}: ResultScreenProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const text = formatShareText(quiz, result);

    try {
      if (navigator.share) {
        await navigator.share({
          title: quiz.title,
          text,
        });
        return;
      }

      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // User cancelled share or clipboard failed silently.
    }
  }, [quiz, result]);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-faint">
          Результат
        </p>

        <div className="mt-6 flex items-end justify-center gap-2">
          <span className="font-serif text-7xl leading-none tracking-[-0.03em] text-ink sm:text-8xl">
            {result.score}
          </span>
          <span className="pb-2 text-3xl text-ink-faint sm:text-4xl">
            из {result.total}
          </span>
        </div>

        <p className="mt-4 text-2xl font-medium text-ink-muted">
          {result.percentage}%
        </p>

        <h2 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          {result.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
          {result.message}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={onRestart}>Пройти ещё раз</Button>
          {quiz.meta.shareable && (
            <Button variant="secondary" onClick={handleShare}>
              {copied ? "Скопировано" : "Поделиться"}
            </Button>
          )}
        </div>
      </div>

      <PromoBlock promo={quiz.promo} products={products} />
    </div>
  );
}
