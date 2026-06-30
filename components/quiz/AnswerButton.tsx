type AnswerButtonProps = {
  text: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
  index: number;
};

export function AnswerButton({
  text,
  selected,
  disabled,
  onClick,
  index,
}: AnswerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ animationDelay: `${index * 60}ms` }}
      className={[
        "animate-slide-up w-full rounded-2xl border px-5 py-4 text-left text-base leading-snug transition-all duration-300 ease-out sm:px-6 sm:py-5 sm:text-lg",
        selected
          ? "border-neutral-900 bg-neutral-900 text-white shadow-md scale-[1.01]"
          : "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm",
        disabled && !selected ? "opacity-60" : "",
      ].join(" ")}
    >
      {text}
    </button>
  );
}
