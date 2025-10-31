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
Desarrollar la página principal (homepage) del sitio web.

### Contrato de Funcionalidad

#### Sección: Hero
- **Input**: Ninguno (estático)
- **Output**: Banner principal con logo y mensaje de bienvenida
- **Validaciones**: N/A
- **Comportamiento**: Visualización inmediata al cargar la página

#### Sección: Sobre Nosotros
- **Input**: Texto estático del negocio
- **Output**: Sección descriptiva de valores y propósito
- **Validaciones**: N/A
- **Comportamiento**: Contenido fijo con diseño atractivo

#### Sección: Productos (Catálogo)
- **Input**: Array de productos con estructura:
```javascript
{
  id: string,
  nombre: string,
  categoria: 'salado' | 'dulce' | 'saludable' | 'especialidad' | 'temporada',
  ingredientes: string,
  imagen: string,
  destacado: boolean
}
```
- **Output**: Grid de tarjetas de productos
- **Validaciones**: 
  - Todos los productos deben tener nombre y categoría
  - Imágenes son opcionales pero recomendadas
- **Comportamiento**: 
  - Filtrado por categoría (opcional en B1)
  - Tarjetas responsive
  - Lazy loading de imágenes

#### Sección: Proceso Artesanal
- **Input**: Descripción del proceso y valores diferenciales
- **Output**: Sección informativa con posible timeline visual
- **Validaciones**: N/A
- **Comportamiento**: Contenido estático, diseño destacado

#### Sección: Hecho en México
- **Input**: Logo/insignia oficial
- **Output**: Sección destacando el distintivo
- **Validaciones**: 
  - Usar logo oficial de la Secretaría de Economía
  - Seguir especificaciones del manual
- **Comportamiento**: Badge visual con enlace a información oficial

#### Sección: Contacto
- **Input**: Información de contacto
- **Output**: Formulario o datos de contacto
- **Validaciones** (si hay formulario):
  - Email válido
  - Teléfono opcional pero con formato correcto
  - Mensaje mínimo 10 caracteres
  - Todos los campos requeridos completados
- **Comportamiento**: 
  - Si formulario: submit con validación
  - Si solo info: cards con datos de contacto

#### Sección: Footer
- **Input**: Links de redes sociales, copyright
- **Output**: Pie de página con información adicional
- **Validaciones**: Links deben ser URLs válidas
- **Comportamiento**: Links externos se abren en nueva pestaña

---

## BLOQUE B2: Sección de Productos Avanzada

### Pendiente de definir
- Sistema de pedidos
- Carrito de compras
- Filtros avanzados

---

## BLOQUE B3: Integración y Optimización

### Pendiente de definir
- SEO completo
- Analytics
- Optimización de imágenes
- Tests

