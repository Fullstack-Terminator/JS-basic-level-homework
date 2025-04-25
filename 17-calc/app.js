'use strict';

// Вариант 1

// function clickInputOne() {
//     const numberOne = Number(document.querySelector('#number1').value);
//     const numberTwo = Number(document.querySelector('#number2').value);
//     if (!numberOne || !numberTwo) {
//         return;
//     }
//     document.querySelector('.output-result').innerText = `Результат: ${numberOne + numberTwo}`;
//     document.querySelector('#number1').value = '';
//     document.querySelector('#number2').value = '';
// }

// function clickInputTwo() {
//     const numberOne = Number(document.querySelector('#number1').value);
//     const numberTwo = Number(document.querySelector('#number2').value);
//     if (!numberOne || !numberTwo) {
//         return;
//     } 
//     if (numberTwo === '0') {
//         return document.querySelector('.output-result').innerText = 'На ноль делить нельзя!';
//     }
//     document.querySelector('.output-result').innerText = `Результат: ${numberOne / numberTwo}`;
//     document.querySelector('#number1').value = '';
//     document.querySelector('#number2').value = '';
// }

// function clickInputThree() {
//     const numberOne = Number(document.querySelector('#number1').value);
//     const numberTwo = Number(document.querySelector('#number2').value);
//     if (!numberOne || !numberTwo) {
//         return;
//     }
//     document.querySelector('.output-result').innerText = `Результат: ${numberOne - numberTwo}`;
//     document.querySelector('#number1').value = '';
//     document.querySelector('#number2').value = '';
// }

// function clickInputFour() {
//     const numberOne = Number(document.querySelector('#number1').value);
//     const numberTwo = Number(document.querySelector('#number2').value);
//     if (!numberOne || !numberTwo) {
//         return;
//     }
//     document.querySelector('.output-result').innerText = `Результат: ${numberOne * numberTwo}`;
//     document.querySelector('#number1').value = '';
//     document.querySelector('#number2').value = '';
// }

// Вариант 2

function assigningNumbers() {
        const numberOne = Number(document.querySelector('#number1').value);
        const numberTwo = Number(document.querySelector('#number2').value);
        return {numberOne, numberTwo};
}

function resultNumber(result) {
    document.querySelector('.output-result').innerText = `Результат: ${result}`;
    document.querySelector('#number1').value = '';
    document.querySelector('#number2').value = '';
}

function clickInputOne() {
    const {numberOne, numberTwo} = assigningNumbers();
    if (!numberOne || !numberTwo) {
        return;
    }
    resultNumber(numberOne + numberTwo);
}

function clickInputTwo() {
    const {numberOne, numberTwo} = assigningNumbers();
    if (numberTwo === 0) {
        return document.querySelector('.output-result').innerText = 'На ноль делить нельзя!';
    }
    resultNumber(numberOne / numberTwo);
}

function clickInputThree() {
    const {numberOne, numberTwo} = assigningNumbers();
    resultNumber(numberOne - numberTwo);
}

function clickInputFour() {
    const {numberOne, numberTwo} = assigningNumbers();
    resultNumber(numberOne * numberTwo);
}