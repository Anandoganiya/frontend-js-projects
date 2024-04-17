const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');

const allLeftArrow = document.querySelector('.all-left-transfer');
const allRightArrow = document.querySelector('.all-right-transfer');
const leftArrow = document.querySelector('.left-transfer');
const rightArrow = document.querySelector('.right-transfer');

const leftItems = ['JS', 'HTML', 'CSS', 'TS'];
const rightItems = ['React', 'Angular', 'Vue', 'Svelte'];


function createListItemElement(item) {
    const div = document.createElement('div')
    const input = document.createElement('input')
    const span = document.createElement('span')
    input.type = 'checkbox'
    input.name = item;
    input.value = item;
    input.id = item;
    span.textContent = item;
    div.append(input,span);
    return div;
}

function setButtonState() {
    allLeftArrow.disabled = !rightContainer.childElementCount;
    leftArrow.disabled = !rightContainer.querySelector('input:checked')
    rightArrow.disabled = !leftContainer.querySelector('input:checked')
    allRightArrow.disabled = !leftContainer.childElementCount;
}


allLeftArrow.addEventListener('click', (event) => {
    const totalRightItems = [];
    const rightItems = rightContainer.children;
    for (let i = 0; i < rightItems.length; i++) {
        totalRightItems.push(rightItems[i].firstChild.value);
    }
    for (let i = 0; i < totalRightItems.length; i++) {
        const itemDiv = createListItemElement(totalRightItems[i]);
        leftContainer.appendChild(itemDiv);
    }
    rightContainer.innerHTML = '';
    setButtonState()
})

allRightArrow.addEventListener('click', (event) => {
    const totalLeftItems = [];
    const leftItems = leftContainer.children;
    for (let i = 0; i < leftItems.length; i++) {
        totalLeftItems.push(leftItems[i].firstChild.value);
    }
    for (let i = 0; i < totalLeftItems.length; i++) {
        const itemDiv = createListItemElement(totalLeftItems[i]);
        rightContainer.appendChild(itemDiv);
    }
    leftContainer.innerHTML = '';
        setButtonState()
})

leftArrow.addEventListener('click', (event) => {
    const selectedLeftItems = [];
   
    for (let i = 0; i < rightContainer.children.length; i++) {
        const item = rightContainer.children[i].firstChild.value;
        if (rightContainer.children[i].firstChild.checked) {
            selectedLeftItems.push(item);
        }

    }

    for (let i = rightContainer.children.length - 1; i >= 0; i--) {
        if (rightContainer.children[i].firstChild.checked) {
            const removeDiv = rightContainer.children[i];
            rightContainer.removeChild(removeDiv);
        }
    }
    
   
    for (let item of selectedLeftItems) {
        leftContainer.appendChild(createListItemElement(item));
    }
    setButtonState()
})

rightArrow.addEventListener('click', (event) => {
    const selectedRightItems = []
    for (let i = 0; i < leftContainer.children.length; i++) {
        const item = leftContainer.children[i].firstChild.value;
        if (leftContainer.children[i].firstChild.checked) {
            selectedRightItems.push(item);
        }

    }

    for (let i = leftContainer.children.length - 1; i >= 0; i--) {
        if (leftContainer.children[i].firstChild.checked) {
            const removeDiv = leftContainer.children[i];
            leftContainer.removeChild(removeDiv);
        }
    }
    
    for (let item of selectedRightItems) {
        rightContainer.appendChild(createListItemElement(item));
    }
    setButtonState()
})

leftContainer.addEventListener('click', (event) => {
    if (!event.target.value) return;
    setButtonState()   
});

rightContainer.addEventListener('click', (event) => {
    if (!event.target.value) return;
    setButtonState();
});

function init() {

    for (let i = 0; i < leftItems.length; i++) {
        const itemDiv = createListItemElement(leftItems[i]);
        leftContainer.appendChild(itemDiv);
    }
    
    for (let i = 0; i < rightItems.length; i++) {
        const itemDiv = createListItemElement(rightItems[i]);
        rightContainer.appendChild(itemDiv);
    }
    setButtonState()
}

init();