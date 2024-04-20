const moveLeftButton = document.querySelector('.move-left')
const moveRightButton = document.querySelector('.move-right')
const imageContainer = document.querySelector('.image-container')
const infiniteScroll = document.querySelector('#infinity-scroll')
const autoPlay = document.querySelector('#auto-play')
const autoPlayInterval = document.querySelector('#auto-play-interval')
const dots = document.querySelector('.dot-wrapper');
let currentSlide = 0;
let slidesLength = 0;
let intervalId = null;

dots.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dot')) return;
    const index = parseInt(e.target.dataset.index);
    currentSlide = index;
    handleSliding();
    setButtonState();
    const prevDot = dots.querySelector('.dot-active');
    prevDot.classList.remove('dot-active');
    e.target.classList.add('dot-active');
})

infiniteScroll.addEventListener('click', (e) => {
    setButtonState();
})
autoPlay.addEventListener('click', (e) => {
    autoPlayInterval.disabled = autoPlay.checked;
    if (e.target.checked) {
        intervalId = setInterval(() => {
            moveToRight();
        }, 1000* Number(autoPlayInterval.value));
    } else {
        clearInterval(intervalId);
    }
   
})

function setButtonState() {
    moveLeftButton.disabled = (currentSlide == 0 && !infiniteScroll.checked) ? true : false;
    moveRightButton.disabled = (currentSlide == slidesLength -1 && !infiniteScroll.checked) ? true : false;
}

function moveToRight() {
    if (currentSlide == slidesLength - 1) {
        if (!infiniteScroll.checked) return;
        currentSlide = 0;
    }else
    ++currentSlide;
    handleSliding();
    const prevDot = dots.querySelector('.dot-active');
    prevDot.classList.remove('dot-active');
    const currentDot = dots.querySelector(`[data-index='${currentSlide}']`);
    currentDot.classList.add('dot-active')
    setButtonState();
}

moveRightButton.addEventListener('click', e => {
    moveToRight();
})

moveLeftButton.addEventListener('click', e => {
    if (currentSlide == 0) {
        if (!infiniteScroll.checked) return;
        currentSlide = slidesLength - 1;
    }else
    --currentSlide;
    handleSliding();
    setButtonState()
    const prevDot = dots.querySelector('.dot-active');
    prevDot.classList.remove('dot-active');
    const currentDot = dots.querySelector(`[data-index='${currentSlide}']`);
    currentDot.classList.add('dot-active')
})

function init() {
    const imageItems = ['images/1.jpg', 'images/2.jpg',
        'images/3.jpg', 'images/4.jpg', 'images/5.jpg'].map(item => createImageItem(item));
    imageItems.forEach((item, index) => {
        item.style.transform = `translateX(${100 * index}%)`;
        imageContainer.appendChild(item);
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('dot');
        button.role = 'tab';
        button.dataset.index = index;
        li.appendChild(button);
        dots.appendChild(li);
    
        if (index === 0) {
          button.classList.add('dot-active');
        }
    })
    slidesLength = imageItems.length;
    setButtonState()
}

function handleSliding() {
    const slides = document.querySelectorAll('.image-item')
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
    })
}

function createImageItem(item) {
    const imageItem = document.createElement('div')
    imageItem.classList.add('image-item');
    const img = document.createElement('img')
    img.src = item;
    imageItem.appendChild(img)
    return imageItem;
} 

init();
