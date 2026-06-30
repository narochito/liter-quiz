import { Button } from "@/components/ui/Button";

type LandingPageProps = {
  onStart: () => void;
};

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 sm:px-8">
      <div className="animate-fade-in-up w-full max-w-2xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Литературный квиз
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Угадайте, сколько денег было у русских классиков?
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-neutral-500 sm:text-xl">
          7 вопросов. Попробуйте угадать современные эквиваленты доходов и
          состояний великих русских писателей.
        </p>
        <div className="mt-12 flex justify-center">
          <Button size="large" onClick={onStart}>
            Начать квиз
          </Button>
        </div>
      </div>
    </div>
  );
}
