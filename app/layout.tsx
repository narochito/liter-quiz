import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Угадайте, сколько денег было у русских классиков?",
  description:
    "7 вопросов о современных эквивалентах доходов и состояний великих русских писателей.",
  openGraph: {
    title: "Угадайте, сколько денег было у русских классиков?",
    description:
      "7 вопросов о современных эквивалентах доходов и состояний великих русских писателей.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fafafa] font-sans text-neutral-900">
        {children}
      </body>
    </html>
  );
}
