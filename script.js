// Navbar Scroll Efekti
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 16, 17, 0.85)';
        nav.style.backdropFilter = 'blur(15px)';
        nav.style.padding = '10px 0';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '0';
    }
});

// Smooth Scroll (Yumuşak Kaydırma)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Reveal Animasyonu
const reveal = () => {
    const cards = document.querySelectorAll('.feature-card, .table-wrapper');
    cards.forEach(card => {
        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

// İlk Ayarlar
document.querySelectorAll('.feature-card, .table-wrapper').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.8s ease-out";
});

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);