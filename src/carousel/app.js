const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const imageContainerElement = document.querySelector('.images-container');

let  addOns = 0;
rightArrow.addEventListener('click', (event) => {
    addOns += 250;
    imageContainerElement.style.transform = `translateX(-${addOns}px)`;
    console.log(addOns)
    if (addOns <= 1000) {
        rightArrow.disabled = false;
    } else {
        rightArrow.disabled = true;
        leftArrow.disabled = true;
        
    }
})

leftArrow.addEventListener('click', (event) => {
    addOns -= 250;
    imageContainerElement.style.transform = `translateX(-${addOns}px)`;
    if (addOns > 0) {
        leftArrow.disabled  = false;
    }
    else {
        leftArrow.disabled = true;
        rightArrow.disabled = false;

    }
    console.log(addOns)
})
