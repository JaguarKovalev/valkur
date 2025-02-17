let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const offset = index * -20; // Уменьшаем на 20% (ширина одного изображения)
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Автоматическое переключение слайдов каждые 4 секунды
setInterval(nextSlide, 4000);

// Показать первый слайд изначально
showSlide(currentIndex);