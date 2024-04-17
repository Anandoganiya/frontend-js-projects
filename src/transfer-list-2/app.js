const rightSectionData = [
    {
        id: 'react',
        name:'react',
    },
    {
        id: 'angular',
        name:'angular',
    },
    {
        id: 'vue',
        name:'vue',
    },
    {
        id: 'svelte',
        name:'svelte',
    }
]
const leftSectionData = [
    {
        id: 'js',
        name:'js',
    },
    {
        id: 'html',
        name:'html',
    },
    {
        id: 'css',
        name:'css',
    },
    {
        id: 'ts',
        name:'ts',
    }
]

const leftSectionEle = document.querySelector('.left-section');
const rightSectionEle = document.querySelector('.right-section');
const moveAllLeft = document.querySelector('.move-all-left');
const moveAllRight = document.querySelector('.move-all-right');
const moveLeft = document.querySelector('.move-left');
const moveRight = document.querySelector('.move-right');

function setButtonState() {
    moveAllLeft.disabled =  !rightSectionEle.childElementCount;
    moveAllRight.disabled = !leftSectionEle.childElementCount;
    moveRight.disabled =  !leftSectionEle.querySelector('input:checked');
    moveLeft.disabled =  !rightSectionEle.querySelector('input:checked');
}

leftSectionEle.addEventListener('click', (e) => {
    if (!e.target.value) return;
    setButtonState();
})
rightSectionEle.addEventListener('click', (e) => {
    if (!e.target.value) return;
    setButtonState();
})

moveAllRight.addEventListener('click', (e) => {
    const leftItems = [];
    for (let i = 0; i < leftSectionEle.children.length; i++) {
        const itemValue = leftSectionEle.children[i].firstChild.value;
        leftItems.push(itemValue);
    };
    leftItems.forEach(item => {
        rightSectionEle.append(createItem({ id: item, name: item }));
    })
    leftSectionEle.innerHTML = '';
    setButtonState()
})

moveAllLeft.addEventListener('click', (e) => {
    const rightItem = [];
    for (let i = 0; i < rightSectionEle.children.length; i++) {
        const itemValue = rightSectionEle.children[i].firstChild.value;
        rightItem.push(itemValue);
    };
    rightItem.forEach(item => {
        leftSectionEle.append(createItem({ id: item, name: item }));
    })
    rightSectionEle.innerHTML = '';
    setButtonState()
})

moveRight.addEventListener('click',(e)=> {
    const leftItems = [];
    for (let i = 0; i < leftSectionEle.children.length; i++) {
        const itemValue = leftSectionEle.children[i].firstChild.value;
        if (leftSectionEle.children[i].firstChild?.checked) {
            leftItems.push(itemValue);
        }
    };
    leftItems.forEach(item => {
        rightSectionEle.append(createItem({ id: item, name: item }));
    })

    for (let i =  leftSectionEle.children.length-1; i >= 0; i--) {
        if (leftSectionEle.children[i].firstChild?.checked) {
            leftSectionEle.removeChild(leftSectionEle.children[i]);
        }
    };
    setButtonState()
})

moveLeft.addEventListener('click',(e)=> {
    const rightItem = [];
    for (let i = 0; i < rightSectionEle.children.length; i++) {
        const itemValue = rightSectionEle.children[i].firstChild.value;
        if (rightSectionEle.children[i].firstChild?.checked) {
            rightItem.push(itemValue);
        }
    };
    rightItem.forEach(item => {
        leftSectionEle.append(createItem({ id: item, name: item }));
    })

    for (let i =  rightSectionEle.children.length-1; i >= 0; i--) {
        if (rightSectionEle.children[i].firstChild?.checked) {
            rightSectionEle.removeChild(rightSectionEle.children[i]);
        }
    };
    setButtonState()
})


function createItem(item) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.id = item.id;
    input.value = item.id;
    input.type = 'checkbox';
    label.htmlFor = item.name;
    label.textContent = item.name;
    div.appendChild(input);
    div.appendChild(label);
    return div;
}

function init() {
    const leftSectionItems = leftSectionData.map(item=>createItem(item));
    const rightSectionItems = rightSectionData.map(item=>createItem(item));

    leftSectionItems.forEach(item => leftSectionEle.appendChild(item));
    rightSectionItems.forEach(item => rightSectionEle.appendChild(item));
    setButtonState();
}


init();