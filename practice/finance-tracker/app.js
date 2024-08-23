const descInput = document.querySelector('input[name="desc"]');
const amountInput = document.querySelector('input[name="amount"]');
const selectedTransactionType = document.querySelector('#transaction_type');
const list = document.querySelector('.transaction_list');

const transForm = document.querySelector('.trans_form');

transForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!descInput.value) {
        alert('desc is empty');
        return;
    } else if (!amountInput.value) {
        alert('amount is empty');
        return;
    }
    descInput.value = "";
    amountInput.value = "";
    addTransactionItem(descInput.value, amountInput.value, selectedTransactionType.value);
})

const addTransactionItem = (desc,amount,transType) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const descEle = document.createElement('div');
    descEle.textContent = desc;
    const amountEl = document.createElement('div');
    amountEl.textContent = `$${amount}`;
    li.appendChild(descEle)
    li.appendChild(amountEl)
    if (transType == 'income') {
        descEle.classList.add('green_color');
        amountEl.classList.add('green_color');
    } else {
        descEle.classList.add('red_color');
        amountEl.classList.add('red_color');
    }
    list.appendChild(li);
}