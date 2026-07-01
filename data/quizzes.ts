import type { Quiz } from "@/types/quiz";

/**
 * All quizzes live here. Add a new entry each week with a unique slug.
 * Set CURRENT_QUIZ_SLUG to the quiz featured on the home page.
 */
export const CURRENT_QUIZ_SLUG = "classics-money";

export const QUIZZES: Quiz[] = [
  {
    slug: "classics-money",
    title: "Угадайте, сколько денег было у русских классиков?",
    subtitle:
      "7 вопросов о доходах, гонорарах и долгах великих писателей в пересчёте на наши дни.",
    description:
      "Проверьте, насколько хорошо вы понимаете финансовую сторону жизни русских классиков — от пенсий до гонораров и долгов.",
    hero: {
      desktop: {
        src: "/images/quizzes/classics-money/hero-desktop.jpg",
        alt: "Иллюстрация к квизу о деньгах русских классиков",
      },
      mobile: {
        src: "/images/quizzes/classics-money/hero-mobile.jpg",
        alt: "Иллюстрация к квизу о деньгах русских классиков",
      },
    },
    meta: {
      questionCount: 7,
      estimatedMinutes: 2,
      shareable: true,
    },
    questions: [
      {
        id: "q1",
        title:
          "Гоголь получил за «Ревизора» около 2500 рублей серебром. Сколько это примерно сегодня?",
        answers: [
          { id: "q1-a", text: "≈ 98 000 ₽" },
          { id: "q1-b", text: "≈ 978 000 ₽" },
          { id: "q1-c", text: "≈ 9 800 000 ₽" },
          { id: "q1-d", text: "≈ 98 000 000 ₽" },
        ],
        correctAnswerId: "q1-b",
      },
      {
        id: "q2",
        title:
          "У кого первые литературные деньги за 6 рассказов составили 32 рубля 25 копеек?",
        answers: [
          { id: "q2-a", text: "Пушкин" },
          { id: "q2-b", text: "Чехов" },
          { id: "q2-c", text: "Гоголь" },
          { id: "q2-d", text: "Толстой" },
        ],
        correctAnswerId: "q2-b",
      },
      {
        id: "q3",
        title:
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
        title:
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
        title:
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
        title:
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
        title:
          "Сколько бы стоила коллекция книг Лермонтова в современном аукционном доме?",
        answers: [
          { id: "q7-a", text: "≈ 200 000 ₽" },
          { id: "q7-b", text: "≈ 800 000 ₽" },
          { id: "q7-c", text: "≈ 3 000 000 ₽" },
          { id: "q7-d", text: "≈ 12 000 000 ₽" },
        ],
        correctAnswerId: "q7-c",
      },
    ],
    resultTiers: [
      {
        minScore: 0,
        maxScore: 2,
        title: "Архивный новичок",
        message: "Финансовая история литературы пока сопротивляется",
      },
      {
        minScore: 3,
        maxScore: 5,
        title: "Знающий читатель",
        message: "Неплохо! Классики всё ещё умеют удивлять",
      },
      {
        minScore: 6,
        maxScore: 7,
        title: "Главный бухгалтер эпохи",
        message: "Вы бы могли вести бухгалтерию русских классиков",
      },
    ],
    promo: {
      title: "Любите русскую литературу?",
      text: "Мы делаем футболки с цитатами русских классиков — для тех, кто хочет носить любимые книги каждый день.",
      ctaText: "Перейти в магазин",
      ctaUrl: "https://narochito.ru",
    },
    seo: {
      title: "Угадайте, сколько денег было у русских классиков? | Narochito",
      description:
        "7 вопросов о доходах, гонорарах и долгах великих писателей в пересчёте на наши дни.",
      ogImage: "/images/quizzes/classics-money/hero-desktop.jpg",
    },
  },
];
