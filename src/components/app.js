// Componente principal de la aplicación

// Datos de productos
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
        <div class="nav__logo">CALLITAE</div>
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
      <div class="container">
        <h1 class="hero__title">Tamal Artesanal y Especializado</h1>
        <p class="hero__subtitle">
          Auténtico sabor mexicano con tamales artesanales de alta calidad, 
          elaborados con ingredientes selectos y técnicas tradicionales.
        </p>
        <a href="#productos" class="btn">Ver Nuestros Tamales</a>
      </div>
    </section>

    <!-- Sobre Nosotros -->
    <section id="nosotros" class="section">
      <div class="container">
        <h2 class="text-center">Nuestra Historia</h2>
        <div style="max-width: 800px; margin: 2rem auto; text-align: center;">
          <p style="margin-bottom: 1rem;">
            En <strong>CALLITAE</strong>, invitamos a vivir una experiencia gastronómica auténtica 
            y llena de tradición mexicana. Nuestro compromiso es ofrecer tamales artesanales, 
            elaborados con el mayor cuidado y pasión, utilizando ingredientes de la más alta 
            calidad y técnicas que honran nuestras raíces.
          </p>
          <p>
            Cada bocado refleja la calidez del hogar, transmitiendo confianza, sabor y una 
            textura inigualable que te hará regresar por más.
          </p>
        </div>
      </div>
    </section>

    <!-- Productos Salados -->
    <section id="productos" class="section" style="background-color: #fff;">
      <div class="container">
        <h2 class="text-center mb-3">Tamales Gourmet Salados</h2>
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
    </section>

    <!-- Productos Dulces -->
    <section class="section">
      <div class="container">
        <h2 class="text-center mb-3">Tamales Gourmet Dulces</h2>
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
    </section>

    <!-- Proceso Artesanal -->
    <section class="section" style="background-color: #fff;">
      <div class="container">
        <h2 class="text-center mb-3">Nuestro Proceso Artesanal</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <p class="text-center" style="margin-bottom: 1.5rem;">
            Somos un espacio dedicado a reinventar esta delicia clásica, presentando opciones 
            innovadoras y diferenciadas que destacan en sabor, presentación y calidad. 
            Nuestro enfoque especializado nos permite ofrecer productos fuera de lo común, 
            diseñados para satisfacer a los amantes de la buena comida.
          </p>
          <div class="text-center">
            <img src="/assets/logos/hecho-en-mexico.png" alt="Hecho en México" 
                 style="max-width: 200px; height: auto;">
            <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
              Distintivo oficial otorgado por la Secretaría de Economía
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="section">
      <div class="container">
        <h2 class="text-center mb-3">Contáctanos</h2>
        <div style="max-width: 600px; margin: 0 auto; text-align: center;">
          <p style="margin-bottom: 2rem;">
            Para realizar tu pedido o solicitar información, contáctanos:
          </p>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <strong>Email:</strong> contacto@callitae.com
            </div>
            <div>
              <strong>Teléfono:</strong> (Próximamente)
            </div>
            <div>
              <strong>Ubicación:</strong> (Próximamente)
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
            <p style="opacity: 0.8;">
              Tamal Artesanal y Especializado
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

