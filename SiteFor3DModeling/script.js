document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    // Устанавливаем ширину трека на основе количества слайдов
    track.style.width = `${totalSlides * 14}%`;

    // Устанавливаем ширину для каждого слайда
    slides.forEach(slide => {
        slide.style.flex = `0 0 ${100 / 3}%`; // Показываем 3 отзыва на экране
    });

    // Обновление позиции слайдера
    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const offset = currentSlide * (slideWidth + 68); // Смещение с учетом ширины и gap
        track.style.transform = `translateX(-${offset}px)`;
    }

    // Функции для переключения слайдов
    function nextSlide() {
        if (currentSlide < totalSlides - 3) {
            currentSlide++;
        } else {
            currentSlide = 0; // Перезапускаем на первый слайд
        }
        updateSlidePosition();
        resetAutoSlide();
    }
    

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
        resetAutoSlide();
    }

    // Показать первый слайд
    updateSlidePosition();

    // Добавление обработчиков событий на кнопки
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Автоматическая прокрутка каждые 5 секунд
    let autoSlide = setInterval(nextSlide, 5000);

    // Функция сброса автоматической прокрутки
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }

    // Обновление позиции слайдов при изменении размера окна
    window.addEventListener('resize', updateSlidePosition);
});
