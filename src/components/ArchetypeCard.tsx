"use client";

interface ArchetypeCardProps {
  emoji: string;
  name: string;
  codename: string;
  color: string;
  onClick: () => void;
}

export default function ArchetypeCard({
  emoji,
  name,
  codename,
  color,
  onClick,
}: ArchetypeCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-left transition-all duration-200 hover:scale-[1.02] hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950"
      style={{
        borderLeftWidth: "4px",
        borderLeftColor: color,
        ["--glow" as string]: color,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 20px 2px ${color}25, 0 0 40px 4px ${color}10`,
        }}
      />
      <div className="flex items-center gap-3">
        <span className="text-2xl">{emoji}</span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-neutral-100">{name}</p>
          <p className="truncate text-sm text-neutral-500">{codename}</p>
        </div>
        <span
          className="text-neutral-600 transition-colors duration-200 group-hover:text-neutral-400"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </button>
  );
}
