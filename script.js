const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');

let currentSlideIndex = 0;

function moveToSlide(track, currentIndex) {
    const amountToMove = -slides[currentIndex].offsetWidth * currentIndex;
    track.style.transform = `translateX(${amountToMove}px)`;
}

nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    moveToSlide(track, currentSlideIndex);
});

prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    moveToSlide(track, currentSlideIndex);
});
