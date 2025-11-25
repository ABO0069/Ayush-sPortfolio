const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
// Select all links inside the mobile menu
const mobileLinks = mobileMenu.querySelectorAll('a');

// 1. Toggle Menu when Hamburger is clicked
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 2. Close Menu when a Link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});