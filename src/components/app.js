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
        <div class="hero__badge">🥟 Tamales Artesanales</div>
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
            <span>🥟</span>
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
        <div class="section-title">
          <h2>Nuestros Productos</h2>
        </div>

        <!-- Ligeros y Saludables -->
        <div class="info-box" style="margin: 3rem 0; background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
            <h3 style="color: #4CAF50; margin: 0;">${productos.ligeros.nombre}</h3>
            <span class="category-badge category-badge--saludable">Saludable</span>
          </div>
          <p style="font-size: 1rem; line-height: 1.8; margin-bottom: 0.5rem;">
            ${productos.ligeros.descripcion}
          </p>
          <p style="font-size: 0.9rem; font-weight: 600; color: #FF9A00;">
            📌 ${productos.ligeros.nota} • Todos los sabores disponibles en versión ligera
          </p>
        </div>

        <!-- Tamales Gourmet Salados -->
        <div style="margin: 4rem 0;">
          <div class="section-title">
            <h2>Tamales Gourmet Salados</h2>
          </div>
          <div class="products">
            ${productos.salados.map(producto => `
              <div class="product-card">
                <div class="product-card__content">
                  <h3>${producto.nombre}</h3>
                  <p>${producto.ingredientes}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tamales Gourmet Dulces -->
        <div style="margin: 4rem 0;">
          <div class="section-title">
            <h2>Tamales Gourmet Dulces</h2>
          </div>
          <div class="products">
            ${productos.dulces.map(producto => `
              <div class="product-card">
                <div class="product-card__content">
                  <h3>${producto.nombre}</h3>
                  <p>${producto.ingredientes}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Especialidades -->
        <div style="margin: 4rem 0;">
          <div class="section-title">
            <h2>Especialidades</h2>
          </div>
          <p style="text-align: center; margin-bottom: 2rem; color: #666; font-size: 1rem;">
            📌 Pedido mínimo 6 piezas para especialidades
          </p>
          <div class="products">
            ${productos.especialidades.map(especialidad => `
              <div class="product-card">
                <div class="product-card__content">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <h3>${especialidad.nombre}</h3>
                    <span class="category-badge category-badge--especialidad">Especialidad</span>
                  </div>
                  <p>${especialidad.descripcion}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Temporada -->
        <div style="margin: 4rem 0;">
          <div class="section-title">
            <h2>Productos de Temporada</h2>
          </div>
          <div class="products">
            ${productos.temporada.map(item => `
              <div class="product-card">
                <div class="product-card__content">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <h3>${item.nombre}</h3>
                    <span class="category-badge category-badge--temporada">${item.temporada}</span>
                  </div>
                  <p>${item.descripcion}</p>
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
          <img src="/assets/logos/hecho-en-mexico.png" alt="Distintivo Hecho en México" 
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
        <div style="max-width: 700px; margin: 0 auto;">
          <div class="info-box" style="text-align: center;">
            <p style="font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.8;">
              Para realizar tu pedido o solicitar información sobre nuestros tamales artesanales, 
              contáctanos a través de los siguientes medios:
            </p>
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
              <div style="padding: 1.5rem; background: rgba(255, 154, 0, 0.05); border-radius: 12px;">
                <strong style="font-size: 1.1rem; color: #FF9A00;">📧 Email:</strong>
                <p style="margin-top: 0.5rem; font-size: 1rem;">contacto@callitae.com</p>
              </div>
              <div style="padding: 1.5rem; background: rgba(255, 154, 0, 0.05); border-radius: 12px;">
                <strong style="font-size: 1.1rem; color: #FF9A00;">📱 Teléfono:</strong>
                <p style="margin-top: 0.5rem; font-size: 1rem;">(Próximamente)</p>
              </div>
              <div style="padding: 1.5rem; background: rgba(255, 154, 0, 0.05); border-radius: 12px;">
                <strong style="font-size: 1.1rem; color: #FF9A00;">📍 Ubicación:</strong>
                <p style="margin-top: 0.5rem; font-size: 1rem;">(Próximamente)</p>
              </div>
            </div>
            <div style="margin-top: 2rem;">
              <a href="mailto:contacto@callitae.com" class="btn">Enviar un Mensaje</a>
            </div>
          </div>
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
