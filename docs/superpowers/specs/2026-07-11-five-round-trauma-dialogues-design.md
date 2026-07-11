# Five-Round Trauma Dialogues — Design Spec

- **Date:** 2026-07-11
- **Project:** `avatar-easy`
- **Status:** Approved for specification review
- **Scope:** `perpetrator-identified`, `sexualized`, and `tadp-shame`

## Goal

Replace each of the three recently added two-round scripts with an independent, five-round branching dialogue. The upgraded scripts will match the depth of the existing archetype practice experience while using clear, natural zh-TW explanations.

## Dialogue structure

Every script will retain a narrator start node and provide five sequential choice rounds. Each round offers three responses with effectiveness scores of 3, 2, and 1, then branches to an archetype response appropriate to that choice. All reachable paths terminate in a scored ending.

| Round | Shared purpose |
| --- | --- |
| 1 | Recognise the current protective strategy without judgement. |
| 2 | Explore its survival function and trauma-time logic. |
| 3 | Respond to its underlying need, fear, or shame. |
| 4 | Establish safety, consent, and non-harmful relational boundaries. |
| 5 | Integrate a small present-day choice and transition to a fitting ending. |

## Archetype-specific content

- **認同加害者的部分:** distinguish protection from harm, address power, control, and internalised punitive rules, and set non-harmful boundaries.
- **性化的部分:** treat behaviour as a possible survival reenactment rather than manipulation; foreground consent, pacing, choice, and relational safety without reproducing sexualised content.
- **羞恥的部分:** avoid arguing with or confirming self-contempt; use paced, steady companionship that allows distance and does not demand disclosure.

## zh-TW explanation standards

- General tips use concise Taiwanese Traditional Chinese, plain language, and non-diagnostic self-help framing.
- Clinical tips explain the trauma-informed rationale in Taiwanese clinical language, including pacing, boundaries, consent, and the relevant protective function.
- Endings give a realistic next step rather than claiming resolution or cure.
- The scripts never normalise coercion, abusive behaviour, humiliation, exploitation, or self-hatred.

## Implementation boundaries

- Rewrite only the three files in `src/data/scripts/` and the focused regression test needed to prove their expanded structure.
- Keep archetype ids, metadata, source Markdown, routes, dialogue engine, scoring model, and UI components unchanged.
- `totalRounds` will be exactly `5` for each of the three scripts.

## Verification

1. Add assertions that each target script declares `totalRounds: 5`, has nodes for `r1` through `r5`, and keeps each choice target within its node map.
2. Run the regression test and confirm it fails before the script expansion.
3. Rewrite the scripts, then run the regression test, `pnpm lint`, and `pnpm build`.
4. Confirm the static build still includes the three practice and review routes.

## Spec self-review

- The scope names all three scripts and excludes unrelated code paths.
- Five rounds are explicitly defined as five user choice rounds, not five narrator-only nodes.
- Safety and zh-TW requirements are tied to each archetype's distinct content.
- Verification covers structure, registration preservation, lint, and build.
