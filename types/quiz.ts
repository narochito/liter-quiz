export type QuizImage = {
  src: string;
  alt: string;
};

export type QuizAnswer = {
  id: string;
  text: string;
};

/**
 * Optional question.image supports visual storytelling:
 * author portraits, book covers, historical objects, old banknotes,
 * product-like scenes — makes questions more engaging and shareable.
 */
export type QuizQuestion = {
  id: string;
  title: string;
  description?: string;
  image?: QuizImage;
  answers: QuizAnswer[];
  correctAnswerId: string;
};

export type QuizResultTier = {
  minScore: number;
  maxScore: number;
  title: string;
  message: string;
};

export type QuizPromo = {
  title: string;
  text: string;
  ctaText: string;
  ctaUrl: string;
};

export type QuizSeo = {
  title: string;
  description: string;
  ogImage?: string;
};

export type QuizMeta = {
  questionCount: number;
  estimatedMinutes: number;
  shareable: boolean;
};

export type Quiz = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  hero: {
    desktop: QuizImage;
    mobile: QuizImage;
  };
  meta: QuizMeta;
  questions: QuizQuestion[];
  resultTiers: QuizResultTier[];
  promo: QuizPromo;
  seo: QuizSeo;
};

export type QuizPhase = "landing" | "quiz" | "result";

export type QuizComputedResult = {
  score: number;
  total: number;
  percentage: number;
  title: string;
  message: string;
};

export type QuizAnswersMap = Record<string, string>;

export type QuizAnswerReviewItem = {
  number: number;
  questionId: string;
  title: string;
  selectedAnswerText: string;
  correctAnswerText: string;
  isCorrect: boolean;
};
