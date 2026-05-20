---
### 🧑‍💻 ¿Cómo practicar los 3 casos?

Puedes practicar BoostDesign con cualquiera de los tres caminos. El proceso y los comandos son casi idénticos:

#### 1. Con Figma
- Rellena `.github/copilot-instructions.md` con el enlace de Figma en "Figma principal".
- Ejecuta: `@figma-design-auditor extrae tokens y patrones`.
- Los archivos en `docs/design-tokens/` se generan automáticamente desde Figma.

#### 2. Sin Figma (solo contexto)
- Rellena `.github/copilot-instructions.md` con dominio, objetivo, valores (deja Figma vacío).
- Ejecuta:
  - `@design-system-architect crea una paleta de marca para [dominio]`
  - `@design-system-architect genera escala tipográfica para [dominio]`
  - `@design-system-architect genera tokens de espaciado y componentes`
  - `@component-inventory-mapper define patrones obligatorios para [tipo de app]`
  - `@ux-audit revisa accesibilidad y genera reporte`
- Los archivos se generan por IA según el contexto que diste.

#### 3. Con URL/código
- Rellena `.github/copilot-instructions.md` con dominio, objetivo, valores y la URL de referencia.
- Ejecuta:
  - `@design-system-architect analiza la web [URL] y genera paleta de marca`
  - `@design-system-architect analiza la web [URL] y genera escala tipográfica`
  - `@component-inventory-mapper analiza la web [URL] y define patrones`
  - `@ux-audit revisa accesibilidad de la web [URL]`
- Los archivos se generan analizando la web real.

**En todos los casos:**
- El resultado son los mismos archivos contractuales en `docs/design-tokens/`.
- El equipo técnico puede consumirlos igual, sin importar el origen.

---
# BoostDesign — Guión de Sesión

> Explicar cómo se montó BoostDesign, cómo funciona y cómo usarlo con un ejemplo real.
---

## ⏱️ Timeline Total:

| Tiempo | Tema | Duración | Qué hacer |
|--------|------|----------|-----------|
| Intro + Contexto | Explicar propósito y transparencia |
| Cómo se montó BoostDesign | Recorrer estructura, agentes, skills |
| Demo: TechRiders en vivo | Rellenar framework + generar specs |

---
### 🚦 Tres caminos de entrada (entry points)

BoostDesign permite generar las especificaciones de diseño (design tokens contract) desde **tres orígenes**:

| Caso | ¿Qué tienes? | ¿Cómo funciona? | Precisión |
|------|--------------|-----------------|-----------|
| 1. Figma | Archivo Figma | Extrae tokens y patrones automáticamente | Máxima |
| 2. Sin Figma | Solo contexto (dominio, objetivo, valores) | Genera tokens y patrones por IA, usando buenas prácticas | Alta |
| 3. URL/código | URL de una app real (sin Figma) | Analiza la web/código y genera tokens aproximados | Media/Alta |

**Todos los caminos generan los mismos archivos contractuales:**
`palette.json`, `typography.json`, `tokens.json`, `patterns.json`, `accessibility.md`

**Visual:**
```
┌──────────────────────────────────────────────┐
│      ¿Qué tienes?      →   ¿Qué obtienes?    │
├──────────────────────────────────────────────┤
│ Figma           ─┐                          │
│ Sin Figma       ─┼─→  Design Tokens (JSON)  │
│ URL/código      ─┘                          │
│                                      ↓      │
│        docs/design-tokens/ (contrato)       │
└──────────────────────────────────────────────┘
```

**Nota:** El ejemplo práctico de esta sesión usa el caso 3 (URL), pero el flujo es idéntico para los otros dos. Solo cambia el origen de los datos, no el resultado ni el proceso.


### Diapositiva: ¿Por qué BoostDesign?

**Mensaje principal:**
"No soy experto en UX/UI. Lo que ves aquí es el resultado de compilar mejores prácticas de W3C, WCAG, Material Design 3 y refinarlas con Copilot. Lo importante: es un **framework reutilizable** que podemos usar en cualquier proyecto."

**Puntos a mencionar:**
- BoostDesign es herramienta, no metodología de experto
- Basado en estándares abiertos (W3C, WCAG, Material Design)
- Extensible: cada proyecto personaliza sin reinventar
- Transparencia: agentes + skills definidos, versionable, compartible

**Slide visual:**
```
┌─────────────────────────────────────┐
│ BoostDesign: Framework Transversal  │
│                                     │
│ W3C + WCAG + Material Design 3      │
│      ↓                              │
│ Agentes + Skills + Estructura       │
│      ↓                              │
│ Proyecto → Design Tokens → MCP      │
└─────────────────────────────────────┘
```

---

## 📋 Sección 2: Cómo se montó BoostDesign

### Subsección A: Filosofía (1 min)

**¿Qué problema resolvemos?**
- Equipos UX/UI sin Figma → sin especificaciones claras
- Cada proyecto reinventa la rueda (colores, tipografía, tokens)
- No hay "contrato" entre diseño y desarrollo
- Copilot es poderoso, pero sin contexto falla

**Solución:**
Un framework que define:
1. **Dónde van las especificaciones** (contrato de archivos)
2. **Cómo se generan** (agentes + skills)
3. **Cómo se usan** (instrucciones automáticas)

### Subsección B: Estructura (2 min)

**Mostrar el árbol:**
```
.github/
├── copilot-instructions.md    ← Centro: inicio rápido + definición completa
├── agents/
│   ├── ux-ui-expert.agent.md
│   ├── design-system-architect.agent.md
│   ├── figma-design-auditor.agent.md
│   └── component-inventory-mapper.agent.md
├── instructions/              ← Se aplican automáticamente por archivo
│   └── ux-ui-best-practices.instructions.md
└── skills/                    ← Módulos de conocimiento
    ├── figma-integration/
    ├── design-system-generator/
    ├── aria-accessibility-patterns/
    └── ... (13 skills)

docs/
├── design-tokens/             ← Contrato: archivos autogenerados
│   ├── palette.json
│   ├── typography.json
│   ├── tokens.json
│   ├── patterns.json
│   └── accessibility.md
├── Workflows.md               ← Comandos rápidos
└── References.md              ← Enlaces a estándares
```

**Explicar:**
- **Agentes:** orquestadores, puntos de entrada (4)
- **Instrucciones:** se aplican automáticamente mientras codificas (3)
- **Skills:** especialización, documentación profunda (11)
- **Design Tokens:** contrato de archivos con formato definido

### Subsección C: Flujo de trabajo (3 min)

**Mostrar flujo visual:**

```
1. Equipo UX/UI
   ↓
   Rellena: copilot-instructions.md
   - Figma URL (o vacío)
   - Dominio
   - Objetivo
   ↓

2. Copilot + Skills
   ↓
   @design-system-architect crea paleta
   @design-system-architect genera tokens
   @component-inventory-mapper define patrones
   @ux-audit revisa accesibilidad
   ↓

3. Autogenera
   ↓
   docs/design-tokens/
   - palette.json
   - typography.json
   - tokens.json
   - patterns.json
   - accessibility.md
   ↓

4. Equipo técnico usa
   ↓
   Lee especificaciones
   Implementa con instrucciones automáticas
   ✅ Sin duplication, sin fricción
```

---

## 📋 Sección 3: Demo en vivo: TechRiders

### Contexto: TechRiders

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

**URL para referencia:** https://www.techriders.es/

### Setup (30 segundos)

**Mostrar:**
1. VS Code abierto, terminal, repo local
2. Archivo: `.github/copilot-instructions.md`
3. Ventana del navegador: https://www.techriders.es/

---

### Paso 1: Rellenar Inicio Rápido (1:30 min)

**En `.github/copilot-instructions.md`, sección "⚡ Inicio Rápido":**

Rellenar (en vivo):
```markdown
## ⚡ Inicio Rápido (Mínimo viable: 5 min)

Si tienes poco tiempo, rellena SOLO esto y listo:

- **Figma principal**: [vacío - no disponible]
- **Dominio**: Comunidad tech / Educación
- **Objetivo principal**: Acercar conocimiento en desarrollo, cloud e IA a desarrolladores de todos los niveles en Madrid
- **Contacto UX/UI**: [nombre@techriders.es]
```

**Narración:**
"Así de rápido. 5 líneas. Ahora Copilot sabe exactamente para qué proyecto es, qué valores tiene, a quién va dirigido. Todo lo que necesitan los agentes para generar especificaciones."

---

### Paso 2: Generar Paleta de Marca (2 min)

**En Copilot Chat (Ctrl+Shift+I):**

Copia este comando (copy-paste):
```
@design-system-architect crea una paleta de marca para TechRiders:
- Comunidad tech educativa en Madrid
- Valores: comunidad, innovación, pasión
- Audiencia: developers de todos los niveles
- Sensación: profesional pero accesible, moderna, confiable
- Contexto: sitio web + eventos + tutoriales
```

**Explicar mientras ejecuta:**
- El agente lee copilot-instructions.md (sabe el contexto)
- Aplica psicología del color (tech = azul confianza, pasión = naranja energético)
- Genera `docs/design-tokens/palette.json`

**Resultado esperado:**
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
- **Primary (#0066cc):** azul tech, confianza, profesionalismo
- **Secondary (#ff6b35):** naranja energético, pasión, dinamismo
- **Success/Warning/Error:** psicología estándar
- **Neutrals:** escala 50-900 para textos, fondos, bordes, efectos

---

### Paso 3: Generar Tipografía (1:30 min)

**En Copilot Chat:**

```
@design-system-architect genera escala tipográfica para TechRiders:
- Audiencia: developers (aprecia código, claridad)
- Contexto: web + tutoriales + documentación
- Sensación: moderna, accesible, sans-serif
- Requisitos: legible en pantallas, contraste bueno
```

**Resultado esperado:**
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

**Narración:**
"Tipografía clara, escalas predecibles. Inter es estándar en tech. Y lo importante: monospace para código porque saben que la audiencia son developers."

**Interpretación:**
- **Inter:** sans-serif moderna, popular en tech, buena legibilidad
- **Sizes:** escala clara (32 → 28 → 24 → 20 para headings)
- **Code:** Courier New monospace (fundamental para developers)

---

### Paso 4: Generar Tokens (Spacing, Radius, Shadows) (1 min)

**En Copilot Chat:**

```
@design-system-architect genera tokens de espaciado, border-radius y shadows para TechRiders.
Sistema limpio, moderno, accesible.
```

**Resultado esperado:**
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

**Narración:**
"Spacing: sistema 4/8/16 — Base de 4, multiplica. Fácil, predecible, escalable. BorderRadius: suave pero con nitidez. Shadows: profundidad visual para jerarquía."

**Interpretación:**
- **Spacing:** sistema 4px base (xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48)
- **BorderRadius:** suave (4-16px), no demasiado redondeado
- **Shadows:** z-depth visual (pequeña → grande)

---

### Paso 5: Generar Especificaciones de Accesibilidad (2 min)

**En Copilot Chat:**

```
@ux-audit define especificaciones WCAG para TechRiders:
- Audiencia: developers junior a senior + estudiantes
- Contexto: web, eventos, tutoriales
- Requisitos críticos: lectura por pantalla, navegación por teclado, contraste
```

**Resultado esperado:**
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

**Narración:**
"Accesibilidad no es opcional. Es parte del contrato desde el inicio. WCAG AA es estándar, AAA para componentes críticos. Contraste: 4.5:1 mínimo. Focus visible: obligatorio para navegación por teclado."

---

### Paso 6: Generar Patrones de Componentes (2 min)

**En Copilot Chat:**

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

**Resultado esperado:**
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

**Narración:**
"Componentes con accesibilidad integrada. No es "hacemos accesibilidad después". Es "accesibilidad es parte de cada patrón"."

---

### Resumen: Resultado Final (1 min)

**Mostrar en terminal o file explorer:**
```
docs/design-tokens/ ✅
├── palette.json          ← Generado en 2 min
├── typography.json       ← Generado en 1:30 min
├── tokens.json          ← Generado en 1 min
├── patterns.json        ← Generado en 2 min
└── accessibility.md     ← Generado en 2 min
```

**Narración:**
"Listo. Acabamos de generar el 100% de especificaciones de diseño en 10 minutos. Sin Figma. Sin reuniones. Sin Excel. 

Todo lo que necesita el equipo técnico está aquí:
- Colores, tipografía, espaciado (paleta, typography, tokens)
- Componentes obligatorios (patterns)
- Accesibilidad integrada (accessibility)

Versionable, sincronizable, actualizable. JSON + Markdown. Source of truth para todo el equipo."

---

## 📋 Sección 4: MCP — Empaquetar para el equipo

### ¿Qué es MCP?

**Model Context Protocol** = estándar para distribuir "contexto" de forma reproducible.

En nuestro caso:
- Agentes preconfigurados
- Skills documentados
- Instrucciones automáticas
- Design tokens en contrato
- **Todo versionado y compartible**

### Estructura MCP (La que ya existe)

```
.
├── package.json                    ← Metadata + versión
├── README.md                       ← Entrada visual
├── LICENSE                         ← MIT (open source)
├── .gitignore
│
├── .github/
│   ├── copilot-instructions.md     ← Corazón: contexto per-proyecto
│   ├── agents/                     ← 4 agentes orquestadores
│   │   ├── ux-ui-expert.agent.md
│   │   ├── design-system-architect.agent.md
│   │   ├── figma-design-auditor.agent.md
│   │   └── component-inventory-mapper.agent.md
│   │
│   ├── instructions/               ← Reglas por tipo de archivo
│   │   ├── ux-ui-best-practices.instructions.md
│   │   ├── design-consistency.instructions.md
│   │   └── angular-component-styling.instructions.md
│   │
│   └── skills/                     ← 13 módulos especializados
│       ├── figma-integration/
│       ├── design-system-generator/
│       ├── component-inventory/
│       └── ... (13 skills)
│
├── docs/
│   ├── design-tokens/              ← Contrato: archivos autogenerados
│   │   ├── palette.json
│   │   ├── typography.json
│   │   ├── tokens.json
│   │   ├── patterns.json
│   │   └── accessibility.md
│   │
│   ├── Workflows.md                ← Comandos rápidos per-task
│   └── References.md               ← Enlaces a estándares
│
└── demo/
    └── SESSION-GUIDE.md            ← Este documento
```

### package.json (Núcleo de MCP)

Este archivo hace que BoostDesign sea **identificable, versionable y descargable**.

```json
{
  "name": "@boostdesign/framework",
  "version": "1.0.0",
  "description": "Framework integral UX/UI integrado con GitHub Copilot. Agentes + Skills + Design Tokens en un contrato reutilizable.",
  
  "homepage": "https://github.com/Sertxito/BoostDesign---UX-with-Intent",
  "repository": {
    "type": "git",
    "url": "https://github.com/Sertxito/BoostDesign---UX-with-Intent.git"
  },
  
  "type": "module",
  "keywords": [
    "copilot",
    "ux",
    "ui",
    "design-system",
    "framework",
    "accessibility",
    "wcag"
  ],
  
  "author": {
    "name": "BoostDesign Community",
    "url": "https://github.com/Sertxito/BoostDesign---UX-with-Intent"
  },
  
  "license": "MIT",
  
  "scripts": {
    "setup": "echo '✅ BoostDesign listo. Abre VS Code y comienza!'",
    "validate": "node scripts/validate.js"
  }
}
```

### Método 1: Git Clone (Recomendado)

**Para equipos que comienzan:**

```bash
# Clonar framework como punto de partida
git clone https://github.com/Sertxito/BoostDesign---UX-with-Intent.git my-project
cd my-project
code .
```

**Resultado inmediato:**
- Copilot detecta `.github/copilot-instructions.md`
- 4 agentes disponibles
- 13 skills accesibles
- Instrucciones automáticas activas

**Alternativa: Como subtree (en proyecto existente)**

```bash
# Integrar en proyecto actual
git subtree add --prefix .github/boostdesign \
  https://github.com/Sertxito/BoostDesign---UX-with-Intent main
```

### Método 2: NPM Package (Futuro)

Cuando la comunidad lo necesite:

```bash
# Instalar
npm install @boostdesign/framework

# Uso automático
# Copilot detecta .github/copilot-instructions.md
```

### Método 3: Monorepo (Equipos grandes)

Estructura escalable:

```
boostdesign-ecosystem/
├── packages/
│   ├── @boostdesign/framework
│   ├── @boostdesign/react-templates      (futuro)
│   └── @boostdesign/vue-templates        (futuro)
└── pnpm-workspace.yaml
```

### Versionado (Semántica)

```
v1.0.0  ← Release actual
         ├── 4 agentes
         ├── 13 skills
         ├── 3 instrucciones
         └── Design tokens contract

v1.1.0  ← Mejoras menores
         └── + nuevos skills

v2.0.0  ← Breaking changes
         └── Cambios en estructura
```

**Cómo versionar:**

```bash
# Hacer cambios y actualizar CHANGELOG.md
npm version minor  # v1.0.0 → v1.1.0
git tag v1.1.0
git push origin v1.1.0
npm publish       # si está en npm
```

### CHANGELOG.md (Transparencia)

```markdown
# Changelog

## [1.0.0] - 2026-05-18

### Added
- 4 agentes orquestadores
- 13 skills especializados
- 3 instrucciones automáticas
- Design tokens contract
- Documentación completa

## [Unreleased]

### Planned
- 2 nuevos skills
- Validación automática CI/CD
- Template de proyecto (starter-kit)
```

### Distribución al equipo

**Email template:**

```
🚀 BoostDesign Framework

📥 Descarga:
https://github.com/Sertxito/BoostDesign---UX-with-Intent

⏱️ Setup: 5 minutos
1. git clone ...
2. code .
3. Edita .github/copilot-instructions.md
4. @design-system-architect ...

🎯 Qué esperar:
- Agentes orquestadores
- 13 skills especializados
- Design tokens automáticos
- Documentación completa

📖 Docs:
- README.md: visión general
- demo/SESSION-GUIDE.md: esta sesión
- docs/Workflows.md: tareas rápidas
- docs/References.md: estándares

❓ Preguntas?
Abre issue en GitHub o pregunta aquí.
```

### Validación (CI/CD Opcional)

Crear `.github/workflows/validate.yml`:

```yaml
name: Validate BoostDesign

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check structure
        run: |
          test -f .github/copilot-instructions.md || exit 1
          test -d .github/agents || exit 1
          test -d .github/skills || exit 1
          echo "✅ Structure valid"
      
      - name: Validate JSON
        run: |
          node -e "require('fs').readFileSync('docs/design-tokens/palette.json')"
          echo "✅ JSON valid"
```

### Resumen: De Local a MCP

| Paso | Qué hacer | Resultado |
|------|-----------|----------|
| 1 | `package.json` + `CHANGELOG.md` | BoostDesign es identificable y versionable |
| 2 | Git tag + push | v1.0.0 en GitHub |
| 3 | Compartir URL | Equipos pueden `git clone` |
| 4 | Recopilar feedback | Mejoras para v1.1.0 |
| 5 | (Futuro) npm publish | Instalación vía npm |

### Próximos pasos

1. ✅ v1.0.0 en GitHub
2. ⏭️ Crear CHANGELOG.md
3. ⏭️ Compartir con equipo
4. ⏭️ Recopilar feedback
5. ⏭️ v1.1.0: Mejoras

---

## 📋 Sección 5: Q&A + Cierre

**Preguntas típicas (si surgen):**

1. **"¿Qué pasa si no tenemos Copilot Chat?"**
   → Necesita VS Code + GitHub Copilot. Sin eso, no funciona. Es requisito.

2. **"¿Los agentes se pueden customizar?"**
   → Sí, editando `.agent.md`. Es Markdown, fácil.

3. **"¿Puedo usar esto para React / Vue / Angular?"**
   → Sí. Es framework agnóstico. Skills específicas para cada uno.

4. **"¿Cómo actualizo si hay cambios?"**
   → `git pull` en la rama main. O esperas a releases estables.

5. **"¿Puedo usarlo con tareas de Azure DevOps o Jira?"**
   → Sí. Hay dos skills específicas para eso: `devops-connector` y `functional-to-ux-spec`.

---

## 📋 Bonus: Flujo con tareas de DevOps / Jira

Este flujo permite que cualquier miembro del equipo parta de una tarea funcional del backlog y genere automáticamente una especificación UX/UI completa, sin copiar y pegar.

### Caso A — Con Azure DevOps (conexión directa)

```
@devops-connector busca tareas UX en el sprint actual
```

La skill:
1. Solicita autenticación/PAT de Azure DevOps.
2. Lista las tareas/historias UX del sprint.
3. Devuelve el texto de la tarea seleccionada.

Después:
```
@functional-to-ux-spec interpreta tarea #12345
```

La skill genera automáticamente:
- Intención (usuario + negocio)
- Flujo de usuario (pasos, decisiones, bifurcaciones)
- Arquitectura de información
- Wireframe descriptivo
- Microcopy (títulos, CTAs, errores, vacíos)
- Estados (loading, error, empty, success)
- Checklist de accesibilidad
- Criterios de aceptación UX

### Caso B — Sin conexión a DevOps (copy-paste)

Pegas directamente el texto de la tarea en Copilot Chat:

```
@functional-to-ux-spec interpreta este requerimiento:

"Como cliente de banca digital
quiero consultar y gestionar mis pagos recurrentes...
[pega la tarea completa aquí]"
```

Mismo resultado que el Caso A. La skill funciona igual con o sin conexión.

### Resultado esperado (ejemplo: Pagos Recurrentes)

```markdown
## A) Intención
- Objetivo usuario: controlar suscripciones activas sin llamar al banco
- Objetivo negocio: reducir llamadas al soporte, aumentar autonomía del cliente
- Supuestos: cliente autenticado, tarjeta seleccionada previamente

## B) Flujo
Posición Global → Tarjetas → selecciona tarjeta → Pagos Recurrentes
→ Listado con filtros → Acción (pausar/cancelar/detalle)
→ Confirmación → Feedback de resultado

## C) Arquitectura de información
- Tabla principal: comercio, descripción, periodicidad, próximo cobro, estado, importe, acciones
- Filtros: fecha, estado (multiselección), comercio, periodicidad, importe, moneda
- Detalle: resumen + historial de cobros + descarga comprobante (PDF)
- Exportación: Excel con columnas operables

## D) Estados
- Loading: skeleton en tabla mientras carga
- Empty: "No tienes pagos recurrentes activos" + CTA explorar tarjeta
- Error: "No pudimos cargar tus pagos. Inténtalo de nuevo." + botón reintentar
- Success (pausar): "Pago pausado. No se realizará el próximo cobro."
- Confirmación (cancelar): modal con motivo en texto libre + botón confirmar

## E) Accesibilidad
- Tabla: headers con scope, caption descriptivo
- Acciones por fila: aria-label con nombre del comercio ("Pausar Netflix")
- Estados con color + icono + texto (nunca solo color)
- Exportar Excel: botón con aria-label claro, feedback de descarga

## F) Criterios de aceptación UX
- [ ] El listado carga en < 2s con skeleton visible
- [ ] Filtros combinables y reseteables con un click
- [ ] Acción de pausar/cancelar requiere confirmación explícita
- [ ] Mensaje de éxito/error visible tras cada acción
- [ ] Exportación genera fichero con nombre YYYYMMDD_HHMM-PagosRecurrentesTarjeta_XXXX.xlsx
- [ ] Toda la tabla navegable por teclado (Tab + Enter + flechas)
```

**Narración:**
"Con estas dos skills, el equipo UX/UI puede pasar de una tarea de DevOps a una especificación completa en minutos. Sin reuniones, sin ambigüedad, sin perder trazabilidad."

**Cierre (30 segundos):**
"BoostDesign es el puente entre UX/UI y desarrollo. No es magia, es estructura + estándares + agentes. Reutilizable, escalable, transparente. ¿Preguntas?"

---

## 🎬 Materiales de apoyo

- **Repo GitHub:** https://github.com/Sertxito/BoostDesign---UX-with-Intent
- **README.md:** punto de entrada visual
- **Demo live:** copilot-instructions.md + TechRiders
- **Q&A doc:** (crear aparte con FAQ)

---

**Duración total: 30 minutos**  
**Próxima sesión:** Profundizar en skills o crear proyecto real con BoostDesign
