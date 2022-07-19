const navBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar-custom');
const camera = document.querySelector('.cam');
const cameraText = document.querySelector('.cam-text');
const navId = document.getElementById('navMenu');
const leftCard = document.querySelector('.price-card-1');
const rightCard = document.querySelector('.price-card-3');
const middleCard = document.querySelector('.price-card-2');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 180) {
        navbar.classList.add('navbar-padding');
    }
    else {
        navbar.classList.remove('navbar-padding')
    }

    if (window.scrollY >=900) {
        console.log(window.scrollY);
        camera.classList.add('camera');
        cameraText.classList.add('cam-text-anim')

    }
    else {
        camera.classList.remove('camera');
        cameraText.classList.remove('cam-text-anim')
    }
    if (window.scrollY >= 4700) {
        leftCard.classList.add('price-card-anim-1');
        rightCard.classList.add('price-card-anim-2');
        middleCard.classList.add('price-card-anim-3');

    }
    else {
        leftCard.classList.remove('price-card-anim-1');
        rightCard.classList.remove('price-card-anim-2');
        middleCard.classList.remove('price-card-anim-3');
    }
    
});

navBtn.addEventListener('click', () => {
    navId.classList.toggle('nav-animate');
});