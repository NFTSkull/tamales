# PLAN DE PRUEBAS - CALLITAE Website

## BLOQUE B0: Documentación

### Casos de Prueba
- [ ] Verificar que todos los documentos existan
- [ ] Validar completitud de PRODUCTO.md
- [ ] Validar completitud de ARQUITECTURA.md
- [ ] Validar completitud de API_CONTRATOS.md
- [ ] Revisar que la estructura de carpetas esté completa

**Criterio de Éxito**: Todos los documentos de /docs presentes y completos

---

## BLOQUE B1: Página Web Principal

### 1. Pruebas Visuales (Visual Regression)
- [ ] Hero comercial muestra mensaje de venta y CTA principales
- [ ] Logo carga y se muestra nítidamente
- [ ] Colores y tipografía siguen el diseño especificado
- [ ] Spacing y layout son consistentes
- [ ] Tarjetas de producto se renderizan correctamente
- [ ] Sección de pedidos (eventos/empresas/domicilio) es visible

**Dispositivos de prueba**:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop Chrome
- Desktop Firefox
- Desktop Safari

**Resoluciones**:
- 320px, 375px, 768px, 1024px, 1280px, 1920px

### 2. Pruebas Funcionales
- [ ] Todos los links de navegación funcionan
- [ ] Botones de CTA hacen scroll al formulario de pedidos
- [ ] Formulario de pedidos valida campos requeridos
- [ ] Envío de formulario muestra mensaje de confirmación o error
- [ ] Links de redes sociales abren correctamente

### 3. Pruebas de Performance
- [ ] Tiempo de carga inicial < 3 segundos
- [ ] Lighthouse score > 90 en Performance
- [ ] Lighthouse score > 90 en Accessibility
- [ ] Lighthouse score > 90 en Best Practices
- [ ] Lighthouse score > 90 en SEO
- [ ] Imágenes optimizadas (< 200KB cada una)
- [ ] CSS minificado y optimizado
- [ ] JavaScript minificado y optimizado

### 4. Pruebas de Accesibilidad
- [ ] Navegación por teclado funciona (Tab, Enter, Esc)
- [ ] Contraste de colores cumple WCAG AA
- [ ] Todas las imágenes tienen atributo alt descriptivo
- [ ] Formularios tienen labels asociados
- [ ] Headings tienen jerarquía correcta (h1, h2, h3)
- [ ] Idioma del documento declarado (lang="es")

### 5. Pruebas de Contenido
- [ ] Todos los productos del catálogo están incluidos
- [ ] Descripciones de productos son completas
- [ ] Mensaje “solo envíos a domicilio” presente
- [ ] No hay errores ortográficos
- [ ] Textos son claros y descriptivos

### 6. Pruebas de Cross-browser
- [ ] Funciona en Chrome (últimas 2 versiones)
- [ ] Funciona en Firefox (últimas 2 versiones)
- [ ] Funciona en Safari (últimas 2 versiones)
- [ ] Funciona en Edge (últimas 2 versiones)
- [ ] Funciona en navegadores móviles iOS/Android

### 7. Pruebas de Responsive
- [ ] Layout se adapta correctamente en móvil
- [ ] Menú hamburguesa funciona en móvil (si aplica)
- [ ] Imágenes no se deforman en ninguna resolución
- [ ] Textos son legibles en pantallas pequeñas
- [ ] Botones tienen tamaño adecuado para touch

---

## BLOQUE B3: Landing Comercial Interactiva

### 1. Filtros de Catálogo
- [ ] Botón "Todos" activo por defecto
- [ ] Filtro "Salados" muestra solo productos salados
- [ ] Filtro "Dulces" muestra solo productos dulces
- [ ] Filtro "Especialidades" oculta el resto y mantiene badges
- [ ] Filtro "Temporada" muestra los productos especiales del periodo
- [ ] Filtro "Ligeros" muestra únicamente tarjetas con versión ligera disponible
- [ ] Cambiar de filtro no provoca reflow incorrecto ni saltos de layout

### 2. Interacciones de Venta
- [ ] CTA “Agregar al pedido” desplaza al formulario correctamente
- [ ] Cards de eventos/empresas/domicilio desplazan al formulario
- [ ] Mensaje “solo envíos a domicilio” visible en desktop y mobile
- [ ] Microinteracciones (hover, focus) no afectan legibilidad

### 3. Formulario de Pedido
- [ ] Botones +/- actualizan cantidades en tiempo real
- [ ] Resumen refleja cantidades y categorías seleccionadas
- [ ] Se impide el envío si no hay productos seleccionados
- [ ] Validaciones de pedido mínimo para especialidades y línea ligera
- [ ] Fecha mínima = día siguiente
- [ ] Envío genera mailto con detalle del pedido

---

## Herramientas de Pruebas

### Automatizadas
- **Playwright**: Para pruebas E2E
- **Lighthouse CI**: Para pruebas de performance
- **Jest**: Para pruebas unitarias (si hay JS)

### Manuales
- Navegadores reales
- DevTools de Chrome/Firefox
- Extensiones de accesibilidad (WAVE, axe DevTools)

---

## Checklist Pre-Producción

Antes de hacer deploy a producción, verificar:
- [ ] Todas las pruebas pasadas
- [ ] No hay console errors
- [ ] No hay 404s de recursos
- [ ] SEO básico implementado (meta tags, sitemap)
- [ ] Analytics configurado (si aplica)
- [ ] Formularios funcionan correctamente
- [ ] Backup de código realizado
- [ ] CHANGELOG.md actualizado
- [ ] DEVLOG.md actualizado






