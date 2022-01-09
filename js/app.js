'use strict';
console.clear();

// selecting elements
const carouselContainer = document.querySelector('.carousel-container');
const carouselBackground = document.querySelector('.carousel-bg');
const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
const carouselNavigation = document.querySelector('.carousel-navigation');
const carouselIndicator = Array.from(
  document.querySelectorAll('.carousel-indicator')
);

// positioning slides
const slidesWidth = carouselSlides[0].getBoundingClientRect().width;
carouselSlides[1].style.left = slidesWidth * 1.5 + 'px';
carouselSlides[2].style.left = slidesWidth * 2.5 + 'px';

// starting variables
const { gsap, imagesLoaded } = window;

// change slides and background
function changeSlides() {
  const currentSlide = carouselContainer.querySelector('.current-slide');
  const previousSlide = carouselContainer.querySelector('.previous-side');
  const nextSlide = carouselContainer.querySelector('.next-slide');

  const currentBackground = carouselBackground.querySelector('.current-image');
  const previousBackground =
    carouselBackground.querySelector('.previous-image');
  const nextBackground = carouselBackground.querySelector('.next-image');

  changeSlidesClass();

  function changeSlidesClass() {
    currentSlide.classList.remove('current-slide');
    previousSlide.classList.remove('previous-slide');
    nextSlide.classList.remove('next-slide');

    currentBackground.classList.remove('current-image');
    previousBackground.classList.remove('previous-image');
    nextBackground.classList.remove('next-image');
  }
}

// gsap timeline
const timeline = gsap.timeline({
  repeat: -1,
  ease: 'in-out',
});

timeline
  .from('.carousel-bg', {
    y: '100%',
    opacity: 0,
    delay: 1,
  })

  .from('.carousel-slide', {
    opacity: 0,
    scale: 0.5,
    delay: 1,
  })

  .from('.carousel-navigation', {
    opacity: 0,
  })

  .to('li:nth-child(1) ', {
    right: '75%',
    duration: 1,
  })

  .to('li:nth-child(2)', {
    left: '25%',
    duration: 1,
  })

  .to('li:nth-child(3)', {
    left: '75%',
    duration: 1,
  })

  .to('li:nth-child(1)', {
    right: '100%',
    duration: 1,
  })

  .to('li:nth-child(2)', {
    left: '-25%',
    duration: 1,
  })

  .to('li:nth-child(3)', {
    left: '25%',
    duration: 1,
  })

  .to('li:nth-child(3)', {
    left: '100%',
    duration: 1,
  })

  .to('li:nth-child(2)', {
    left: '75%',
    duration: 1,
  })

  .to('li:nth-child(1)', {
    right: '25%',
    duration: 1,
  })

  .to('.carousel-bg', {
    y: '-100%',
    opacity: 0,
    delay: 1,
  });
