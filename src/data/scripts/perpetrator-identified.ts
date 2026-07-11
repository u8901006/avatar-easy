import type { ArchetypeScript } from "@/lib/types";

export const perpetratorIdentifiedScript: ArchetypeScript = {
  archetypeId: "perpetrator-identified",
  openingNarration: "這是一段以安全、尊重與清楚界線為優先的五步練習。你可以隨時停下、回到當下，或只觀察而不回答。",
  totalRounds: 5,
  nodes: {
    start: { id: "start", speaker: "narrator", text: "一個嚴厲而警戒的部分正在觀察周遭。", next: "r1" },
    r1: {
      id: "r1", speaker: "archetype", text: "別靠近。我必須掌控局面，否則我們又會受傷。",
      choices: [
        { text: "我聽見你在守護安全；我們可以慢慢談。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
        { text: "你最擔心失去掌控後會發生什麼？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
        { text: "你這樣太過分，立刻停止。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
      ],
      tip: { general: "先承認警戒想保護什麼，再清楚表達：安全不需要靠傷害自己或別人來換取。", clinical: "以穩定、好奇與明確界線回應控制性語言；區分保護功能與傷害行為，避免陷入權力對抗。" },
    },
    r2: {
      id: "r2", speaker: "archetype", text: "以前只要我先變強、先攻擊，就不會那麼無助。",
      choices: [
        { text: "那是你在很危險時學會的保護方法。", strategy: "affirm-accept", nextNode: "r3", effectiveness: 3 },
        { text: "那個方法當時幫你避開了什麼？", strategy: "explore-curious", nextNode: "r3", effectiveness: 2 },
        { text: "過去的事已經過去，不要再提。", strategy: "ignore-escape", nextNode: "r3", effectiveness: 1 },
      ],
    },
    r3: {
      id: "r3", speaker: "archetype", text: "我不想讓脆弱的部分再被看見；被看見就會被踩碎。",
      choices: [
        { text: "保護脆弱很重要；我們也能找不必懲罰它的方法。", strategy: "affirm-accept", nextNode: "r4", effectiveness: 3 },
        { text: "你希望其他部分怎麼知道你在保護它們？", strategy: "explore-curious", nextNode: "r4", effectiveness: 2 },
        { text: "脆弱根本不值得被保護。", strategy: "confront-suppress", nextNode: "r4", effectiveness: 1 },
      ],
      tip: { general: "可以同時尊重這個部分的警戒，也拒絕羞辱、威脅或傷害。", clinical: "將內化的加害者邏輯與保護責任分開處理；先建立系統內不傷害的共同界線。" },
    },
    r4: {
      id: "r4", speaker: "archetype", text: "如果我不那麼兇，誰來確保我們不會再被控制？",
      choices: [
        { text: "現在可以用距離、求助和說不來保護自己。", strategy: "affirm-accept", nextNode: "r5", effectiveness: 3 },
        { text: "哪一個當下安全線索對你最有幫助？", strategy: "explore-curious", nextNode: "r5", effectiveness: 2 },
        { text: "你應該相信所有人。", strategy: "confront-suppress", nextNode: "r5", effectiveness: 1 },
      ],
      tip: { general: "新的保護方式可以是停下、拉開距離、尋求支持與清楚說不。", clinical: "以現在取向和可選擇的界線替代支配策略；避免要求過快信任或解除警戒。" },
    },
    r5: {
      id: "r5", speaker: "archetype", text: "也許我可以先警戒，但不必接管或傷害任何人。",
      choices: [
        { text: "謝謝你願意試著把保護變得更安全。", strategy: "affirm-accept", nextNode: "end-supported", effectiveness: 3 },
        { text: "你想先保留多少警戒，才會覺得剛好？", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
        { text: "那你就退開，不要再出現。", strategy: "ignore-escape", nextNode: "end-withdrawn", effectiveness: 1 },
      ],
    },
    "end-supported": { id: "end-supported", speaker: "archetype", text: "我可以用別的方式守著我們。", end: { summary: "你承認了保護意圖，也建立了不傷害的界線。", strategiesUsed: ["承認保護", "安全界線", "當下定向"], suggestion: "下一次可練習先辨識警戒，再選一個低風險的保護行動。", score: 3 } },
    "end-cautious": { id: "end-cautious", speaker: "archetype", text: "我還需要多看一陣子。", end: { summary: "這個部分開始考慮新選擇，但仍需要節奏。", strategiesUsed: ["好奇探索", "尊重節奏"], suggestion: "維持可預期的界線，從一個小小的選擇開始。", score: 2 } },
    "end-withdrawn": { id: "end-withdrawn", speaker: "archetype", text: "那我還是只能自己撐著。", end: { summary: "直接壓制讓保護者更孤立。", strategiesUsed: ["壓制"], suggestion: "下次先承認警戒的用意，再重申不傷害的界線。", score: 1 } },
  },
};
