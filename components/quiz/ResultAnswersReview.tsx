import type { QuizAnswerReviewItem } from "@/types/quiz";

type ResultAnswersReviewProps = {
  items: QuizAnswerReviewItem[];
};

function StatusBadge({ isCorrect }: { isCorrect: boolean }) {
  if (isCorrect) {
    return (
      <span className="shrink-0 rounded-full bg-[#1a5c3a]/10 px-2.5 py-1 text-xs font-medium text-[#1a5c3a]">
        Верно
      </span>
    );
  }

  return (
    <span className="shrink-0 rounded-full bg-[#7a2e2e]/10 px-2.5 py-1 text-xs font-medium text-[#7a2e2e]">
      Ошибка
    </span>
  );
}

export function ResultAnswersReview({ items }: ResultAnswersReviewProps) {
  return (
    <section className="animate-fade-in-up mt-12 text-left">
      <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
        Ваши ответы
      </h3>
      <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-muted">
        Посмотрите, где вы угадали, а где классики вас перехитрили.
      </p>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.questionId}
            className={[
              "overflow-hidden rounded-2xl border bg-paper-elevated",
              item.isCorrect
                ? "border-[#1a5c3a]/15"
                : "border-[#7a2e2e]/15",
            ].join(" ")}
          >
            <div
              className={[
                "border-l-[3px] px-4 py-4 sm:px-5",
                item.isCorrect
                  ? "border-l-[#1a5c3a]/45"
                  : "border-l-[#7a2e2e]/40",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                    Вопрос {item.number}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink sm:text-base">
                    {item.title}
                  </p>
                </div>
                <StatusBadge isCorrect={item.isCorrect} />
              </div>

              <div className="mt-3 space-y-2 border-t border-line/70 pt-3 text-sm">
                <div>
                  <p className="text-xs text-ink-faint">Ваш ответ</p>
                  <p
                    className={[
                      "mt-0.5 leading-snug",
                      item.isCorrect
                        ? "font-medium text-[#1a5c3a]/80"
                        : "text-ink-muted line-through decoration-[#7a2e2e]/35",
                    ].join(" ")}
                  >
                    {item.selectedAnswerText}
                  </p>
                </div>

                {!item.isCorrect && (
                  <div>
                    <p className="text-xs text-ink-faint">Правильный ответ</p>
                    <p className="mt-0.5 font-medium leading-snug text-ink">
                      {item.correctAnswerText}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-xs text-ink-faint">Объяснение</p>
                  <p className="mt-0.5 leading-relaxed text-ink-muted">
                    {item.explanation}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-ink-faint">Источник</p>
                  <p className="mt-0.5 leading-relaxed text-ink-faint">
                    {item.source}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
