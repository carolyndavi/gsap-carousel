'use strict';

const carouselContainer = document.querySelector('.carousel-track-container');
const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
const carouselNavigation = document.querySelector('.carousel-navigation');
const carouselIndicator = Array.from(
  document.querySelectorAll('.carousel-indicator')
);

console.log(carouselSlides, carouselIndicator);

const carouselImages = [
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1545394734-b4140a8cfa9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1595131264251-63b7cf3b8564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];

const slideWidth = carouselSlides[0].getBoundingClientRect().width;

carouselSlides[1].style.left = slideWidth * 1.5 + 'px';
carouselSlides[2].style.left = slideWidth * 2.5 + 'px';

const carouselTimeline = gsap.timeline({
  repeat: -1,
  ease: 'in-out',
});

carouselTimeline
  .from('.carousel-track-container', {
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

  .to('.carousel-track-container', {
    y: '-100%',
    opacity: 0,
    delay: 1,
  });
