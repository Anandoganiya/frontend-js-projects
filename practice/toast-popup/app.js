const inputText = document.querySelector('input[name="inputText"]');

const toastForm = document.querySelector('.toast-form');

const leftTopContainer = document.querySelector('.left-top-container');

toastForm.addEventListener('click', (e) => {
    e.preventDefault();

    const toast = createToast(inputText.value);
    leftTopContainer.append(toast);

})

function createToast(value) {
    const toastItemDiv = document.createElement('div');
    const childDiv = document.createElement('div');
    childDiv.textContent = value;
    toastItemDiv.classList.add('toast-item', 'fadeIn');
    toastItemDiv.append(childDiv);
    const button = document.createElement('button');
    button.textContent = 'XX';
    button.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        parent.classList.add('fadeOut')
        setTimeout(() => {
            parent.remove();
        }, 500);
    })
    toastItemDiv.append(button);
    return toastItemDiv;
}