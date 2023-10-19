const form = document.querySelector('.formItem');
const inputItem = document.querySelector('#inputItem') as HTMLInputElement
const itemsContainer = document.querySelector('#itemsContainer') as HTMLElement;

form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const itemValue = inputItem.value;
    if (!itemValue) return;
    addItemToItemsContainer(itemValue);
})

function addItemToItemsContainer(itemValue: string) {
    const item = `<li>
                        <div class="itemText">${itemValue}</div>
                        <button class="update">🖊️</button>
                        <button class="delete">❌</button>
                    </li>`;
    itemsContainer.innerHTML += item;
}

itemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    } else if (e.target.classList.contains('update')) {
        const updateButton = e.target;
        const currentParent = e.target.parentElement;
        const currentItemTextElement = currentParent.querySelector('.itemText');
        const inputElement = document.createElement('input')
        inputElement.className = 'itemInput';
        inputElement.value = currentItemTextElement.textContent;
        currentParent.replaceChild(inputElement, currentItemTextElement);
        updateButton.textContent = "💾";
        updateButton.className = 'save';
    } else if (e.target.classList.contains('save')) {
        const saveButton = e.target;
        const currentParent = e.target.parentElement;
        const inputElement = currentParent.querySelector('.itemInput');
        const divElement = document.createElement("div")
        divElement.textContent = inputElement.value;
        divElement.className = 'itemText'
        currentParent.replaceChild(divElement, inputElement);
        saveButton.textContent = "🖊️";
        saveButton.className = 'update';
    }
})