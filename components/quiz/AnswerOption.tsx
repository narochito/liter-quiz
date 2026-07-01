type AnswerOptionProps = {
  text: string;
  selected: boolean;
  disabled: boolean;
  index: number;
  onClick: () => void;
};

export function AnswerOption({
  text,
  selected,
  disabled,
  index,
  onClick,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ animationDelay: `${index * 50}ms` }}
      className={[
        "animate-slide-up w-full cursor-pointer rounded-2xl border px-5 py-4 text-left text-base leading-snug transition-all duration-200 sm:px-6 sm:py-5 sm:text-lg",
        selected
          ? "border-ink bg-ink text-paper-elevated shadow-md"
          : "border-line bg-paper-elevated text-ink hover:border-[#d8d0c4] hover:shadow-sm",
        disabled && !selected ? "cursor-not-allowed opacity-70" : "",
      ].join(" ")}
    >
      {text}
    </button>
  );
}
