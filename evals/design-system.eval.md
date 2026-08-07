# Design System Evaluation

## Purpose

Measure whether the design system baseline is complete, consistent, and ready for production use.

## Scope

- Token coverage: color, typography, spacing, radii, shadows.
- Component baseline: button, input, card, alert.
- Theme support: light and dark compatibility.

## Checklist

- [ ] `docs/design-tokens/palette.json` exists and has semantic color groups.
- [ ] `docs/design-tokens/typography.json` defines families, sizes, and weights.
- [ ] `docs/design-tokens/tokens.json` includes spacing/radius/shadow scales.
- [ ] `docs/design-tokens/patterns.json` maps required components.
- [ ] No hardcoded visual values in templates where tokens should be used.

## Scoring

- 0 = missing or broken
- 1 = partially defined
- 2 = complete and consistent

Maximum score: 10
Pass threshold: 8

## Result Template

- Date:
- Auditor:
- Score:
- Status: PASS/FAIL
- Findings:
- Remediation Plan:
