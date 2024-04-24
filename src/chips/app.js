const chips = document.querySelector('.chips')
const chipInput = document.querySelector('.chip-input')
const chipForm = document.querySelector('.chip-form')

let item = createChipItem('');

chipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    item.querySelector('.remove').classList.add('active')
    item = createChipItem('');
    chipInput.value = "";
})

chipInput.addEventListener('input', (e) => {
    if (e.target.value == "") {
        item.remove();
        return;
    }
    if(e.target.value.length == 1)
        chips.appendChild(item)

    item.firstChild.textContent = e.target.value;
})


function createChipItem(value) {
    const div = document.createElement('div')
    div.classList.add('chip-item')
    const innerDiv = document.createElement('div')
    innerDiv.textContent = value;
    const button = document.createElement('button')
    button.textContent = 'X';
    button.classList.add('remove')
    button.addEventListener('click', (e) => {
        div.remove();
    })
    div.appendChild(innerDiv)
    div.appendChild(button)
    return div;
}