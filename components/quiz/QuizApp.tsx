"use client";

import { useCallback, useMemo, useState } from "react";
import { QUIZ_QUESTIONS } from "@/data/questions";
import { calculateScore } from "@/lib/quiz";
import { LandingPage } from "@/components/quiz/LandingPage";
import { QuizScreen } from "@/components/quiz/QuizScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import type { QuizPhase } from "@/types/quiz";

export function QuizApp() {
  const [phase, setPhase] = useState<QuizPhase>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  const result = useMemo(
    () => calculateScore(QUIZ_QUESTIONS, selectedAnswers),
    [selectedAnswers]
  );

  const handleStart = useCallback(() => {
    setPhase("quiz");
    setCurrentIndex(0);
    setSelectedAnswers({});
  }, []);

  const handleAnswer = useCallback(
    (questionId: string, answerId: string) => {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answerId,
      }));

      const isLastQuestion = currentIndex >= QUIZ_QUESTIONS.length - 1;

      if (isLastQuestion) {
        setPhase("result");
        return;
      }

      setCurrentIndex((prev) => prev + 1);
    },
    [currentIndex]
  );

  const handleRestart = useCallback(() => {
    setPhase("landing");
    setCurrentIndex(0);
    setSelectedAnswers({});
  }, []);

  if (phase === "landing") {
    return <LandingPage onStart={handleStart} />;
  }

  if (phase === "result") {
    return <ResultScreen result={result} onRestart={handleRestart} />;
  }

  return (
    <QuizScreen
      questions={QUIZ_QUESTIONS}
      currentIndex={currentIndex}
      onAnswer={handleAnswer}
    />
  );
}
