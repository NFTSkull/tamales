# Log de Desarrollo - CALLITAE Website

Este archivo registra las decisiones técnicas, cambios y razonamientos durante el desarrollo.

## 28-10-2024

### Inicio del Proyecto (Bloque B0)

**Contexto**: Proyecto completamente vacío, necesitaba crear toda la estructura desde cero.

**Decisiones**:
1. **Stack tecnológico**: Elegí Vite + HTML/CSS/JS vanilla porque:
   - El proyecto es principalmente estático (showcase de productos)
   - No requiere framework pesado (React, Vue) inicialmente
   - Vite ofrece dev server rápido y optimizaciones de build
   - Puede migrarse fácilmente a framework después si se necesitan funcionalidades complejas

2. **Organización de documentación**: Creé estructura completa en `/docs` siguiendo las reglas del usuario:
   - PRODUCTO.md: Información del negocio basada en el email del cliente
   - ARQUITECTURA.md: Diseño técnico y estructura de archivos
   - API_CONTRATOS.md: Especificaciones funcionales (contiene errores de tipeo que debo corregir)
   - TEST_PLAN.md: Plan de pruebas exhaustivo
   - RIESGOS.md: Identifiqué 9 riesgos principales y sus mitigaciones

3. **Riesgos identificados**:
   - **Crítico**: Recursos faltantes (logos, fotos) - creé estructura de carpetas para recibirlos
   - **Crítico**: Información de contacto pendiente - preparé placeholders
   - **Medio**: Precios y promociones no definidas - estructura lista para agregar después

4. **Estructura de carpetas**: 
   - `/docs`: Documentación técnica
   - `/public`: Assets públicos (imágenes, logos)
   - `/src`: Código fuente organizado por tipo (components, styles, pages)

**Supuestos realizados**:
- El sitio será principalmente estático (no requiere backend en B1)
- Los precios pueden agregarse después
- El formulario de contacto será básico (submit directo a email)
- Mobile-first approach para diseño responsive
- SEO será importante para posicionamiento local

**Errores corregidos**:
- Eliminado carácter chino erróneo al inicio de PRODUCTO.md
- Corregido "Frijol puerc" → "Frijol puerco"
- Corregido "Verdur" → "Verduras"
- Corregido numeración de "Cereza con queso de vino tinto"
- Actualizados checkboxes de API_CONTRATOS.md

**Bloque B0 completado**: ✅
- Documentación completa creada
- Estructura de carpetas establecida
- Errores corregidos
- Listo para avanzar a B1

**Próximos pasos**:
- Instalar dependencias del proyecto
- Solicitar recursos faltantes (logos, fotos) al cliente
- Iniciar desarrollo de HTML/CSS del Bloque B1

---

## 28-10-2024 (Continuación - Bloque B1)

### Desarrollo de la Página Web

**Contexto**: Instalación de dependencias completada, inicio del desarrollo de B1.

**Decisiones**:
1. **Configuración de Vite**: Uso de configuración mínima, aprovechando convenciones por defecto
2. **Arquitectura de componentes**: Un solo archivo `app.js` que renderiza toda la aplicación (simplicidad inicial)
3. **Sistema de diseño**:
   - Colores elegidos basándome en industria mexicana: marrón para tradición, verde para fresco, rojo mexicano para acento
   - Mobile-first approach con breakpoints en 768px y 1024px
   - Tipografía del sistema para mejor rendimiento
4. **Estructura HTML**: Todas las secciones en una sola página (SPA simple)
5. **Productos**: Arrays de datos ASCII para fácil mantenimiento y futuro reemplazo con API

**Implementado**:
- ✅ HTML semántico completo
- ✅ Estilos SCSS con variables y responsive
- ✅ 23 productos catalogados (11 salados, 12 dulces)
- ✅ Navegación sticky y responsive
- ✅ Hero section llamativo
- ✅ Grid de productos responsive
- ✅ Footer con enlaces
- ✅ SEO básico (meta tags, Open Graph)

**Problemas resueltos**:
- Error de SCSS corregido (typo "remoser" → "rem")
- Configuración de Vite simplificada
- Estructura de archivos ajustada para Vite

**Servidor dev**: Corriendo en http://localhost:3000

**Bloques B1 y B2 completados**: ✅
- B2 se integró en B1 (productos parte de la página principal)

**Próximos pasos**:
- Bloque B3: Integrar identidad visual con logos reales cuando estén disponibles
- Bloque B4: Optimización de imágenes y SEO avanzado
- Agregar funcionalidad de menú móvil
- Testing del sitio

---

## 06-11-2025 - Bloque B3 (Landing Comercial)

### Objetivo
Rediseñar la homepage para que se enfoque 100% en la venta de tamales y pedidos a domicilio, con filtros y CTA directos para eventos y empresas.

### Cambios clave
- Reescritura completa de `src/components/app.js` con:
  - Hero comercial (solo envíos a domicilio, CTAs hacia catálogo y pedidos)
  - Catálogo unificado (salados, dulces, especialidades y temporada) + badges dinámicos
  - Botonera de filtros (`todos`, `salado`, `dulce`, `especialidad`, `temporada`, `ligero`)
  - Sección “Pedidos para cada ocasión” (eventos, empresas, domicilio)
  - Formulario de pedido con resumen dinámico y envío vía mailto
- `src/main.js` ahora controla:
  - Filtros de catálogo sin recargar la página
  - Scroll suave para todos los CTA (hero, cards, menú)
  - Menú móvil con toggle
  - Validaciones y reset del formulario
- `src/styles/main.scss` reescrito para reflejar la nueva identidad comercial y responsive simplificado
- Documentación actualizada (`PRODUCTO.md`, `ARQUITECTURA.md`, `API_CONTRATOS.md`, `TEST_PLAN.md`)
- CHANGELOG incrementado a 0.5.0

### Supuestos
- Línea ligera disponible para salados, dulces y especialidades (pedido mínimo 6 pzas)
- Especialidades se mantienen con mínimo 6 pzas; temporada sin versión ligera
- Contacto principal vía mailto `contacto@callitae.com`
- Cobertura de envíos a definir manualmente (pendiente del cliente)

### Pendientes
- Integrar logos definitivos y favicon optimizado cuando el cliente los comparta
- Ajustar copy según cobertura de envíos confirmada
- Añadir menú móvil con animación de overlay (actual toggle básico)
- Ejecutar pruebas de usabilidad y Lighthouse (Bloque B4)

---

## Diciembre 2024

### Rediseño Visual y Mejora de Contenido

**Contexto**: Mejora extremada del aspecto visual y reorganización de información basada en especificaciones del cliente.

**Decisiones**:
1. **Paleta de colores mexicana**: 
   - Naranja brillante (#FF9A00, #F39C12) como color principal
   - Amarillo radiante (#FFD15C, #FCE07A) como color secundario
   - Fondo blanco (#FFFFFF) para contraste
   - Cambio completo de los colores anteriores (marrón, verde) a colores más vibrantes y asociados con comida mexicana

2. **Estructura de información mejorada**:
   - Sección destacada de Propósito y Oferta de Valor
   - Información del negocio reorganizada y más completa
   - Separación clara de categorías de productos
   - Badges visuales para identificar categorías (Saludable, Especialidad, Temporada)

3. **Categorías especiales añadidas**:
   - Ligeros y Saludables: con descripción detallada de ingredientes alternativos
   - Especialidades: Gansitamales, Gelatamales, Envinados, Birria
   - Temporada: Tamales en Nogada (septiembre), Ponche (diciembre)

4. **Mejoras visuales**:
   - Gradientes en botones y secciones
   - Efectos hover mejorados en tarjetas de productos
   - Bordes decorativos con colores naranja/amarillo
   - Mejor jerarquía visual con secciones decoradas
   - Sombras sutiles para profundidad

**Implementado**:
- ✅ Rediseño completo de estilos SCSS con nueva paleta
- ✅ Información completa del negocio integrada
- ✅ Todas las categorías de productos añadidas
- ✅ Badges y categorías visuales implementadas
- ✅ Mejor organización de secciones
- ✅ Efectos visuales mejorados (gradientes, sombras, hover)

**Cambios técnicos**:
- Variables SCSS actualizadas con nuevos colores
- Nuevas clases CSS para badges de categoría
- Secciones con clases de acento para fondos degradados
- Mejor estructura semántica en HTML generado

**Bloque de mejoras completado**: ✅
- Rediseño visual completo
- Contenido actualizado y reorganizado
- Todas las categorías de productos implementadas

**Próximos pasos**:
- Integrar imágenes de tamales cuando estén disponibles
- Añadir funcionalidad de menú móvil
- Implementar formulario de contacto funcional
- Optimización de rendimiento y SEO

---

## Diciembre 2024 (Continuación)

### Mejoras Estructurales y Estilo Moderno

**Contexto**: Mejora extremada de estructura y estilo para dar vida al sitio con diseño moderno, elegante y único.

**Decisiones**:
1. **Tipografía elegante**:
   - Playfair Display (serif) para títulos y encabezados - transmite elegancia y tradición
   - Inter (sans-serif) para cuerpo de texto - moderno y legible
   - Mejor jerarquía tipográfica con weights y sizes optimizados
   - Letter-spacing ajustado para mejor legibilidad

2. **Sistema de animaciones sofisticado**:
   - Animaciones de fadeIn y slideInUp para elementos
   - Transiciones con cubic-bezier para movimientos naturales
   - Efectos ripple en botones al hacer hover
   - Animaciones de fondo continuas en hero (patrones y shimmer)
   - Transformaciones 3D sutiles en cards de productos

3. **Efectos visuales modernos**:
   - Glassmorphism en info-boxes con backdrop-filter
   - Gradientes sutiles en múltiples elementos
   - Sombras mejoradas con mayor profundidad
   - Efectos de borde animados en cards
   - Patrones de fondo animados

4. **Estructura mejorada**:
   - Mejor espaciado con padding y margins más generosos
   - Grid system más flexible y responsive
   - Container con max-width de 1280px para mejor uso del espacio
   - Mejor organización visual con secciones más claras

5. **Elementos decorativos únicos**:
   - Símbolos ✦ decorativos en títulos de sección
   - Líneas decorativas con gradientes en títulos
   - Bordes animados en cards con gradientes
   - Efectos de profundidad con múltiples capas

**Implementado**:
- ✅ Google Fonts integradas (Playfair Display + Inter)
- ✅ Sistema de animaciones completo
- ✅ Efectos glassmorphism implementados
- ✅ Cards con hover effects 3D mejorados
- ✅ Hero section con animaciones de fondo
- ✅ Mejor jerarquía visual con tipografía elegante
- ✅ Espaciado mejorado en toda la estructura
- ✅ Elementos decorativos únicos añadidos

**Cambios técnicos**:
- Variables SCSS actualizadas con tipografías
- Nuevas animaciones CSS (@keyframes)
- Efectos backdrop-filter para glassmorphism
- Transiciones mejoradas con cubic-bezier
- Mejor responsive design con breakpoints optimizados

**Resultado**: Sitio web con estructura moderna, elegante y única que refleja la calidad y tradición del producto

**Próximos pasos**:
- Añadir funcionalidad de menú móvil con animaciones
- Implementar scroll animations con Intersection Observer
- Optimizar rendimiento de animaciones
- Añadir más microinteracciones

