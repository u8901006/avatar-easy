import type { ArchetypeScript } from "@/lib/types";

export const tadpShameScript: ArchetypeScript = {
  archetypeId: "tadp-shame",
  openingNarration: "這是一段放慢節奏的五步練習。你可以保有距離，不需要立刻說出任何不想說的事。",
  totalRounds: 5,
  nodes: {
    start: { id: "start", speaker: "narrator", text: "一個想要縮小、隱形的部分似乎正在靠近。", next: "r1" },
    r1: {
      id: "r1", speaker: "archetype", text: "不要看我。要是你知道真正的我，你也會離開。",
      choices: [
        { text: "我不會逼你現身；你可以照自己的速度待在這裡。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
        { text: "什麼讓被看見聽起來這麼危險？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
        { text: "你沒有理由這樣想。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
      ],
      tip: { general: "不用急著證明自己沒有問題；先讓這個部分知道，它可以保有距離，也不必完全消失。", clinical: "避免直接反駁羞恥信念或催促揭露；以穩定臨在、可選擇的距離與小幅度的當下定向降低威脅感。" },
    },
    r2: {
      id: "r2", speaker: "archetype", text: "我習慣先怪自己，這樣至少不會再被別人怪。",
      choices: [
        { text: "這像是你以前為了撐過危險而學會的方法。", strategy: "affirm-accept", nextNode: "r3", effectiveness: 3 },
        { text: "先怪自己當時幫你避開了什麼？", strategy: "explore-curious", nextNode: "r3", effectiveness: 2 },
        { text: "不要再把錯都往自己身上攬。", strategy: "confront-suppress", nextNode: "r3", effectiveness: 1 },
      ],
    },
    r3: {
      id: "r3", speaker: "archetype", text: "如果別人知道我有多糟，他們一定不會留下來。",
      choices: [
        { text: "我聽見你害怕失去關係；現在不用急著證明任何事。", strategy: "affirm-accept", nextNode: "r4", effectiveness: 3 },
        { text: "你希望別人怎麼靠近，才不會讓你覺得太危險？", strategy: "explore-curious", nextNode: "r4", effectiveness: 2 },
        { text: "你想太多了，大家不會在意。", strategy: "confront-suppress", nextNode: "r4", effectiveness: 1 },
      ],
      tip: { general: "羞恥感不需要立刻被說服或糾正；先練習讓自己被陪伴，而不是被催促。", clinical: "把退縮視為保護而非抗拒；確認關係中的可預期性與選擇權，避免以保證或辯論覆蓋主觀經驗。" },
    },
    r4: {
      id: "r4", speaker: "archetype", text: "我不知道怎麼待在關係裡，又不覺得自己很礙事。",
      choices: [
        { text: "你可以只待一小會兒；不需要表現得完美才值得存在。", strategy: "affirm-accept", nextNode: "r5", effectiveness: 3 },
        { text: "現在待在這裡幾分鐘，對你來說會不會太多？", strategy: "explore-curious", nextNode: "r5", effectiveness: 2 },
        { text: "你得學著不要那麼敏感。", strategy: "confront-suppress", nextNode: "r5", effectiveness: 1 },
      ],
      tip: { general: "把目標縮小成『多待一點點』就好；可以同時感到不安，也可以慢慢留在當下。", clinical: "以可容忍的微小停留取代要求正向思考；搭配身體感受與環境線索，支持漸進式的當下定向。" },
    },
    r5: {
      id: "r5", speaker: "archetype", text: "也許我可以不完全躲起來，只是先站在門口。",
      choices: [
        { text: "站在門口已經是很重要的選擇；我會尊重你的速度。", strategy: "affirm-accept", nextNode: "end-supported", effectiveness: 3 },
        { text: "你想先留多久，或需要什麼讓自己安心？", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
        { text: "既然不想進來，就不要勉強。", strategy: "ignore-escape", nextNode: "end-withdrawn", effectiveness: 1 },
      ],
    },
    "end-supported": { id: "end-supported", speaker: "archetype", text: "我可以先不用消失。", end: { summary: "你以穩定陪伴取代了催促或反駁。", strategiesUsed: ["穩定臨在", "尊重距離", "當下定向"], suggestion: "下次可再次確認：這個部分可以選擇靠近、停留或離開。", score: 3 } },
    "end-cautious": { id: "end-cautious", speaker: "archetype", text: "我還想待在遠一點的地方。", end: { summary: "這個部分保留距離，但沒有完全退出。", strategiesUsed: ["好奇探索", "尊重節奏"], suggestion: "維持一致的語氣與界線，讓信任在小幅度經驗中累積。", score: 2 } },
    "end-withdrawn": { id: "end-withdrawn", speaker: "archetype", text: "我知道，我果然很麻煩。", end: { summary: "忽略或壓制加重了自責與退縮。", strategiesUsed: ["逃避"], suggestion: "下次避免把退縮當成問題，先回到不評判的陪伴。", score: 1 } },
  },
};
