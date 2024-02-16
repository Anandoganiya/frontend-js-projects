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

slides.forEach((slide,index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
  
  const li = document.createElement('li');
  const button = document.createElement('button')
  button.classList.add('dot')
  button.role = 'tab';
  button.dataset.index = index;
  li.appendChild(button)
  dots.appendChild(li)
});

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
})


function moveRight() {
  if (currentSlider === maxSlide) {
    if (!infiniteScroll.checked) return; 
      currentSlider = 0;
    } else {
      currentSlider++;
    }
  
slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlider)}%)`
  })
}

function moveLeft() {
  
  if (currentSlider === 0) {
    if (!infiniteScroll.checked) return; 
        currentSlider  = maxSlide
      } else {
        currentSlider--;
      }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlider)}%)`
    })
}
