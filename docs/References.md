# BoostDesign - Referencias Oficiales & Mejores Prácticas

Todas las recomendaciones de BoostDesign están respaldadas por estándares oficiales, documentación y mejores prácticas de la industria.

## 🎯 Fundamentos de Design System

### W3C Design Tokens

**Especificación Oficial**: <https://www.w3.org/community/design-tokens/>

- Patrones de arquitectura de tokens
- Especificaciones de formato
- Mejores prácticas de sistemas de diseño
- Soporte multi-marca

**Implementación BoostDesign:**

- Jerarquía de tokens (base → semántico → componente)
- Formato de variables CSS
- Exportación JSON
- Soporte de temas

### Material Design 3

**Docs Oficiales**: <https://m3.material.io/>

- Sistema de grid 8px
- Sistema de color con accesibilidad
- Escalas tipográficas
- Sistemas de elevación/sombras
- Patrones de componentes

**Alineación BoostDesign:**

- Grid 8px: xs(4), sm(8), md(16), lg(24), xl(32)
- Tokens de color Material
- Escala tipográfica M3
- Sombra de elevación Material

---

## ♿ Estándares de Accesibilidad

### WCAG 2.1 Nivel AA

**Especificación Oficial**: <https://www.w3.org/WAI/WCAG21/quickref/>

- Contraste mínimo de color 4.5:1
- Soporte de navegación por teclado
- Compatibilidad con lectores de pantalla
- Indicadores de foco

**Requisitos BoostDesign:**

- Todos los diseños cumplen WCAG AA (mínimo)
- WCAG AAA recomendado para rutas críticas
- Contraste de color verificado
- Enfoque keyboard-first

### WAI-ARIA 1.2

**Especificación Oficial**: <https://www.w3.org/TR/wai-aria-1.2/>

- Roles y propiedades ARIA
- Regiones live ARIA
- Implementaciones de patrones accesibles
- Soporte de lectores de pantalla

**Implementación BoostDesign:**

- Referencia ARIA completa en los skills
- Librería de patrones ARIA APG
- Ejemplos de roles/estados/propiedades
- Directrices de testing

### Guía de Prácticas de Autor ARIA (APG)

**Docs Oficiales**: <https://www.w3.org/WAI/ARIA/apg/patterns/>

- 6 categorías de patrones:
  - Patrones de navegación (breadcrumb, disclosure, menú)
  - Patrones de formulario (checkbox, radio, select)
  - Patrones de diálogo (alert, modal)
  - Patrones de región live (alert, status, log)
  - Patrones de menú (menubar, menú botón)
  - Patrones de combobox (autocompletar, select)

**Skill de Patrones de Diseño BoostDesign:**

- Patrones W3C ARIA APG
- Ejemplos de código para cada patrón
- Atajos de teclado
- Testing con lector de pantalla

---

## 🎨 Documentación de Frameworks

### React

**Docs Oficiales**: <https://react.dev/learn/styling>

**El Skill React de BoostDesign Cubre:**

1. **CSS Modules** - <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Modules>
   - Sin overhead en tiempo de ejecución
   - Nombres de clase con seguridad de tipos
   - Soporte de tree-shaking

2. **Styled Components** - <https://styled-components.com/docs>
   - Estilado dinámico con JS
   - Estilos encapsulados al componente
   - Soporte de temas
   - Server-side rendering

3. **Emotion** - <https://emotion.sh/docs/introduction>
   - Rendimiento CSS-in-JS
   - Menor tamaño de bundle
   - APIs flexibles

4. **Tailwind CSS** - <https://tailwindcss.com/docs>
   - Enfoque utility-first
   - Prototipado rápido
   - Compilación JIT

### Vue

**Docs Oficiales**: <https://vuejs.org/guide/extras/ways-of-using-vue.html>

**El Skill Vue de BoostDesign Cubre:**

1. **Scoped Styles** - <https://vuejs.org/api/sfc-spec.html#style-block>
   - Enfoque Vue por defecto
   - Encapsulamiento automático
   - Sintaxis simple

2. **CSS Modules** - <https://vue-loader.vuejs.org/guide/css-modules.html>
   - Importaciones explícitas
   - Seguridad de tipos

3. **Tailwind CSS**
   - Clases de utilidad en templates
   - Modificadores responsivos

4. **UnoCSS** - <https://unocss.dev/>
   - Motor CSS atómico
   - Mejor rendimiento

### Angular

**Docs Oficiales**: <https://angular.dev/guide/components/styling>

**La Instrucción Angular de BoostDesign Cubre:**

1. **Modos ViewEncapsulation**
   - Emulated (por defecto)
   - ShadowDom (nativo)
   - None (global)

2. **Variables CSS**
   - Integración de design tokens
   - Soporte de temas
   - Estilado dinámico

3. **Patrones de Estilado de Componentes**
   - Organización SCSS
   - Librerías de mixins
   - Alineación con el design system

---

## 🎭 Documentación de Componentes

### Storybook

**Docs Oficiales**: <https://storybook.js.org/>

**El Skill Storybook de BoostDesign Cubre:**

1. **Component Story Format (CSF) 3.0** - <https://storybook.js.org/docs/writing-stories>
   - Formato moderno de stories
   - Args con seguridad de tipos
   - Funciones play

2. **Addon de Accesibilidad (a11y)**
   - Detección de violaciones WCAG
   - Verificación de contraste de color
   - Testing de navegación por teclado

3. **Testing de Interacciones**
   - Funciones play
   - Simulación de eventos de usuario
   - Testing de estados

4. **Testing de Regresión Visual (Chromatic)**
   - Capturas automatizadas
   - Detección de diferencias visuales
   - Prevención de regresiones

---

## 📊 Herramientas de Diseño

### Figma

**Docs Oficiales**: <https://www.figma.com/>
**API para Desarrolladores**: <https://www.figma.com/developers/api>

**Integración Figma de BoostDesign:**

1. **Extracción de Design Tokens**
   - Variables de color
   - Tokens tipográficos
   - Escalas de espaciado
   - Sistemas de sombras

2. **Mapeo de Componentes**
   - Componentes Figma ↔️ Componentes de código
   - Generación de especificaciones
   - Automatización de documentación

3. **Integración con la API de Figma**
   - Tokens de Acceso Personal
   - Acceso a la API REST
   - Automatización CI/CD
   - Sincronización continua

---

## 🛠️ Arquitectura CSS

### BEM (Block Element Modifier)

**Docs Oficiales**: <https://getbem.com/>

**Patrón:**

```
.block { }
.block__element { }
.block--modifier { }
.block__element--modifier { }
```

### SMACSS (Arquitectura Escalable y Modular para CSS)

**Docs Oficiales**: <http://smacss.com/>

**Organización:**

- Base: Resets HTML
- Layout: Componentes de layout principales
- Module: Componentes reutilizables
- State: Cambios de estado (.is-active)
- Theme: Variables de tema
- Utilities: Clases de ayuda

### CSS Grid y Flexbox

**Docs MDN**:

- CSS Grid: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout>
- Flexbox: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout>

**Patrones BoostDesign:**

- Diseño responsivo mobile-first
- Grid para layouts 2D
- Flexbox para layouts 1D

### Sass/SCSS

**Docs Oficiales**: <https://sass-lang.com/documentation>

**Características del Skill Sass de BoostDesign:**

- Variables y anidamiento
- Mixins para reutilizabilidad
- Funciones para cálculos
- Extends para herencia
- Mejores prácticas de organización

---

## 📈 Rendimiento y Calidad

### Lighthouse

**Docs Oficiales**: <https://developers.google.com/web/tools/lighthouse>

**Métricas BoostDesign:**

- Puntuación de rendimiento (Core Web Vitals)
- Puntuación de accesibilidad (WCAG AA+)
- Cumplimiento de mejores prácticas
- Puntuación SEO

### Optimización CSS

**Mejores Prácticas de:**

- <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Performance>
- <https://web.dev/css/>
- <https://www.smashingmagazine.com/>

**Enfoque BoostDesign:**

- CSS-in-JS para code splitting
- Inlining de critical CSS
- Purga de estilos no usados (PurgeCSS)
- Minificación y gzip

---

## 🏢 Ejemplos de Design System

Design systems del mundo real que siguen estos patrones:

### Shopify Polaris

**Referencia**: <https://polaris.shopify.com/>

- Librería de componentes completa
- API de design tokens
- Enfoque en accesibilidad (WCAG AAA)
- Soporte multi-marca

### IBM Carbon

**Referencia**: <https://www.carbondesignsystem.com/>

- Design system empresarial
- Accesibilidad como base
- Open source
- Orientado a la comunidad

### GitHub Primer

**Referencia**: <https://primer.style/>

- Diseño minimalista y limpio
- Accesibilidad-primero
- CSS basado en utilidades
- Modelo de contribución

### Apple Human Interface Guidelines

**Referencia**: <https://developer.apple.com/design/human-interface-guidelines/>

- Mejores prácticas de UI
- Guía de accesibilidad
- Jerarquía tipográfica
- Sistemas de color

---

## 📚 Recursos de Aprendizaje

### Accesibilidad

- **WebAIM**: <https://webaim.org/> - Artículos y herramientas de accesibilidad
- **A11ycasts**: <https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvePng7V> - Serie de vídeos
- **Contrast Checker**: <https://webaim.org/resources/contrastchecker/>
- **Lectores de Pantalla**: NVDA (Windows), JAWS, VoiceOver (Mac/iOS)

### Diseño

- **A List Apart**: <https://alistapart.com/> - Artículos de diseño web
- **Smashing Magazine**: <https://www.smashingmagazine.com/> - Diseño y UX
- **Design Systems Repo**: <https://www.designsystems.com/> - Diseños de referencia

### Desarrollo

- **MDN Web Docs**: <https://developer.mozilla.org/> - Referencia web completa
- **CSS-Tricks**: <https://css-tricks.com/> - Tutoriales y artículos CSS
- **Dev.to**: <https://dev.to/> - Artículos de la comunidad

---

## 🔍 Herramientas y Validadores

### Contraste de Color

- **WebAIM Contrast Checker**: <https://webaim.org/resources/contrastchecker/>
- **Stark**: <https://www.getstark.co/>
- **axe DevTools**: <https://www.deque.com/axe/devtools/>

### Auditoría de Accesibilidad

- **axe DevTools**: Extensión de navegador para testing automatizado
- **WAVE**: <https://wave.webaim.org/> - Evaluación de accesibilidad web
- **Lighthouse**: Integrado en Chrome DevTools

### Herramientas de Diseño

- **Figma**: <https://www.figma.com/> - Diseño y prototipado
- **ColorHexa**: <https://www.colorhexa.com/> - Información de color
- **Coolors**: <https://coolors.co/> - Generador de paletas de color

### Herramientas CSS

- **PurgeCSS**: Eliminación de CSS no usado
- **cssnano**: Minificación y optimización CSS
- **PostCSS**: Transformaciones CSS
- **Prettier**: Formateo de código

---

## 📋 Estándares y Especificaciones

### Recomendaciones W3C

- **CSS Selectors Level 3**: <https://www.w3.org/TR/selectors-3/>
- **CSS Custom Properties (Variables)**: <https://www.w3.org/TR/css-variables-1/>
- **CSS Fonts Module Level 3**: <https://www.w3.org/TR/css-fonts-3/>
- **CSS Box Model**: <https://www.w3.org/TR/css-box-3/>

### HTML y Semántica

- **HTML Living Standard**: <https://html.spec.whatwg.org/>
- **HTML Semántico**: <https://html.spec.whatwg.org/#semantics>
- **Roles ARIA**: <https://www.w3.org/TR/wai-aria-1.2/#role_definitions>

---

## 🎓 Certificaciones y Formación

### Certificaciones de Accesibilidad

- **IAAP CPACC**: Profesional Certificado en Competencias Básicas de Accesibilidad
- **IAAP WAS**: Especialista en Accesibilidad Web
- **Deque University**: Cursos de formación en accesibilidad

### Certificaciones de Design System

- **Design Systems Masterclass**: <https://www.designsystems.com/>
- **Nielsen Norman Group**: Cursos de certificación UX

---

## 📦 Comunidad y Soporte

### Foros y Comunidades

- **CSS-Tricks**: <https://css-tricks.com/>
- **Stack Overflow**: Etiquetas CSS, accesibilidad, design systems
- **Dev.to**: <https://dev.to/> - Plataforma comunitaria
- **Reddit**: r/webdesign, r/accessibility

### Proyectos Open Source

- **awesome-copilot**: <https://github.com/awesome-copilot/awesome-copilot>
- **Material-UI**: <https://github.com/mui/material-ui>
- **Chakra UI**: <https://github.com/chakra-ui/chakra-ui>
- **Storybook**: <https://github.com/storybookjs/storybook>

---

## 📊 Información de Versiones

**Referencias BoostDesign Actualizadas A:**

- W3C Design Tokens: 2024
- WCAG 2.1: Publicado 2018 (AAA recomendado)
- Material Design 3: 2021
- Docs React: 2024
- Vue 3: 2022
- Angular: 2024
- Storybook 8: 2024
- API Figma: 2024

---

## 🔗 Referencia Rápida

| Tema | Enlace |
|------|--------|
| **Design Tokens** | <https://www.w3.org/community/design-tokens/> |
| **WCAG 2.1** | <https://www.w3.org/WAI/WCAG21/quickref/> |
| **ARIA 1.2** | <https://www.w3.org/TR/wai-aria-1.2/> |
| **Material Design 3** | <https://m3.material.io/> |
| **React Styling** | <https://react.dev/learn/styling> |
| **Vue Styling** | <https://vuejs.org/guide/extras/ways-of-using-vue.html> |
| **Angular Styling** | <https://angular.dev/guide/components/styling> |
| **Sass Docs** | <https://sass-lang.com/documentation> |
| **Storybook** | <https://storybook.js.org/> |
| **Figma API** | <https://www.figma.com/developers/api> |
| **BEM** | <https://getbem.com/> |
| **SMACSS** | <http://smacss.com/> |
| **ARIA APG** | <https://www.w3.org/WAI/ARIA/apg/patterns/> |
| **WebAIM Tools** | <https://webaim.org/> |

---

**Todas las recomendaciones de BoostDesign siguen estos estándares y mejores prácticas oficiales.**

**BoostDesign es completamente autónomo e independiente.**

**Última Actualización**: 18 de mayo de 2026
