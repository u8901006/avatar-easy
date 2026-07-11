# Three Trauma Parts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 認同加害者、性化與羞恥三個創傷知情的互動角色。

**Architecture:** 擴充既有 id、角色資料與客戶端 script map。三個角色各有一份 `ArchetypeScript`；既有的 `generateStaticParams()` 從 `archetypes` 讀取資料，因此不新增頁面或調整引擎。

**Tech Stack:** Next.js 16.2.4、React 19、TypeScript 5、Node.js built-in test runner、Tailwind CSS。

## Global Constraints

- 穩定 id 必須是 `perpetrator-identified`、`sexualized`、`tadp-shame`；第三個顯示名稱必須是 `羞恥的部分`。
- 將三個原始 Markdown 原封不動存入 `content/sources/`。
- 對話必須是創傷知情、非診斷性且有清楚界線；不可正常化傷害、脅迫、羞辱或剝削。
- 不修改既有角色、對話引擎、計分或路由結構。

---

### Task 1: 建立會失敗的註冊驗證

**Files:**
- Create: `tests/three-trauma-parts.test.mjs`

**Interfaces:**
- Consumes: `VoiceArchetypeId`、archetype registry、client script registry、三個 source/script 檔案。
- Produces: 可由 Node 直接執行的防回歸測試。

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const root = new URL("../", import.meta.url);
const ids = ["perpetrator-identified", "sexualized", "tadp-shame"];

test("registers the three trauma parts with scripts and source material", async () => {
  const [types, archetypes, client] = await Promise.all([
    readFile(new URL("src/lib/types.ts", root), "utf8"),
    readFile(new URL("src/data/archetypes.ts", root), "utf8"),
    readFile(new URL("src/app/practice/[archetype]/DialogueClient.tsx", root), "utf8"),
  ]);
  for (const id of ids) {
    assert.match(types, new RegExp(`\\\"${id}\\\"`));
    assert.match(archetypes, new RegExp(`id: \\\"${id}\\\"`));
    assert.match(client, new RegExp(`\\\"${id}\\\":`));
    const script = await readFile(new URL(`src/data/scripts/${id}.ts`, root), "utf8");
    assert.match(script, new RegExp(`archetypeId: \\\"${id}\\\"`));
  }
  await Promise.all([
    readFile(new URL("content/sources/認同加害者的部分/認同加害者的部分.md", root)),
    readFile(new URL("content/sources/性化的部分/性化的部分.md", root)),
    readFile(new URL("content/sources/羞恥的部分/TADP羞恥的部分.md", root)),
  ]);
});
```

- [ ] **Step 2: Verify RED**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: FAIL because no new registration, script, or source exists.

### Task 2: Add the three metadata records and source documents

**Files:**
- Modify: `src/lib/types.ts`
- Modify: `src/data/archetypes.ts`
- Create: `content/sources/認同加害者的部分/認同加害者的部分.md`
- Create: `content/sources/性化的部分/性化的部分.md`
- Create: `content/sources/羞恥的部分/TADP羞恥的部分.md`

**Interfaces:**
- Produces: three valid `VoiceArchetypeId` values and matching `ArchetypeInfo` data used by cards and static params.

- [ ] **Step 1: Extend the type union**

```ts
  | "perpetrator-identified"
  | "sexualized"
  | "tadp-shame";
```

- [ ] **Step 2: Add all three `ArchetypeInfo` records before `getArchetype`**

Use source-derived Taiwanese Traditional Chinese content. The records must have complete values for `name`, `codename`, `emoji`, `chapter`, `color`, `features`, `protectiveFunction`, `origin`, `coreIntervention`, and `contentWarning`; `tadp-shame.name` is exactly `羞恥的部分`.

- [ ] **Step 3: Copy the original sources byte-for-byte**

Copy `D:/心理學/認同加害者的部分.md`, `D:/心理學/性化的部分.md`, and `D:/心理學/TADP羞恥的部分.md` to the listed repository paths.

- [ ] **Step 4: Verify still RED**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: FAIL only because scripts and their registry entries are absent.

### Task 3: Add and register the three dialogue scripts

**Files:**
- Create: `src/data/scripts/perpetrator-identified.ts`
- Create: `src/data/scripts/sexualized.ts`
- Create: `src/data/scripts/tadp-shame.ts`
- Modify: `src/app/practice/[archetype]/DialogueClient.tsx`

**Interfaces:**
- Consumes: `ArchetypeScript` from `@/lib/types`.
- Produces: three independently playble scripts, each with `start`, two choice rounds, three endings, 3/2/1 effectiveness choices, and an accurate `archetypeId`.

- [ ] **Step 1: Create each typed script**

```ts
import type { ArchetypeScript } from "@/lib/types";

export const perpetratorIdentifiedScript: ArchetypeScript = {
  archetypeId: "perpetrator-identified",
  openingNarration: "這是一段以安全、尊重與清楚界線為優先的練習。",
  totalRounds: 2,
  nodes: {
    start: { id: "start", speaker: "narrator", text: "一個嚴厲的部分正在觀察。", next: "r1" },
    r1: { id: "r1", speaker: "archetype", text: "別靠近；我必須掌控局面。", choices: [
      { text: "我會尊重你的警戒，也不會讓任何人傷害你。", strategy: "affirm-accept", nextNode: "r2", effectiveness: 3 },
      { text: "你最想防範的是什麼？", strategy: "explore-curious", nextNode: "r2", effectiveness: 2 },
      { text: "你不該這樣說話。", strategy: "confront-suppress", nextNode: "r2", effectiveness: 1 },
    ], tip: { general: "先承認保護意圖，再維持不傷害自己與他人的界線。", clinical: "以穩定、好奇與界線感回應。" } },
    r2: { id: "r2", speaker: "archetype", text: "掌控曾讓我們活下來。", choices: [
      { text: "現在有更多選擇，我們可以慢慢來。", strategy: "affirm-accept", nextNode: "end-safe", effectiveness: 3 },
      { text: "願意先把警戒降一點點嗎？", strategy: "explore-curious", nextNode: "end-cautious", effectiveness: 2 },
      { text: "你必須立刻停止控制。", strategy: "confront-suppress", nextNode: "end-boundaried", effectiveness: 1 },
    ] },
    "end-safe": { id: "end-safe", speaker: "archetype", text: "我可以先看著，不必接管。", end: { summary: "你同時承認了保護與安全界線。", strategiesUsed: ["承認保護意圖"], suggestion: "回到當下安全線索。", score: 3 } },
    "end-cautious": { id: "end-cautious", speaker: "archetype", text: "我還需要時間。", end: { summary: "這個部分開始被理解。", strategiesUsed: ["好奇探索"], suggestion: "從可承受的小步驟開始。", score: 2 } },
    "end-boundaried": { id: "end-boundaried", speaker: "archetype", text: "我仍會警戒。", end: { summary: "界線被提出，連結尚未建立。", strategiesUsed: ["界線"], suggestion: "以不批判的語氣重新開啟對話。", score: 1 } },
  },
};
```

Use the same shape for `sexualized` and `tadp-shame`, with source-specific wording. The sexualized dialogue must centre consent and boundaries. The shame dialogue must not affirm self-contempt or defectiveness.

- [ ] **Step 2: Import and add the three entries to `scripts`**

```ts
import { perpetratorIdentifiedScript } from "@/data/scripts/perpetrator-identified";
import { sexualizedScript } from "@/data/scripts/sexualized";
import { tadpShameScript } from "@/data/scripts/tadp-shame";

"perpetrator-identified": perpetratorIdentifiedScript,
sexualized: sexualizedScript,
"tadp-shame": tadpShameScript,
```

- [ ] **Step 3: Verify GREEN**

Run: `node --test tests/three-trauma-parts.test.mjs`

Expected: PASS with one passing subtest.

### Task 4: Verify integration and commit

**Files:**
- Modify: all Task 1–3 files and this plan/spec documentation.

- [ ] **Step 1: Run static checks**

Run: `pnpm lint`

Expected: exit 0 with no ESLint errors.

- [ ] **Step 2: Run a production build**

Run: `pnpm build`

Expected: exit 0; static output includes each `/practice/<id>` and `/review/<id>` route.

- [ ] **Step 3: Verify and commit**

Run: `git diff --check`

Expected: exit 0. Then stage the plan, spec, tests, source, and application files and create `feat: add three trauma practice parts`.

## Plan self-review

- Tasks 2–3 cover all ids, metadata, warnings, source files, scripts, and registrations; Task 4 covers static route generation through the existing data-driven pages.
- The identifiers and file paths are consistent across test, data, source, and client map.
- No engine, scoring, route, or existing-role changes are planned.
