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
});




