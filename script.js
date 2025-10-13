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

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

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
    console.log('🛵 KamaiRider - कमाई भी, भाईचारा भी 💙');
    console.log('Made with ❤️ for all delivery riders');
});

// Add hover effect sounds (optional - commented out)
/*
const playHoverSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGWi77eefTRAMUKXi8LZjHAU5j9n0y3kuBSh+zPLaizsKGGS56+mnUBELTKXh8bllHgU2jdTxy3ozBSh/zO7cjT0KF2S56+mmUBELTKXh8bhkHgU3jdXwy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bhkHgU2jdTxy3ozBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBSl/zO7cjT0LGGa56+ihUBELTKXh8bllHgU2jdTxy3kzBQ==');
    audio.volume = 0.1;
    audio.play();
};
*/

