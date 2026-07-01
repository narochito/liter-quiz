import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/quiz/ProductCard";
import type { Product } from "@/types/product";
import type { QuizPromo } from "@/types/quiz";

type PromoBlockProps = {
  promo: QuizPromo;
  products: Product[];
};

export function PromoBlock({ promo, products }: PromoBlockProps) {
  return (
    <section className="animate-fade-in-up mt-12 rounded-[28px] border border-line bg-paper-elevated p-6 shadow-card sm:p-8 lg:p-10">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-faint">
          Narochito
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          {promo.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {promo.text}
        </p>
        <div className="mt-6">
          <Button href={promo.ctaUrl} external size="large">
            {promo.ctaText}
          </Button>
        </div>
      </div>

      {products.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
