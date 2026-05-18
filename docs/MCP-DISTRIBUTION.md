# BoostDesign MCP — Guía de Distribución

> Cómo empaquetar BoostDesign como Model Context Protocol (MCP) para que el equipo lo use sin instalaciones complicadas.

---

## ¿Qué es MCP?

**Model Context Protocol** = estándar para distribuir "contexto" de forma reproducible.

En nuestro caso:
- Agentes preconfigurados
- Skills documentados
- Instrucciones automáticas
- Design tokens en contrato
- **Todo versionado y compartible**

---

## 📦 Estructura MCP (La que ya existe)

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
│   └── skills/                     ← 11 módulos especializados
│       ├── figma-integration/
│       ├── design-system-generator/
│       ├── component-inventory/
│       ├── aria-accessibility-patterns/
│       ├── react-component-styling/
│       ├── vue-component-styling/
│       ├── css-scss-best-practices/
│       ├── screenshot-reporter/
│       ├── ux-audit/
│       ├── storybook-component-documentation/
│       └── design-patterns-library/
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
│   ├── References.md               ← Enlaces a estándares
│   ├── SESSION-GUIDE.md            ← Guía de sesión de 30 min
│   └── DEMO-TECHRIDERS.md          ← Caso real paso a paso
│
└── .github/workflows/              ← (Futuro) CI/CD
    └── validate.yml                ← Validar structure cada push
```

---

## 🎯 package.json (Núcleo de MCP)

Este archivo hace que BoostDesign sea **identificable, versionable y descargable**.

```json
{
  "name": "@boostdesign/framework",
  "version": "1.0.0",
  "description": "Framework integral UX/UI integrado con GitHub Copilot. Agentes + Skills + Design Tokens en un contrato reutilizable.",
  
  "homepage": "https://github.com/Sertxito/BoostDesign---UX-with-Intent",
  "repository": {
    "type": "git",
    "url": "https://github.com/Sertxito/BoostDesign---UX-with-Intent.git",
    "directory": "."
  },
  
  "type": "module",
  "keywords": [
    "copilot",
    "ux",
    "ui",
    "design-system",
    "framework",
    "agentes",
    "skills",
    "mcp",
    "accessibility",
    "wcag"
  ],
  
  "author": {
    "name": "BoostDesign Community",
    "email": "community@boostdesign.dev",
    "url": "https://github.com/Sertxito/BoostDesign---UX-with-Intent"
  },
  
  "license": "MIT",
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/Sertxito"
  },
  
  "scripts": {
    "setup": "echo '✅ BoostDesign listo. Abre VS Code y comienza!' && echo '👉 Próximo paso: Edita .github/copilot-instructions.md'",
    "validate": "node scripts/validate.js",
    "test": "npm run validate"
  },
  
  "engines": {
    "node": ">=18.0.0"
  },
  
  "files": [
    ".github/",
    "docs/",
    "README.md",
    "LICENSE"
  ]
}
```

**Explicación de campos:**
- `name`: @org/package (escalable si crece)
- `version`: semver (v1.0.0, v1.1.0, etc.)
- `repository`: dónde está el código
- `keywords`: buscable en npm
- `scripts`: setup + validation

---

## 🚀 Método 1: Git Clone (Recomendado para Equipos)

### Para usar BoostDesign en un proyecto nuevo:

```bash
# Clonar framework como punto de partida
git clone https://github.com/Sertxito/BoostDesign---UX-with-Intent.git my-project
cd my-project

# Limpiar historia de git (opcional)
rm -rf .git
git init
git add .
git commit -m "Initial commit: BoostDesign framework"

# Abrir en VS Code
code .
```

**Resultado:**
- Copilot detecta `.github/copilot-instructions.md`
- Agentes, skills e instrucciones disponibles inmediatamente

### Alternativa: Como subtree (en proyecto existente)

```bash
# En proyecto existente
git subtree add --prefix .github/boostdesign \
  https://github.com/Sertxito/BoostDesign---UX-with-Intent main

# Actualizar en el futuro
git subtree pull --prefix .github/boostdesign \
  https://github.com/Sertxito/BoostDesign---UX-with-Intent main
```

---

## 📦 Método 2: NPM Package (Futuro)

### Publicar en npm:

```bash
# 1. Crear cuenta en npmjs.com
# 2. Login local
npm login

# 3. Publicar
npm publish --access public

# 4. En otro proyecto
npm install @boostdesign/framework
```

### Uso después de instalar:

```bash
# El package descargará .github/, docs/, README.md, etc.
# Copilot automáticamente detecta .github/copilot-instructions.md
# Agentes disponibles
```

**Ventaja:** versioning automático, updates fáciles.

---

## 🏗️ Método 3: Monorepo (Para equipos grandes)

Estructura si quieres múltiples versiones o pluggins:

```
boostdesign-ecosystem/
├── packages/
│   ├── @boostdesign/framework           ← Lo que tenemos
│   ├── @boostdesign/react-templates     ← Componentes React (futuro)
│   └── @boostdesign/vue-templates       ← Componentes Vue (futuro)
│
├── docs/
├── package.json (root)
└── pnpm-workspace.yaml
```

Cada package es independiente, pero comparten versionado.

---

## 🔄 Flujo de Actualización (Versionado)

### Versiones semánticas:

```
v1.0.0  ← Release inicial (hoy)
         ├── 4 agentes
         ├── 11 skills
         ├── 3 instrucciones
         └── Design tokens contract

v1.1.0  ← Mejoras menores (próxima)
         └── + 2 nuevos skills

v2.0.0  ← Breaking changes
         └── Cambios en estructura de archivos
```

### Cómo versionar:

```bash
# 1. Hacer cambios
# 2. Actualizar CHANGELOG.md
# 3. Bump version en package.json
npm version minor  # v1.0.0 → v1.1.0

# 4. Crear tag en git
git tag v1.1.0
git push origin v1.1.0

# 5. (Si en npm) Publicar
npm publish
```

---

## 📝 CHANGELOG.md (Transparencia)

Crear archivo `CHANGELOG.md`:

```markdown
# Changelog

Todos los cambios notables a BoostDesign están documentados aquí.

## [1.0.0] - 2026-05-18

### Added
- ✅ 4 agentes orquestadores (ux-ui-expert, design-system-architect, etc.)
- ✅ 11 skills especializados (figma-integration, react-styling, etc.)
- ✅ 3 instrucciones automáticas (ux-ui-best-practices, etc.)
- ✅ Design tokens contract (palette.json, typography.json, etc.)
- ✅ Documentación completa (README, Workflows, References)

### Changed
- Consolidar copilot-instructions.md (simple + completo en uno)

### Fixed
- N/A (release inicial)

## [Unreleased]

### Planned
- [ ] 2 nuevos skills (design-audit-advanced, component-testing)
- [ ] Validación automática de design-tokens/
- [ ] Template de proyecto (starter-kit)

---

# Cómo contribuir

Si encuentras bugs o propones mejoras:
1. Fork el repo
2. Crea rama: `feature/nombre`
3. Commit: `git commit -m "feat: descripción"`
4. Push y abre PR
```

---

## 🛡️ Validación (Opcional: CI/CD)

Crear `.github/workflows/validate.yml`:

```yaml
name: Validate BoostDesign

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check structure
        run: |
          echo "✅ Checking .github/ structure..."
          test -f .github/copilot-instructions.md || exit 1
          test -d .github/agents || exit 1
          test -d .github/skills || exit 1
          echo "✅ All required files present"
      
      - name: Validate JSON
        run: |
          echo "✅ Validating design-tokens JSON..."
          node -e "require('fs').readFileSync('docs/design-tokens/palette.json')" || exit 1
          echo "✅ JSON valid"
```

**Resultado:** Cada push valida que la estructura sea correcta.

---

## 🎓 Distribuir al Equipo

### Opción A: URL directa

```markdown
## Cómo usar BoostDesign

1. Clone:
   ```bash
   git clone https://github.com/Sertxito/BoostDesign---UX-with-Intent.git my-project
   ```

2. Abre en VS Code
3. Edita `.github/copilot-instructions.md` con tu proyecto
4. Comienza: `@ux-ui-expert audita mi proyecto`
```

### Opción B: Documento de onboarding

Crear `docs/ONBOARDING.md`:

```markdown
# Onboarding — BoostDesign (5 minutos)

## 1️⃣ Clonar
```bash
git clone https://github.com/Sertxito/BoostDesign---UX-with-Intent.git
cd boostdesign
code .
```

## 2️⃣ Personalizar
Edita `.github/copilot-instructions.md`:
- Figma URL (si tienes) o déjalo vacío
- Dominio del proyecto
- Objetivo principal

## 3️⃣ Generar
En VS Code Chat (Ctrl+Shift+I):
```
@design-system-architect crea una paleta para [tu dominio]
```

## 4️⃣ Usar
Lee `docs/Workflows.md` para tareas rápidas.

## 5️⃣ Explorar
- `docs/References.md` — Estándares W3C, WCAG, etc.
- `.github/agents/` — Agentes disponibles
- `.github/skills/` — Skills documentados
```

### Opción C: Email/Slack template

```
🚀 BoostDesign Framework

Hemos preparado un framework completo de UX/UI integrado con Copilot.

📥 **Descarga:**
https://github.com/Sertxito/BoostDesign---UX-with-Intent

⏱️ **Setup: 5 minutos**
1. git clone ...
2. code .
3. Edita .github/copilot-instructions.md
4. @design-system-architect ...

🎯 **Qué esperar:**
- Agentes orquestadores (ux-ui-expert, design-system-architect, etc.)
- 11 skills especializados
- Design tokens automáticos (palette, typography, tokens)
- Documentación completa

📖 **Docs:**
- Readme.md: Visión general
- docs/SESSION-GUIDE.md: Cómo funcionó el proyecto (30 min)
- docs/DEMO-TECHRIDERS.md: Caso real paso a paso
- docs/Workflows.md: Tareas rápidas

❓ **Preguntas?**
Abre issue en GitHub o pregunta en el chat.

---
BoostDesign: Framework transparente, reutilizable, basado en estándares.
```

---

## 🔐 Permisos y Licencia

### LICENSE (MIT)

Crear `LICENSE`:

```
MIT License

Copyright (c) 2026 BoostDesign Community

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...

[Full MIT text]
```

**Ventaja de MIT:**
- Libre para usar, modificar, distribuir
- Sin atribución obligatoria
- Comercial OK

---

## 📊 Métricas de adopción (Futuro)

Para saber cómo lo usa la comunidad:

```markdown
## ¿Quién usa BoostDesign?

Si tu equipo lo usa, haz un PR añadiendo tu proyecto aquí:

- [Proyecto A](link) — React + Tailwind
- [Proyecto B](link) — Vue + CSS Modules
- [Proyecto C](link) — Angular + SCSS
```

---

## 🎯 Resumen: De Código Local a MCP Público

| Paso | Qué hacer | Resultado |
|------|-----------|-----------|
| 1 | Crear `package.json` | BoostDesign es identificable |
| 2 | Crear `CHANGELOG.md` | Versionado transparente |
| 3 | Git tag + push | v1.0.0 en GitHub |
| 4 | Publicar (npm o compartir GitHub URL) | Equipos pueden `git clone` |
| 5 | Documentar onboarding | Nuevos devs pueden empezar en 5 min |
| 6 | Validación (CI/CD) | Calidad mantenida en cada update |

---

## 🚀 Próximos pasos

1. ✅ Versionar como v1.0.0 en GitHub (ya hecho)
2. ⏭️ Crear CHANGELOG.md
3. ⏭️ Compartir URL con equipo
4. ⏭️ Recopilar feedback
5. ⏭️ v1.1.0: Mejoras basadas en feedback
6. ⏭️ (Futuro) Publicar en npm si la comunidad lo necesita

---

## 📞 Soporte

**Problema:** Agentes no aparecen  
**Solución:** `Ctrl+Shift+P → Reload Window`

**Problema:** Instrucciones no aplican  
**Solución:** Verifica YAML frontmatter en .instructions.md

**Problema:** Skills no funcionan  
**Solución:** Abre issue en GitHub con detalles

---

**BoostDesign: Framework transparente, versionado, descargable, reutilizable.** ✨
