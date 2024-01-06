const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const imgHolder = document.querySelector('.img-holder')

let selected = 0;
let rightCount = 1;
rightArrow.addEventListener('click', (e) => {
    selected += 300;
    imgHolder.style.transform = `translateX(-${selected}px)`;
})
leftArrow.addEventListener('click', (e) => {
    selected -= 300;
    imgHolder.style.transform = `translateX(-${selected}px)`
})
