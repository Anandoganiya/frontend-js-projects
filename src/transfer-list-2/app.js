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

function init() {
    const leftSectionItems = leftSectionData.map(item=>createItem(item));
    const rightSectionItems = rightSectionData.map(item=>createItem(item));

    leftSectionItems.forEach(item => leftSectionEle.appendChild(item));
    rightSectionItems.forEach(item => rightSectionEle.appendChild(item));
    
}

function createItem(item) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.id = item.id;
    input.type = 'checkbox';
    label.htmlFor = item.name;
    label.textContent = item.name;
    div.appendChild(input);
    div.appendChild(label);
    return div;
}

init();