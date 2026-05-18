# Especificaciones de Accesibilidad

**Proyecto:** [Nombre del proyecto]  
**Generado por:** @ux-audit  
**Última actualización:** [YYYY-MM-DD]

---

## Estándar de Cumplimiento

- **Versión WCAG:** 2.1
- **Nivel requerido:** AA (mínimo recomendado: AAA para componentes críticos)

---

## Requisitos Clave

- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande
- **Focus visible:** Todos los elementos interactivos deben tener focus ring claro
- **Navegación por teclado:** Tab, Shift+Tab, Enter, Escape en todos los componentes
- **Lenguaje claro:** Sin jerga, frases cortas, instrucciones explícitas
- **Estados de error:** Mensajes claros + sugerencias de corrección
- **Touch targets:** Mínimo 44×44px para dispositivos móviles
- **ARIA:** WAI-ARIA 1.2 en componentes complejos (modales, dropdowns, accordions)

---

## Auditoría Regular

Ejecutar auditoría con: `@ux-audit audita accesibilidad`
