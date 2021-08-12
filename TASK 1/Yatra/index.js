//Image carousel Intro
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//For Countries Image-slider
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.images__country');

let current_post = 0;

next.addEventListener('click', () => {
    if (current_post < images.children.length - 1) {
        current_post++;

        images.style.transitionDuration = "0.5s";
        images.style.transform = `translate(-${current_post * 350}px)`;
    } else {
        return;
    }
});

prev.addEventListener('click', () => {
    if (current_post > 0) {
        current_post--;

        images.style.transitionDuration = "0.5s";
        images.style.transform = `translate(-${current_post * 350}px)`;
    } else {
        return;
    }
});