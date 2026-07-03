import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://narochito.ru"),
  title: {
    default: "Narochito Quiz",
    template: "%s | Narochito",
  },
  description:
    "Литературные квизы от Narochito — футболки с цитатами русских классиков.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <SiteHeader />
        <main>{children}</main>
        <YandexMetrika />
      </body>
    </html>
  );
}
