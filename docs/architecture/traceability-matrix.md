# Traceability Matrix

This matrix links each capability to the concrete artifacts required to consider coverage complete.

|Capability|Entry Agent|Skills|Spec|Template|Example|Status|
|---|---|---|---|---|---|---|
|UX/UI Audit|@ux-ui-expert|ux-audit, aria-accessibility-patterns, screenshot-reporter|specs/ux-audit-spec.md|templates/eval-report.md, templates/accessibility-audit.md|examples/complete-audit-flow.md|Covered|
|Design System Baseline|@design-system-architect|design-system-generator, figma-integration|specs/design-system-spec.md|templates/agent-workflow.md|examples/design-tokens-baseline.md|Covered|
|Functional to UX Spec|@ux-ui-expert|functional-to-ux-spec, devops-connector|specs/functional-to-ux-spec-spec.md|templates/spec-from-functional.md|examples/complete-audit-flow.md|Covered|
|Component Governance|@component-inventory-mapper|component-inventory, storybook-component-documentation|specs/design-system-spec.md|templates/component-story.md|examples/design-tokens-baseline.md|Covered|
|Visual Exploration (Optional)|@ux-ui-expert|hallmark, design-system-generator, ux-audit|specs/hallmark-bridge-spec.md|templates/hallmark-handoff.md|examples/hallmark-to-ux-flow.md|Covered|

## Rules

- A capability is "covered" only when all columns have at least one valid artifact.
- Cross-file references must resolve from docs, manifests, and skills.
- The doctor command must fail when mandatory mappings are missing.
