"use client";

import { useCallback, useEffect, useState } from "react";
import { AnswerButton } from "@/components/quiz/AnswerButton";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import type { QuizQuestion } from "@/types/quiz";

const AUTO_ADVANCE_DELAY_MS = 650;

type QuizScreenProps = {
  questions: QuizQuestion[];
  currentIndex: number;
  onAnswer: (questionId: string, answerId: string) => void;
};

export function QuizScreen({
  questions,
  currentIndex,
  onAnswer,
}: QuizScreenProps) {
  const question = questions[currentIndex];
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(
    null
  );
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setSelectedAnswerId(null);
    setIsLocked(false);
  }, [currentIndex]);

  const handleSelect = useCallback(
    (answerId: string) => {
      if (isLocked) return;

      setSelectedAnswerId(answerId);
      setIsLocked(true);

      window.setTimeout(() => {
        onAnswer(question.id, answerId);
      }, AUTO_ADVANCE_DELAY_MS);
    },
    [isLocked, onAnswer, question.id]
  );

  return (
    <div className="flex min-h-[100dvh] flex-col px-6 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col">
        <ProgressBar current={currentIndex + 1} total={questions.length} />

        <div
          key={question.id}
          className="animate-fade-in-up mt-10 flex flex-1 flex-col sm:mt-14"
        >
          <h2 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
            {question.question}
          </h2>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4">
            {question.answers.map((answer, index) => (
              <AnswerButton
                key={answer.id}
                text={answer.text}
                index={index}
                selected={selectedAnswerId === answer.id}
                disabled={isLocked}
                onClick={() => handleSelect(answer.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
