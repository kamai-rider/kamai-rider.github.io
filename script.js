// Nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
        navLinks.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
    };
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) closeMenu();
    });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Pricing toggle
const billingToggle = document.getElementById('billingToggle');
if (billingToggle) {
    billingToggle.addEventListener('change', (e) => {
        const yearly = e.target.checked;
        document.querySelectorAll('.price').forEach(el => {
            const priceEl = el;
            const m = priceEl.getAttribute('data-monthly');
            const y = priceEl.getAttribute('data-yearly');
            if (m && y) priceEl.textContent = yearly ? y : m;
        });
    });
}

// WhatsApp CTAs (pricing buttons)
document.querySelectorAll('[data-action="whatsapp"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan') || 'Plan';
        const text = encodeURIComponent(`Hi, I'm interested in the ${plan} plan for WhatsApp Automation. Could you share a quick demo?`);
        const url = `https://wa.me/?text=${text}`;
        window.open(url, '_blank', 'noopener');
    });
});

// Demo form -> open WhatsApp with prefilled message
const demoForm = document.getElementById('demoForm');
if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const business = document.getElementById('business').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const lines = [
            `Name: ${name}`,
            `Business: ${business}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            'Please send a WhatsApp demo for ServeMore.'
        ];
        const text = encodeURIComponent(lines.join('\n'));
        const url = `https://wa.me/?text=${text}`;
        window.open(url, '_blank', 'noopener');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const bg = 'rgba(11,13,18,0.85)';
        if (currentScroll > 100) {
            navbar.style.background = bg;
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
        } else {
            navbar.style.background = 'rgba(11,13,18,0.7)';
            navbar.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
const animateElements = document.querySelectorAll('.feature-card, .example-card, .timeline-item, .stat-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
};

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('+')) {
                    const num = parseInt(text.replace('+', ''));
                    stat.dataset.suffix = '+';
                    animateCounter(stat, num);
                } else if (text.includes('%')) {
                    const num = parseInt(text.replace('%', ''));
                    stat.dataset.suffix = '%';
                    animateCounter(stat, num);
                } else if (text.includes('/')) {
                    // Don't animate 24/7
                    return;
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-dark);
    `;
    
    // Add hamburger to navbar
    navbar.appendChild(hamburger);
    
    // Toggle menu on click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Show hamburger on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMobile = (e) => {
        if (e.matches) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
            navLinks.classList.remove('active');
        }
    };
    
    mediaQuery.addListener(handleMobile);
    handleMobile(mediaQuery);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // no-op
});

// Add hover effect sounds (optional - commented out)
/*
const playHoverSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGWi77eefTRAMUKXi8LZjHAU5j9n0y3kuBSh+zPLaizsKGGS56+mnUBELTKXh8bllHgU2jdTxy3ozBSh/zO7cjT0KF2S56+mmUBELTKXh8bhkHgU3jdXwy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bhkHgU2jdTxy3ozBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBQ==');
    audio.volume = 0.1;
    audio.play();
};
*/

