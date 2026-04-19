"use client";

interface TipBannerProps {
  general: string;
  clinical?: string;
  mode: "professional" | "self-help";
}

export default function TipBanner({
  general,
  clinical,
  mode,
}: TipBannerProps) {
  const tip = mode === "professional" && clinical ? clinical : general;

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-800/50 px-4 py-3">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0 text-base">💡</span>
        <p className="text-sm leading-relaxed text-neutral-400">{tip}</p>
      </div>
    </div>
  );
}
