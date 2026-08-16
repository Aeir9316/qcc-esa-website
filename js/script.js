// ===============================
// QCC-ESA Modern UI Interactions
// ===============================

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {

    if (window.scrollY > 40) {
       navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 4px 20px rgba(8,54,31,0.12)';
    }

  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');

  if (href === currentPage) {
    link.style.color = '#E3C87A';
  }
});

// Reveal animation
const revealElements = document.querySelectorAll('.card, .event-item, .district-card, .section-header');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Hero buttons hover effect
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
  });
});
// ===============================
// Past Leadership Terms
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  const termCards = document.querySelectorAll('.past-term-card');

  termCards.forEach(function (card) {

    const toggle = card.querySelector('.past-term-toggle');
    const icon = card.querySelector('.collapse-icon');

    if (!toggle) return;

    toggle.addEventListener('click', function () {

      const isOpen = card.classList.contains('open');

      // Isara lahat
      termCards.forEach(function (otherCard) {
        otherCard.classList.remove('open');

        const otherIcon =
          otherCard.querySelector('.collapse-icon');

        if (otherIcon) {
          otherIcon.textContent = '+';
        }
      });

      // Buksan ang pinindot kung dati itong sarado
      if (!isOpen) {
        card.classList.add('open');

        if (icon) {
          icon.textContent = '×';
        }
      }

    });

  });

});