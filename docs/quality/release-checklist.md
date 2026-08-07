# Release Checklist

Use this checklist before publishing a new version.

## Mandatory Gates

- [ ] `npm run quality` passes.
- [ ] `npm run doctor` passes.
- [ ] `npm run coverage:gate` passes at 100%.

## Artifact Coverage

- [ ] Agents, instructions, skills, specs, templates, evals, examples, and prompts are present.
- [ ] Traceability matrix is updated and all rows are marked Covered.
- [ ] Agent interaction map reflects the current orchestration model.

## Consistency and Documentation

- [ ] `docs/Workflows.md` paths are valid.
- [ ] README commands match package scripts.
- [ ] `mcpee.json` and `platform.json` stay aligned with repository artifacts.

## Validation Evidence

- [ ] `evals/coverage-report.json` generated from the current revision.
- [ ] Coverage report score is 100%.
- [ ] Dry-run package check is green (`npm pack --dry-run`).
