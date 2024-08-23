const leftList = document.querySelector('.left-list');
const rightList = document.querySelector('.right-list');
const hardLeftBtn = document.querySelector('.hard-left');
const hardRightBtn = document.querySelector('.hard-right');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
rightBtn.disabled = true;
leftBtn.disabled = true;
const controlButtonContainer = document.querySelector('.control-buttons');

const leftListItems = ['angular', 'react', 'js', 'graphql'];
const rightListItems = ['jwt', 'backend', 'frontend', 'html'];

function getListItem(item) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const input = document.createElement('input');
    span.textContent = item;
    input.type = 'checkbox';
    input.value = item;
    li.appendChild(input);
    li.appendChild(span);
    return li;
}

leftListItems.forEach(item => {
    leftList.appendChild(getListItem(item));
})

rightListItems.forEach(item => {
    rightList.appendChild(getListItem(item));
})

leftList.addEventListener('click', e => {
    const arr = [];
    if (e.target.tagName == 'INPUT') {
        Array.prototype.forEach.call(leftList.children, (item) => {
            const inputValue = item.firstChild.checked;
            arr.push(inputValue);
        })
        if (arr.includes(true)) rightBtn.disabled = false;
        else rightBtn.disabled = true;
    }
});

rightList.addEventListener('click', e => {
    const arr = [];
    if (e.target.tagName == 'INPUT') {
        Array.prototype.forEach.call(rightList.children, (item) => {
            const inputValue = item.firstChild.checked;
            if (inputValue) {
                arr.push(inputValue);
            }
        })
    }
    if (arr.includes(true)) leftBtn.disabled = false;
    else leftBtn.disabled = true;
})

rightBtn.addEventListener('click', (e) => {
    const selectedItems = [];
    const itemsToRemove = [];
    Array.prototype.forEach.call(leftList.children, (item) => {
        const inputValue = item.firstChild.checked;
        if (inputValue) {
            selectedItems.push(item.firstChild.value);
            itemsToRemove.push(item);
        }
    });
    itemsToRemove.forEach((item) => {
        item.remove();
    });
    const items = selectedItems.map(item => {
        return getListItem(item);
    })
    items.forEach(itemList => rightList.appendChild(itemList));
    rightBtn.disabled = true;
})

hardRightBtn.addEventListener('click', e => {
    const currentLeftItems = [];
    const itemsToRemove = [];
    Array.prototype.forEach.call(leftList.children, (item) => {
        currentLeftItems.push(item.firstChild);
            itemsToRemove.push(item);
    });
    const itemValues = currentLeftItems.map(item => item.value);
    const items = itemValues.map(item => {
        return getListItem(item);
    })
    items.forEach(itemList => rightList.appendChild(itemList));
    itemsToRemove.forEach((item) => {
        item.remove();
    });
    hardRightBtn.disabled = true;
    hardLeftBtn.disabled = false;
})
hardLeftBtn.addEventListener('click', e => {
    const currentRightItems = [];
    const itemsToRemove = [];
    Array.prototype.forEach.call(rightList.children, (item) => {
        currentRightItems.push(item.firstChild);
            itemsToRemove.push(item);
    });
    const itemValues = currentRightItems.map(item => item.value);
    const items = itemValues.map(item => {
        return getListItem(item);
    })
    items.forEach(itemList => leftList.appendChild(itemList));
    itemsToRemove.forEach((item) => {
        item.remove();
    });
    hardRightBtn.disabled = false;
    hardLeftBtn.disabled = true;
})

leftBtn.addEventListener('click', (e) => {
    const selectedItems = [];
    const itemsToRemove = [];
    Array.prototype.forEach.call(rightList.children, (item) => {
        const inputValue = item.firstChild.checked;
        if (inputValue) {
            selectedItems.push(item.firstChild.value);
            itemsToRemove.push(item);
        }
    });
    itemsToRemove.forEach((item) => {
        item.remove();
    });
    const items = selectedItems.map(item => {
        return getListItem(item);
    })
    items.forEach(itemList => leftList.appendChild(itemList));
    leftBtn.disabled = true;
})