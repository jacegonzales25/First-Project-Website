// Global variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-mobile .list-link');

// Toggle navigation
const toggleMenu = () =>{
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);

//Add/remove header border bottom on scroll
const headerScrollEvent = () => {
    if(this.scrollY >= 30){
        headerElement.classList('active-scroll');
    }else{
        headerElement.classList.remove('active-scroll');
    }
}

window.addEventListener('scroll', headerScrollEvent);

// Add selected link styles to the link clicked and close navigation when clicking the links
navLinks.forEach(link => link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    headerElement.classList.remove('active');

    let current = document.getElementsByClassName('current');
    current[0].className = current[0].className.replace(' current', "");
    link.className += " current";
}));

// Scroll Reveal
const sr = ScrollReveal({
    distance: '25px',
    duration: 2500
});

sr.reveal(`.image-left, .gallery-show-data, .plan-trip-data`, {
    origin: 'left'
})

sr.reveal('.image-center', {
    origin: 'bottom'
})

sr.reveal(`.image-right, .showcase-data`,{
    origin: 'right'
})

sr.reveal('.gallery-data-wrapper', {
    origin: 'bottom',
    interval: 250
})

sr.reveal('.company-container', {
    origin: 'top'
})

sr.reveal(`.footer-container-inner, > div, .footer-separator, .copyright`, {
    origin: 'bottom',
    interval: 250
})

// Slider JavaScript // 

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav= function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
});

// Forms JavaScript //

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});