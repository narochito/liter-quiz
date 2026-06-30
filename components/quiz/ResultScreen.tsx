import { Button } from "@/components/ui/Button";
import { PromoBlock } from "@/components/quiz/PromoBlock";
import type { QuizResult } from "@/types/quiz";

type ResultScreenProps = {
  result: QuizResult;
  onRestart: () => void;
};

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col px-6 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        <div className="animate-fade-in-up text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Результат
          </p>
          <div className="mt-6 flex items-baseline justify-center gap-2">
            <span className="text-6xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
              {result.score}
            </span>
            <span className="text-3xl font-medium text-neutral-400 sm:text-4xl">
              /{result.total}
            </span>
          </div>
          <p className="mt-3 text-2xl font-medium text-neutral-600">
            {result.percentage}%
          </p>
          <p className="mx-auto mt-6 max-w-md text-pretty text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {result.message}
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="secondary" onClick={onRestart}>
              Пройти ещё раз
            </Button>
          </div>
        </div>

        <PromoBlock />
      </div>
    </div>
  );
}
