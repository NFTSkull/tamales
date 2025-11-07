// Componente principal del landing comercial de CALLITAE

const catalogoProductos = [
  // Salados
  { id: 'salado-1', categoria: 'salado', nombre: 'Cochinita', descripcion: 'Cochinita pibil tradicional', ligeroDisponible: true },
  { id: 'salado-2', categoria: 'salado', nombre: 'Suadero en salsa verde', descripcion: 'Suadero con salsa verde artesanal', ligeroDisponible: true },
  { id: 'salado-3', categoria: 'salado', nombre: 'Pastor', descripcion: 'Pastor al estilo tradicional mexicano', ligeroDisponible: true },
  { id: 'salado-4', categoria: 'salado', nombre: 'Pollo con mole', descripcion: 'Pollo con mole de arándanos y ajonjolí', ligeroDisponible: true },
  { id: 'salado-5', categoria: 'salado', nombre: 'Pollo en morita', descripcion: 'Pollo marinado en salsa de chile morita', ligeroDisponible: true },
  { id: 'salado-6', categoria: 'salado', nombre: 'Tres quesos', descripcion: 'Queso Oaxaca, manchego y panela', ligeroDisponible: true },
  { id: 'salado-7', categoria: 'salado', nombre: 'Champiñón con quesillo', descripcion: 'Champiñones salteados con quesillo', ligeroDisponible: true },
  { id: 'salado-8', categoria: 'salado', nombre: 'Espinaca, elote y queso', descripcion: 'Mezcla cremosa de espinaca, elote dulce y queso', ligeroDisponible: true },
  { id: 'salado-9', categoria: 'salado', nombre: 'Cenizos', descripcion: 'Frijol negro, salsa verde y queso panela', ligeroDisponible: true },
  { id: 'salado-10', categoria: 'salado', nombre: 'Frijol puerco', descripcion: 'Frijol bayo con tocino, longaniza y chiles secos', ligeroDisponible: true },
  { id: 'salado-11', categoria: 'salado', nombre: 'Verduras', descripcion: 'Flor de calabaza, elote, calabaza y queso gouda', ligeroDisponible: true },

  // Dulces
  { id: 'dulce-1', categoria: 'dulce', nombre: 'Cajeta con nuez', descripcion: 'Cajeta artesanal con nuez tostada', ligeroDisponible: true },
  { id: 'dulce-2', categoria: 'dulce', nombre: 'Oreo con Nutella', descripcion: 'Crema de Nutella con galleta Oreo', ligeroDisponible: true },
  { id: 'dulce-3', categoria: 'dulce', nombre: 'Guayaba en almíbar', descripcion: 'Guayaba dulce cocinada lentamente en almíbar', ligeroDisponible: true },
  { id: 'dulce-4', categoria: 'dulce', nombre: 'Mango', descripcion: 'Mango fresco y jugoso', ligeroDisponible: true },
  { id: 'dulce-5', categoria: 'dulce', nombre: 'Café de olla', descripcion: 'Café de olla con piloncillo y canela', ligeroDisponible: true },
  { id: 'dulce-6', categoria: 'dulce', nombre: 'Zarzamora con queso Philadelphia', descripcion: 'Zarzamora y queso crema Philadelphia', ligeroDisponible: true },
  { id: 'dulce-7', categoria: 'dulce', nombre: 'Napolitano', descripcion: 'Relleno cremoso de flan napolitano', ligeroDisponible: true },
  { id: 'dulce-8', categoria: 'dulce', nombre: 'Mandarina con chabacano', descripcion: 'Mandarina fresca con chabacano en almíbar', ligeroDisponible: true },
  { id: 'dulce-9', categoria: 'dulce', nombre: 'Zanahoria con queso Philadelphia', descripcion: 'Zanahoria especiada con queso Philadelphia', ligeroDisponible: true },
  { id: 'dulce-10', categoria: 'dulce', nombre: 'Almendra con chocolate', descripcion: 'Chocolate artesanal con almendras tostadas', ligeroDisponible: true },
  { id: 'dulce-11', categoria: 'dulce', nombre: 'Higo con queso Brie', descripcion: 'Higo caramelizado con queso Brie', ligeroDisponible: true },
  { id: 'dulce-12', categoria: 'dulce', nombre: 'Cereza con queso de vino tinto', descripcion: 'Cerezas con queso madurado en vino tinto', ligeroDisponible: true },

  // Especialidades (pedido mínimo 6)
  { id: 'especialidad-1', categoria: 'especialidad', nombre: 'Gansitamales', descripcion: 'Versión de tamal estilo gansito con cubierta de chocolate', ligeroDisponible: true, pedidoMinimo: 6 },
  { id: 'especialidad-2', categoria: 'especialidad', nombre: 'Gelatamales', descripcion: 'Tamales de gelatina en sabores especiales, servidos fríos', ligeroDisponible: true, pedidoMinimo: 6 },
  { id: 'especialidad-3', categoria: 'especialidad', nombre: 'Envinados', descripcion: 'Fresa marinada, vainilla con flan y chocolate con plátano', ligeroDisponible: true, pedidoMinimo: 6 },
  { id: 'especialidad-4', categoria: 'especialidad', nombre: 'Birria', descripcion: 'Tamales servidos en caldillo con complementos tradicionales', ligeroDisponible: true, pedidoMinimo: 6 },

  // Temporada
  { id: 'temporada-1', categoria: 'temporada', nombre: 'Tamales en Nogada', descripcion: 'Disponibles en septiembre bajo pedido anticipado', temporada: 'Septiembre', ligeroDisponible: false },
  { id: 'temporada-2', categoria: 'temporada', nombre: 'Ponche', descripcion: 'Disponibles en diciembre bajo pedido anticipado', temporada: 'Diciembre', ligeroDisponible: false }
];

const filtrosCatalogo = [
  { id: 'todos', label: 'Todos' },
  { id: 'salado', label: 'Salados' },
  { id: 'dulce', label: 'Dulces' },
  { id: 'especialidad', label: 'Especialidades' },
  { id: 'temporada', label: 'Temporada' },
  { id: 'ligero', label: 'Línea ligera' }
];

const lineaLigera = {
  titulo: 'Ligeros y Saludables',
  descripcion: 'Todos nuestros sabores pueden elaborarse con harina de avena, almendra o amaranto, endulzados con dátil o ciruela pasa.',
  nota: 'Pedido mínimo 6 piezas por sabor en la línea ligera'
};

const seccionesPedido = [
  {
    id: 'salado',
    titulo: 'Tamales Gourmet Salados',
    descripcion: 'Sabores tradicionales con ingredientes premium y sazón artesanal.',
    tab: 'Salados'
  },
  {
    id: 'dulce',
    titulo: 'Tamales Gourmet Dulces',
    descripcion: 'Postres envueltos en hoja que sorprenden en cualquier mesa.',
    tab: 'Dulces'
  },
  {
    id: 'especialidad',
    titulo: 'Especialidades',
    descripcion: 'Creaciones exclusivas para impresionar a tus invitados.',
    nota: 'Pedido mínimo 6 piezas por sabor de especialidad',
    tab: 'Especialidades'
  },
  {
    id: 'temporada',
    titulo: 'Productos de Temporada',
    descripcion: 'Sabores icónicos disponibles en fechas especiales (Nogada, Ponche).',
    tab: 'Temporada'
  }
];

const productTypeLabels = {
  salado: 'Salado',
  dulce: 'Dulce',
  especialidad: 'Especialidad',
  temporada: 'Temporada'
};

const pedidosDestacados = [
  {
    titulo: 'Eventos y celebraciones',
    descripcion: 'Banquetes, bodas, bautizos, cumpleaños y reuniones familiares con entrega puntual.',
    icon: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="12" width="22" height="15" rx="3" stroke="currentColor" stroke-width="1.6" />
        <path d="M10 12V8C10 6.89543 10.8954 6 12 6H20C21.1046 6 22 6.89543 22 8V12" stroke="currentColor" stroke-width="1.6" />
        <path d="M5 16H27" stroke="currentColor" stroke-width="1.6" />
        <circle cx="11" cy="21" r="1.6" fill="currentColor" />
        <circle cx="21" cy="21" r="1.6" fill="currentColor" />
      </svg>`
  },
  {
    titulo: 'Empresas y desayunos',
    descripcion: 'Desayunos ejecutivos, lanzamientos y regalos corporativos con menú personalizado.',
    icon: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.6" />
        <path d="M11 6V4.5C11 3.67157 11.6716 3 12.5 3H19.5C20.3284 3 21 3.67157 21 4.5V6" stroke="currentColor" stroke-width="1.6" />
        <path d="M11 15H21" stroke="currentColor" stroke-width="1.6" />
        <path d="M11 11H21" stroke="currentColor" stroke-width="1.6" />
        <path d="M11 19H18" stroke="currentColor" stroke-width="1.6" />
      </svg>`
  },
  {
    titulo: 'Envíos a domicilio',
    descripcion: 'Entrega directa a tu puerta dentro del área de cobertura. Programa tu fecha y horario.',
    icon: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11H19C20.1046 11 21 11.8954 21 13V22H10C8.34315 22 7 20.6569 7 19V11Z" stroke="currentColor" stroke-width="1.6" />
        <path d="M21 15H24.5C25.8807 15 27 16.1193 27 17.5V22H21" stroke="currentColor" stroke-width="1.6" />
        <circle cx="11" cy="24" r="2" stroke="currentColor" stroke-width="1.6" />
        <circle cx="23" cy="24" r="2" stroke="currentColor" stroke-width="1.6" />
      </svg>`
  }
];

function renderBadges(producto) {
  const badges = [];

  if (producto.temporada) {
    badges.push({ label: producto.temporada, modifier: 'seasonal' });
  }

  if (!badges.length) {
    return '';
  }

  return `
    <div class="product-card__badges">
      ${badges.map(badge => `
        <span class="product-card__badge product-card__badge--${badge.modifier}">${badge.label}</span>
      `).join('')}
    </div>
  `;
}

function renderProductoCard(producto) {
  return `
    <article class="product-card" data-category="${producto.categoria}" data-ligero="${producto.ligeroDisponible}">
      <div class="product-card__content">
        <div class="product-card__header">
          <h3 class="product-card__name">${producto.nombre}</h3>
          ${renderBadges(producto)}
        </div>
        <p class="product-card__description">${producto.descripcion}</p>
        <button class="product-card__cta" type="button" data-scroll="#orderFormSection">Agregar al pedido</button>
      </div>
    </article>
  `;
}

function renderProductPanels(productosPorCategoria) {
  return seccionesPedido.map((seccion, index) => {
    const productos = productosPorCategoria[seccion.id] || [];

    return `
      <div class="product-panel ${index === 0 ? 'is-active' : ''}" data-panel="${seccion.id}">
        <div class="product-panel__header">
          <h5>${seccion.titulo}</h5>
          <p>${seccion.descripcion}</p>
        </div>
        ${seccion.nota ? `<div class="product-panel__note">${seccion.nota}</div>` : ''}
        <div class="products-selector">
          ${productos.map(producto => `
            <div class="product-selector-item ${producto.categoria === 'especialidad' ? 'product-selector-item--special' : ''} ${producto.categoria === 'temporada' ? 'product-selector-item--seasonal' : ''}">
              <div class="product-selector-item__info">
                <h5 class="product-selector-item__name">${producto.nombre}</h5>
                <p class="product-selector-item__desc">${producto.descripcion}</p>
                ${producto.pedidoMinimo ? `<span class="product-selector-item__badge">Pedido mínimo ${producto.pedidoMinimo} pzas</span>` : ''}
                ${producto.categoria === 'temporada' && producto.temporada ? `<span class="product-selector-item__badge product-selector-item__badge--seasonal">${producto.temporada}</span>` : ''}
              </div>
              <div class="product-selector-item__controls">
                <button type="button" class="quantity-btn quantity-btn--minus" data-product="${producto.id}">−</button>
                <input
                  type="number"
                  id="${producto.id}"
                  name="${producto.id}"
                  class="quantity-input"
                  min="0"
                  value="0"
                  data-product-name="${producto.nombre}"
                  data-product-type="${productTypeLabels[producto.categoria]}"
                  ${producto.pedidoMinimo ? `data-min-order="${producto.pedidoMinimo}"` : ''}
                >
                <button type="button" class="quantity-btn quantity-btn--plus" data-product="${producto.id}">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

export function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const productosPorCategoria = catalogoProductos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
      acc[producto.categoria] = [];
    }
    acc[producto.categoria].push(producto);
    return acc;
  }, {});

  const productTabs = seccionesPedido.map((seccion, index) => `
    <button type="button" class="product-tabs__button ${index === 0 ? 'is-active' : ''}" data-panel="${seccion.id}" aria-pressed="${index === 0}">
      ${seccion.tab}
    </button>
  `).join('');

  const productPanels = renderProductPanels(productosPorCategoria);

  app.innerHTML = `
    <header class="header">
      <nav class="nav container">
        <a href="#inicio" class="nav__logo" data-scroll="#inicio">
          <img src="/assets/logos/logo-calli.png" alt="CALLITAE - Tamales Artesanales" class="nav__logo-img" loading="lazy">
        </a>
        <ul class="nav__menu">
          <li><a href="#inicio" data-scroll="#inicio">Inicio</a></li>
          <li><a href="/nosotros.html">Nosotros</a></li>
          <li><a href="#productos" data-scroll="#productos">Productos</a></li>
          <li><a href="/promociones.html">Promociones</a></li>
          <li><a href="#pedidos" data-scroll="#pedidos">Pedidos</a></li>
        </ul>
        <a href="#pedidos" class="nav__cta btn btn--outline" data-scroll="#pedidos">Hacer pedido</a>
        <button class="nav__burger" aria-label="Abrir menú">☰</button>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero">
        <video class="hero__video" autoplay loop muted playsinline preload="auto" poster="/assets/videos/cali-hero-poster.jpg">
          <source src="/assets/videos/cali-hero.webm" type="video/webm">
          <source src="/assets/videos/cali-hero.mp4" type="video/mp4">
        </video>
        <div class="hero__overlay"></div>
        <div class="container hero__content">
          <div class="hero__badge">Solo envíos a domicilio</div>
          <h1 class="hero__title">Tamales artesanales listas para tus eventos y empresas</h1>
          <p class="hero__description">
            Elige tus sabores favoritos, programa la entrega y recibe tamales artesanales calientes en la puerta de tu hogar u oficina.
          </p>
          <div class="hero__cta">
            <a href="#productos" class="btn btn--hero-primary" data-scroll="#productos">Ver catálogo completo</a>
            <a href="#pedidos" class="btn btn--hero-secondary" data-scroll="#pedidos">Cotizar eventos</a>
          </div>
          <div class="hero__pill-group">
            <span class="hero__pill">Eventos y celebraciones</span>
            <span class="hero__pill">Empresas y desayunos</span>
            <span class="hero__pill">Entrega programada</span>
          </div>
        </div>
      </section>

      <section id="productos" class="section section--accent">
        <div class="container">
          <div class="products-header">
            <h2 class="products-header__title">Catálogo de tamales</h2>
            <p class="products-header__subtitle">Selecciona por categoría y arma tu pedido en segundos.</p>
          </div>

          <div class="product-filters" role="tablist">
            ${filtrosCatalogo.map((filtro, index) => `
              <button type="button" class="product-filters__button ${index === 0 ? 'is-active' : ''}" data-filter="${filtro.id}" aria-pressed="${index === 0}">
                ${filtro.label}
              </button>
            `).join('')}
          </div>

          <div class="linea-ligera">
            <h3 class="linea-ligera__title">${lineaLigera.titulo}</h3>
            <p class="linea-ligera__description">${lineaLigera.descripcion}</p>
            <p class="linea-ligera__note">${lineaLigera.nota}</p>
          </div>

          <div class="products-grid" id="productsGrid">
            ${catalogoProductos.map(renderProductoCard).join('')}
          </div>

          <div class="products-grid__note">Todos los pedidos se preparan bajo encargo. Recomendamos solicitar con 48 horas de anticipación.</div>
        </div>
      </section>

      <section id="pedidos" class="section">
        <div class="container">
          <div class="order-highlights">
            <h2 class="order-highlights__title">Pedidos para cada ocasión</h2>
            <p class="order-highlights__subtitle">Agenda tus tamales para eventos, empresas o desayuno en casa. Siempre con entrega a domicilio.</p>
            <div class="order-highlights__grid">
              ${pedidosDestacados.map(destacado => `
                <article class="order-highlights__card" data-scroll="#orderFormSection">
                  <span class="order-highlights__icon" aria-hidden="true">${destacado.icon}</span>
                  <div class="order-highlights__content">
                    <h3 class="order-highlights__card-title">${destacado.titulo}</h3>
                    <p class="order-highlights__card-text">${destacado.descripcion}</p>
                    <span class="order-highlights__cta">Solicitar pedido</span>
                  </div>
                </article>
              `).join('')}
            </div>
            <p class="order-highlights__note">Servicio único de entrega a domicilio. Cobertura y horarios a definir al confirmar tu pedido.</p>
          </div>

          <div id="orderFormSection" class="order-form-container">
            <div class="order-form-header">
              <h3 class="order-form-header__title">Realiza tu pedido</h3>
              <p class="order-form-header__subtitle">Selecciona tus sabores, indica cantidades y agenda tu entrega. Te contactaremos para confirmar disponibilidad.</p>
            </div>

            <form id="orderForm" class="order-form" novalidate>
              <div class="order-form__main">
                <section class="form-card form-card--contact">
                  <div class="form-card__header">
                    <h4>Datos de contacto</h4>
                    <p>Confírmanos dónde y cuándo quieres recibir tus tamales.</p>
                  </div>
                  <div class="form-grid">
                    <div class="form-group">
                      <label for="nombre" class="form-label">Nombre completo *</label>
                      <input type="text" id="nombre" name="nombre" class="form-input" placeholder="Tu nombre" required>
                    </div>
                    <div class="form-group">
                      <label for="email" class="form-label">Correo electrónico *</label>
                      <input type="email" id="email" name="email" class="form-input" placeholder="tu@email.com" required>
                    </div>
                    <div class="form-group">
                      <label for="telefono" class="form-label">Teléfono *</label>
                      <input type="tel" id="telefono" name="telefono" class="form-input" placeholder="55 0000 0000" required>
                    </div>
                    <div class="form-group">
                      <label for="direccion" class="form-label">Dirección de entrega *</label>
                      <textarea id="direccion" name="direccion" class="form-input form-textarea" rows="3" placeholder="Calle, número, colonia, alcaldía" required></textarea>
                    </div>
                    <div class="form-group">
                      <label for="fecha-entrega" class="form-label">Fecha de entrega deseada *</label>
                      <input type="date" id="fecha-entrega" name="fecha-entrega" class="form-input" required>
                    </div>
                    <div class="form-group">
                      <label for="comentarios" class="form-label">Comentarios para el equipo</label>
                      <textarea id="comentarios" name="comentarios" class="form-input form-textarea" rows="3" placeholder="¿Evento, número de invitados, alergias, horarios?"></textarea>
                    </div>
                  </div>
                </section>

                <section class="form-card form-card--catalog">
                  <div class="form-card__header">
                    <h4>Selecciona tus tamales</h4>
                    <p>Explora cada categoría, ajusta cantidades y combina sabores para tu pedido.</p>
                  </div>
                  <div class="product-tabs" role="tablist">
                    ${productTabs}
                  </div>
                  <div class="product-panels">
                    ${productPanels}
                  </div>
                  <div class="form-card__footnote">Pedidos elaborados bajo encargo. Sugerimos solicitar con al menos 48 horas de anticipación.</div>
                  <div class="form-checkbox-group form-checkbox-group--inline">
                    <label class="form-checkbox">
                      <input type="checkbox" id="version-ligera" name="version-ligera" class="form-checkbox-input">
                      <span class="form-checkbox-label">Quiero todos los sabores en versión ligeros y saludables</span>
                      <span class="form-checkbox-note">Harinas alternativas, endulzados con dátil o ciruela pasa. Pedido mínimo 6 piezas.</span>
                    </label>
                  </div>
                </section>
              </div>

              <aside class="order-form__sidebar">
                <section class="form-card form-card--summary">
                  <div class="form-card__header">
                    <h4>Resumen de tu pedido</h4>
                    <p>Verifica cantidades y sabores antes de enviarnos tu solicitud.</p>
                  </div>
                  <div class="order-summary" id="orderSummary">
                    <div class="order-summary__content" id="orderSummaryContent">
                      <p class="order-summary__empty">Selecciona productos para calcular tu pedido.</p>
                    </div>
                    <div class="order-summary__total" id="orderSummaryTotal" style="display: none;">
                      <span class="order-summary__total-label">Total piezas</span>
                      <span class="order-summary__total-value" id="totalPieces">0</span>
                    </div>
                  </div>
                  <div class="form-actions">
                    <button type="submit" class="btn btn--submit">Enviar pedido</button>
                    <button type="reset" class="btn btn--reset">Limpiar selección</button>
                  </div>
                </section>
              </aside>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__section">
            <h4>CALLITAE</h4>
            <p>Tamal Artesanal y Especializado para eventos, empresas y antojos.</p>
            <p class="footer__legal">Solo envíos a domicilio. Pedidos con anticipación.</p>
          </div>
          <div class="footer__section">
            <h4>Navegación</h4>
            <ul class="footer__links">
              <li><a href="#inicio" data-scroll="#inicio">Inicio</a></li>
              <li><a href="#productos" data-scroll="#productos">Catálogo</a></li>
              <li><a href="/nosotros.html">Nosotros</a></li>
              <li><a href="/promociones.html">Promociones</a></li>
              <li><a href="#pedidos" data-scroll="#pedidos">Pedidos</a></li>
            </ul>
          </div>
          <div class="footer__section">
            <h4>Contacto</h4>
            <ul class="footer__links">
              <li><a href="mailto:contacto@callitae.com">contacto@callitae.com</a></li>
              <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">
          <p>&copy; ${new Date().getFullYear()} CALLITAE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
