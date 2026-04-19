"use client";

interface ReviewSummaryProps {
  summary: string;
  score: number;
  scoreLabel: string;
  strategiesUsed: string[];
  strategyBreakdown: Record<string, number>;
  suggestion: string;
  mode: "professional" | "self-help";
}

export default function ReviewSummary({
  summary,
  score,
  scoreLabel,
  strategiesUsed,
  strategyBreakdown,
  suggestion,
  mode,
}: ReviewSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <h2 className="mb-3 text-lg font-semibold text-white">練習回顧</h2>
        <p className="leading-relaxed text-neutral-300">{summary}</p>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <h3 className="mb-3 text-lg font-semibold text-white">評分結果</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{score.toFixed(1)}</span>
          <span className="text-sm text-neutral-500">/ 5.0</span>
        </div>
        <p className="mt-1 text-sm text-neutral-400">{scoreLabel}</p>
        <div className="mt-3 h-2 w-full rounded-full bg-neutral-800">
          <div
            className="h-2 rounded-full transition-all duration-700"
            style={{
              width: `${(score / 5) * 100}%`,
              backgroundColor:
                score >= 4 ? "#22c55e" : score >= 3 ? "#eab308" : "#ef4444",
            }}
          />
        </div>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <h3 className="mb-3 text-lg font-semibold text-white">
          使用的策略
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(strategyBreakdown).map(([strategy, count]) => (
            <span
              key={strategy}
              className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-400"
            >
              {strategy} × {count}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {strategiesUsed.map((s, i) => (
            <span
              key={i}
              className="rounded-full border border-neutral-700 bg-neutral-800/50 px-2 py-0.5 text-xs text-neutral-500"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
        <h3 className="mb-3 text-lg font-semibold text-white">建議</h3>
        <p className="leading-relaxed text-neutral-300">{suggestion}</p>
      </div>

      {mode === "professional" && (
        <p className="text-center text-xs text-neutral-600">
          此結果僅供練習參考，不代表實際臨床能力評估。
        </p>
      )}
    </div>
  );
}
