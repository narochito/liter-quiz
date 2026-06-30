import { TOTAL_QUESTIONS } from "@/data/questions";
import type { QuizQuestion, QuizResult } from "@/types/quiz";

export function calculateScore(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, string>
): QuizResult {
  const score = questions.reduce((acc, question) => {
    return selectedAnswers[question.id] === question.correctAnswerId
      ? acc + 1
      : acc;
  }, 0);

  const total = TOTAL_QUESTIONS;
  const percentage = Math.round((score / total) * 100);

  return {
    score,
    total,
    percentage,
    message: getScoreMessage(score),
  };
}

export function getScoreMessage(score: number): string {
  if (score <= 2) {
    return "Похоже, финансовая история русской литературы прошла мимо вас 🙂";
  }

  if (score <= 5) {
    return "Неплохо! Но русские классики ещё умеют удивлять.";
  }

  return "Отличный результат! Вы хорошо ориентируетесь в мире русской литературы.";
}
