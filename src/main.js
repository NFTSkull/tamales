// Importar estilos
import './styles/main.scss';
import './components/app.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeLazyLoading();
  initializeSmoothScroll();
  initializeProductFilters();
  initializeCardScrollCtas();
  initializeNavToggle();
  initializeOrderForm();
});

function initializeLazyLoading() {
  if (!('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      observer.unobserve(img);
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

function initializeSmoothScroll() {
  const scrollTriggers = document.querySelectorAll('[data-scroll]');
  scrollTriggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      const targetSelector = trigger.dataset.scroll;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initializeProductFilters() {
  const buttons = document.querySelectorAll('.product-filters__button');
  const cards = document.querySelectorAll('.product-card');
  if (!buttons.length || !cards.length) return;

  const applyFilter = (filter) => {
    cards.forEach(card => {
      const matchesCategory = card.dataset.category === filter;
      const matchesLigero = card.dataset.ligero === 'true';
      const shouldShow = filter === 'todos' || matchesCategory || (filter === 'ligero' && matchesLigero);
      card.classList.toggle('is-hidden', !shouldShow);
    });
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentFilter = button.dataset.filter;
      buttons.forEach(btn => {
        const isActive = btn === button;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });
      applyFilter(currentFilter);
    });
  });

  applyFilter('todos');
}

function initializeCardScrollCtas() {
  document.querySelectorAll('.product-card__cta, .order-highlights__card').forEach(element => {
    element.addEventListener('click', () => {
      const targetSelector = element.dataset.scroll;
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
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

  menu.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

function initializeOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;

  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = btn.dataset.product;
      const input = document.getElementById(productId);
      if (!input) return;

      if (btn.classList.contains('quantity-btn--plus')) {
        input.value = String((parseInt(input.value, 10) || 0) + 1);
      } else if (btn.classList.contains('quantity-btn--minus')) {
        const currentValue = parseInt(input.value, 10) || 0;
        if (currentValue > 0) {
          input.value = String(currentValue - 1);
        }
      }

      input.dispatchEvent(new Event('change', { bubbles: true }));
      updateOrderSummary();
    });
  });

  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', () => {
      updateOrderSummary();
      validateMinOrder(input);
    });

    input.addEventListener('input', (e) => {
      if (parseInt(e.target.value, 10) < 0) {
        e.target.value = '0';
      }
      updateOrderSummary();
      validateMinOrder(e.target);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(form);
  });

  form.addEventListener('reset', () => {
    setTimeout(() => {
      document.querySelectorAll('.quantity-input').forEach(input => {
        input.value = '0';
        input.classList.remove('quantity-input--error');
        const errorMsg = input.parentElement.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      });
      updateOrderSummary();
    }, 0);
  });

  const fechaInput = document.getElementById('fecha-entrega');
  if (fechaInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fechaInput.min = tomorrow.toISOString().split('T')[0];
  }

  updateOrderSummary();
}

function updateOrderSummary() {
  const summaryContent = document.getElementById('orderSummaryContent');
  const summaryTotal = document.getElementById('orderSummaryTotal');
  const totalPiecesEl = document.getElementById('totalPieces');
  
  if (!summaryContent || !summaryTotal || !totalPiecesEl) return;

  const selectedProducts = [];
  let totalPieces = 0;

  document.querySelectorAll('.quantity-input').forEach(input => {
    const quantity = parseInt(input.value, 10) || 0;
    if (quantity > 0) {
      const productName = input.dataset.productName;
      const productType = input.dataset.productType;
      selectedProducts.push({
        name: productName,
        type: productType,
        quantity: quantity
      });
      totalPieces += quantity;
    }
  });

  if (selectedProducts.length === 0) {
    summaryContent.innerHTML = '<p class="order-summary__empty">Selecciona productos para ver el resumen</p>';
    summaryTotal.style.display = 'none';
    totalPiecesEl.textContent = '0';
    return;
  }

  const grouped = {};
  selectedProducts.forEach(product => {
    if (!grouped[product.type]) {
      grouped[product.type] = [];
    }
    grouped[product.type].push(product);
  });

  let html = '<div class="order-summary__items">';
  Object.keys(grouped).forEach(type => {
    html += `<div class="order-summary__category">
      <h5 class="order-summary__category-title">${type}</h5>
      <ul class="order-summary__list">`;
    grouped[type].forEach(product => {
      html += `<li class="order-summary__item">
        <span class="order-summary__item-name">${product.name}</span>
        <span class="order-summary__item-quantity">${product.quantity} pieza${product.quantity > 1 ? 's' : ''}</span>
      </li>`;
    });
    html += '</ul></div>';
  });
  html += '</div>';

  summaryContent.innerHTML = html;
  totalPiecesEl.textContent = totalPieces;
  summaryTotal.style.display = 'flex';
}

function validateMinOrder(input) {
  const minOrder = input.dataset.minOrder;
  if (!minOrder) return;

  const quantity = parseInt(input.value, 10) || 0;
  if (quantity > 0 && quantity < parseInt(minOrder, 10)) {
    input.classList.add('quantity-input--error');
    let errorMsg = input.parentElement.querySelector('.error-message');
    if (!errorMsg) {
      errorMsg = document.createElement('span');
      errorMsg.className = 'error-message';
      errorMsg.textContent = `Pedido mínimo ${minOrder} piezas`;
      input.parentElement.appendChild(errorMsg);
    }
  } else {
    input.classList.remove('quantity-input--error');
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.remove();
    }
  }
}

function handleFormSubmit(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const totalPieces = parseInt(document.getElementById('totalPieces')?.textContent || '0', 10);
  if (totalPieces === 0) {
    alert('Por favor, selecciona al menos un producto para realizar tu pedido.');
    return;
  }

  let hasError = false;
  document.querySelectorAll('.quantity-input[data-min-order]').forEach(input => {
    const quantity = parseInt(input.value, 10) || 0;
    const minOrder = parseInt(input.dataset.minOrder, 10);
    if (quantity > 0 && quantity < minOrder) {
      hasError = true;
    }
  });

  if (hasError) {
    alert('Algunos productos tienen pedido mínimo de 6 piezas.');
    return;
  }

  const selectedProducts = [];
  document.querySelectorAll('.quantity-input').forEach(input => {
    const quantity = parseInt(input.value, 10) || 0;
    if (quantity > 0) {
      selectedProducts.push({
        nombre: input.dataset.productName,
        tipo: input.dataset.productType,
        cantidad: quantity
      });
    }
  });

  let emailBody = `NUEVO PEDIDO DE TAMALES\n\n`;
  emailBody += `DATOS DEL CLIENTE:\n`;
  emailBody += `Nombre: ${data.nombre}\n`;
  emailBody += `Email: ${data.email}\n`;
  emailBody += `Teléfono: ${data.telefono}\n`;
  emailBody += `Dirección: ${data.direccion}\n`;
  emailBody += `Fecha de Entrega Deseada: ${data['fecha-entrega']}\n`;
  if (data.comentarios) {
    emailBody += `Comentarios: ${data.comentarios}\n`;
  }
  if (data['version-ligera']) {
    emailBody += `Versión: Ligeros y Saludables\n`;
  }
  emailBody += `\nPRODUCTOS PEDIDOS:\n`;
  
  const grouped = {};
  selectedProducts.forEach(product => {
    if (!grouped[product.tipo]) {
      grouped[product.tipo] = [];
    }
    grouped[product.tipo].push(product);
  });

  Object.keys(grouped).forEach(type => {
    emailBody += `\n${type}:\n`;
    grouped[type].forEach(product => {
      emailBody += `  - ${product.nombre}: ${product.cantidad} pieza${product.cantidad > 1 ? 's' : ''}\n`;
    });
  });

  emailBody += `\nTOTAL: ${document.getElementById('totalPieces')?.textContent || 0} piezas\n`;

  const subject = encodeURIComponent('Nuevo Pedido de Tamales - CALLITAE');
  const body = encodeURIComponent(emailBody);
  const mailtoLink = `mailto:contacto@callitae.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  setTimeout(() => {
    alert('¡Gracias por tu pedido! Si tu cliente de email no se abrió, por favor envía un correo a contacto@callitae.com con los detalles de tu pedido.');
  }, 500);
}




