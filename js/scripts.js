mermaid.initialize({
    theme: 'dark',
    themeVariables: {
        background: '#0f172a',
        primaryColor: '#60a5fa',
        primaryTextColor: '#ffffff',
        lineColor: '#60a5fa',
        fontFamily: 'Segoe UI, sans-serif'
    }
});

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');
let currentSlide = 0;
const totalSlides = slides.length;

// Crear dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;

    if (index === 4 || index === 6) {
        mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
    }
}

document.getElementById('prevBtn').addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('nextBtn').addEventListener('click', () => goToSlide(currentSlide + 1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
});

window.addEventListener('load', () => {
    mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
});