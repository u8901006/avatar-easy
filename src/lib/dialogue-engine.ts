import {
  EngineState,
  Mode,
  ArchetypeScript,
  DialogueNode,
  DialogueEnding,
} from "@/lib/types";

export function resolveAutoAdvance(
  state: EngineState,
  script: ArchetypeScript
): EngineState {
  let current = state;
  let node = script.nodes[current.currentNodeId];

  while (node && node.next && (!node.choices || node.choices.length === 0) && !node.end) {
    current = {
      ...current,
      currentNodeId: node.next,
      history: [
        ...current.history,
        { speaker: node.speaker, text: node.text },
      ],
    };
    node = script.nodes[current.currentNodeId];
  }

  return current;
}

export function init(script: ArchetypeScript, mode: Mode): EngineState {
  const raw: EngineState = {
    currentNodeId: "start",
    history: [],
    scores: [],
    strategyLog: [],
    mode,
  };
  return resolveAutoAdvance(raw, script);
}

export function currentNode(
  state: EngineState,
  script: ArchetypeScript
): DialogueNode {
  return script.nodes[state.currentNodeId];
}

export function choose(
  state: EngineState,
  choiceIndex: number,
  script: ArchetypeScript
): EngineState {
  const node = script.nodes[state.currentNodeId];
  const choice = node.choices![choiceIndex];

  return {
    currentNodeId: choice.nextNode,
    history: [
      ...state.history,
      { speaker: node.speaker, text: node.text },
      { speaker: "user", text: choice.text },
    ],
    scores: [...state.scores, choice.effectiveness],
    strategyLog: [...state.strategyLog, choice.strategy],
    mode: state.mode,
  };
}

export function isFinished(
  state: EngineState,
  script: ArchetypeScript
): boolean {
  const node = script.nodes[state.currentNodeId];
  if (!node) return true;
  return node.end !== undefined;
}

export function getResult(
  state: EngineState,
  script: ArchetypeScript
): DialogueEnding {
  return script.nodes[state.currentNodeId].end!;
}

export function getProgress(
  state: EngineState,
  script: ArchetypeScript
): { current: number; total: number } {
  return {
    current: state.history.filter((h) => h.speaker === "archetype").length,
    total: script.totalRounds,
  };
}
