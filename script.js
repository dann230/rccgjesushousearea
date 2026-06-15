// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle mobile menu when button is clicked
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });

  // Update year in footer
  document.querySelector('.year-span').textContent = new Date().getFullYear();

  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = mobileMenu.querySelectorAll('a[href^="#"]');

  function setActiveLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-900', 'bg-slate-50');
      link.classList.add('text-slate-600', 'hover:bg-slate-50');
    });

    if (current) {
      const activeLink = mobileMenu.querySelector(`a[href="#${current}"]`);
      if (activeLink) {
        activeLink.classList.remove('text-slate-600', 'hover:bg-slate-50');
        activeLink.classList.add('text-blue-900', 'bg-slate-50');
      }
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', setActiveLink);
  
  // Reveal fade-in-up elements when they enter the viewport
  const revealElements = document.querySelectorAll('.fade-in-up');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  });

  revealElements.forEach(element => {
    if (element.classList.contains('visible')) {
      return;
    }
    revealObserver.observe(element);
  });
  
  // Hero background slider + parallax
  const heroBg = document.getElementById('hero-bg');
  const heroSection = document.getElementById('home');
  if (heroBg) {
    const heroImages = [
      'img/hero2.jpeg',
      'img/hero3.jpg',
      'img/hero4.jpeg',
      'img/hero5.jpeg',
      'img/hero6.jpeg',
      'img/hero7.jpeg'
    ];
    let heroIndex = 0;

    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroBg.style.opacity = '0';
      setTimeout(() => {
        heroBg.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
        heroBg.style.opacity = '1';
      }, 500);
    }, 6000);
  }

  // Set active link on page load
  setActiveLink();
});
