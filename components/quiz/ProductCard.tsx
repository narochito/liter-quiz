"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/quiz";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-elevated shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper">
        {!hasError ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 240px, 45vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-ink-faint">
            Фото скоро появится
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="line-clamp-2 text-base font-medium leading-snug text-ink">
          {product.title}
        </h3>
        {product.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          {product.price ? (
            <p className="text-base font-semibold text-ink">
              {formatPrice(product.price, product.currency)}
            </p>
          ) : (
            <span />
          )}

          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-xl border border-line px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-[#d8d0c4] hover:bg-white"
          >
            Смотреть
          </Link>
        </div>
      </div>
    </article>
  );
}
