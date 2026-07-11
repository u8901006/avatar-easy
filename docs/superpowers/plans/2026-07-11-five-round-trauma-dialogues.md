# Five-Round Trauma Dialogues Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the three two-round trauma-part dialogues with independent five-round branching scripts and detailed zh-TW guidance.

**Architecture:** Keep the existing `ArchetypeScript` data model and dialogue engine. Each script will expose `start`, five choice rounds (`r1`–`r5`), choice-specific responses for rounds two through five, and three scored endings; no router, UI, scoring, or metadata changes are needed.

**Tech Stack:** Next.js 16.2.4, React 19, TypeScript 5, Node.js built-in test runner.

## Global Constraints

- Modify only `src/data/scripts/perpetrator-identified.ts`, `src/data/scripts/sexualized.ts`, `src/data/scripts/tadp-shame.ts`, and `tests/three-trauma-parts.test.mjs`.
- Set every target script's `totalRounds` to exactly `5`.
- Every choice uses an effectiveness of 3, 2, or 1 and targets a defined node.
- General tips are plain, natural zh-TW; clinical tips use trauma-informed zh-TW and do not diagnose or promise cure.
- Do not normalise coercion, abusive conduct, humiliation, exploitation, self-hatred, or non-consensual behaviour.

---

### Task 1: Add a failing five-round structure test

**Files:**
- Modify: `tests/three-trauma-parts.test.mjs`

**Interfaces:**
- Consumes: the three script source files.
- Produces: `assertFiveRoundScript(source, id)`, which verifies the required round count, nodes, tips, endings, and valid choice targets without needing a TypeScript runtime loader.

- [ ] **Step 1: Add the structural assertion helper and call it for every target script**

```js
function assertFiveRoundScript(source, id) {
  assert.ok(source.includes(`archetypeId: \"${id}\"`));
  assert.ok(source.includes("totalRounds: 5"));
  for (const round of ["r1", "r2", "r3", "r4", "r5"]) {
    assert.match(source, new RegExp(`id: \\\"${round}\\\"`));
  }
  assert.match(source, /general: \"[^\"]{20,}\"/);
  assert.match(source, /clinical: \"[^\"]{20,}\"/);
  for (const ending of ["end-supported", "end-cautious", "end-withdrawn"]) {
    assert.match(source, new RegExp(`id: \\\"${ending}\\\"`));
  }
  const nodeIds = new Set([...source.matchAll(/id: \"([^\"]+)\"/g)].map((m) => m[1]));
  const targets = [...source.matchAll(/nextNode: \"([^\"]+)\"/g)].map((m) => m[1]);
  assert.ok(targets.length >= 15);
  for (const target of targets) assert.ok(nodeIds.has(target));
}
```

Call `assertFiveRoundScript(script, id)` immediately after the existing `archetypeId` assertion.

- [ ] **Step 2: Verify RED**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: FAIL because all three scripts currently declare `totalRounds: 2`.

### Task 2: Rewrite 認同加害者的部分 as a five-round script

**Files:**
- Modify: `src/data/scripts/perpetrator-identified.ts`
- Test: `tests/three-trauma-parts.test.mjs`

**Interfaces:**
- Produces: `perpetratorIdentifiedScript: ArchetypeScript` with five choice rounds and `end-supported`, `end-cautious`, and `end-withdrawn` endings.

- [ ] **Step 1: Replace the two-round node map with this round progression**

```text
r1: name the vigilance without endorsing harm
r2: explore the need to control and its survival logic
r3: distinguish protection from internal or external punishment
r4: set a non-harmful boundary and present-time safety cue
r5: negotiate one smaller, safer protective role
```

Each round has supportive, curious, and pressuring responses (effectiveness 3/2/1). Route each response to a distinct `r<n>-*` node whose text reflects the selected approach; each of those nodes offers the three choices for the next round. Use `end-supported`, `end-cautious`, and `end-withdrawn` after round five.

- [ ] **Step 2: Use this zh-TW language standard in tips**

```ts
general: "先承認這份警戒曾經想保護你，同時清楚表達：現在不需要靠傷害自己或別人來換取安全。"
clinical: "以穩定、好奇與明確界線回應控制性語言；區分保護功能與傷害行為，避免陷入權力對抗。"
```

- [ ] **Step 3: Verify the focused test passes for this script after its rewrite**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: the test still fails only for the two remaining scripts.

### Task 3: Rewrite 性化的部分 as a five-round script

**Files:**
- Modify: `src/data/scripts/sexualized.ts`
- Test: `tests/three-trauma-parts.test.mjs`

**Interfaces:**
- Produces: `sexualizedScript: ArchetypeScript` with the same required node topology and three endings.

- [ ] **Step 1: Replace the two-round node map with this round progression**

```text
r1: meet the wish to be wanted without labelling it manipulation
r2: explore how compliance became linked to safety or connection
r3: identify the need for choice, pacing, and protection
r4: practise a clear consent and relational-boundary statement
r5: choose one non-sexualised, self-directed form of connection or distance
```

Keep all text non-explicit. Each choice must route to an approach-specific next-round node, then to `end-supported`, `end-cautious`, or `end-withdrawn` after round five.

- [ ] **Step 2: Use this zh-TW language standard in tips**

```ts
general: "你不需要迎合、討好或越過自己的界線來換取關係；可以先從一個小小的拒絕或暫停開始。"
clinical: "將性化表現理解為可能的生存重演，而非意圖或操弄；以不羞辱的方式維持明確同意、界線與節奏。"
```

- [ ] **Step 3: Verify the focused test passes for this script after its rewrite**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: the test still fails only for the shame script.

### Task 4: Rewrite 羞恥的部分 as a five-round script

**Files:**
- Modify: `src/data/scripts/tadp-shame.ts`
- Test: `tests/three-trauma-parts.test.mjs`

**Interfaces:**
- Produces: `tadpShameScript: ArchetypeScript` with the same five-round topology and three endings.

- [ ] **Step 1: Replace the two-round node map with this round progression**

```text
r1: notice withdrawal and allow distance without demanding disclosure
r2: explore how self-blame once reduced danger or preserved attachment
r3: respond to the fear of being seen without confirming defectiveness
r4: offer steady present-time companionship instead of reassurance or correction
r5: choose a small, tolerable way to remain present without disappearing
```

Use approach-specific next-round nodes and the three common ending ids. Never put self-contempt, contamination, or unworthiness in a user response as a fact to validate.

- [ ] **Step 2: Use this zh-TW language standard in tips**

```ts
general: "不用急著證明自己沒有問題；先讓這個部分知道，它可以保有距離，也不必完全消失。"
clinical: "避免直接反駁羞恥信念或催促揭露；以穩定臨在、可選擇的距離與小幅度的當下定向降低威脅感。"
```

- [ ] **Step 3: Verify GREEN**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: PASS with every script meeting the five-round structural checks.

### Task 5: Run integration verification and commit

**Files:**
- Modify: `docs/superpowers/specs/2026-07-11-five-round-trauma-dialogues-design.md`
- Create: `docs/superpowers/plans/2026-07-11-five-round-trauma-dialogues.md`
- Modify: Task 1–4 files.

- [ ] **Step 1: Run lint and build**

Run: `pnpm lint && pnpm build`

Expected: both commands exit 0; the build retains all three practice and review static routes.

- [ ] **Step 2: Inspect and commit**

Run: `git diff --check`

Expected: exit 0. Then commit the plan, test, and three scripts with `feat: expand trauma dialogues to five rounds`.

## Plan self-review

- Tasks 2–4 map directly to the three archetype-specific content requirements and define five choice rounds for each script.
- Task 1 checks round count, node ids, zh-TW tips, ending ids, and all choice targets.
- The plan does not alter ids, routes, metadata, UI, scoring, or the dialogue engine.
