import { Button } from "@/components/ui/Button";

export function PromoBlock() {
  return (
    <div className="animate-fade-in-up mt-10 w-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8 text-center sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        Любите русскую литературу?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg">
        Мы создаём футболки с цитатами русских классиков для тех, кто хочет
        носить любимые книги каждый день.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="https://narochito.ru" size="large">
          Перейти в магазин
        </Button>
      </div>
    </div>
  );
}
