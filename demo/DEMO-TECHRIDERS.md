# BoostDesign Demo — TechRiders (Caso Real)

> Paso a paso: cómo rellenar BoostDesign y generar especificaciones para https://www.techriders.es/

---

## 📋 Contexto: TechRiders

**Qué es:**
- Comunidad tecnológica en Madrid (desde 2013)
- Ofrece charlas, tutoriales y eventos **gratuitos**
- 10K+ seguidores, 1300+ tutoriales, 500+ eventos

**Target:**
- Developers junior a senior
- Estudiantes de formación
- Empresas que colaboran

**Valores clave:**
- 🤝 Comunidad
- 💰 Gratuito
- ✨ Innovación
- ❤️ Pasión

**Diseño observado:**
- Color principal: azul oscuro (tech, confianza)
- Tipografía: clara, legible
- Estructura: secciones bien diferenciadas
- CTA: "Explorar tutoriales", "Únete", etc.

---

## 🎯 Paso 1: Rellenar copilot-instructions.md (Inicio Rápido)

### Archivo a editar:
`.github/copilot-instructions.md`

### Lo que rellenamos (inicio rápido — 5 min):

```markdown
## ⚡ Inicio Rápido (Mínimo viable: 5 min)

Si tienes poco tiempo, rellena SOLO esto y listo:

- **Figma principal**: [vacío - no disponible]
- **Dominio**: Comunidad tech / Educación
- **Objetivo principal**: Acercar conocimiento en desarrollo, cloud e IA a desarrolladores de todos los niveles en Madrid
- **Contacto UX/UI**: [nombre@techriders.es]
```

**Por qué:**
- Copilot entiende el contexto
- Es suficiente para que los agentes generen especificaciones

---

## 🎨 Paso 2: Generar Paleta de Marca

### Comando:
Copia en el chat de Copilot (Ctrl+Shift+I):

```
@design-system-architect crea una paleta de marca para TechRiders:
- Comunidad tech educativa en Madrid
- Valores: comunidad, innovación, pasión
- Audiencia: developers de todos los niveles
- Sensación: profesional pero accesible, moderna, confiable
- Contexto: sitio web + eventos + tutoriales
```

### Resultado esperado:
El agente genera `docs/design-tokens/palette.json`:

```json
{
  "metadata": {
    "project": "TechRiders",
    "generatedBy": "@design-system-architect",
    "lastUpdated": "2026-05-18"
  },
  "colors": {
    "primary": "#0066cc",
    "secondary": "#ff6b35",
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444",
    "neutral": {
      "50": "#f9fafb",
      "100": "#f3f4f6",
      "200": "#e5e7eb",
      "300": "#d1d5db",
      "400": "#9ca3af",
      "500": "#6b7280",
      "600": "#4b5563",
      "700": "#374151",
      "800": "#1f2937",
      "900": "#111827"
    }
  }
}
```

**Interpretación:**
- **Primary (#0066cc):** azul tech, confianza
- **Secondary (#ff6b35):** naranja energético (pasión, dinamismo)
- **Neutrals:** escala completa para textos, fondos

---

## 🔤 Paso 3: Generar Tipografía

### Comando:

```
@design-system-architect genera escala tipográfica para TechRiders:
- Audiencia: developers (aprecia código, claridad)
- Contexto: web + tutoriales + documentación
- Sensación: moderna, accesible, sans-serif
- Requisitos: legible en pantallas, contraste bueno
```

### Resultado esperado:
El agente genera `docs/design-tokens/typography.json`:

```json
{
  "metadata": {
    "project": "TechRiders",
    "generatedBy": "@design-system-architect",
    "lastUpdated": "2026-05-18"
  },
  "typefaces": {
    "heading": {
      "family": "Inter",
      "weight": "bold",
      "sizes": ["32px", "28px", "24px", "20px"]
    },
    "body": {
      "family": "Inter",
      "weight": "regular",
      "sizes": ["16px", "14px"]
    },
    "caption": {
      "family": "Inter",
      "weight": "regular",
      "size": "12px"
    },
    "code": {
      "family": "Courier New",
      "weight": "regular",
      "size": "14px"
    }
  }
}
```

**Interpretación:**
- **Inter:** Sans-serif moderna, popular en tech
- **Sizes:** escala clara (32 → 20 para headings)
- **Code:** monospace para código (importante para developers)

---

## 🎯 Paso 4: Generar Tokens (Spacing, Radius, Shadows)

### Comando:

```
@design-system-architect genera tokens de espaciado, border-radius y shadows para TechRiders.
Sistema limpio, moderno, accesible.
```

### Resultado esperado:
El agente genera `docs/design-tokens/tokens.json`:

```json
{
  "metadata": {
    "project": "TechRiders",
    "generatedBy": "@design-system-architect",
    "lastUpdated": "2026-05-18"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px"
  },
  "borderRadius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px"
  },
  "shadows": {
    "sm": "0 1px 3px rgba(0,0,0,0.12)",
    "md": "0 4px 6px rgba(0,0,0,0.16)",
    "lg": "0 10px 20px rgba(0,0,0,0.20)",
    "xl": "0 15px 35px rgba(0,0,0,0.25)"
  }
}
```

**Interpretación:**
- **Spacing:** sistema 4/8/16 — fácil de usar y predecible
- **BorderRadius:** suave pero con nitidez, no demasiado redondeado
- **Shadows:** profundidad visual, moderna

---

## ♿ Paso 5: Generar Especificaciones de Accesibilidad

### Comando:

```
@ux-audit define especificaciones WCAG para TechRiders:
- Audiencia: developers junior a senior + estudiantes
- Contexto: web, eventos, tutoriales
- Requisitos críticos: lectura por pantalla, navegación por teclado, contraste
```

### Resultado esperado:
El agente genera `docs/design-tokens/accessibility.md`:

```markdown
# Especificaciones de Accesibilidad — TechRiders

**Proyecto:** TechRiders  
**Generado por:** @ux-audit  
**Última actualización:** 2026-05-18

---

## Estándar de Cumplimiento

- **Versión WCAG:** 2.1
- **Nivel requerido:** AA (mínimo)
- **Recomendación:** AAA para componentes críticos (CTA, navegación)

---

## Requisitos Clave

### Contraste
- Mínimo 4.5:1 para texto normal
- Mínimo 3:1 para texto grande (18pt+)
- Verificar: colores primarios + neutrals

### Navegación por teclado
- Tab, Shift+Tab: navegar entre elementos
- Enter: activar botones / enlaces
- Escape: cerrar modales
- Flechas: listas, dropdowns, carruseles

### Focus visible
- Outline claro en todos los elementos interactivos
- Color: usar secondary (#ff6b35) o primary (#0066cc)
- Ancho: mínimo 2px

### Lenguaje
- Sin jerga innecesaria
- Frases cortas
- Instrucciones claras

### Componentes específicos
- **Botones:** mínimo 44×44px (mobile)
- **Formularios:** labels asociados, hints claros
- **Imágenes:** alt text descriptivo
- **Video:** subtítulos + transcript si aplica
- **Código:** resaltado de sintaxis, contraste suficiente

---

## Auditoría regular

Ejecutar cada 2 sprints: `@ux-audit audita accesibilidad TechRiders`
```

**Interpretación:**
- AA es estándar, AAA para componentes críticos
- Focus visible = accesibilidad keyboard = fundamental
- Contraste: verificar con palette.json

---

## 📦 Paso 6: Generar Patrones de Componentes

### Comando:

```
@component-inventory-mapper define patrones obligatorios para TechRiders web:
- Botón: primary (CTA), secondary, ghost
- Card: evento, tutorial, proyecto
- Input: text, email, search
- Badge: categoría, nivel, estado
- Alert: info, success, warning, error
- Modal: contacto, confirmación
- Navigation: header, footer, breadcrumbs
```

### Resultado esperado:
El agente genera `docs/design-tokens/patterns.json`:

```json
{
  "metadata": {
    "project": "TechRiders",
    "generatedBy": "@component-inventory-mapper",
    "lastUpdated": "2026-05-18"
  },
  "patterns": [
    {
      "name": "Button",
      "variants": ["primary", "secondary", "ghost"],
      "accessibility": "aria-label, focus visible, min 44x44px"
    },
    {
      "name": "Card",
      "variants": ["event", "tutorial", "speaker"],
      "accessibility": "semantic HTML (article), heading level"
    },
    {
      "name": "Input",
      "variants": ["text", "email", "search"],
      "accessibility": "label + aria-describedby, autocomplete hints"
    },
    {
      "name": "Badge",
      "variants": ["category", "level", "status"],
      "accessibility": "no color-only meaning, paired with text"
    },
    {
      "name": "Alert",
      "variants": ["info", "success", "warning", "error"],
      "accessibility": "role=alert, color + icon + text"
    },
    {
      "name": "Modal",
      "variants": ["contact", "confirmation", "tutorial"],
      "accessibility": "focus trap, escape to close, aria-modal"
    },
    {
      "name": "Navigation",
      "variants": ["header", "footer", "breadcrumbs"],
      "accessibility": "semantic nav, aria-current for active"
    }
  ]
}
```

**Interpretación:**
- Cada patrón tiene variantes según contexto
- Accesibilidad integrada en cada componente
- Listo para que devs implementen

---

## 📊 Resultado Final

Después de los 6 pasos, la estructura es:

```
docs/design-tokens/
├── palette.json                    ✅ Colores: primary, secondary, neutrals
├── typography.json                ✅ Tipografía: heading, body, caption, code
├── tokens.json                     ✅ Spacing, borderRadius, shadows
├── patterns.json                   ✅ Componentes obligatorios + a11y
└── accessibility.md               ✅ WCAG AA/AAA, requisitos clave

.github/copilot-instructions.md    ✅ Rellenado (inicio rápido)
```

**Total:** 5 archivos, generados en ~15 minutos, sin Figma.

---

## 🔄 Siguiente paso: Implementación

**El equipo técnico ahora puede:**

1. **Leer** las especificaciones en JSON
2. **Implementar** en Tailwind / CSS Modules / Styled Components
3. **Usar** instrucciones automáticas para consistencia
4. **Referenciar** patrones.json para componentes

**Ejemplo:**
```javascript
// React componente usa palette.json
const Button = () => (
  <button style={{ backgroundColor: '#0066cc' }}>
    Primario
  </button>
);
```

**O en Tailwind (si mapean los tokens):**
```jsx
<button className="bg-primary hover:bg-primary-700">
  Primario
</button>
```

---

## 📝 FAQ de la Demo

**P: ¿Y si los agentes generan algo que no me gusta?**
R: Editas los JSON/MD manualmente o re-generas con nuevo prompt. Es iterativo.

**P: ¿Puedo actualizar los tokens después?**
R: Sí. Edita `palette.json` o pide al agente: "actualiza palette.json reemplazando primary con #ff6b35"

**P: ¿Cómo sincronizo con implementación?**
R: Los dev usan los tokens en su stack (Tailwind config, CSS variables, etc.). BoostDesign es la source of truth.

**P: ¿Y si queremos usar Figma después?**
R: El agente `@figma-design-auditor` puede extraer desde Figma y actualizar los JSON. Bidireccional.

---

## 🎬 Resumen para presentar

**En 15 minutos:**
- Sin Figma
- Sin reuniones de especificación
- Sin Excel
- Todo en JSON + Markdown
- Versionable
- Listo para development

**Transparencia:**
"Esto no es magia. Es compilar estándares, usar agentes para generar, y un contrato de archivos. Reutilizable en cualquier proyecto."

---

**Próximo:** Implementar en React / Vue / Angular usando estos tokens ✨
