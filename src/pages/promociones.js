import '../styles/main.scss';

function renderPromociones() {
  const app = document.getElementById('promociones-app');
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
          <li><a href="/promociones.html" class="is-active">Promociones</a></li>
          <li><a href="/nosotros.html">Nosotros</a></li>
          <li><a href="/index.html#pedidos">Pedidos</a></li>
        </ul>
        <a href="/index.html#pedidos" class="nav__cta btn btn--outline">Hacer pedido</a>
        <button class="nav__burger" aria-label="Abrir menú">☰</button>
      </nav>
    </header>

    <main>
      <section class="hero hero--inner hero--promociones">
        <div class="hero__overlay hero__overlay--inner"></div>
        <div class="container hero__content">
          <div class="hero__badge">Próximamente</div>
          <h1 class="hero__title"><span class="hero__title-main">Promociones CALLITAE</span></h1>
          <p class="hero__description hero__description--inner">
            Estamos preparando combos especiales y experiencias a medida para tus eventos y reuniones. Muy pronto podrás
            descubrirlos aquí.
          </p>
        </div>
      </section>

      <section class="section promociones-coming">
        <div class="container promociones-coming__content">
          <h2>Un vistazo a lo que viene</h2>
          <ul class="promociones-coming__list">
            <li>Paquetes empresariales personalizados para desayunos ejecutivos.</li>
            <li>Combos festivos para fiestas patrias, navidad y fechas especiales.</li>
            <li>Selecciones saludables para reuniones wellness.</li>
          </ul>
          <div class="promociones-coming__badge">Próximamente</div>
          <p>Regresa pronto o contáctanos para diseñar una propuesta exclusiva antes del lanzamiento oficial.</p>
          <div class="promociones-coming__actions">
            <a href="mailto:contacto@callitae.com" class="btn btn--hero-primary">Solicitar información</a>
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
            <p>Tamal Artesanal y Especializado. Tradición mexicana reinterpretada para tus eventos.</p>
            <p class="footer__legal">Solo envíos a domicilio. Pedidos con anticipación.</p>
          </div>
          <div class="footer__section">
            <h4>Navegación</h4>
            <ul class="footer__links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/index.html#productos">Catálogo</a></li>
              <li><a href="/promociones.html">Promociones</a></li>
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
  document.addEventListener('DOMContentLoaded', renderPromociones);
} else {
  renderPromociones();
}
