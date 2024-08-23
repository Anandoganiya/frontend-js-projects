const images = ['/images/1.jpg', '/images/2.jpg',
    '/images/3.jpg', '/images/4.jpg', '/images/5.jpg'];

const imageHolder = document.querySelector('.image-holder');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentSlideWidth = 0;
let currentImageIndex = 0;


images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = image;
    imageHolder.appendChild(img);
});

rightBtn.addEventListener('click', (e) => {
    
    currentSlideWidth = currentSlideWidth - 256;
    currentImageIndex++;
    if (currentImageIndex > 0) leftBtn.disabled = false;
    imageHolder.style.transform = `translateX(${currentSlideWidth}px)`;
    if (currentImageIndex == images.length - 1) {
        rightBtn.disabled = true;
        leftBtn.disabled = false;
        return;
    }
})

leftBtn.addEventListener('click', (e) => {
    currentSlideWidth = currentSlideWidth + 256;
    currentImageIndex--;
    if (currentImageIndex > 0) rightBtn.disabled = false;
    imageHolder.style.transform = `translateX(${currentSlideWidth}px)`;
    if (currentImageIndex  == 0) {
        leftBtn.disabled = true;
        rightBtn.disabled = false;
        return;
    }
})

