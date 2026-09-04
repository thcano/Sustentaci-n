const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');
let currentSlide = 0;
const totalSlides = slides.length;

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

    // Actualizar slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
}

document.getElementById('prevBtn').addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('nextBtn').addEventListener('click', () => goToSlide(currentSlide + 1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
    }
});

goToSlide(0);