# Example: Complete UX Audit Flow

## Goal

Run a full UX/UI audit and produce a prioritized remediation plan.

## Step 1: Trigger main audit

Prompt:

```text
@ux-ui-expert audita mi proyecto y dame un assessment completo
```

Expected output:
- Maturity snapshot.
- Main UX risks.
- Accessibility risk summary.

## Step 2: Deepen accessibility findings

Prompt:

```text
Usa el skill aria-accessibility-patterns para validar WCAG 2.1 AA en formularios y navegación
```

Expected output:
- WCAG-specific violations.
- Keyboard and ARIA recommendations.

## Step 3: Generate normalized report

Template to use: `templates/eval-report.md`

Expected sections:
- Severity split.
- Coverage metrics.
- Action plan by sprint.

## Step 4: Define execution priorities

Prompt:

```text
@ux-ui-expert prioriza hallazgos por impacto de negocio y esfuerzo de implementación
```

Expected output:
- Priority matrix.
- Sprint-ready backlog actions.

## Completion Criteria

- [ ] Report includes critical/major/minor findings.
- [ ] Includes WCAG section with concrete fixes.
- [ ] Includes measurable success metrics.
