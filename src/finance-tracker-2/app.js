const totalBalance = document.querySelector('.total-balance')
const desc = document.querySelector('#amount-desc')
const amount = document.querySelector('#amount')
const incomeExpense = document.querySelector('#income-expense');
const addTransButton = document.querySelector(".add-trans.button")
const transForm = document.querySelector('.trans-form');
const financeTracker = document.querySelector('.finance-tracker')
let totalSum = 0;
transForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!desc.value) {
        alert('desc is empty');
        return;
    } else if (!amount.value) {
        alert('amount is empty');
        return;
    }
    if (Number(incomeExpense.value) == 1) {
        totalSum += Number(amount.value);
    } else {
        totalSum -= Number(amount.value);
    }
    const list = createListItem(amount.value, desc.value, incomeExpense);
    financeTracker.append(list);
    totalBalance.textContent = `$${totalSum}`
    console.log(totalSum)
})

function createListItem(amount, desc, IE) {
    const div = document.createElement('div');
    div.classList.add('trans-list');
    const transListContent = `  <div>
                                 ${desc}
                                </div>
                                <div>
                                    ${amount}
                                </div>`;
    div.innerHTML = transListContent;
    return div;
}