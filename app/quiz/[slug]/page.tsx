import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import { getPromoProducts } from "@/lib/products";
import { getAllQuizSlugs, getQuizBySlug } from "@/lib/quizzes";

type QuizPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ start?: string }>;
};

export async function generateStaticParams() {
  return getAllQuizSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: QuizPageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    return {};
  }

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

export default async function QuizPage({ params, searchParams }: QuizPageProps) {
  const { slug } = await params;
  const { start } = await searchParams;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  const products = await getPromoProducts(4);
  const initialPhase = start === "1" ? "quiz" : "landing";

  return (
    <QuizPlayer quiz={quiz} products={products} initialPhase={initialPhase} />
  );
}
