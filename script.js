// Simple JavaScript for AgroVidya Landing Page

// Modal functionality
function showModal() {
    const modal = document.getElementById('demoModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('demoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('demoModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(20, 83, 45, 0.98)';
    } else {
        navbar.style.background = 'rgba(20, 83, 45, 0.95)';
    }
});

// Simple animation on scroll for cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.card, .feature-item, .stat-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .feature-item, .stat-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Hero text animation
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 1s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Simple typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Keyboard accessibility for modal
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('demoModal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Simple form validation (if contact forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Loading animation helper
function showLoading() {
    // Can be implemented for future AJAX calls
    console.log('Loading...');
}

function hideLoading() {
    // Can be implemented for future AJAX calls
    console.log('Loading complete');
}

// Console welcome message
console.log('🌱 Welcome to AgroVidya - Learn Farming, One Pixel at a Time!');
console.log('🏛️ A Government of Karnataka Initiative');
console.log('🚀 Built for Smart India Hackathon');