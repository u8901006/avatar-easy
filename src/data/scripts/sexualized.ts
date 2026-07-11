import type { ArchetypeScript } from "@/lib/types";

export const sexualizedScript: ArchetypeScript = {
  archetypeId: "sexualized",
  openingNarration: "這是一段重視同意、尊重與可以隨時停下來的五步練習。你不需要用迎合來換取連結。",
  totalRounds: 5,
  nodes: {
    start: { id: "start", speaker: "narrator", text: "一個習慣用迎合來靠近關係的部分出現了。", next: "r1" },
    r1: {
      id: "r1", speaker: "archetype", text: "只要我變成別人想要的樣子，他們就不會離開。",
      choices: [
        { text: "你不需要迎合來換取安全；你的選擇很重要。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
        { text: "是什麼讓迎合聽起來比較安全？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
        { text: "這樣做很不恰當，不要再說。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
      ],
      tip: { general: "先以不責備的方式回應，再提醒自己：每個人都有說不、暫停與改變主意的權利。", clinical: "將性化表現理解為可能的生存重演，而非意圖或操弄；以不羞辱的方式維持明確同意、界線與節奏。" },
    },
    r2: {
      id: "r2", speaker: "archetype", text: "以前順從會讓危險快一點過去，也像是有人需要我。",
      choices: [
        { text: "那是你在艱難環境裡找到的生存方法。", strategy: "affirm-accept", nextNode: "r3", effectiveness: 3 },
        { text: "順從當時替你避開了什麼風險？", strategy: "explore-curious", nextNode: "r3", effectiveness: 2 },
        { text: "別把過去拿來當藉口。", strategy: "confront-suppress", nextNode: "r3", effectiveness: 1 },
      ],
    },
    r3: {
      id: "r3", speaker: "archetype", text: "如果我不迎合，我怕自己不值得被喜歡。",
      choices: [
        { text: "被尊重不需要交換；你可以先選擇自己的感受。", strategy: "affirm-accept", nextNode: "r4", effectiveness: 3 },
        { text: "在一段安全關係裡，你希望怎麼被對待？", strategy: "explore-curious", nextNode: "r4", effectiveness: 2 },
        { text: "你本來就不該期待別人喜歡你。", strategy: "confront-suppress", nextNode: "r4", effectiveness: 1 },
      ],
      tip: { general: "把注意力放回『我願不願意』與『我感覺安全嗎』，而不是急著滿足別人的期待。", clinical: "協助辨識依附、順從與安全感的連結；避免把界線困難重新詮釋為道德或人格問題。" },
    },
    r4: {
      id: "r4", speaker: "archetype", text: "我想靠近，但也怕一靠近就失去選擇。",
      choices: [
        { text: "你可以先說『我需要慢一點』，關係仍然可以存在。", strategy: "affirm-accept", nextNode: "r5", effectiveness: 3 },
        { text: "哪一種距離和節奏讓你比較安心？", strategy: "explore-curious", nextNode: "r5", effectiveness: 2 },
        { text: "你必須立刻學會相信別人。", strategy: "confront-suppress", nextNode: "r5", effectiveness: 1 },
      ],
      tip: { general: "同意不是一次性的承諾；可以停下、調整距離，也可以改變主意。", clinical: "以可撤回的同意和節奏感取代逼迫親近；清楚說明關係界線，同時維持不羞辱的態度。" },
    },
    r5: {
      id: "r5", speaker: "archetype", text: "也許我可以先用自己的方式靠近，而不是變成別人要的樣子。",
      choices: [
        { text: "你可以選擇一個讓自己感到安全的小步驟。", strategy: "affirm-accept", nextNode: "end-supported", effectiveness: 3 },
        { text: "你想先練習說不，還是先練習暫停？", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
        { text: "不要再想這些關係問題。", strategy: "ignore-escape", nextNode: "end-withdrawn", effectiveness: 1 },
      ],
    },
    "end-supported": { id: "end-supported", speaker: "archetype", text: "我可以先問自己願不願意。", end: { summary: "你將選擇、同意與安全帶回關係之中。", strategiesUsed: ["確認同意", "尊重節奏", "安全連結"], suggestion: "選一個低壓力情境，練習一句『我想慢一點』或『我需要想一下』。", score: 3 } },
    "end-cautious": { id: "end-cautious", speaker: "archetype", text: "我想先慢慢試。", end: { summary: "這個部分開始探索不同的連結方式。", strategiesUsed: ["好奇探索", "可選擇性"], suggestion: "保持可撤回的選擇，不急著要求更多揭露或親近。", score: 2 } },
    "end-withdrawn": { id: "end-withdrawn", speaker: "archetype", text: "那我還是躲起來比較安全。", end: { summary: "忽略關係需求讓這個部分更退縮。", strategiesUsed: ["逃避"], suggestion: "下次先確認它有權停下，再以不責備的方式談界線。", score: 1 } },
  },
};
