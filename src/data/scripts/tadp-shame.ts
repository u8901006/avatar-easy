import type { ArchetypeScript } from "@/lib/types";

export const tadpShameScript: ArchetypeScript = {
  archetypeId: "tadp-shame",
  openingNarration: "這是一段放慢節奏的練習；你可以隨時停下或休息。",
  totalRounds: 2,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "一個想要縮小、隱形的部分似乎正在靠近。",
      next: "r1",
    },
    r1: {
      id: "r1",
      speaker: "archetype",
      text: "不要看我。要是你知道真正的我，你也會離開。",
      choices: [
        { text: "我不會逼你現身；你可以照自己的速度待在這裡。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
        { text: "什麼讓被看見聽起來這麼危險？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
        { text: "你沒有理由這樣想。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
      ],
      tip: {
        general: "不要急著反駁羞恥感；先讓這個部分知道它不需要消失。",
        clinical: "放慢節奏，提供穩定臨在，不要求揭露，也不確認其自我貶抑的信念。",
      },
    },
    r2: {
      id: "r2",
      speaker: "archetype",
      text: "我習慣先怪自己，這樣至少不會再被別人怪。",
      choices: [
        { text: "你曾經用這個方法保護自己；現在不必一個人承擔。", strategy: "affirm-accept", nextNode: "end-safe", effectiveness: 3 },
        { text: "我們可以只停在這裡，感覺一下你需要多少距離。", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
        { text: "你必須停止自責。", strategy: "confront-suppress", nextNode: "end-boundaried", effectiveness: 1 },
      ],
    },
    "end-safe": {
      id: "end-safe", speaker: "archetype", text: "也許我可以不用完全消失。",
      end: { summary: "你以陪伴取代了催促或反駁。", strategiesUsed: ["穩定陪伴", "承認保護"], suggestion: "讓關係保持可預期，並從小範圍的存在感開始。", score: 3 },
    },
    "end-cautious": {
      id: "end-cautious", speaker: "archetype", text: "我還想待在遠一點的地方。",
      end: { summary: "這個部分保留了距離，同時沒有完全退出。", strategiesUsed: ["尊重節奏"], suggestion: "下次可再次確認它有選擇停留或離開的權利。", score: 2 },
    },
    "end-boundaried": {
      id: "end-boundaried", speaker: "archetype", text: "我知道，我又做錯了。",
      end: { summary: "直接糾正加重了這個部分的自責。", strategiesUsed: ["直接糾正"], suggestion: "回到不評判的陪伴，避免將羞恥感當成需要立刻修正的錯誤。", score: 1 },
    },
  },
};
