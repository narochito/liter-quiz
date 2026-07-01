import { Button } from "@/components/ui/Button";
import { QuizImageBlock } from "@/components/quiz/QuizImageBlock";
import type { Quiz } from "@/types/quiz";

type QuizHeroProps = {
  quiz: Quiz;
  startHref: string;
};

export function QuizHero({ quiz, startHref }: QuizHeroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
      <div className="animate-fade-in-up grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div className="space-y-7 lg:py-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-ink-faint">
            Narochito Quiz
          </p>
          <h1 className="font-serif text-balance text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
            {quiz.title}
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
            {quiz.subtitle}
          </p>

          <div className="flex flex-col gap-5 sm:items-start">
            <Button href={startHref} size="large">
              Начать квиз
            </Button>
            <p className="text-sm text-ink-faint">
              {quiz.meta.questionCount} вопросов · {quiz.meta.estimatedMinutes}{" "}
              минуты · результатом можно поделиться
            </p>
          </div>
        </div>

        <div className="relative">
          <QuizImageBlock
            image={quiz.hero.desktop}
            priority
            className="hidden aspect-[4/5] sm:block lg:aspect-[4/5]"
            sizes="(min-width: 1024px) 520px, 50vw"
          />
          <QuizImageBlock
            image={quiz.hero.mobile}
            priority
            className="aspect-[4/5] sm:hidden"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
