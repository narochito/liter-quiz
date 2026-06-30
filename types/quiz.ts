export type QuizAnswer = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  answers: QuizAnswer[];
  correctAnswerId: string;
};

export type QuizPhase = "landing" | "quiz" | "result";

export type QuizResult = {
  score: number;
  total: number;
  percentage: number;
  message: string;
};
