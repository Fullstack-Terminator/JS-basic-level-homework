'use strict';

// Не совсем понял задание, поэтому сделал несколько вариантов

/* Вариант 1 (просто сделал функцию удаления первого класса и соответственно высшего порядка, которая принимает 
массив чисел и функцию удаления) */

// function arrowDelete(arrow) {
//     for (let index in arrow) {
//         if (arrow[index] < 5) {
//             arrow.splice(index, 1);
//         } else {
//             continue;
//         }
//     }
//     return arrow;
// }

// function arrow(arrow, fn) {
//     const resFunction = fn(arrow);
//     return resFunction;
// }

// const result = arrow([2, 14, 4, 7, 1, 9, 0], arrowDelete);
// console.log(result);

/* Вариант 2 (в функции удаления будет выводится сам элемент массива с true либо false) */

// function arrowDelete(arrow) {
//     for (let index in arrow) {
//         if (arrow[index] < 5) {
//             arrow[index] = `${arrow[index]} = true`
//         } else {
//             arrow[index] = `${arrow[index]} = false`
//         }
//     }
//     return arrow;
// }

// function arrow(arrow, fn) {
//     const resFunction = fn(arrow);
//     return resFunction;
// }

// const result = arrow([2, 14, 4, 7, 1, 9, 0], arrowDelete);
// console.log(result);

/* Вариант 3 (в данном варианте функция удаления элементов принимает число и возвращает true, если его надо удалить 
и false, если надо оставить ) */

function arrowDelete(arrow) {
    for (let index in arrow) {
        if (arrow[index] < 5) {
            arrow[index] === true;
        } else {
            arrow[index] === false;
        }
    }
    return arrow;
}

// function arrow(arrow, fn) {
//     const resFunction = fn(arrow);
//     return resFunction;
// }

const arrow = (arrow, fn) => {
    const resFunction = fn(arrow);
    return resFunction;
}

const result = arrow([11, 12, 1, 10, 10, 1, 10, 1, 10, 1], arrowDelete);
console.log(result);