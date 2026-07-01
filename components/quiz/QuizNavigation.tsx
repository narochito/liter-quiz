import { Button } from "@/components/ui/Button";

type QuizNavigationProps = {
  canGoBack: boolean;
  canContinue: boolean;
  isLastQuestion: boolean;
  onBack: () => void;
  onContinue: () => void;
  onRestart: () => void;
};

export function QuizNavigation({
  canGoBack,
  canContinue,
  isLastQuestion,
  onBack,
  onContinue,
  onRestart,
}: QuizNavigationProps) {
  return (
    <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="small"
          onClick={onBack}
          disabled={!canGoBack}
        >
          Назад
        </Button>
        <button
          type="button"
          onClick={onRestart}
          className="cursor-pointer px-2 py-2 text-sm text-ink-faint transition-colors hover:text-ink"
        >
          Заново
        </button>
      </div>

      <Button
        size="default"
        onClick={onContinue}
        disabled={!canContinue}
        className="w-full sm:w-auto sm:min-w-[160px]"
      >
        {isLastQuestion ? "Результат" : "Далее"}
      </Button>
    </div>
  );
}
