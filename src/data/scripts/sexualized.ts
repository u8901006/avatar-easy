import type { ArchetypeScript } from "@/lib/types";

export const sexualizedScript: ArchetypeScript = {
  archetypeId: "sexualized",
  openingNarration: "這段練習重視同意、尊重與可以隨時停下來的界線。",
  totalRounds: 2,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "一個習慣用迎合來靠近關係的部分出現了。",
      next: "r1",
    },
    r1: {
      id: "r1",
      speaker: "archetype",
      text: "只要我變成別人想要的樣子，關係就不會離開。",
      choices: [
        { text: "你不需要迎合來換取安全；你的界線和同意同樣重要。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
        { text: "過去是什麼讓你覺得迎合比較安全？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
        { text: "這樣做很不恰當，不要再提。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
      ],
      tip: {
        general: "以不責備的態度回應，同時清楚表達每個人都有拒絕與停止的權利。",
        clinical: "辨識生存重演而非意圖；保持穩定、明確且不羞辱的治療界線。",
      },
    },
    r2: {
      id: "r2",
      speaker: "archetype",
      text: "我不太知道不用迎合，要怎麼和人靠近。",
      choices: [
        { text: "我們可以練習用一個小小的選擇，感受被尊重的靠近。", strategy: "affirm-accept", nextNode: "end-safe", effectiveness: 3 },
        { text: "你想從哪一種安全的距離開始？", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
        { text: "你應該早就知道怎麼做。", strategy: "confront-suppress", nextNode: "end-boundaried", effectiveness: 1 },
      ],
    },
    "end-safe": {
      id: "end-safe", speaker: "archetype", text: "原來我可以選擇，也可以被尊重。",
      end: { summary: "你將安全與選擇帶進了關係。", strategiesUsed: ["確認同意", "穩定界線"], suggestion: "以一個可撤回的小選擇，練習感受自己的界線。", score: 3 },
    },
    "end-cautious": {
      id: "end-cautious", speaker: "archetype", text: "我想先慢慢試。",
      end: { summary: "這個部分開始探索不同的連結方式。", strategiesUsed: ["好奇探索"], suggestion: "保持可選擇性，不急著要求更多揭露。", score: 2 },
    },
    "end-boundaried": {
      id: "end-boundaried", speaker: "archetype", text: "那我還是先躲起來。",
      end: { summary: "界線被提出，但回應帶來了退縮。", strategiesUsed: ["設限"], suggestion: "下次可先確認安全與同意，再回到界線。", score: 1 },
    },
  },
};
