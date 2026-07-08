/**
 * Mobile menu functionality
 * Handles mobile navigation toggle
 */

export function initMobileMenu() {
  const menuButton = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', toggleMenu);

  // Close menu when clicking on links
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });
}

function toggleMenu() {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const isOpen = mobileMenu.classList.contains('hidden');
  
  if (isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuButton = document.querySelector('[data-mobile-menu-toggle]');
  
  mobileMenu.classList.remove('hidden');
  menuButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuButton = document.querySelector('[data-mobile-menu-toggle]');
  
  mobileMenu.classList.add('hidden');
  menuButton.setAttribute('aria-expanded', 'false');
}
