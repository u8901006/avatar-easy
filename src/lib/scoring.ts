import { EngineState } from "@/lib/types";

export function calculateScore(state: EngineState): number {
  if (state.scores.length === 0) return 1;

  const avg =
    state.scores.reduce((sum, s) => sum + s, 0) / state.scores.length;
  return 1 + (avg - 1) * 2;
}

export function getScoreLabel(score: number): string {
  if (score < 2) return "需要更多練習";
  if (score < 3) return "持續進步中";
  if (score < 4) return "良好的應對方式";
  return "優秀的介入技巧";
}

export function getStrategyBreakdown(
  state: EngineState
): Record<string, number> {
  const breakdown: Record<string, number> = {};

  for (const strategy of state.strategyLog) {
    breakdown[strategy] = (breakdown[strategy] ?? 0) + 1;
  }

  return breakdown;
}
