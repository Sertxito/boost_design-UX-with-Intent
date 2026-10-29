# BoostDesign - Kit Experto de UX/UI para GitHub Copilot

[![npm version](https://img.shields.io/npm/v/boost-uxdesign.svg)](https://www.npmjs.com/package/boost-uxdesign)

**BoostDesign** es un sistema profesional de UX/UI que amplifica GitHub Copilot con **4 agentes**, **3 instrucciones contextuales**, **13 skills core** y **1 complemento opcional de exploración visual (Hallmark Bridge)**.

Todo respaldado por estándares **W3C**, **WCAG**, **Material Design 3** y mejores prácticas de la industria.

## Instalacion

Este boost es **autocontenido**: no necesita runtime, plugin ni servidor MCP. Un solo comando copia sus activos a las rutas donde GitHub Copilot / VS Code los descubren automaticamente.

```bash
# Desde la raiz de TU proyecto
npx github:Sertxito/boost_design-UX-with-Intent
# o, una vez publicado en npm
npx boost-uxdesign
```

| Activo | Se instala en |
|---|---|
| Agentes | `.github/agents/*.agent.md` |
| Skills | `.github/skills/<nombre>/SKILL.md` y `.agents/skills/<nombre>/SKILL.md` |
| Prompts | `.github/prompts/*.prompt.md` |
| Instrucciones | `.github/instructions/*.instructions.md` |
| Instrucciones globales | `.github/copilot-instructions.md` (solo si el proyecto no tiene) |

Opciones: `--target <dir>`, `--force` (sobrescribir), `--dry-run`, `--no-agents-dir` (omite `.agents/skills`), `--check` (verifica la instalacion), `--uninstall`.
Nunca se sobrescriben archivos existentes sin `--force`, asi que varios boosts conviven en el mismo proyecto.

**Verifica:** ejecuta `npx boost-uxdesign --check`, recarga VS Code (`Developer: Reload Window`) y escribe `@` en Copilot Chat (agentes), `/` (prompts) y abre el selector de skills.

Extras: `npx boost-uxdesign-doctor` valida la instalacion y el complemento opcional Hallmark (para omitir su instalacion automatica define `BOOST_SKIP_HALLMARK=1`).

### Para contribuir

```bash
npm install
npm run quality
npm run doctor
npm run measure:coverage
npm run coverage:gate
```

### Solucion rapida de problemas

|Problema|Solucion|
|---|---|
|Agentes no aparecen|Ctrl+Shift+P → Reload Window|
|Instrucciones no aplican|Verifica el YAML frontmatter|
|Skills no funcionan|Revisa `.github/skills/[nombre]/SKILL.md`|

---

## 📚 Documentación

|Documento|Propósito|
|---|---|
|**[docs/Workflows.md](docs/Workflows.md)**|Tareas rápidas (auditoría, design system, etc.)|
|**[docs/References.md](docs/References.md)**|Enlaces a estándares W3C y documentación oficial|

---

## 🎯 Los 4 Agentes

### @ux-ui-expert

**Orquestador maestro** - Tu punto de entrada  
Audita proyectos, crea estrategias, mapea componentes.

### @design-system-architect

**Arquitecto de Design System**  
Crea tokens, paletas, escalas tipográficas, temas.

### @figma-design-auditor

**Especialista en integración Figma**  
Extrae design tokens, mapea componentes, sincroniza.

### @component-inventory-mapper

**Analizador de componentes**  
Cataloga, encuentra duplicados, recomienda consolidación.

---

## 📋 Las 3 Instrucciones (Automáticas)

Se aplican **automáticamente** mientras programas:

1. **ux-ui-best-practices** - Accesibilidad, diseño responsivo, HTML semántico
2. **design-consistency** - Design tokens, componentes, modo oscuro
3. **angular-component-styling** - ViewEncapsulation, SCSS, estilos para Angular

---

## 🛠️ Los 13 Skills

**Design System:**
- `figma-integration` - Sincronización con Figma
- `design-system-generator` - Generador de sistemas de diseño
- `design-patterns-library` - Más de 50 patrones probados

**Componentes:**
- `component-inventory` - Catalogación y análisis de componentes
- `screenshot-reporter` - Generación de informes visuales
- `ux-audit` - Auditoría completa de UX/UI

**Documentación:**
- `storybook-component-documentation` - Configuración de Storybook
- `aria-accessibility-patterns` - Implementación de patrones WCAG + ARIA

**Estilado:**
- `react-component-styling` - Estilado en React (CSS Modules, Styled Components, Emotion, Tailwind)
- `vue-component-styling` - Estilado en Vue (Scoped, CSS Modules, Tailwind, UnoCSS)
- `css-scss-best-practices` - Fundamentos y arquitectura de CSS/SCSS

**Integración con Backlog:**
- `devops-connector` - Conecta con Azure DevOps/Jira, autentica y extrae tareas/historias de usuario
- `functional-to-ux-spec` - Transforma tareas funcionales en especificaciones UX/UI BoostDesign

## 🧩 Complemento Opcional

- `hallmark` (bridge) - Integra generación/rediseño visual de Hallmark con validación UX de BoostDesign.
- Instalación automática al instalar este paquete (postinstall) y durante `boost-uxdesign-init`.
- Instalación manual del motor Hallmark: `npx skills add nutlope/hallmark`
- Para omitir instalación automática global: define `BOOST_SKIP_HALLMARK=1`.
- Recomendado para: exploración visual de hero/landing antes de normalizar tokens y validar accesibilidad.

---

## ✅ Principios Fundamentales

1. **Design Tokens Primero** - Todo debe derivar de tokens, evita valores hardcodeados
2. **WCAG AA Mínimo** - Contraste mínimo de 4.5:1, touch targets de 44×44px, navegación por teclado
3. **Responsivo por Defecto** - Diseño mobile-first con mejora progresiva
4. **Todos los Estados** - Considera todos los estados: defecto, hover, foco, activo, deshabilitado, error, cargando
5. **Soporte de Temas** - Implementación nativa de modo claro/oscuro
6. **Accesibilidad Primero** - Uso de ARIA, soporte para navegación por teclado y lectores de pantalla
7. **Documentación Completa** - Crea historias en Storybook para cada componente

---

## 📖 Próximos Pasos

1. **[Personaliza tu proyecto](.github/copilot-instructions.md)** — Rellena `copilot-instructions.md` (5 min)
   - Figma principal o dominio del proyecto
   - Las especificaciones se generan automáticamente en `docs/design-tokens/`
2. **[Elige un Workflow](docs/Workflows.md)** — Auditoría, design system, componentes, etc.
3. **[Consulta Referencias](docs/References.md)** — Enlaces a estándares W3C, WCAG y más

---

## 🎓 Recursos Oficiales

- **[W3C Design Tokens](https://www.w3.org/community/design-tokens/)**
- **[WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)**
- **[WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)**
- **[Material Design 3](https://m3.material.io/)**
- **[React Styling](https://react.dev/learn/styling)**
- **[Vue SFC Styling](https://vuejs.org/guide/extras/ways-of-using-vue.html)**
- **[Storybook Docs](https://storybook.js.org/)**
- **[Figma API](https://www.figma.com/developers/api)**

---

## 🎨 Ejemplos de Uso

```bash
# Auditar proyecto
@ux-ui-expert audita mi proyecto

# Crear design system
@design-system-architect crea design tokens con colores de marca

# Mapear componentes
@component-inventory-mapper cataloga mis componentes y encuentra duplicados

# Integrar Figma
@figma-design-auditor extrae design tokens de mi archivo Figma

# Mostrar patrón accesible
@ux-ui-expert muéstrame un botón accesible con patrones WCAG

# Desde Azure DevOps: leer tarea y generar spec UX
@devops-connector busca tareas UX en el sprint actual
@functional-to-ux-spec interpreta tarea #12345

# Sin DevOps: copy-paste de requerimiento funcional
@functional-to-ux-spec interpreta este requerimiento:
"Como cliente quiero ver mis pagos recurrentes..."

# Estilado React
Muéstrame cómo estilizar un botón React con CSS Modules

# Estilado Vue
Muéstrame cómo estilizar un botón Vue con scoped styles

# Mejor práctica CSS
Muéstrame organización CSS con BEM y design tokens
```

---

Todas las recomendaciones respaldadas por:
- ✅ Estándares W3C
- ✅ Documentación Oficial
- ✅ Mejores Prácticas de la Industria
- ✅ Enfoque Accesibilidad-Primero

## Naming and collisions

Installed assets are prefixed with `uxdesign-` (e.g. `.github/agents/uxdesign-<name>.agent.md`, `.github/skills/uxdesign-<name>/`) so several boosts can live in the same project, and internal references are rewritten to match.

- Nothing that already exists in the target is overwritten: each ignored file is reported with a `[WARN] ... already existed ... IGNORED` message. Use `--force` to overwrite.
- An existing `.github/copilot-instructions.md` is kept; the boost's global guidance is installed as `uxdesign-global.instructions.md` instead.
- Re-running the installer is safe; `--check` and `--uninstall` work from the manifest.

