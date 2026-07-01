"use client";

import { useEffect, useState } from "react";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { QuizNavigation } from "@/components/quiz/QuizNavigation";
import type { Quiz, QuizAnswersMap } from "@/types/quiz";

type QuizScreenProps = {
  quiz: Quiz;
  currentIndex: number;
  answers: QuizAnswersMap;
  onAnswer: (questionId: string, answerId: string) => void;
  onBack: () => void;
  onContinue: () => void;
  onRestart: () => void;
};

export function QuizScreen({
  quiz,
  currentIndex,
  answers,
  onAnswer,
  onBack,
  onContinue,
  onRestart,
}: QuizScreenProps) {
  const question = quiz.questions[currentIndex];
  const savedAnswer = answers[question.id] ?? null;
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(
    savedAnswer
  );

  useEffect(() => {
    setSelectedAnswerId(savedAnswer);
  }, [question.id, savedAnswer]);

  const handleSelect = (answerId: string) => {
    setSelectedAnswerId(answerId);
    onAnswer(question.id, answerId);
  };

  const isLastQuestion = currentIndex === quiz.questions.length - 1;

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] w-full max-w-3xl flex-col px-5 py-8 sm:px-8 sm:py-12">
      <ProgressBar current={currentIndex + 1} total={quiz.questions.length} />

      <div key={question.id} className="mt-8 flex flex-1 flex-col sm:mt-10">
        <QuestionCard
          question={question}
          selectedAnswerId={selectedAnswerId}
          isLocked={false}
          onSelect={handleSelect}
        />

        <div className="mt-auto pt-10">
          <QuizNavigation
            canGoBack={currentIndex > 0}
            canContinue={Boolean(selectedAnswerId)}
            isLastQuestion={isLastQuestion}
            onBack={onBack}
            onContinue={onContinue}
            onRestart={onRestart}
          />
        </div>
      </div>
    </div>
  );
}
