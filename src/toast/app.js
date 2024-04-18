const toastForm = document.querySelector('.toast-form');
const leftRightSelector = document.querySelector('#left-right')
const topBottomSelector = document.querySelector('#top-bottom')
const signSelector = document.querySelector('#sign')
const messageInput = document.querySelector('#message')
const toast = document.querySelector('.toast')


toastForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const toastItem = createToastItem(leftRightSelector.value, topBottomSelector.value, signSelector.value, messageInput.value);
    toast.prepend(toastItem)
})

function createToastItem(x, y, sign, message) {
    const toastEle = document.createElement('div')
    toastEle.classList.add('toast-item')
    toastEle.textContent = message;
    const button = document.createElement('button')
    button.textContent = "X"
    button.addEventListener('click', removeToast);
    toastEle.appendChild(button);
   
    async  function removeToast(e) {
        toastEle.classList.add('fadeOutFromLeft');
        setTimeout(removeElement, 350);
    }
    function removeElement() {
        toastEle.remove();
    }

    setTimeout(removeToast,5000)
    return toastEle;
}