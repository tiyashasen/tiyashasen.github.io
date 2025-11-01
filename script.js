// Navbar functionality
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

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
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach((card, index) => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                // Add staggered animation
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                }, index * 100);
            } else {
                const category = card.getAttribute('data-category');
                if (category === filterValue) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                    }, index * 100);
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Enhanced Intersection Observer for converging animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Observe elements with animation classes
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        animationObserver.observe(element);
    });

    // Add converging animations to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('animate-on-scroll');

        // Alternate between left and right animations
        if (index % 2 === 0) {
            category.classList.add('slide-in-left');
        } else {
            category.classList.add('slide-in-right');
        }

        // Add stagger effect
        category.classList.add(`stagger-${(index % 6) + 1}`);
        animationObserver.observe(category);
    });

    // Add converging animations to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll', 'slide-in-up');
        item.classList.add(`stagger-${(index % 3) + 1}`);
        animationObserver.observe(item);
    });

    // Add animations to project cards
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        project.classList.add('animate-on-scroll', 'slide-in-up');
        project.classList.add(`stagger-${(index % 3) + 1}`);
        animationObserver.observe(project);
    });

    // Add animations to certification items
    const certItems = document.querySelectorAll('.publication-item');
    certItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        item.classList.add(`stagger-${index + 1}`);
        animationObserver.observe(item);
    });

    // Add animations to contact details
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll', 'scale-in');
        item.classList.add(`stagger-${index + 1}`);
        animationObserver.observe(item);
    });

    // Add animations to about text paragraphs
    const aboutParas = document.querySelectorAll('.about-text p');
    aboutParas.forEach((para, index) => {
        para.classList.add('animate-on-scroll', 'fade-in');
        para.classList.add(`stagger-${index + 1}`);
        animationObserver.observe(para);
    });

    // Initialize other features
    setActiveLink();

    // Fade in body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section (subtle)
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            const heroContent = document.querySelector('.hero-content');
            const heroImage = document.querySelector('.hero-image');

            if (heroContent && heroImage && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.classList.add('back-to-top');
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS for back to top button
const backToTopStyles = document.createElement('style');
backToTopStyles.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 999;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    }

    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }

    .back-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(backToTopStyles);

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events for nav highlighting
window.addEventListener('scroll', debounce(setActiveLink, 15));

// Add smooth reveal for section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    title.classList.add('animate-on-scroll', 'slide-in-down');
    animationObserver.observe(title);
});

// Console message
console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 16px; color: #6b7280;');
console.log('%cFeel free to reach out: tiyashasen09@gmail.com', 'font-size: 14px; color: #8b5cf6;');