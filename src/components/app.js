// Componente principal de la aplicación

// Datos de productos completos
const productos = {
  salados: [
    {
      id: 1,
      nombre: 'Cochinita',
      ingredientes: 'Cochinita pibil tradicional'
    },
    {
      id: 2,
      nombre: 'Suadero en salsa verde',
      ingredientes: 'Suadero con salsa verde'
    },
    {
      id: 3,
      nombre: 'Pastor',
      ingredientes: 'Pastor al pastor'
    },
    {
      id: 4,
      nombre: 'Pollo con mole',
      ingredientes: 'Pollo con mole de arándanos con ajonjolí'
    },
    {
      id: 5,
      nombre: 'Pollo en morita',
      ingredientes: 'Pollo con chile morita'
    },
    {
      id: 6,
      nombre: 'Tres quesos',
      ingredientes: 'Queso Oaxaca, manchego y panela'
    },
    {
      id: 7,
      nombre: 'Champiñón con quesillo',
      ingredientes: 'Champiñones con quesillo'
    },
    {
      id: 8,
      nombre: 'Espinaca-elote-queso',
      ingredientes: 'Espinaca, elote y queso'
    },
    {
      id: 9,
      nombre: 'Cenizos',
      ingredientes: 'Frijol negro, salsa verde, queso panela'
    },
    {
      id: 10,
      nombre: 'Frijol puerco',
      ingredientes: 'Frijol bayo, tocino, longaniza, chile guajillo, chile ancho y queso manchego'
    },
    {
      id: 11,
      nombre: 'Verduras',
      ingredientes: 'Flor de calabaza, elote, calabaza y queso gouda'
    }
  ],
  dulces: [
    {
      id: 12,
      nombre: 'Cajeta con nuez',
      ingredientes: 'Cajeta y nuez'
    },
    {
      id: 13,
      nombre: 'Oreo con Nutella',
      ingredientes: 'Galletas Oreo y Nutella'
    },
    {
      id: 14,
      nombre: 'Guayaba en almíbar',
      ingredientes: 'Guayaba en almíbar'
    },
    {
      id: 15,
      nombre: 'Mango',
      ingredientes: 'Mango fresco'
    },
    {
      id: 16,
      nombre: 'Café de olla',
      ingredientes: 'Café de olla tradicional'
    },
    {
      id: 17,
      nombre: 'Zarzamora con Q. Philadelphia',
      ingredientes: 'Zarzamora y queso Philadelphia'
    },
    {
      id: 18,
      nombre: 'Napolitano',
      ingredientes: 'Relleno con flan napolitano'
    },
    {
      id: 19,
      nombre: 'Mandarina con chabacano',
      ingredientes: 'Mandarina y chabacano'
    },
    {
      id: 20,
      nombre: 'Zanahoria con Q. Philadelphia',
      ingredientes: 'Zanahoria y queso Philadelphia'
    },
    {
      id: 21,
      nombre: 'Almendra con chocolate',
      ingredientes: 'Almendra y chocolate'
    },
    {
      id: 22,
      nombre: 'Higo con queso Brie',
      ingredientes: 'Higo y queso Brie'
    },
    {
      id: 23,
      nombre: 'Cereza con queso de vino tinto',
      ingredientes: 'Cereza y queso de vino tinto'
    }
  ],
  ligeros: {
    nombre: 'Ligeros y Saludables',
    descripcion: 'Tamales salados y dulces elaborados con harina de avena, almendra o amaranto, aceite vegetal o mantequilla según sabor. Endulzados con ciruela pasa o dátil.',
    nota: 'Pedido mínimo 6 piezas'
  },
  especialidades: [
    {
      id: 'especialidad-1',
      nombre: 'Gansitamales',
      descripcion: 'Nuestra versión de tamal hecho gansito, se sirve en frío con cubierta de chocolate'
    },
    {
      id: 'especialidad-2',
      nombre: 'Gelatamales',
      descripcion: 'Tamales de gelatina con gran variedad de sabores, se sirve en frío'
    },
    {
      id: 'especialidad-3',
      nombre: 'Envinados',
      descripcion: 'Tres sabores disponibles: Fresa (relleno con fresas marinadas), Vainilla (relleno con flan), Chocolate (chocolate artesanal y plátano)'
    },
    {
      id: 'especialidad-4',
      nombre: 'Birria',
      descripcion: 'Servidos en caldillo y complementos del platillo'
    }
  ],
  temporada: [
    {
      id: 'temporada-1',
      nombre: 'Tamales en Nogada',
      descripcion: 'Disponible en septiembre con previo pedido',
      temporada: 'Septiembre'
    },
    {
      id: 'temporada-2',
      nombre: 'Ponche',
      descripcion: 'Disponible en diciembre con previo pedido',
      temporada: 'Diciembre'
    }
  ]
};

// Renderizar la aplicación
export function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Header -->
    <header class="header">
      <nav class="nav container">
        <a href="#inicio" class="nav__logo">
          <img src="/assets/logos/logo-calli.png" alt="CALLITAE - Tamal Artesanal y Especializado" class="nav__logo-img">
        </a>
        <ul class="nav__menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <button class="nav__burger" aria-label="Menú">☰</button>
      </nav>
    </header>

    <!-- Hero -->
    <section id="inicio" class="hero">
      <video class="hero__video" autoplay loop muted playsinline>
        <source src="/assets/videos/cali-hero.mp4" type="video/mp4">
      </video>
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <div class="hero__badge">Tamales Artesanales</div>
        <h1 class="hero__title">
          <span class="hero__title-main">CALLITAE</span>
        </h1>
        <h2 class="hero__subtitle-main">
          <span class="hero__accent">Tamal</span> Artesanal y Especializado
        </h2>
        <p class="hero__description">
          Auténtico sabor mexicano con tamales artesanales de alta calidad, 
          elaborados con ingredientes selectos y técnicas tradicionales.
        </p>
        <div class="hero__cta">
          <a href="#productos" class="btn btn--hero-primary">
            <span>Ver Nuestros Tamales</span>
          </a>
          <a href="#nosotros" class="btn btn--hero-secondary">
            <span>Conócenos</span>
          </a>
        </div>
        <div class="hero__scroll-indicator">
          <span>↓</span>
        </div>
      </div>
    </section>

    <!-- Propósito y Oferta de Valor -->
    <section class="section section--accent">
      <div class="container">
        <div class="value-prop">
          <h2>Nuestro Propósito</h2>
          <p>
            Ofrecer una experiencia gastronómica auténtica y memorable a través de un producto 
            artesanal de alta calidad, que honra las tradiciones mexicanas y transmite calidez, 
            confianza y pasión en cada bocado.
          </p>
        </div>
        <div class="value-prop" style="margin-top: 2rem; background: rgba(255, 154, 0, 0.1);">
          <h2>Nuestra Oferta de Valor</h2>
          <p>
            Proporcionamos un producto artesanal elaborado con ingredientes selectos, técnicas 
            tradicionales y opciones innovadoras que destacan en sabor, presentación y calidad. 
            Nos posicionamos como un espacio que reinventa la tradición del tamal, garantizando 
            productos diferenciados y confiables que satisfacen a los amantes de la buena comida 
            y buscan una experiencia culinaria auténtica y única.
          </p>
        </div>
      </div>
    </section>

    <!-- Sobre Nosotros -->
    <section id="nosotros" class="section">
      <div class="container">
        <div class="section-title">
          <h2>Nuestra Historia</h2>
        </div>
        
        <div style="max-width: 900px; margin: 0 auto;">
          <div class="info-box">
            <p style="font-size: 1.1rem; line-height: 1.9; margin-bottom: 1.5rem;">
              En <strong style="color: #FF9A00;">CALLITAE</strong>, invitamos a vivir una experiencia gastronómica auténtica 
              y llena de tradición mexicana. Nuestro compromiso es ofrecer tamales artesanales, 
              elaborados con el mayor cuidado y pasión, utilizando ingredientes de la más alta 
              calidad y técnicas que honran nuestras raíces.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.9; margin-bottom: 1.5rem;">
              Cada bocado refleja la calidez del hogar, transmitiendo confianza, sabor y una 
              textura inigualable que te hará regresar por más.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.9; margin-bottom: 1.5rem;">
              Somos un espacio dedicado a reinventar esta delicia clásica, presentando opciones 
              innovadoras y diferenciadas que destacan en sabor, presentación y calidad. Nuestro 
              enfoque especializado nos permite ofrecer productos fuera de lo común, diseñados 
              para satisfacer a los amantes de la buena comida.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.9;">
              En <strong style="color: #FF9A00;">CALLITAE</strong>, la confianza y la familiaridad son la base de nuestra relación 
              con el cliente. Queremos brindar seguridad al elegirnos, sabiendo que cada tamal que 
              llega a su mesa lleva la esencia de la tradición, el cuidado y el compromiso por 
              brindar una experiencia única y memorable.
            </p>
          </div>
          
          <p style="text-align: center; font-size: 1.2rem; color: #FF9A00; font-weight: 600; margin-top: 2rem; font-style: italic;">
            El auténtico sabor mexicano con CALLITAE Tamal Artesanal y Especializado, 
            es donde cada tamal promete calidad, tradición y pasión. ¡Deleitaremos al paladar 
            con un viaje culinario lleno de sabor y autenticidad!
          </p>
        </div>
      </div>
    </section>

    <!-- Productos -->
    <section id="productos" class="section section--accent">
      <div class="container">
        <div class="products-header">
          <h2 class="products-header__title">Nuestros Productos</h2>
          <p class="products-header__subtitle">Descubre nuestra amplia variedad de tamales artesanales</p>
        </div>

        <!-- Ligeros y Saludables -->
        <div class="product-category product-category--healthy">
          <div class="product-category__header">
            <h3 class="product-category__title">${productos.ligeros.nombre}</h3>
            <span class="category-badge category-badge--saludable">Saludable</span>
          </div>
          <div class="product-category__content">
            <p class="product-category__description">
              ${productos.ligeros.descripcion}
            </p>
            <div class="product-category__note">
              <strong>${productos.ligeros.nota}</strong> • Todos los sabores disponibles en versión ligera
            </div>
          </div>
        </div>

        <!-- Tamales Gourmet Salados -->
        <div class="product-section">
          <div class="product-section__header">
            <h2 class="product-section__title">Tamales Gourmet Salados</h2>
            <p class="product-section__subtitle">Sabores tradicionales con un toque especial</p>
          </div>
          <div class="products">
            ${productos.salados.map(producto => `
              <div class="product-card">
                <div class="product-card__content">
                  <h3 class="product-card__name">${producto.nombre}</h3>
                  <p class="product-card__ingredients">${producto.ingredientes}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tamales Gourmet Dulces -->
        <div class="product-section">
          <div class="product-section__header">
            <h2 class="product-section__title">Tamales Gourmet Dulces</h2>
            <p class="product-section__subtitle">Dulces tradicionales para endulzar tu día</p>
          </div>
          <div class="products">
            ${productos.dulces.map(producto => `
              <div class="product-card">
                <div class="product-card__content">
                  <h3 class="product-card__name">${producto.nombre}</h3>
                  <p class="product-card__ingredients">${producto.ingredientes}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Especialidades -->
        <div class="product-section">
          <div class="product-section__header">
            <h2 class="product-section__title">Especialidades</h2>
            <p class="product-section__subtitle">Creaciones únicas que sorprenden</p>
          </div>
          <div class="product-category__note product-category__note--center">
            <strong>Pedido mínimo 6 piezas</strong> para especialidades
          </div>
          <div class="products">
            ${productos.especialidades.map(especialidad => `
              <div class="product-card product-card--featured">
                <div class="product-card__content">
                  <div class="product-card__header">
                    <h3 class="product-card__name">${especialidad.nombre}</h3>
                    <span class="category-badge category-badge--especialidad">Especialidad</span>
                  </div>
                  <p class="product-card__ingredients">${especialidad.descripcion}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Temporada -->
        <div class="product-section">
          <div class="product-section__header">
            <h2 class="product-section__title">Productos de Temporada</h2>
            <p class="product-section__subtitle">Sabores exclusivos para momentos especiales</p>
          </div>
          <div class="products">
            ${productos.temporada.map(item => `
              <div class="product-card product-card--seasonal">
                <div class="product-card__content">
                  <div class="product-card__header">
                    <h3 class="product-card__name">${item.nombre}</h3>
                    <span class="category-badge category-badge--temporada">${item.temporada}</span>
                  </div>
                  <p class="product-card__ingredients">${item.descripcion}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Hecho en México -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Hecho en México</h2>
        </div>
        <div class="hecho-mexico">
          <img src="/assets/logos/hecho.png" alt="Distintivo Hecho en México" 
               style="max-width: 250px; height: auto; display: block; margin: 0 auto 1.5rem;">
          <p style="font-size: 1rem; line-height: 1.8;">
            Distintivo oficial otorgado por la <strong>Secretaría de Economía</strong>
          </p>
          <p style="font-size: 0.95rem; color: #666; margin-top: 1rem;">
            Este distintivo representa nuestro compromiso con la calidad, la tradición mexicana 
            y el apoyo a productos auténticamente elaborados en México.
          </p>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="section section--accent">
      <div class="container">
        <div class="section-title">
          <h2>Contáctanos</h2>
        </div>

        <!-- Información de Contacto -->
        <div style="max-width: 900px; margin: 0 auto 5rem;">
          <div class="contact-info">
            <p class="contact-info__intro">
              Para realizar tu pedido o solicitar información sobre nuestros tamales artesanales, 
              contáctanos a través de los siguientes medios:
            </p>
            <div class="contact-grid">
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="contact-item__content">
                  <h3 class="contact-item__title">Email</h3>
                  <a href="mailto:contacto@callitae.com" class="contact-item__link">contacto@callitae.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div class="contact-item__content">
                  <h3 class="contact-item__title">Teléfono</h3>
                  <p class="contact-item__text">Próximamente</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="contact-item__content">
                  <h3 class="contact-item__title">Ubicación</h3>
                  <p class="contact-item__text">Próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario de Pedido -->
        <div class="order-form-container">
          <div class="order-form-header">
            <h3 class="order-form-header__title">Realizar Pedido</h3>
            <p class="order-form-header__subtitle">Selecciona los tamales que deseas ordenar y completa tus datos</p>
          </div>

          <form id="orderForm" class="order-form">
            <!-- Datos del Cliente -->
            <div class="form-section">
              <h4 class="form-section__title">Datos de Contacto</h4>
              <div class="form-grid">
                <div class="form-group">
                  <label for="nombre" class="form-label">Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" class="form-input" required placeholder="Tu nombre completo">
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Email *</label>
                  <input type="email" id="email" name="email" class="form-input" required placeholder="tu@email.com">
                </div>
                <div class="form-group">
                  <label for="telefono" class="form-label">Teléfono *</label>
                  <input type="tel" id="telefono" name="telefono" class="form-input" required placeholder="Tu número de teléfono">
                </div>
                <div class="form-group">
                  <label for="direccion" class="form-label">Dirección de Entrega *</label>
                  <textarea id="direccion" name="direccion" class="form-input form-textarea" required rows="3" placeholder="Dirección completa donde entregar el pedido"></textarea>
                </div>
                <div class="form-group">
                  <label for="fecha-entrega" class="form-label">Fecha de Entrega Deseada *</label>
                  <input type="date" id="fecha-entrega" name="fecha-entrega" class="form-input" required>
                </div>
                <div class="form-group">
                  <label for="comentarios" class="form-label">Comentarios Adicionales</label>
                  <textarea id="comentarios" name="comentarios" class="form-input form-textarea" rows="3" placeholder="Instrucciones especiales, alergias, preferencias, etc."></textarea>
                </div>
              </div>
            </div>

            <!-- Productos Salados -->
            <div class="form-section">
              <h4 class="form-section__title">Tamales Gourmet Salados</h4>
              <div class="products-selector">
                ${productos.salados.map(producto => `
                  <div class="product-selector-item">
                    <div class="product-selector-item__info">
                      <h5 class="product-selector-item__name">${producto.nombre}</h5>
                      <p class="product-selector-item__desc">${producto.ingredientes}</p>
                    </div>
                    <div class="product-selector-item__controls">
                      <button type="button" class="quantity-btn quantity-btn--minus" data-product="salado-${producto.id}">−</button>
                      <input type="number" 
                             id="salado-${producto.id}" 
                             name="salado-${producto.id}" 
                             class="quantity-input" 
                             min="0" 
                             value="0" 
                             data-product-name="${producto.nombre}"
                             data-product-type="Salado">
                      <button type="button" class="quantity-btn quantity-btn--plus" data-product="salado-${producto.id}">+</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Productos Dulces -->
            <div class="form-section">
              <h4 class="form-section__title">Tamales Gourmet Dulces</h4>
              <div class="products-selector">
                ${productos.dulces.map(producto => `
                  <div class="product-selector-item">
                    <div class="product-selector-item__info">
                      <h5 class="product-selector-item__name">${producto.nombre}</h5>
                      <p class="product-selector-item__desc">${producto.ingredientes}</p>
                    </div>
                    <div class="product-selector-item__controls">
                      <button type="button" class="quantity-btn quantity-btn--minus" data-product="dulce-${producto.id}">−</button>
                      <input type="number" 
                             id="dulce-${producto.id}" 
                             name="dulce-${producto.id}" 
                             class="quantity-input" 
                             min="0" 
                             value="0" 
                             data-product-name="${producto.nombre}"
                             data-product-type="Dulce">
                      <button type="button" class="quantity-btn quantity-btn--plus" data-product="dulce-${producto.id}">+</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Especialidades -->
            <div class="form-section">
              <h4 class="form-section__title">Especialidades</h4>
              <p class="form-section__note">Pedido mínimo 6 piezas para especialidades</p>
              <div class="products-selector">
                ${productos.especialidades.map(especialidad => `
                  <div class="product-selector-item product-selector-item--special">
                    <div class="product-selector-item__info">
                      <h5 class="product-selector-item__name">${especialidad.nombre}</h5>
                      <p class="product-selector-item__desc">${especialidad.descripcion}</p>
                      <span class="product-selector-item__badge">Especialidad</span>
                    </div>
                    <div class="product-selector-item__controls">
                      <button type="button" class="quantity-btn quantity-btn--minus" data-product="${especialidad.id}">−</button>
                      <input type="number" 
                             id="${especialidad.id}" 
                             name="${especialidad.id}" 
                             class="quantity-input" 
                             min="0" 
                             value="0" 
                             data-product-name="${especialidad.nombre}"
                             data-product-type="Especialidad"
                             data-min-order="6">
                      <button type="button" class="quantity-btn quantity-btn--plus" data-product="${especialidad.id}">+</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Temporada -->
            <div class="form-section">
              <h4 class="form-section__title">Productos de Temporada</h4>
              <div class="products-selector">
                ${productos.temporada.map(item => `
                  <div class="product-selector-item product-selector-item--seasonal">
                    <div class="product-selector-item__info">
                      <h5 class="product-selector-item__name">${item.nombre}</h5>
                      <p class="product-selector-item__desc">${item.descripcion}</p>
                      <span class="product-selector-item__badge product-selector-item__badge--seasonal">${item.temporada}</span>
                    </div>
                    <div class="product-selector-item__controls">
                      <button type="button" class="quantity-btn quantity-btn--minus" data-product="${item.id}">−</button>
                      <input type="number" 
                             id="${item.id}" 
                             name="${item.id}" 
                             class="quantity-input" 
                             min="0" 
                             value="0" 
                             data-product-name="${item.nombre}"
                             data-product-type="Temporada">
                      <button type="button" class="quantity-btn quantity-btn--plus" data-product="${item.id}">+</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Opción Ligeros -->
            <div class="form-section">
              <div class="form-checkbox-group">
                <label class="form-checkbox">
                  <input type="checkbox" id="version-ligera" name="version-ligera" class="form-checkbox-input">
                  <span class="form-checkbox-label">Versión Ligeros y Saludables (todos los productos)</span>
                  <span class="form-checkbox-note">Elaborados con harina de avena, almendra o amaranto. Pedido mínimo 6 piezas.</span>
                </label>
              </div>
            </div>

            <!-- Resumen del Pedido -->
            <div class="form-section">
              <div class="order-summary" id="orderSummary">
                <h4 class="order-summary__title">Resumen del Pedido</h4>
                <div class="order-summary__content" id="orderSummaryContent">
                  <p class="order-summary__empty">Selecciona productos para ver el resumen</p>
                </div>
                <div class="order-summary__total" id="orderSummaryTotal" style="display: none;">
                  <span class="order-summary__total-label">Total de Piezas:</span>
                  <span class="order-summary__total-value" id="totalPieces">0</span>
                </div>
              </div>
            </div>

            <!-- Botón de Envío -->
            <div class="form-actions">
              <button type="submit" class="btn btn--submit" id="submitBtn">
                Enviar Pedido
              </button>
              <button type="reset" class="btn btn--reset">
                Limpiar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__section">
            <h4>CALLITAE</h4>
            <p>
              Tamal Artesanal y Especializado
            </p>
            <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
              Auténtico sabor mexicano con tradición, calidad y pasión.
            </p>
          </div>
          <div class="footer__section">
            <h4>Enlaces</h4>
            <ul class="footer__links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div class="footer__section">
            <h4>Síguenos</h4>
            <ul class="footer__links">
              <li><a href="#" target="_blank">Facebook</a></li>
              <li><a href="#" target="_blank">Instagram</a></li>
              <li><a href="#" target="_blank">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">
          <p>&copy; 2024 CALLITAE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}

// Inicializar
if (document.body) {
  renderApp();
} else {
  document.addEventListener('DOMContentLoaded', renderApp);
}
