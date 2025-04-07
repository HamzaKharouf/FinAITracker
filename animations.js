// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all animated elements
document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Particle background effect
const createParticles = () => {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        hero.appendChild(particle);
        
        const animation = particle.animate([
            { 
                transform: `translate(${Math.random() * 100}vw, -10px)`,
                opacity: 0
            },
            { 
                transform: `translate(${Math.random() * 100}vw, 100vh)`,
                opacity: Math.random()
            }
        ], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity
        });
    }
};

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);