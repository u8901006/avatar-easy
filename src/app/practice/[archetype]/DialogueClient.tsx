"use client";

import { useSearchParams, useParams, useRouter } from "next/navigation";
import { useState, useCallback, Suspense } from "react";
import type { ArchetypeScript, Mode, EngineState } from "@/lib/types";
import { archetypes } from "@/data/archetypes";
import {
  init,
  currentNode,
  choose,
  isFinished,
  getResult,
  getProgress,
  resolveAutoAdvance,
} from "@/lib/dialogue-engine";
import { calculateScore, getStrategyBreakdown } from "@/lib/scoring";

import { hostileAggressiveScript } from "@/data/scripts/hostile-aggressive";
import { selfHarmSuicidalScript } from "@/data/scripts/self-harm-suicidal";
import { criticalScript } from "@/data/scripts/critical";
import { perpetratorImitatorScript } from "@/data/scripts/perpetrator-imitator";
import { fearDistrustScript } from "@/data/scripts/fear-distrust";

import DialogueBox from "@/components/DialogueBox";
import NarratorBox from "@/components/NarratorBox";
import ChoiceButton from "@/components/ChoiceButton";
import TipBanner from "@/components/TipBanner";

const scripts: Record<string, ArchetypeScript> = {
  "hostile-aggressive": hostileAggressiveScript,
  "self-harm-suicidal": selfHarmSuicidalScript,
  critical: criticalScript,
  "perpetrator-imitator": perpetratorImitatorScript,
  "fear-distrust": fearDistrustScript,
};

const SAFETY_RESOURCES = (
  <div className="mt-4 rounded-lg border border-amber-800/50 bg-amber-950/30 p-4">
    <p className="mb-2 font-semibold text-amber-400">安全資源</p>
    <ul className="space-y-1 text-sm text-neutral-400">
      <li>全國自殺防治專線：1925</li>
      <li>生命線協談專線：1995</li>
      <li>張老師專線：1980</li>
      <li>婦幼保護專線：113</li>
      <li>男性關懷專線：0800-013-999</li>
    </ul>
  </div>
);

function DialogueContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const archetypeId = params.archetype as string;
  const mode = (searchParams.get("mode") as Mode) ?? "self-help";
  const script = scripts[archetypeId];
  const archetype = archetypes.find((a) => a.id === archetypeId);

  const [started, setStarted] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [lastTip, setLastTip] = useState<{
    general: string;
    clinical?: string;
  } | null>(null);

  const [state, setState] = useState<EngineState | null>(null);

  const handleStart = useCallback(() => {
    if (!script) return;
    setState(init(script, mode));
    setStarted(true);
  }, [script, mode]);

  const handleChoice = useCallback(
    (choiceIndex: number) => {
      if (!state || !script) return;
      const node = currentNode(state, script);
      const tip = node.tip ?? null;
      setLastTip(tip);
      const next = resolveAutoAdvance(choose(state, choiceIndex, script), script);

      if (isFinished(next, script)) {
        const ending = getResult(next, script);
        const score = calculateScore(next);
        const breakdown = getStrategyBreakdown(next);
        sessionStorage.setItem(
          `review-${archetypeId}`,
          JSON.stringify({ ending, score, breakdown, mode })
        );
        router.push(`/review/${archetypeId}?mode=${mode}`);
        return;
      }

      setState(next);
    },
    [state, script, archetypeId, mode, router]
  );

  if (!script || !archetype) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-neutral-500">找不到此原型的劇本</p>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="mx-auto max-w-lg py-12">
        <div className="mb-6 text-center">
          <span className="text-4xl">{archetype.emoji}</span>
          <h1 className="mt-4 text-xl font-bold text-white">
            {archetype.name}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">{archetype.codename}</p>
        </div>

        <div className="mb-8 rounded-lg border border-amber-800/50 bg-amber-950/30 p-5">
          <p className="mb-1 font-semibold text-amber-400">⚠️ 內容警告</p>
          <p className="text-sm leading-relaxed text-neutral-300">
            {archetype.contentWarning}
          </p>
        </div>

        <p className="mb-8 text-sm leading-relaxed text-neutral-400">
          {script.openingNarration}
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleStart}
            className="rounded-lg bg-white px-6 py-3 font-medium text-gray-950 transition-colors hover:bg-neutral-200"
          >
            我了解，開始練習
          </button>
          <button
            onClick={() => router.push(`/practice?mode=${mode}`)}
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            返回選擇原型
          </button>
        </div>
      </div>
    );
  }

  const node = currentNode(state!, script);
  const progress = getProgress(state!, script);

  return (
    <div className="mx-auto max-w-lg py-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>{archetype.emoji}</span>
          <span className="text-sm font-medium text-neutral-400">
            {archetype.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-400">
            回合 {progress.current}/{progress.total}
          </span>
          <button
            onClick={() => setShowExit(true)}
            className="text-xs text-neutral-600 transition-colors hover:text-red-400"
          >
            退出練習
          </button>
        </div>
      </div>

      <div className="mb-2 h-1 w-full rounded-full bg-neutral-800">
        <div
          className="h-1 rounded-full transition-all duration-500"
          style={{
            width: `${(progress.current / progress.total) * 100}%`,
            backgroundColor: archetype.color,
          }}
        />
      </div>

      <div className="mt-6 space-y-4">
        {state!.history.map((entry, i) => (
          <div key={i}>
            {entry.speaker === "archetype" ? (
              <DialogueBox
                text={entry.text}
                archetypeName={archetype.name}
                color={archetype.color}
              />
            ) : entry.speaker === "narrator" ? (
              <NarratorBox text={entry.text} />
            ) : (
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <p className="text-sm text-neutral-500">你的回應</p>
                <p className="mt-1 text-neutral-300">{entry.text}</p>
              </div>
            )}
          </div>
        ))}

        {node.speaker === "narrator" ? (
          <NarratorBox text={node.text} />
        ) : (
          <DialogueBox
            text={node.text}
            archetypeName={archetype.name}
            color={archetype.color}
          />
        )}

        {lastTip && (
          <TipBanner
            general={lastTip.general}
            clinical={lastTip.clinical}
            mode={mode}
          />
        )}

        {node.choices && (
          <div className="mt-6 space-y-3">
            <p className="text-xs text-neutral-600">選擇你的回應：</p>
            {node.choices.map((choice, i) => (
              <ChoiceButton
                key={i}
                text={choice.text}
                strategy={choice.strategy}
                onClick={() => handleChoice(i)}
              />
            ))}
          </div>
        )}
      </div>

      {showExit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">
              確定要退出練習嗎？
            </h2>
            <p className="mb-4 text-sm text-neutral-400">
              退出後目前的進度將不會保留。
            </p>
            {SAFETY_RESOURCES}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  sessionStorage.removeItem(`review-${archetypeId}`);
                  router.push(`/practice?mode=${mode}`);
                }}
                className="flex-1 rounded-lg bg-red-600/20 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-600/30"
              >
                退出
              </button>
              <button
                onClick={() => setShowExit(false)}
                className="flex-1 rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700"
              >
                繼續練習
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DialogueClient() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center text-neutral-500">
          載入中…
        </div>
      }
    >
      <DialogueContent />
    </Suspense>
  );
}
