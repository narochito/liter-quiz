import { QuizImageBlock } from "@/components/quiz/QuizImageBlock";
import { AnswerOption } from "@/components/quiz/AnswerOption";
import type { QuizQuestion } from "@/types/quiz";

type QuestionCardProps = {
  question: QuizQuestion;
  selectedAnswerId: string | null;
  isLocked: boolean;
  onSelect: (answerId: string) => void;
};

export function QuestionCard({
  question,
  selectedAnswerId,
  isLocked,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="animate-fade-in-up space-y-8">
      {question.image && (
        <QuizImageBlock
          image={question.image}
          className="aspect-[16/10]"
          sizes="(min-width: 768px) 640px, 100vw"
        />
      )}

      <div className="space-y-4">
        <h2 className="font-serif text-balance text-3xl leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          {question.title}
        </h2>
        {question.description && (
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            {question.description}
          </p>
        )}
      </div>

      <div className="grid gap-3 sm:gap-4">
        {question.answers.map((answer, index) => (
          <AnswerOption
            key={answer.id}
            text={answer.text}
            index={index}
            selected={selectedAnswerId === answer.id}
            disabled={isLocked}
            onClick={() => onSelect(answer.id)}
          />
        ))}
      </div>
    </div>
  );
}
