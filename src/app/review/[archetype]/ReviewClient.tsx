"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { archetypes } from "@/data/archetypes";
import { getScoreLabel } from "@/lib/scoring";
import ReviewSummary from "@/components/ReviewSummary";

function ReviewContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const archetypeId = params.archetype as string;
  const mode =
    (searchParams.get("mode") as "professional" | "self-help") ?? "self-help";
  const archetype = archetypes.find((a) => a.id === archetypeId);

  const stored =
    typeof window !== "undefined"
      ? sessionStorage.getItem(`review-${archetypeId}`)
      : null;

  if (!stored || !archetype) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-neutral-500">找不到練習結果</p>
        <button
          onClick={() => router.push(`/practice?mode=${mode}`)}
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          返回選擇原型
        </button>
      </div>
    );
  }

  const { ending, score, breakdown } = JSON.parse(stored) as {
    ending: {
      summary: string;
      strategiesUsed: string[];
      suggestion: string;
      score: number;
    };
    score: number;
    breakdown: Record<string, number>;
  };

  return (
    <div className="mx-auto max-w-lg py-8">
      <div className="mb-8 text-center">
        <span className="text-4xl">{archetype.emoji}</span>
        <h1 className="mt-4 text-xl font-bold text-white">
          {archetype.name} — 練習結果
        </h1>
      </div>

      <ReviewSummary
        summary={ending.summary}
        score={score}
        scoreLabel={getScoreLabel(score)}
        strategiesUsed={ending.strategiesUsed}
        strategyBreakdown={breakdown}
        suggestion={ending.suggestion}
        mode={mode}
      />

      <div className="mt-8 rounded-xl border border-amber-800/50 bg-amber-950/30 p-5">
        <p className="mb-2 font-semibold text-amber-400">☎️ 安全資源</p>
        <ul className="space-y-1 text-sm text-neutral-400">
          <li>
            全國自殺防治專線：
            <strong className="text-neutral-300">1925</strong>（安心專線）
          </li>
          <li>
            生命線協談專線：<strong className="text-neutral-300">1995</strong>
          </li>
          <li>
            張老師專線：<strong className="text-neutral-300">1980</strong>
          </li>
          <li>
            婦幼保護專線：<strong className="text-neutral-300">113</strong>
          </li>
          <li>
            男性關懷專線：
            <strong className="text-neutral-300">0800-013-999</strong>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => {
            sessionStorage.removeItem(`review-${archetypeId}`);
            router.push(`/practice/${archetypeId}?mode=${mode}`);
          }}
          className="flex-1 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-950 transition-colors hover:bg-neutral-200"
        >
          再試一次
        </button>
        <button
          onClick={() => {
            sessionStorage.removeItem(`review-${archetypeId}`);
            router.push(`/practice?mode=${mode}`);
          }}
          className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700"
        >
          選擇其他原型
        </button>
        <button
          onClick={() => {
            sessionStorage.removeItem(`review-${archetypeId}`);
            router.push("/");
          }}
          className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700"
        >
          回到首頁
        </button>
      </div>
    </div>
  );
}

export default function ReviewClient() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center text-neutral-500">
          載入中…
        </div>
      }
    >
      <ReviewContent />
    </Suspense>
  );
}
