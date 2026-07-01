import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="cursor-pointer text-sm font-semibold tracking-[0.18em] uppercase text-ink transition-opacity hover:opacity-70"
        >
          Narochito
        </Link>
        <Link
          href="https://narochito.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm text-ink-muted transition-colors hover:text-ink"
        >
          Магазин
        </Link>
      </div>
    </header>
  );
}
