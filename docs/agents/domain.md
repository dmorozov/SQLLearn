# Domain docs

This repo uses a single-context layout.

## Before exploring, read these

- `CONTEXT.md` at the repo root for domain terminology.
- ADRs under `docs/adr/` that touch the area being explored.

If these files do not exist, proceed silently. The `/domain-modeling` skill, also reached through `/grill-with-docs` and `/improve-codebase-architecture`, creates them lazily when terms or decisions are resolved.

## File structure

- `CONTEXT.md` — the repo's domain glossary.
- `docs/adr/NNNN-<decision-slug>.md` — numbered architectural decision records.

## Use the glossary's vocabulary

When naming a domain concept in an issue title, proposal, hypothesis, or test, use the term defined in `CONTEXT.md`.

If a needed concept is missing, check whether an existing term already fits. Note real gaps for `/domain-modeling`.

## Flag ADR conflicts

If a proposal contradicts an existing ADR, identify the ADR and explain why the decision should be reconsidered.
