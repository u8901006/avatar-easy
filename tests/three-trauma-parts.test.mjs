import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const root = new URL("../", import.meta.url);
const ids = ["perpetrator-identified", "sexualized", "tadp-shame"];

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

  const nodeIds = new Set(
    [...source.matchAll(/id: \"([^\"]+)\"/g)].map((match) => match[1])
  );
  const targets = [...source.matchAll(/nextNode: \"([^\"]+)\"/g)].map(
    (match) => match[1]
  );

  assert.ok(targets.length >= 15);
  for (const target of targets) assert.ok(nodeIds.has(target));
}

test("registers the three trauma parts with scripts and source material", async () => {
  const [types, archetypes, client] = await Promise.all([
    readFile(new URL("src/lib/types.ts", root), "utf8"),
    readFile(new URL("src/data/archetypes.ts", root), "utf8"),
    readFile(
      new URL("src/app/practice/[archetype]/DialogueClient.tsx", root),
      "utf8"
    ),
  ]);

  for (const id of ids) {
    assert.ok(types.includes(`\"${id}\"`));
    assert.ok(archetypes.includes(`id: \"${id}\"`));
    assert.ok(
      client.includes(`\"${id}\":`) || client.includes(`${id}:`)
    );

    const script = await readFile(
      new URL(`src/data/scripts/${id}.ts`, root),
      "utf8"
    );
    assert.ok(script.includes(`archetypeId: \"${id}\"`));
    assertFiveRoundScript(script, id);
  }

  await Promise.all([
    readFile(
      new URL("content/sources/認同加害者的部分/認同加害者的部分.md", root)
    ),
    readFile(new URL("content/sources/性化的部分/性化的部分.md", root)),
    readFile(
      new URL("content/sources/羞恥的部分/TADP羞恥的部分.md", root)
    ),
  ]);
});
