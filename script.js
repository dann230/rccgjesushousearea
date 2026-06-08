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
  
  // Set active link on page load
  setActiveLink();
});
