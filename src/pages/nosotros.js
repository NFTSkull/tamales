import '../styles/main.scss';

function renderNosotros() {
  const app = document.getElementById('nosotros-app');
  if (!app) return;

  app.innerHTML = `
    <header class="header header--inner">
      <nav class="nav container">
        <a href="/" class="nav__logo">
          <img src="/assets/logos/logo-calli.png" alt="CALLITAE - Tamales Artesanales" class="nav__logo-img" loading="lazy">
        </a>
        <ul class="nav__menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/index.html#productos">Productos</a></li>
          <li><a href="/nosotros.html" class="is-active">Nosotros</a></li>
          <li><a href="/index.html#pedidos">Pedidos</a></li>
        </ul>
        <a href="/index.html#pedidos" class="nav__cta btn btn--outline">Hacer pedido</a>
        <button class="nav__burger" aria-label="Abrir menú">☰</button>
      </nav>
    </header>

    <main>
      <section class="hero hero--inner">
        <div class="hero__overlay hero__overlay--inner"></div>
        <div class="container hero__content">
          <div class="hero__badge">Nuestra esencia</div>
          <h1 class="hero__title">
            <span class="hero__title-main">CALLITAE</span>
          </h1>
          <p class="hero__description hero__description--inner">
            Tradición, sabor y experiencias memorables. Conoce la historia que da vida a cada tamal artesanal.
          </p>
        </div>
      </section>

      <section class="section about-section">
        <div class="container about-grid">
          <div class="about-card">
            <h2>Descripción del negocio</h2>
            <p>
              En <strong>CALLITAE</strong>, invitamos a vivir una experiencia gastronómica auténtica y llena de tradición mexicana.
              Nuestro compromiso es ofrecer tamales artesanales, elaborados con el mayor cuidado y pasión, utilizando
              ingredientes de la más alta calidad y técnicas que honran nuestras raíces.
            </p>
            <p>
              Cada bocado refleja la calidez del hogar, transmitiendo confianza, sabor y una textura inigualable que te hará
              regresar por más. Somos un espacio dedicado a reinventar esta delicia clásica con opciones innovadoras y
              diferenciadas que destacan en sabor, presentación y calidad.
            </p>
            <p>
              La confianza y la familiaridad son la base de nuestra relación con el cliente. Queremos brindar seguridad al
              elegirnos, sabiendo que cada tamal que llega a su mesa lleva la esencia de la tradición, el cuidado y el
              compromiso por brindar una experiencia única y memorable.
            </p>
            <blockquote class="about-quote">
              “El auténtico sabor mexicano con CALLITAE Tamal Artesanal y Especializado es un viaje culinario lleno de sabor,
              calidad y pasión.”
            </blockquote>
          </div>
          <aside class="about-side">
            <div class="info-box">
              <h3>Propósito</h3>
              <p>
                Ofrecer una experiencia gastronómica auténtica y memorable a través de productos artesanales de alta calidad
                que honran las tradiciones mexicanas y transmiten calidez, confianza y pasión en cada bocado.
              </p>
            </div>
            <div class="info-box">
              <h3>Oferta de valor</h3>
              <p>
                Proporcionamos tamales elaborados con ingredientes selectos, técnicas tradicionales y propuestas innovadoras.
                Reinventamos la tradición del tamal con opciones diferenciadas que satisfacen a los amantes de la buena comida
                en búsqueda de experiencias auténticas.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section class="section section--accent about-identity">
        <div class="container about-identity__grid">
          <div class="about-identity__content">
            <h2>Identidad visual y esencia</h2>
            <p>
              Nuestro nombre, <strong>CALLITAE Tamal Artesanal y Especializado</strong>, crea una conexión directa con la
              cultura y las raíces mexicanas. El imagotipo combina la calidez de un hogar con elementos que evocan nuestros
              tamales, construyendo un símbolo memorable y lleno de significado.
            </p>
            <p>
              Esta identidad transmite autenticidad, tradición y calidad; habla de un producto saludable y cercano, pensado para
              personas que valoran la cocina mexicana hecha con dedicación.
            </p>
          </div>
          <div class="about-identity__card">
            <h3>Pantone del logo</h3>
            <p>
              Los tonos cálidos y vibrantes refuerzan los valores de confianza y tradición. Cada aplicación del logo sigue las
              especificaciones del documento <em>ESPECIFICACIONES_CALLI_IMAGOTIPO</em>, garantizando consistencia visual.
            </p>
            <ul class="about-color-palette">
              <li>
                <span class="about-color about-color--primary"></span>
                <span class="about-color__label">Pantone Naranja CALLITAE</span>
              </li>
              <li>
                <span class="about-color about-color--accent"></span>
                <span class="about-color__label">Pantone Amarillo Radiante</span>
              </li>
              <li>
                <span class="about-color about-color--neutral"></span>
                <span class="about-color__label">Neutros elegantes para equilibrio visual</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section about-honour">
        <div class="container about-honour__grid">
          <div class="about-honour__badge">
            <img src="/assets/logos/hecho.png" alt="Distintivo Hecho en México" loading="lazy">
          </div>
          <div class="about-honour__content">
            <h2>Distintivo Hecho en México</h2>
            <p>
              El distintivo “Hecho en México” otorgado por la Secretaría de Economía respalda nuestro compromiso con la calidad
              y el origen auténticamente mexicano. Siguiendo el <em>Manual de Identidad Hecho en México</em> aplicamos el
              isologo con cuidado en nuestros materiales y empaques.
            </p>
            <p>
              Cada pedido refleja ese orgullo: ingredientes locales, procesos artesanales y el respeto absoluto por las normas
              que protegen a los productores mexicanos.
            </p>
          </div>
        </div>
      </section>

      <section class="section about-cta">
        <div class="container about-cta__content">
          <h2>¿Listo para llevar la experiencia CALLITAE a tu mesa?</h2>
          <p>Regresa al catálogo y arma tu pedido personalizado para eventos, empresas o disfrutar en casa.</p>
          <div class="about-cta__actions">
            <a href="/index.html#productos" class="btn btn--hero-primary">Ver catálogo</a>
            <a href="/index.html#pedidos" class="btn btn--hero-secondary">Realizar pedido</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__section">
            <h4>CALLITAE</h4>
            <p>Tamal Artesanal y Especializado. Experiencias que celebran la tradición mexicana.</p>
            <p class="footer__legal">Solo envíos a domicilio. Pedidos con anticipación.</p>
          </div>
          <div class="footer__section">
            <h4>Navegación</h4>
            <ul class="footer__links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/index.html#productos">Catálogo</a></li>
              <li><a href="/nosotros.html">Nosotros</a></li>
              <li><a href="/index.html#pedidos">Pedidos</a></li>
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

  initializeNavToggle();
}

function initializeNavToggle() {
  const burger = document.querySelector('.nav__burger');
  const menu = document.querySelector('.nav__menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNosotros);
} else {
  renderNosotros();
}
