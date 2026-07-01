import type { Metadata } from "next";
import { QuizHero } from "@/components/quiz/QuizHero";
import { getFeaturedQuiz } from "@/lib/quizzes";

export async function generateMetadata(): Promise<Metadata> {
  const quiz = getFeaturedQuiz();

  return {
    title: quiz.seo.title,
    description: quiz.seo.description,
    openGraph: {
      title: quiz.seo.title,
      description: quiz.seo.description,
      images: quiz.seo.ogImage ? [quiz.seo.ogImage] : undefined,
      locale: "ru_RU",
      type: "website",
    },
  };
}

export default function HomePage() {
  const quiz = getFeaturedQuiz();

  return (
    <QuizHero
      quiz={quiz}
      startHref={`/quiz/${quiz.slug}?start=1`}
    />
  );
}
