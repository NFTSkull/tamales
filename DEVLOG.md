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

