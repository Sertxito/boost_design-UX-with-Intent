# BoostDesign - Kit Experto de UX/UI para GitHub Copilot

[![npm version](https://img.shields.io/npm/v/mcpee-uxdesign.svg)](https://www.npmjs.com/package/mcpee-uxdesign)

**BoostDesign** es un sistema profesional de UX/UI que amplifica GitHub Copilot con **4 agentes**, **3 instrucciones contextuales** y **13 skills especializados**.

Todo respaldado por estándares **W3C**, **WCAG**, **Material Design 3** y mejores prácticas de la industria.

## 🚀 Instalacion npm (2 minutos)

### Opcion recomendada

1. **Instala el paquete**:

   ```bash
   npm install mcpee-uxdesign
   ```

2. **Inicializa los artefactos en tu repo**:

   ```bash
   npx mcpee-uxdesign-init
   ```

   Si quieres sobrescribir archivos existentes:

   ```bash
   npx mcpee-uxdesign-init --force
   ```

3. **Abre VS Code** en tu proyecto.

4. **Valida instalacion** (opcional pero recomendado):

   ```bash
   npx mcpee-uxdesign-doctor
   ```

5. **Abre el chat**: Ctrl+Shift+I (o Cmd+Shift+I).

6. **Verifica**: Escribe `@` en el chat, deben aparecer los 4 agentes.

7. **Empieza**: `@ux-ui-expert audita mi proyecto`.

### Instalacion para contribuir a este paquete

```bash
npm install
npm run quality
npm run doctor
npm run measure:coverage
npm run coverage:gate
```

### Solución Rápida de Problemas

|Problema|Solución|
|---|---|
|Agentes no aparecen|Ctrl+Shift+P → Reload Window|
|Instrucciones no aplican|Verifica el YAML frontmatter|
|Skills no funcionan|Revisa `skills/[nombre]/SKILL.md`|

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
