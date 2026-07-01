"use client";

import { useCallback, useMemo, useState } from "react";
import { QuizHero } from "@/components/quiz/QuizHero";
import { QuizScreen } from "@/components/quiz/QuizScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { calculateScore } from "@/lib/quiz";
import type { Product } from "@/types/product";
import type { Quiz, QuizAnswersMap, QuizPhase } from "@/types/quiz";

type QuizPlayerProps = {
  quiz: Quiz;
  products: Product[];
  initialPhase?: QuizPhase;
};

export function QuizPlayer({
  quiz,
  products,
  initialPhase = "landing",
}: QuizPlayerProps) {
  const [phase, setPhase] = useState<QuizPhase>(initialPhase);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswersMap>({});

  const result = useMemo(
    () => calculateScore(quiz, answers),
    [quiz, answers]
  );

  const startHref = `/quiz/${quiz.slug}?start=1`;

  const handleRestart = useCallback(() => {
    setPhase("quiz");
    setCurrentIndex(0);
    setAnswers({});
  }, []);

  const handleAnswer = useCallback((questionId: string, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  }, []);

  const handleBack = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleContinue = useCallback(() => {
    const currentQuestion = quiz.questions[currentIndex];
    if (!answers[currentQuestion.id]) return;

    if (currentIndex >= quiz.questions.length - 1) {
      setPhase("result");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }, [answers, currentIndex, quiz.questions]);

  if (phase === "landing") {
    return <QuizHero quiz={quiz} startHref={startHref} />;
  }

  if (phase === "result") {
    return (
      <ResultScreen
        quiz={quiz}
        result={result}
        answers={answers}
        products={products}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <QuizScreen
      quiz={quiz}
      currentIndex={currentIndex}
      answers={answers}
      onAnswer={handleAnswer}
      onBack={handleBack}
      onContinue={handleContinue}
      onRestart={handleRestart}
    />
  );
}
