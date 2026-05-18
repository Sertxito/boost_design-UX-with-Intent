# BoostDesign — Guión de Sesión (30 minutos)

> Explicar cómo se montó BoostDesign, cómo funciona y cómo usarlo con un ejemplo real.

---

## ⏱️ Timeline Total: 30 minutos

| Tiempo | Tema | Duración | Qué hacer |
|--------|------|----------|-----------|
| 0:00–2:00 | Intro + Contexto | 2 min | Explicar propósito y transparencia |
| 2:00–8:00 | Cómo se montó BoostDesign | 6 min | Recorrer estructura, agentes, skills |
| 8:00–20:00 | Demo: TechRiders en vivo | 12 min | Rellenar framework + generar specs |
| 20:00–28:00 | MCP: Empaquetar para el equipo | 8 min | Distribución, setup, uso |
| 28:00–30:00 | Q&A + Cierre | 2 min | Preguntas rápidas |

---

## 📋 Sección 1: Intro + Contexto (0:00–2:00)

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

## 📋 Sección 2: Cómo se montó BoostDesign (2:00–8:00)

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
    └── ... (11 skills)

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

## 📋 Sección 3: Demo en vivo: TechRiders (8:00–20:00)

### Setup (30 segundos)

**Mostrar:**
1. VS Code abierto, terminal, el repo local
2. Archivo: `copilot-instructions.md`
3. Ventana del navegador: https://www.techriders.es/

### Paso 1: Rellenar Inicio Rápido (1:30 min)

**En copilot-instructions.md:**

Rellenar (en vivo):
```markdown
## ⚡ Inicio Rápido (5 min)

- **Figma principal**: (vacío - vamos sin Figma)
- **Dominio**: Comunidad tech / Educación
- **Objetivo principal**: Acercar conocimiento tech a todos los niveles, crear comunidad
- **Contacto UX/UI**: [tu email]
```

**Narración:**
"Listo. Así de rápido. Ahora Copilot sabe para qué tipo de proyecto es. Vamos a generar el resto."

### Paso 2: Generar Paleta de Marca (2 min)

**En chat (copy-paste):**
```
@design-system-architect crea una paleta de marca para una comunidad tech educativa como TechRiders, 
enfocada en profesionales jóvenes de Madrid. Valores: comunidad, innovación, pasión.
```

**Explicar mientras ejecuta:**
- El agente extrae los valores de copilot-instructions.md
- Genera `palette.json` basada en psicología del color (tech + confianza)
- Mostramos resultado en `docs/design-tokens/palette.json`

**Resultado esperado:**
```json
{
  "colors": {
    "primary": "#0066cc",      // Tech blue
    "secondary": "#ff6b35",    // Energía (naranja)
    "success": "#10b981",
    "neutral": {...}
  }
}
```

### Paso 3: Generar Tipografía (1:30 min)

**En chat:**
```
@design-system-architect genera escala tipográfica para TechRiders: 
comunidad tech, readable para desarrolladores, moderna pero clara.
```

**Narración:**
"Pide tipografía, recibe typography.json. Sem duplication, sin preguntas."

### Paso 4: Generar Tokens de Espaciado (1 min)

**En chat:**
```
@design-system-architect genera tokens (spacing, border-radius, shadows) para TechRiders
```

**Resultado:** `tokens.json` listo

### Paso 5: Auditoría de Accesibilidad (2 min)

**En chat:**
```
@ux-audit define especificaciones WCAG para TechRiders: audiencia = developers junior a senior
```

**Narración:**
"Accesibilidad no es opcional. Es parte del contrato desde el inicio."

### Paso 6: Generar Patrones de Componentes (2 min)

**En chat:**
```
@component-inventory-mapper define patrones obligatorios para TechRiders web:
boton (call to action), card (evento), formulario (contacto), badge (tag), alert (notificación)
```

**Resultado:** `patterns.json` con componentes

### Resumen del Paso 3 (1 min)

**Mostrar resultado final:**
```
docs/design-tokens/ ✅
├── palette.json          ← Generado en 2 min
├── typography.json       ← Generado en 1:30 min
├── tokens.json          ← Generado en 1 min
├── patterns.json        ← Generado en 2 min
└── accessibility.md     ← Generado en 2 min
```

**Decir:**
"Todo lo que necesita el equipo técnico está aquí. Sin fichas, sin Word, sin Excel. JSON + Markdown. Versionable, sincronizable, actualizable."

---

## 📋 Sección 4: MCP — Empaquetar para el equipo (20:00–28:00)

### ¿Qué es MCP? (1 min)

**Explicar breve:**
- Model Context Protocol: forma estándar de distribuir "contexto" (agentes, skills, instrucciones)
- Cualquiera del equipo descarga, ejecuta, sin setup complicado
- Git + VCS friendly
- Versionable ("v1.0", "v1.1", etc.)

### Paso 1: Estructura MCP (1:30 min)

**Mostrar carpeta:**
```
boostdesign-mcp/
├── package.json
├── README.md
├── .github/
│   ├── copilot-instructions.md
│   ├── agents/
│   ├── instructions/
│   └── skills/
├── docs/
│   ├── design-tokens/
│   ├── Workflows.md
│   └── References.md
└── .gitignore
```

**Archivos clave:**
- `package.json`: metadata, versión, dependencias
- `README.md`: "clone + uso en 2 min"
- `.github/copilot-instructions.md`: el corazón

### Paso 2: package.json (1 min)

**Mostrar:**
```json
{
  "name": "@boostdesign/framework",
  "version": "1.0.0",
  "description": "UX/UI framework integrado con GitHub Copilot",
  "type": "module",
  "keywords": ["ux", "ui", "copilot", "design-system", "framework"],
  "repository": {
    "type": "git",
    "url": "https://github.com/Sertxito/BoostDesign---UX-with-Intent"
  },
  "author": "TechRiders Community",
  "license": "MIT",
  "scripts": {
    "setup": "echo 'BoostDesign ready. Open VS Code and start!'",
    "validate": "echo 'Checking structure...'"
  }
}
```

### Paso 3: Distribuir (2 min)

**Opciones:**

1. **GitHub + Git Clone:**
   ```bash
   git clone https://github.com/Sertxito/BoostDesign---UX-with-Intent.git mi-proyecto
   cd mi-proyecto
   code .
   ```

2. **Como subfolder en proyecto existente:**
   ```bash
   git subtree add --prefix .github/boostdesign https://github.com/Sertxito/BoostDesign---UX-with-Intent main
   ```

3. **Como package npm (futuro):**
   ```bash
   npm install @boostdesign/framework
   ```

### Paso 4: Uso en el equipo (1:30 min)

**Mostrar flujo:**

1. **Dev descarga:**
   ```bash
   git clone ... mi-proyecto
   cd mi-proyecto
   code .
   ```

2. **Abre VS Code → Chat:**
   ```
   @ux-ui-expert audita mi proyecto
   ```

3. **O personaliza:**
   - Edita `copilot-instructions.md`
   - Pasa Figma URL
   - Listo

4. **O genera desde cero:**
   ```
   @design-system-architect crea paleta para [dominio]
   ```

**Resultado:**
Cada dev del equipo tiene acceso a:
- Agentes preconfigurados
- Skills documentadas
- Instrucciones automáticas
- Design tokens centralizados

### Paso 5: Versionado (1 min)

**Mostrar:**
```
v1.0.0  ← Release actual (GitHub Releases)
├── 4 agentes ✅
├── 11 skills ✅
├── Design tokens ✅
└── Documentación ✅

v1.1.0  (próxima)
└── [Nuevos skills / mejoras]
```

**Narración:**
"Cuando añadamos nuevos skills o mejoras, creamos v1.1.0. El equipo puede actualizar con `git pull` o esperar a una versión estable."

---

## 📋 Sección 5: Q&A + Cierre (28:00–30:00)

**Preguntas típicas (si surgen):**

1. **"¿Qué pasa si no tenemos Copilot Chat?"**
   → Necesita VS Code + GitHub Copilot. Sin eso, no funciona. Es requisito.

2. **"¿Los agentes se pueden customizar?"**
   → Sí, editando `.agent.md`. Es Markdown, fácil.

3. **"¿Puedo usar esto para React / Vue / Angular?"**
   → Sí. Es framework agnóstico. Skills específicas para cada uno.

4. **"¿Cómo actualizo si hay cambios?"**
   → `git pull` en la rama main. O esperas a releases estables.

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
