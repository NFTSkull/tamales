// Importar estilos
import './styles/main.scss';

// Importar componente principal
import './components/app.js';

// Código JavaScript principal
document.addEventListener('DOMContentLoaded', () => {
  console.log('CALLITAE website loaded');
  
  // Lazy loading de imágenes
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Manejo del formulario de pedido
  initializeOrderForm();
});

// Funcionalidad del formulario de pedido
function initializeOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;

  // Botones de cantidad
  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = btn.dataset.product;
      const input = document.getElementById(productId);
      if (!input) return;

      if (btn.classList.contains('quantity-btn--plus')) {
        input.value = parseInt(input.value) + 1;
      } else if (btn.classList.contains('quantity-btn--minus')) {
        const currentValue = parseInt(input.value);
        if (currentValue > 0) {
          input.value = currentValue - 1;
        }
      }

      // Disparar evento change para actualizar resumen
      input.dispatchEvent(new Event('change', { bubbles: true }));
      updateOrderSummary();
    });
  });

  // Actualizar resumen cuando cambian las cantidades
  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', () => {
      updateOrderSummary();
      validateMinOrder(input);
    });

    input.addEventListener('input', (e) => {
      if (e.target.value < 0) {
        e.target.value = 0;
      }
      updateOrderSummary();
      validateMinOrder(e.target);
    });
  });

  // Envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(form);
  });

  // Actualizar fecha mínima para entrega (hoy + 1 día)
  const fechaInput = document.getElementById('fecha-entrega');
  if (fechaInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fechaInput.min = tomorrow.toISOString().split('T')[0];
  }
}

// Actualizar resumen del pedido
function updateOrderSummary() {
  const summaryContent = document.getElementById('orderSummaryContent');
  const summaryTotal = document.getElementById('orderSummaryTotal');
  const totalPiecesEl = document.getElementById('totalPieces');
  
  if (!summaryContent || !summaryTotal || !totalPiecesEl) return;

  const selectedProducts = [];
  let totalPieces = 0;

  document.querySelectorAll('.quantity-input').forEach(input => {
    const quantity = parseInt(input.value) || 0;
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
    return;
  }

  // Agrupar por tipo
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

// Validar pedido mínimo
function validateMinOrder(input) {
  const minOrder = input.dataset.minOrder;
  if (!minOrder) return;

  const quantity = parseInt(input.value) || 0;
  if (quantity > 0 && quantity < parseInt(minOrder)) {
    input.classList.add('quantity-input--error');
    // Mostrar mensaje de error
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

// Manejar envío del formulario
function handleFormSubmit(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Validar que hay productos seleccionados
  const totalPieces = parseInt(document.getElementById('totalPieces')?.textContent || 0);
  if (totalPieces === 0) {
    alert('Por favor, selecciona al menos un producto para realizar tu pedido.');
    return;
  }

  // Validar pedidos mínimos de especialidades
  let hasError = false;
  document.querySelectorAll('.quantity-input[data-min-order]').forEach(input => {
    const quantity = parseInt(input.value) || 0;
    const minOrder = parseInt(input.dataset.minOrder);
    if (quantity > 0 && quantity < minOrder) {
      hasError = true;
    }
  });

  if (hasError) {
    alert('Algunos productos tienen pedido mínimo de 6 piezas.');
    return;
  }

  // Construir el email
  const selectedProducts = [];
  document.querySelectorAll('.quantity-input').forEach(input => {
    const quantity = parseInt(input.value) || 0;
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
  
  // Agrupar por tipo
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

  // Crear mailto link
  const subject = encodeURIComponent('Nuevo Pedido de Tamales - CALLITAE');
  const body = encodeURIComponent(emailBody);
  const mailtoLink = `mailto:contacto@callitae.com?subject=${subject}&body=${body}`;

  // Abrir cliente de email
  window.location.href = mailtoLink;

  // Mostrar mensaje de confirmación
  setTimeout(() => {
    alert('¡Gracias por tu pedido! Si tu cliente de email no se abrió, por favor envía un correo a contacto@callitae.com con los detalles de tu pedido.');
  }, 500);
}




