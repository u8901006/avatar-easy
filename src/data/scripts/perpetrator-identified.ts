import type { ArchetypeScript } from "@/lib/types";

export const perpetratorIdentifiedScript: ArchetypeScript = {
  archetypeId: "perpetrator-identified",
  openingNarration: "這是一段以安全、尊重與清楚界線為優先的練習。",
  totalRounds: 2,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "一個嚴厲、保持距離的部分正在觀察。",
      next: "r1",
    },
    r1: {
      id: "r1",
      speaker: "archetype",
      text: "別靠近；我必須掌控局面，才不會再有人傷害我們。",
      choices: [
        { text: "我會尊重你的警戒，也會維持不傷害自己的界線。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
        { text: "你最想防範的是什麼？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
        { text: "你不該這樣說話，立刻停止。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
      ],
      tip: {
        general: "先承認保護意圖，再維持不傷害自己與他人的界線。",
        clinical: "以穩定、好奇與界線感回應，避免將敵意直接等同於惡意。",
      },
    },
    r2: {
      id: "r2",
      speaker: "archetype",
      text: "掌控曾讓我們活下來，但我不確定現在還能不能放下。",
      choices: [
        { text: "現在有更多選擇，我們可以慢慢來，也會保持安全。", strategy: "affirm-accept", nextNode: "end-safe", effectiveness: 3 },
        { text: "願意先把警戒降一點點，再看看發生什麼嗎？", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
        { text: "你必須立刻停止控制。", strategy: "confront-suppress", nextNode: "end-boundaried", effectiveness: 1 },
      ],
    },
    "end-safe": {
      id: "end-safe", speaker: "archetype", text: "我可以先看著，不必接管。",
      end: { summary: "你同時承認了保護與安全界線。", strategiesUsed: ["承認保護意圖", "維持界線"], suggestion: "若情緒升高，回到當下的身體感受與外在安全線索。", score: 3 },
    },
    "end-cautious": {
      id: "end-cautious", speaker: "archetype", text: "我還需要時間。",
      end: { summary: "這個部分開始被理解，但仍需要節奏與選擇。", strategiesUsed: ["好奇探索"], suggestion: "下次可從一個可承受的小步驟開始。", score: 2 },
    },
    "end-boundaried": {
      id: "end-boundaried", speaker: "archetype", text: "我仍會警戒。",
      end: { summary: "界線被提出，但連結尚未建立。", strategiesUsed: ["界線"], suggestion: "可在安全前提下，以不批判的語氣重新開啟對話。", score: 1 },
    },
  },
};
