// LÁNZATE — interacciones de la landing page

document.addEventListener('DOMContentLoaded', () => {

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Acordeón de preguntas frecuentes
  const accordion = document.getElementById('accordion');
  if (accordion) {
    accordion.querySelectorAll('.accordion__item').forEach(item => {
      const trigger = item.querySelector('.accordion__trigger');
      const panel = item.querySelector('.accordion__panel');
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        accordion.querySelectorAll('.accordion__item').forEach(other => {
          other.classList.remove('is-open');
          other.querySelector('.accordion__panel').style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('is-open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  // Botón de video (placeholder hasta enlazar el video real)
  const videoBtn = document.getElementById('videoPlayBtn');
  if (videoBtn) {
    videoBtn.addEventListener('click', () => {
      alert('Aquí se reproducirá el video de presentación de LÁNZATE. Reemplaza este botón por tu video real (YouTube/Vimeo) en index.html.');
    });
  }

  // Animación de aparición al hacer scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
