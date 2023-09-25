


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


let video = document.getElementById('player');
let playPauseButton = document.getElementById('play-btn');
let video_title = document.getElementById('video-overlay');


video.addEventListener('play', ()=>{
   video_title.style.display = "none";
   playPauseButton.style.display = "none";
});

video.addEventListener('pause', ()=>{
    video_title.style.display = "block";
    playPauseButton.style.display = "block";
});

playPauseButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        document.getElementById('video-overlay').style.display = "none";
      // playPauseButton.innerText = "Pause";
    } else {
        video.pause();
        document.getElementById('video-overlay').style.display = "block";
      //  playPauseButton.innerText = "Play";
    }
});


const description = document.querySelector('.story-text-p');
const toggleBtn = document.getElementById('show-more');
const showtext = document.getElementById('show-more-text');
const expand_icon = document.getElementById('expand-icon');

toggleBtn.addEventListener('click', function() {
    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        showtext.textContent = "Show more";
       expand_icon.animate([
        { transform: 'rotate(180deg)' },
        { transform: 'rotate(0deg)' }
       ], {
        duration: 500,
        fill: 'forwards'
    })
    } else {
        description.classList.add('expanded');
        showtext.textContent = "Show less";
        expand_icon.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(180deg)' }
        ], {
            duration: 500,  // animation duration (0.5 seconds)
            fill: 'forwards'
        });
    }
});


