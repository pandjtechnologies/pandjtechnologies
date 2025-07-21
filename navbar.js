// navbar.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('pj-hamburger');
  const mobileMenu = document.getElementById('pj-mobile-menu');
  const mobileToggleWho = document.getElementById('pj-mobile-who-toggle');
  const mobileSubmenuWho = document.getElementById('pj-mobile-who-menu');
  const mobileToggleServices = document.getElementById('pj-mobile-services-toggle');
  const mobileSubmenuServices = document.getElementById('pj-mobile-services-menu');

  const dropdownToggleWho = document.getElementById('pj-dropdown-who');
  const dropdownMenuWho = document.getElementById('dropdown-menu-who');
  const dropdownToggleServices = document.getElementById('pj-dropdown-services');
  const dropdownMenuServices = document.getElementById('dropdown-menu-services');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  mobileToggleWho.addEventListener('click', () => {
    mobileSubmenuWho.classList.toggle('active');
    mobileToggleWho.classList.toggle('open');
  });

  mobileToggleServices.addEventListener('click', () => {
    mobileSubmenuServices.classList.toggle('active');
    mobileToggleServices.classList.toggle('open');
  });

  dropdownToggleWho.addEventListener('click', () => {
    const isOpen = dropdownMenuWho.classList.contains('active');
    dropdownMenuWho.classList.toggle('active', !isOpen);
    dropdownMenuServices.classList.remove('active');
  });

  dropdownToggleServices.addEventListener('click', () => {
    const isOpen = dropdownMenuServices.classList.contains('active');
    dropdownMenuServices.classList.toggle('active', !isOpen);
    dropdownMenuWho.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownToggleWho.contains(e.target) && !dropdownMenuWho.contains(e.target)) {
      dropdownMenuWho.classList.remove('active');
    }
    if (!dropdownToggleServices.contains(e.target) && !dropdownMenuServices.contains(e.target)) {
      dropdownMenuServices.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      dropdownMenuWho.classList.remove('active');
      dropdownMenuServices.classList.remove('active');
    }

    const focus = document.activeElement;
    if (e.key === 'ArrowDown') {
      if (focus.parentElement.id === 'pj-dropdown-who') {
        dropdownMenuWho.classList.add('active');
        dropdownMenuServices.classList.remove('active');
      } else if (focus.parentElement.id === 'pj-dropdown-services') {
        dropdownMenuServices.classList.add('active');
        dropdownMenuWho.classList.remove('active');
      }
    }

    if (e.key === 'ArrowUp') {
      dropdownMenuWho.classList.remove('active');
      dropdownMenuServices.classList.remove('active');
    }
  });
});


