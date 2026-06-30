import type { QuizQuestion } from "@/types/quiz";

/**
 * Placeholder quiz data — replace questions and answers with real content later.
 * Each question must have exactly 4 answers (1 correct + 3 incorrect).
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question:
      "Сколько бы стоила годовая пенсия Пушкина в современных рублях?",
    answers: [
      { id: "q1-a", text: "≈ 120 000 ₽" },
      { id: "q1-b", text: "≈ 480 000 ₽" },
      { id: "q1-c", text: "≈ 1 200 000 ₽" },
      { id: "q1-d", text: "≈ 3 600 000 ₽" },
    ],
    correctAnswerId: "q1-b",
  },
  {
    id: "q2",
    question:
      "Какой современный эквивалент имел гонорар Толстого за «Войну и мир»?",
    answers: [
      { id: "q2-a", text: "≈ 500 000 ₽" },
      { id: "q2-b", text: "≈ 2 500 000 ₽" },
      { id: "q2-c", text: "≈ 8 000 000 ₽" },
      { id: "q2-d", text: "≈ 25 000 000 ₽" },
    ],
    correctAnswerId: "q2-c",
  },
  {
    id: "q3",
    question:
      "Сколько бы стоила квартира Достоевского на улице Казачьей в Санкт-Петербурге сегодня?",
    answers: [
      { id: "q3-a", text: "≈ 5 000 000 ₽" },
      { id: "q3-b", text: "≈ 15 000 000 ₽" },
      { id: "q3-c", text: "≈ 45 000 000 ₽" },
      { id: "q3-d", text: "≈ 120 000 000 ₽" },
    ],
    correctAnswerId: "q3-c",
  },
  {
    id: "q4",
    question:
      "Какой доход в месяц получал бы Чехов от врачебной практики в наши дни?",
    answers: [
      { id: "q4-a", text: "≈ 80 000 ₽" },
      { id: "q4-b", text: "≈ 250 000 ₽" },
      { id: "q4-c", text: "≈ 600 000 ₽" },
      { id: "q4-d", text: "≈ 1 500 000 ₽" },
    ],
    correctAnswerId: "q4-c",
  },
  {
    id: "q5",
    question:
      "Сколько бы стоила усадьба Тургенева в Спасском-Лутовинове в современных деньгах?",
    answers: [
      { id: "q5-a", text: "≈ 10 000 000 ₽" },
      { id: "q5-b", text: "≈ 50 000 000 ₽" },
      { id: "q5-c", text: "≈ 200 000 000 ₽" },
      { id: "q5-d", text: "≈ 800 000 000 ₽" },
    ],
    correctAnswerId: "q5-c",
  },
  {
    id: "q6",
    question:
      "Какой современный эквивалент имел долг Гоголя перед издателями?",
    answers: [
      { id: "q6-a", text: "≈ 300 000 ₽" },
      { id: "q6-b", text: "≈ 1 500 000 ₽" },
      { id: "q6-c", text: "≈ 5 000 000 ₽" },
      { id: "q6-d", text: "≈ 20 000 000 ₽" },
    ],
    correctAnswerId: "q6-d",
  },
  {
    id: "q7",
    question:
      "Сколько бы стоила коллекция книг Лермонтова в современном аукционном доме?",
    answers: [
      { id: "q7-a", text: "≈ 200 000 ₽" },
      { id: "q7-b", text: "≈ 800 000 ₽" },
      { id: "q7-c", text: "≈ 3 000 000 ₽" },
      { id: "q7-d", text: "≈ 12 000 000 ₽" },
    ],
    correctAnswerId: "q7-c",
  },
];

export const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length;
