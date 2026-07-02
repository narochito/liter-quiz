import type {
  Quiz,
  QuizAnswerReviewItem,
  QuizAnswersMap,
  QuizComputedResult,
  QuizQuestion,
} from "@/types/quiz";

function getAnswerText(question: QuizQuestion, answerId: string): string {
  return (
    question.answers.find((answer) => answer.id === answerId)?.text ?? "—"
  );
}

export function buildAnswersReview(
  quiz: Quiz,
  selectedAnswers: QuizAnswersMap
): QuizAnswerReviewItem[] {
  return quiz.questions.map((question, index) => {
    const selectedAnswerId = selectedAnswers[question.id] ?? "";

    return {
      number: index + 1,
      questionId: question.id,
      title: question.title,
      selectedAnswerText: getAnswerText(question, selectedAnswerId),
      correctAnswerText: getAnswerText(question, question.correctAnswerId),
      isCorrect: selectedAnswerId === question.correctAnswerId,
      explanation: question.explanation,
      source: question.source,
    };
  });
}

export function calculateScore(
  quiz: Quiz,
  selectedAnswers: QuizAnswersMap
): QuizComputedResult {
  const score = quiz.questions.reduce((acc, question) => {
    return selectedAnswers[question.id] === question.correctAnswerId
      ? acc + 1
      : acc;
  }, 0);

  const total = quiz.questions.length;
  const percentage = Math.round((score / total) * 100);
  const tier = getResultTier(quiz, score);

  return {
    score,
    total,
    percentage,
    title: tier.title,
    message: tier.message,
  };
}

export function getResultTier(quiz: Quiz, score: number) {
  const tier = quiz.resultTiers.find(
    (item) => score >= item.minScore && score <= item.maxScore
  );

  if (!tier) {
    return quiz.resultTiers[quiz.resultTiers.length - 1];
  }

  return tier;
}

export function isAnswerCorrect(
  question: QuizQuestion,
  answerId: string
): boolean {
  return question.correctAnswerId === answerId;
}

export function formatShareText(quiz: Quiz, result: QuizComputedResult): string {
  return [
    `${quiz.title}`,
    `Мой результат: ${result.score} из ${result.total} (${result.percentage}%) — ${result.title}`,
    "",
    "Пройти квиз:",
    `https://narochito.ru/quiz/${quiz.slug}`,
  ].join("\n");
}

export function formatPrice(price: number, currency = "RUB"): string {
  if (currency === "RUB") {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  }

  return `${price} ${currency}`;
}
