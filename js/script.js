history.scrollRestoration = "manual";

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let autoAdvanceInterval = setInterval(nextSlide, 5000);
let sideNavbar = document.getElementById('side-navbar')

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }
    const offset = -currentSlide * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
    restartInterval()
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
    restartInterval()
}

function restartInterval() {
    clearInterval(autoAdvanceInterval);
    autoAdvanceInterval = setInterval(nextSlide, 5000);
}

autoAdvanceInterval = setInterval(nextSlide, 5000);

showSlide(currentSlide);

function openNavbar(x) {
    x.classList.toggle("change");
    sideNavbar.classList.toggle('move')
  }