import { CURRENT_QUIZ_SLUG, QUIZZES } from "@/data/quizzes";
import type { Quiz } from "@/types/quiz";

export function getAllQuizzes(): Quiz[] {
  return QUIZZES;
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return QUIZZES.find((quiz) => quiz.slug === slug);
}

export function getFeaturedQuiz(): Quiz {
  const featured = getQuizBySlug(CURRENT_QUIZ_SLUG);

  if (!featured) {
    throw new Error(`Featured quiz "${CURRENT_QUIZ_SLUG}" not found in data/quizzes.ts`);
  }

  return featured;
}

export function getAllQuizSlugs(): string[] {
  return QUIZZES.map((quiz) => quiz.slug);
}
