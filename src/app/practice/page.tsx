"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { archetypes } from "@/data/archetypes";
import ArchetypeCard from "@/components/ArchetypeCard";

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = (searchParams.get("mode") as "professional" | "self-help") ?? "self-help";

  return (
    <div className="mx-auto max-w-lg py-8">
      <h1 className="mb-2 text-center text-2xl font-bold text-white">
        選擇要練習的原型
      </h1>
      <p className="mb-8 text-center text-sm text-neutral-500">
        選擇一個內在聲音原型，開始對話練習
      </p>

      <div className="flex flex-col gap-3">
        {archetypes.map((archetype) => (
          <ArchetypeCard
            key={archetype.id}
            emoji={archetype.emoji}
            name={archetype.name}
            codename={archetype.codename}
            color={archetype.color}
            onClick={() =>
              router.push(`/practice/${archetype.id}?mode=${mode}`)
            }
          />
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {archetypes.map((a) => (
          <div
            key={a.id}
            className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
          >
            <div className="flex items-center gap-2">
              <span>{a.emoji}</span>
              <span className="font-medium text-neutral-300">{a.name}</span>
              <span className="text-xs text-neutral-600">— {a.codename}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              {a.features.slice(0, 80)}…
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-neutral-600">
        模式：{mode === "professional" ? "🩺 專業模式" : "🧑 自助模式"}
      </p>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center text-neutral-500">
          載入中…
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}
