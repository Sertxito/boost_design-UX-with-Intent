# Example: Design Tokens Baseline

## Goal

Create a complete initial token baseline for a new project.

## Step 1: Create token foundation

Prompt:

```text
@design-system-architect crea design tokens para mi marca con soporte light/dark
```

Expected output:
- Palette proposal.
- Typography scale.
- Spacing, radius, and shadow guidance.

## Step 2: Validate mandatory patterns

Prompt:

```text
@component-inventory-mapper define patrones obligatorios para una app web tipo dashboard
```

Expected output:
- Core component set.
- Variant requirements.

## Step 3: Align accessibility constraints

Prompt:

```text
@ux-ui-expert verifica que los tokens cumplan WCAG AA y ajusta recomendaciones
```

Expected output:
- Contrast and touch-target constraints.
- Risk notes for non-compliant combinations.

## Step 4: Persist artifacts

Target files:
- `docs/design-tokens/palette.json`
- `docs/design-tokens/typography.json`
- `docs/design-tokens/tokens.json`
- `docs/design-tokens/patterns.json`

## Completion Criteria

- [ ] All token files are populated.
- [ ] Semantic naming and non-duplicated keys.
- [ ] Accessibility constraints explicitly documented.
