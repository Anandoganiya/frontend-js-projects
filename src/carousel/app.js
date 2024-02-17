const nextButton = document.querySelector('.right-arrow');
const prevButton = document.querySelector('.left-arrow');
const imageContainerElement = document.querySelector('.images-container');
const slides = document.querySelectorAll('.slides');
const infiniteScroll = document.querySelector('#infinite-scroll-flag');
const autoPlay = document.querySelector('#autoplay-flag');
const autoPlayInterval = document.querySelector('#autoplay-interval-range');
const dots = document.querySelector('.dot-wrapper');

let currentSlider = 0;
let intervalId = 0;
let maxSlide = slides.length - 1;
autoPlayInterval.disabled = true;

// next 
nextButton.addEventListener('click',moveRight)

// prev
prevButton.addEventListener('click', moveLeft)

// autoplay
autoPlay.addEventListener('change', event => {
  autoPlayInterval.disabled = !autoPlay.checked;
  if (autoPlay.checked) {
    intervalId = setInterval(moveRight,Number(autoPlayInterval.value))
  } else {
    clearInterval(intervalId)
  }
})

// autoplay interval
autoPlayInterval.addEventListener('change', (event) => {
  clearInterval(intervalId);
  intervalId = setInterval(moveRight,Number(autoPlayInterval.value))
})

// dots
dots.addEventListener('click', (event) => {
  if (!event.target.classList.contains('dot')) return;
  const dotIndex = Number(event.target.dataset.index)
  currentSlider = dotIndex;
 
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlider)}%)`
  })
  updateDot(currentSlider)
})

infiniteScroll.addEventListener('change', () => {
  if (currentSlider === 0 && !infiniteScroll.checked) {
    prevButton.disabled = true;
  }
  else if (currentSlider === maxSlide && !infiniteScroll.checked) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
})


function moveRight() {
  
  if (currentSlider === maxSlide) {
    if (!infiniteScroll.checked) return; 
    currentSlider = 0;
    } else {
    ++currentSlider;
    if (currentSlider === maxSlide && !infiniteScroll.checked) nextButton.disabled = true;
    else {
      nextButton.disabled = false;
      prevButton.disabled = false;
    }
  }

slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlider)}%)`
    })
    updateDot(currentSlider);
}

function moveLeft() {
  
  if (currentSlider === 0) {
    if (!infiniteScroll.checked) return; 
        currentSlider  = maxSlide
      } else {
    --currentSlider;
    if (currentSlider === 0 && !infiniteScroll.checked) prevButton.disabled = true;
    else {
      prevButton.disabled = false;
      nextButton.disabled = false;
       }
      }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlider)}%)`
      })
      updateDot(currentSlider)
}


function updateDot(currentIndex) {
  const dot = dots.querySelector(`[data-index='${currentSlider}']`);
  const doty = dots.children;
  for (let i = 0; i < doty.length; i++) {
    const dotButton = doty[i].firstChild;
    dotButton.classList.remove('dot-active')
  }
  dot.classList.add('dot-active');
}

function init() {

  slides.forEach((slide,index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
    
    const li = document.createElement('li');
    const button = document.createElement('button')
    button.classList.add('dot')
    button.role = 'tab';
    button.dataset.index = index;
    li.appendChild(button)
    dots.appendChild(li)
  
    if (index === 0) {
      prevButton.disabled = true;
      button.classList.add('dot-active')
    }
    
  });
  
}
init();