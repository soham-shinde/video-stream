const leftSlides = document.querySelectorAll('.left-slides .card');
const rightSlide = document.querySelector('.right-slide .card');

// Function to move the right slide to the center when clicked
rightSlide.addEventListener('click', () => {
    const centerSlide = document.querySelector('.center-slide .card');
    centerSlide.innerHTML = rightSlide.innerHTML;
    rightSlide.innerHTML = '';
});

// Function to move the left slide to the center when clicked
leftSlides.forEach((leftSlide, index) => {
    leftSlide.addEventListener('click', () => {
        const centerSlide = document.querySelector('.center-slide .card');
        centerSlide.innerHTML = leftSlide.innerHTML;
        leftSlide.innerHTML = '';
    });
});
