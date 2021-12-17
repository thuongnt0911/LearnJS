const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const content = document.getElementById('content');
const amount = document.getElementById('amount');

//Local Storage
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

//Add transaction
function addTransaction(e) {
    e.preventDefault();

    if (content.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amout');
    } else {
        const transaction = {
            id: Date.now().toString(),
            content: content.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        renderTransaction(transaction);
        updateValues();
        updateLocalStorage();

        content.value = '';
        amount.value = '';
    }
}

//render transactions list
function renderTransaction(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML =
        `${transaction.content} 
    <span>
    ${sign}${Math.abs(transaction.amount)}
    </span> 
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;
    list.appendChild(item);
}

//Total, Income, Expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    var income = amounts.filter(item => item > 0).reduce((acc, item) => (acc + item), 0).toFixed(2);
    var expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * (-1)).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

//Delete transaction.
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage();

    init();
}

//Update Local Storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

//init
function init() {
    list.innerHTML = '';

    transactions.forEach(renderTransaction);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);