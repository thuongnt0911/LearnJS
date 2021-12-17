const numberButton = document.getElementById('data-number');
const operationButton = document.getElementsByClassName('main__key-operator');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.getElementById('data-clear-all');
const previousElement = document.querySelector('[data-previous]');
const currentElement = document.querySelector('[data-current]');

function getPreviousElement() {
    return previousElement.innerText;
}

function printPrevious(number) {
    previousElement.innerText = number;
}

function getCurrentELement() {
    return currentElement.innerText;
}

function printCurrent(number) {
    currentElement.innerText = number;
}

for (let i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', function () {
        if (clearButton) {
            printCurrent("");
            printPrevious("");
        } else if (deleteButton) {
            var num = Number(number.replace(/,/g, '')).toString();
            if (num) {
                num = num.substr(0, num.length - 1);
                printCurrent(num);
            }

        }
    })
}

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', function () {
        var num = "thuong";
        if (num != NaN) {
            num = num + this.id;
            printCurrent(num);
        }
    })
}