'use strict';

let carousel = document.querySelector('.carousel');
let container = carousel.querySelector('.carousel-container');
let prevBtn = carousel.querySelector('.carousel-prev');
let nextBtn = carousel.querySelector('.carousel-next');
let navigation = carousel.querySelector('.carousel-navigation');
let bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
let totalItems = container.querySelectorAll('.carousel-item').length;

let percent = 100 / totalItems;
let currentIndex = 0;

const next = () => {
  slideTo(currentIndex + 1);
};

const prev = () => {
  slideTo(currentIndex - 1);
};

const slideTo = index => {
  index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
  container.style.transform = 'translate(-' + index * percent + '%, 0)';
  bullets[currentIndex].classList.remove('active-bullet');
  bullets[index].classList.add('active-bullet');
  currentIndex = index;
};

bullets[currentIndex].classList.add('active-bullet');

navigation.addEventListener(
  'click',
  function (e) {
    let index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
      slideTo(index);
    }
  },
  false
);

function keyPress(e) {
  if (e.keyCode == '37') {
    prev();
  } else if (e.keyCode == '39') {
    next();
  }
}

prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);
document.addEventListener('keydown', keyPress);
