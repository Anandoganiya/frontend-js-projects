const descElement = document.querySelector('#description__input')
const amountElement = document.querySelector('#amount__input')
const selectAccountElement = document.querySelector('#accounts__selector')

const transactionForm = document.querySelector('.transaction__form')
const transactionList = document.querySelector('.transactions__list')
const balanceAmountElement = document.querySelector('.balance__amount')

let balance = 0;
const transactions = [];

const validateData = (desc,amount,accountOption) => {
    if (!desc) {
        alert('desc required')
        return;
    }
    if (!amount) {
        alert('amount required')
        return;
    }
    if (!accountOption) {
        alert('select account required')
        return;
    }
}

transactionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const desc = descElement.value;
    const amount = amountElement.value;
    const accountOption = selectAccountElement.value;

    validateData(desc, amount, accountOption);

    transactions.push({desc,amount,accountOption})
    
    balance += accountOption === 'income' ? Number(amount) : - Number(amount)
    balanceAmountElement.textContent = `$${balance}`;

    const transactionItem = ` <div class="transaction__item">
    <span class="item__text">${desc}</span>
    <span class="item__amount ${ accountOption === 'income'? 'income':'expense'}">$${amount}</span>
  </div>`;
    transactionList.innerHTML += transactionItem;
})

