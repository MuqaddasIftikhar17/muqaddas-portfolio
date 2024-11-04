// Header Toggle
let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function () {
    document.body.classList.toggle('mobile-new-active');
    this.classList.toggle('fa-xmark'); // Switch between hamburger and close icon
});

// Typing Effect using Typed.js
let typed = new Typed('.auto-input', {
    strings: ['Python Developer!', 'Machine Learning Engineer!', 'Data Scientist', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});

// Active Link State On Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a');

// Get All Sections
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; // Use window.scrollY for scroll position
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
