# BoostDesign - Workflows

Comandos rápidos para tareas comunes de UX/UI.

## 🎯 Auditoría de Proyecto

```text
@ux-ui-expert audita mi proyecto y dame un assessment completo
```

Resultado: Nivel de madurez, tokens faltantes, problemas de consistencia, brechas de accesibilidad.

## 🎨 Design System

```text
@design-system-architect crea design tokens para mi marca
- Colores primarios y secundarios
- Escala tipográfica
- Sistema de espaciado (8px grid)
- Soporte claro/oscuro
```

Resultado: Paleta de colores, variables CSS, temas, documentación.

---

## 🗂️ Catálogo de Componentes

```text
@component-inventory-mapper cataloga todos mis componentes y encuentra duplicados
```

Resultado: Lista de componentes, duplicados identificados, plan de consolidación.

---

## 🎨 Integración Figma

```text
@figma-design-auditor extrae design tokens de mi archivo Figma
```

Prerequisito: ID del archivo Figma + Personal Access Token.

Resultado: Tokens de color, tipografía, espaciado en CSS.

---

## 📚 Storybook

Usa el skill `storybook-component-documentation` para documentar interactivamente:

```text
Show me how to set up Storybook with accessibility addon (a11y)
```

Resultado: Instalación, configuración, stories de componentes con validación WCAG automática.

---

## ♿ Accesibilidad WCAG

```text
Usa el skill aria-accessibility-patterns para auditar cumplimiento WCAG 2.1 AA
- Contraste de color: 4.5:1 mínimo
- Touch targets: 44×44px mínimo
- Navegación por teclado: Tab, Enter, Escape
- ARIA roles, estados, propiedades
```

Resultado: Reporte de cumplimiento, recomendaciones prioritarias.

---

## 🔗 DevOps → Spec UX (desde el backlog)

### Con Azure DevOps o Jira (conexión directa)

```text
@devops-connector busca tareas UX en el sprint actual
```

La skill solicita autenticación (PAT), lista tareas y devuelve el contenido. Después:

```text
@functional-to-ux-spec interpreta tarea #12345
```

Resultado: Especificación UX completa (intención, flujo, wireframe, microcopy, estados, accesibilidad, criterios de aceptación).

### Sin conexión (copy-paste)

```text
@functional-to-ux-spec interpreta este requerimiento:
"Como cliente quiero..."
```

Mismo resultado. La skill funciona igual con texto directo.

**Plantilla de salida:** `skills/functional-to-ux-spec/references/ux-spec-template.md`
