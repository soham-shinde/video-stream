


function scrollLeft1(params) {
    let scrollPosition = 0;
    console.log(params.nextElementSibling);
    const sliderParent = params.nextElementSibling;
    const slideWidth = sliderParent.offsetWidth;

    if (scrollPosition >= 0) {
        scrollPosition -= slideWidth;
        sliderParent.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
    }
}

function scrollRight(params) {
    let scrollPosition = 0;

    const sliderParent = params.previousElementSibling;
    const slideWidth = sliderParent.offsetWidth;

    if (scrollPosition < (sliderParent.scrollWidth - slideWidth)) {
        scrollPosition += slideWidth;
        sliderParent.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
    }
}

