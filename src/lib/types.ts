export type VoiceArchetypeId =
  | "hostile-aggressive"
  | "self-harm-suicidal"
  | "critical"
  | "perpetrator-imitator"
  | "fear-distrust";

export type Mode = "professional" | "self-help";

export interface DialogueNode {
  id: string;
  speaker: "archetype" | "narrator";
  text: string;
  choices?: DialogueChoice[];
  tip?: {
    general: string;
    clinical?: string;
  };
  next?: string;
  end?: DialogueEnding;
}

export interface DialogueChoice {
  text: string;
  strategy: string;
  nextNode: string;
  effectiveness: 1 | 2 | 3;
}

export interface DialogueEnding {
  summary: string;
  strategiesUsed: string[];
  suggestion: string;
  score: number;
}

export interface ArchetypeScript {
  archetypeId: VoiceArchetypeId;
  openingNarration: string;
  nodes: Record<string, DialogueNode>;
  totalRounds: number;
}

export interface ArchetypeInfo {
  id: VoiceArchetypeId;
  name: string;
  codename: string;
  emoji: string;
  chapter: string;
  features: string;
  protectiveFunction: string;
  origin: string;
  coreIntervention: string;
  contentWarning: string;
  color: string;
}

export interface EngineState {
  currentNodeId: string;
  history: Array<{ speaker: string; text: string }>;
  scores: number[];
  strategyLog: string[];
  mode: Mode;
}
