"use client";

interface ChoiceButtonProps {
  text: string;
  strategy: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function ChoiceButton({
  text,
  strategy,
  onClick,
  disabled = false,
}: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group w-full rounded-lg border border-neutral-800 border-l-4 border-l-blue-500 bg-neutral-900 p-4 text-left transition-all duration-200 hover:border-neutral-700 hover:border-l-blue-400 hover:bg-neutral-800 disabled:pointer-events-none disabled:opacity-40"
    >
      <p className="text-neutral-200 transition-colors duration-200 group-hover:text-white">
        {text}
      </p>
      <span className="mt-2 inline-block rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500 transition-colors duration-200 group-hover:bg-neutral-700 group-hover:text-neutral-400">
        {strategy}
      </span>
    </button>
  );
}
