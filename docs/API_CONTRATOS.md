# API Y CONTRATOS - CALLITAE Website

## BLOQUE B0: Documentación y Estructura

### Objetivo
Crear la base documental y estructura del proyecto.

### Entregables
- [x] PRODUCTO.md
- [x] ARQUITECTURA.md
- [x] TEST_PLAN.md
- [x] RIESGOS.md
- [x] Estructura de carpetas

---

## BLOQUE B1: Página Web Principal

### Objetivo
Levantar un homepage completamente orientado a la venta de tamales artesanales.

### Contrato de Funcionalidad

#### Sección: Hero Comercial
- **Input**: Assets de marca (logo, claim principal)
- **Output**: Encabezado con mensaje directo de venta y CTA hacia catálogo/pedidos
- **Validaciones**: Texto corto y claro (máximo 3 frases)
- **Comportamiento**: Mostrar llamados a la acción al cargar la página

#### Sección: Catálogo de Productos
- **Input**: Array de productos con estructura:
```javascript
{
  id: string,
  nombre: string,
  categoria: 'salado' | 'dulce' | 'especialidad' | 'temporada',
  descripcion: string,
  ligeroDisponible: boolean,
  pedidoMinimo?: number
}
```
- **Output**: Grid responsive con todas las tarjetas de producto
- **Validaciones**:
  - Cada producto debe mostrar nombre y descripción
  - Etiquetas visuales para especialidades, temporada y versiones ligeras
- **Comportamiento**:
  - Grid mobile-first
  - Botón/CTA que apunte al formulario de pedidos

#### Sección: Pedidos a Domicilio
- **Input**: Información de servicio (eventos, empresas, entregas a domicilio)
- **Output**: Cards o bloques que expliquen tipos de pedidos y cobertura
- **Validaciones**: Mensajes cortos, destacar “solo envíos a domicilio”
- **Comportamiento**: CTA hacia formulario o contacto

#### Sección: Formulario de Pedido
- **Input**: Datos del cliente y selección de productos
- **Output**: Envío vía mailto con resumen de pedido
- **Validaciones**:
  - Campos obligatorios validados en el cliente
  - Pedido mínimo de 6 piezas en especialidades y línea ligera
  - Debe existir al menos un producto seleccionado antes de enviar
- **Comportamiento**:
  - Actualización dinámica de resumen de pedido
  - Botones para incrementar/disminuir cantidades

#### Sección: Footer
- **Input**: Redes sociales, email, aviso legal
- **Output**: Pie de página con información de contacto
- **Validaciones**: Links válidos, apertura en nueva pestaña cuando aplique
- **Comportamiento**: Contenido estático

---

## BLOQUE B2: Consolidación del Catálogo

### Objetivo
Unificar datos de productos y formulario de pedidos.

### Estado
- Catálogo de productos cargado con los 23 sabores base
- Formulario de pedidos con resumen dinámico
- Validaciones mínimas implementadas (pedido mínimo, campos obligatorios)

> **Nota**: El comportamiento principal del catálogo se mantiene en B1; B2 se considera completado al compartir la misma fuente de datos para cards y formulario.

---

## BLOQUE B3: Landing Comercial Interactiva

### Objetivo
Reforzar el enfoque de ventas con una experiencia centrada en productos, pedidos para eventos/empresas y envíos a domicilio.

### Contrato de Funcionalidad

#### Filtros de Catálogo
- **Input**: Lista de categorías (`todos`, `salado`, `dulce`, `especialidad`, `temporada`, `ligero`)
- **Output**: Botonera interactiva que filtra las tarjetas sin recargar la página
- **Validaciones**: Mostrar siempre al menos un producto; botón “Todos” activo por defecto
- **Comportamiento**: 
  - Animación visual al cambiar de filtro
  - Etiquetas visibles para versiones ligeras, especialidades y temporada

#### Tarjetas de Producto
- **Input**: Objeto de producto (ver B1)
- **Output**: Tarjeta con nombre, descripción, etiquetas y CTA “Agregar al pedido” (scroll al formulario)
- **Validaciones**: Todas las tarjetas deben enlazar con el formulario de pedidos
- **Comportamiento**:
  - Hover con enfoque en conversión
  - Mostrar badge “Disponible en versión ligera” cuando aplique

#### Sección Pedidos para Eventos/Empresas
- **Input**: Mensajes cortos sobre servicios (eventos, empresas, entregas a domicilio)
- **Output**: Cards destacadas con CTA hacia formulario
- **Validaciones**: Incluir mensaje “Solo envíos a domicilio”
- **Comportamiento**: Scroll suave al formulario

#### CTAs de Pedido
- **Input**: Botones en hero, tarjetas y sección de pedidos
- **Output**: Scroll al formulario de pedidos o apertura de mailto
- **Validaciones**: Mantener consistencia de copy (“Realizar pedido / Cotizar evento”)
- **Comportamiento**: Smooth scroll

#### Identidad Visual Comercial
- **Input**: Paleta naranja/amarilla, tipografía elegante
- **Output**: Estilos actualizados sin perder legibilidad
- **Validaciones**: Contraste AA, lectura clara
- **Comportamiento**: Animaciones suaves y microinteracciones

