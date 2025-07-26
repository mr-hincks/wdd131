// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const hamburgerIcon = hamburger.querySelector('i');
const copyrightYear = document.getElementById('copyright-year');
const lastModified = document.getElementById('last-modified');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle between hamburger and X icon
    if (navMenu.classList.contains('active')) {
        hamburgerIcon.classList.replace('fa-bars', 'fa-times');
        hamburger.setAttribute('aria-expanded', 'true');
    } else {
        hamburgerIcon.classList.replace('fa-times', 'fa-bars');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Footer date information
copyrightYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Close menu when clicking on a link (for mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('active');
            hamburgerIcon.classList.replace('fa-times', 'fa-bars');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Close menu when resizing to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('active');
        hamburgerIcon.classList.replace('fa-times', 'fa-bars');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});