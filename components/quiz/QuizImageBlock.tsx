"use client";

import Image from "next/image";
import { useState } from "react";
import type { QuizImage } from "@/types/quiz";

type QuizImageBlockProps = {
  image: QuizImage;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function QuizImageBlock({
  image,
  priority = false,
  className = "",
  sizes = "100vw",
}: QuizImageBlockProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex aspect-[16/10] items-center justify-center rounded-3xl border border-line bg-paper-elevated text-sm text-ink-faint ${className}`}
        aria-label={image.alt}
      >
        Изображение скоро появится
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-line bg-paper-elevated shadow-card ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
