# ARQUITECTURA - CALLITAE Website

## 1. TECNOLOGÍAS

### Frontend
- **Framework**: HTML5, CSS3 (con Sass/SCSS para modularidad)
- **JavaScript**: Vanilla JS (posible migración a React/Vue si se requiere interactividad avanzada)
- **Build Tool**: Parcel o Vite (para desarrollo y optimización)
- **Responsive**: Mobile-first design

### Estructura de Archivos
```
/
├── docs/               # Documentación
├── public/             # Archivos públicos
│   ├── assets/
│   │   ├── images/     # Imágenes de productos
│   │   ├── logos/      # Logos e identidad visual
│   │   └── fonts/      # Fuentes personalizadas
│   └── index.html      # Página principal
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── styles/         # Estilos CSS/SCSS
│   ├── scripts/        # JavaScript
│   └── pages/          # Páginas adicionales
├── package.json
└── README.md
```

## 2. ESTRUCTURA DE PÁGINAS

### Página Principal (index.html)
1. **Hero Section**: Presentación de la marca con logo y tagline
2. **Sobre Nosotros**: Valores y propósitos del negocio
3. **Productos**: 
   - Tamales Salados
   - Tamales Dulces
   - Categorías Especiales (Ligeros, Especialidades, Temporada)
4. **Proceso Artesanal**: Diferencia y calidad
5. **Hecho en México**: Distintivo oficial
6. **Contacto/Pedidos**: Formulario o información de contacto
7. **Footer**: Redes sociales, créditos

## 3. COMPONENTES

### 3.1 Header/Navigation
- Logo CALLITAE
- Menú de navegación (Home, Productos, Nosotros, Contacto)
- Botón de pedidos destacado

### 3.2 Product Card
- Imagen del tamal
- Nombre
- Descripción de ingredientes
- Badge de categoría (Saludable, Especialidad, Temporada)
- Precio (pendiente)

### 3.3 Category Section
- Título de categoría
- Grid de productos
- Filtros por tipo (opcional)

### 3.4 Testimonials/Reviews
- Sección de testimonios (futuro)

## 4. SISTEMA DE DISEÑO

### Colores
- **Colores del logo**: Pendientes (basados en ESPECIFICACIONES_CALLI_IMAGOTIPO)
- **Colores temáticos sugeridos**:
  - Marrón/Ocre para tradición
  - Verde para productos frescos/saludables
  - Rojo/Tierra para ingredientes mexicanos
  - Blanco/Beige para fondo limpio

### Tipografía
- **Títulos**: Fuente moderna pero legible (font-display: swap)
- **Cuerpo**: Sans-serif, legible en móviles
- **Énfasis**: Cursivas o pesos bold para elementos destacados

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 5. OPTIMIZACIÓN

### Performance
- Imágenes optimizadas (WebP, lazy loading)
- CSS minificado
- JavaScript modular y minificado
- CDN para assets estáticos

### SEO
- Meta tags completos
- Open Graph para redes sociales
- Schema.org markup (LocalBusiness, FoodEstablishment)
- Sitemap.xml
- robots.txt

### Accesibilidad
- Semántica HTML5 correcta
- Atributos alt en imágenes
- Contraste de colores WCAG AA
- Navegación por teclado

## 6. FUNCIONALIDADES FUTURAS

### Fase 2 (opcional)
- Sistema de pedidos online
- Carrito de compras
- Integración de pagos
- Panel de administración
- Blog/Recetas

### Fase 3 (opcional)
- App móvil
- Programa de fidelidad
- Sistema de delivery
- Reseñas de clientes

## 7. DEPENDENCIAS

### Desarrollo
```json
{
  "devDependencies": {
    "sass": "^1.69.0",
    "vite": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### Producción
- Hosting estático: Netlify, Vercel, GitHub Pages
- CDN para imágenes: Cloudinary (opcional)




