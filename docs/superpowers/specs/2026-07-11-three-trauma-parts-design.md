# Three Trauma Parts — Design Spec

- **Date:** 2026-07-11
- **Project:** `avatar-easy`
- **Status:** Approved for specification review
- **Source material:**
  - `D:/心理學/認同加害者的部分.md`
  - `D:/心理學/性化的部分.md`
  - `D:/心理學/TADP羞恥的部分.md`

## Purpose

Add three new trauma-informed practice archetypes to the existing Avatar Easy
experience. Each archetype will appear in the practice catalogue, have its own
guided dialogue and review route, and retain its original Markdown source in
the repository.

## Scope

### New archetypes

| Stable id | Display name | Source |
| --- | --- | --- |
| `perpetrator-identified` | 認同加害者的部分 | `認同加害者的部分.md` |
| `sexualized` | 性化的部分 | `性化的部分.md` |
| `tadp-shame` | 羞恥的部分 | `TADP羞恥的部分.md` |

Each entry will include the same metadata supplied by the existing
`ArchetypeInfo` interface: its name, codename, emoji, chapter, colour,
observable features, protective function, origin, core intervention, and
content warning.

### Dialogue experience

Each archetype will have an independent script in `src/data/scripts/`. Scripts
will follow the existing branching format: an opening narration, several
archetype responses, three choices per decision point with effectiveness scores
of 3/2/1, trauma-informed general tips, clinician-facing tips where appropriate,
and a scored ending. The dialogue language will avoid validating harm, sexual
coercion, humiliation, or abusive power; it will acknowledge the protective
function while setting clear boundaries and prioritising safety.

The app already derives the practice list and static practice/review routes from
the shared archetype data, so the three additions will use the existing pages,
scoring engine, review experience, and mode switch without new routes or engine
logic.

### Source preservation

The three original Markdown files will be copied without alteration into
`content/sources/`, one folder per archetype. They are source material only and
will not be rendered directly in the product.

## Changes by file area

| Area | Change |
| --- | --- |
| `src/lib/types.ts` | Add the three stable identifiers to `VoiceArchetypeId`. |
| `src/data/archetypes.ts` | Add three complete metadata records. |
| `src/data/scripts/` | Add one typed dialogue script per archetype. |
| `src/app/practice/[archetype]/DialogueClient.tsx` | Register the three scripts in the existing script map. |
| `content/sources/` | Preserve each supplied Markdown source in a descriptive directory. |
| Tests | Add focused tests for each script's registration and valid dialogue traversal, using the repository's available test tooling or a minimal existing-compatible setup. |

## Error handling and safety

- Unknown archetype identifiers continue to use the existing not-found/error
  behaviour; no new fallback aliases are introduced.
- Every dialogue choice will point to a real node, and every reachable path will
  terminate in an ending.
- The content warnings will explicitly mention the relevant potentially
  activating material and encourage pausing or seeking qualified support where
  needed.
- Self-help mode will use non-clinical, non-diagnostic wording. Clinical tips
  will be informational and not a substitute for supervision or treatment.

## Verification

1. Write tests first for the three newly registered archetypes and their script
   shape/traversal.
2. Confirm each new test fails before its matching production change exists.
3. Run the new tests, `pnpm lint`, and `pnpm build`.
4. Confirm the catalogue exposes all three additions and their practice/review
   routes are included in the static build output.

## Out of scope

- Changing the dialogue engine, scoring rules, visual design system, or the ten
  existing archetypes.
- Treating the source documents as verified clinical literature or exposing them
  as public reference articles.
- Adding new advice, crisis-routing infrastructure, authentication, or data
  collection.
