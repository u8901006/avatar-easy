"use client";

interface DialogueBoxProps {
  text: string;
  archetypeName: string;
  color: string;
}

export default function DialogueBox({
  text,
  archetypeName,
  color,
}: DialogueBoxProps) {
  return (
    <div
      className="animate-fadeIn rounded-lg border-l-4 bg-neutral-900 p-4"
      style={{ borderLeftColor: color }}
    >
      <p className="mb-2 text-sm font-semibold" style={{ color }}>
        {archetypeName}
      </p>
      <p className="leading-relaxed text-neutral-300">{text}</p>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out both;
        }
      `}</style>
    </div>
  );
}
