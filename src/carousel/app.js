const nextButton = document.querySelector('.right-arrow');
const prevButton = document.querySelector('.left-arrow');
const imageContainerElement = document.querySelector('.images-container');
const slides = document.querySelectorAll('.slides');
const infiniteScroll = document.querySelector('#infinite-scroll-flag');
const autoPlay = document.querySelector('#autoplay-flag');
const autoPlayInterval = document.querySelector('#autoplay-interval-range');
const dots = document.querySelector('.dot-wrapper');
const maxSlide = slides.length - 1;

let currentSlider = 0;
let intervalId = 0;
autoPlayInterval.disabled = true;

nextButton.addEventListener('click', moveSliderRight);
prevButton.addEventListener('click', moveSliderLeft);
autoPlay.addEventListener('change', handleAutoPlayChange);
autoPlayInterval.addEventListener('change', handleAutoPlayIntervalChange);
dots.addEventListener('click', handleDotClick);
infiniteScroll.addEventListener('change', handleInfiniteScrollChange);

function moveSliderRight() {
  if (currentSlider === maxSlide) {
    if (!infiniteScroll.checked) return;
    currentSlider = 0;
  } else {
    ++currentSlider;
  }
  updateButtonState();
  updateSliderTransform();
  updateDot();
}

function moveSliderLeft() {
  if (currentSlider === 0) {
    if (!infiniteScroll.checked) return;
    currentSlider = maxSlide;
  } else {
    --currentSlider;
  }
  updateButtonState();
  updateSliderTransform();
  updateDot();
}

function handleAutoPlayChange() {
  autoPlayInterval.disabled = !autoPlay.checked;
  if (autoPlay.checked) {
    intervalId = setInterval(moveSliderRight, Number(autoPlayInterval.value));
  } else {
    clearInterval(intervalId);
  }
}

function handleAutoPlayIntervalChange() {
  clearInterval(intervalId);
  intervalId = setInterval(moveSliderRight, Number(autoPlayInterval.value));
}

function handleDotClick(event) {
  if (!event.target.classList.contains('dot')) return;
  currentSlider = Number(event.target.dataset.index);
  updateSliderTransform();
  updateDot();
}

function handleInfiniteScrollChange() {
  updateButtonState();
}

function updateButtonState() {
  prevButton.disabled = (currentSlider === 0 && !infiniteScroll.checked);
  nextButton.disabled = (currentSlider === maxSlide && !infiniteScroll.checked);
}

function updateSliderTransform() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlider)}%)`;
  });
}

function updateDot() {
  const activeDot = dots.querySelector('.dot-active');
  if (activeDot) {
    activeDot.classList.remove('dot-active');
  }
  const dot = dots.querySelector(`[data-index='${currentSlider}']`);
  if (dot) {
    dot.classList.add('dot-active');
  }
}

function init() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('dot');
    button.role = 'tab';
    button.dataset.index = index;
    li.appendChild(button);
    dots.appendChild(li);

    if (index === 0) {
      prevButton.disabled = true;
      button.classList.add('dot-active');
    }
  });
}

init();
