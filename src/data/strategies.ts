export interface Strategy {
  id: string;
  name: string;
  description: string;
  effectivenessRange: string;
}

export const strategies: Strategy[] = [
  {
    id: "affirm-accept",
    name: "肯定與接納",
    description:
      "認可聲音的存在與其表達的感受，不加以否定或對抗。讓聽覺者與聲音都感受到被理解與被接納，為對話建立安全的基礎。這是最有效率的策略，能顯著降低聲音的敵意強度。",
    effectivenessRange: "3",
  },
  {
    id: "explore-curious",
    name: "探索與好奇",
    description:
      "以開放且好奇的態度探索聲音的內容、來源與意圖，不預設立場。透過提問與傾聽，幫助當事人更深入理解聲音背後的需求與訊息，促進新的覺察與洞察。",
    effectivenessRange: "2-3",
  },
  {
    id: "neutral-response",
    name: "中性回應",
    description:
      "以平穩、不帶情緒判斷的方式回應聲音，既不認同也不反對。維持情緒的穩定與距離感，避免被聲音的情緒捲入，同時保持對話的開放性。",
    effectivenessRange: "2",
  },
  {
    id: "confront-suppress",
    name: "對抗/壓制",
    description:
      "直接反駁或試圖壓制聲音的內容，以命令或強硬的態度要求聲音停止。這種策略通常會引發聲音更強烈的反彈，加劇對立與衝突，長期來看效果有限。",
    effectivenessRange: "1",
  },
  {
    id: "ignore-escape",
    name: "忽視/逃避",
    description:
      "選擇忽略聲音的存在或逃避面對其內容，假裝聽不見或轉移注意力。這種策略在短期內可能暫時減輕不適，但未處理的核心議題往往會以更強烈的方式再次浮現。",
    effectivenessRange: "1",
  },
];
