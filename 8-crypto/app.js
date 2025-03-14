'use strict';

// Вариант 1 (без использования reverse)

// function passwordEntry(originalPassword) {
//     let originalPasswordPart1;
//     let originalPasswordPart2;
//     originalPasswordPart2 = originalPassword.split('');
//     originalPasswordPart1 = originalPasswordPart2.splice(0, originalPasswordPart2.length / 2);
//     [originalPasswordPart1[0], originalPasswordPart2[originalPasswordPart2.length - 1]] = 
//     [originalPasswordPart2[originalPasswordPart2.length - 1], originalPasswordPart1[0]];
//     [originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)], originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)]] = 
//     [originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)], originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)]];
//     const encryptedPassword = originalPasswordPart1.concat(originalPasswordPart2);
//     return encryptedPassword.join('');
// }

// function checkPassword(encryptedPassword, originalPassword) {
//     if (encryptedPassword === passwordEntry(originalPassword)) {
//         return true;
//     }
//     return false;
// }

// const p = 'userpassword';
// const e = passwordEntry(p);
// const d = passwordEntry(e);
// console.log(p, e ,d, p === d);
// console.log(checkPassword(e, d));

// Вариант 2 (если с reverse, то использую в этом варианте флаги для изменения состояния чтобы сделать функцию обратимой)

// let swapped = false;

// function passwordEntry(originalPassword) {
//     let originalPasswordPart1;
//     let originalPasswordPart2;
//     originalPasswordPart2 = originalPassword.split('');
//     originalPasswordPart1 = originalPasswordPart2.splice(0, originalPasswordPart2.length / 2);
//     if (!swapped) {
//         originalPasswordPart1.reverse() && originalPasswordPart2.reverse();
//         [originalPasswordPart1[0], originalPasswordPart2[originalPasswordPart2.length - 1]] = 
//         [originalPasswordPart2[originalPasswordPart2.length - 1], originalPasswordPart1[0]];
//         [originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)], originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)]] = 
//         [originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)], originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)]];
//         swapped = true;
//     } else {
//         [originalPasswordPart1[0], originalPasswordPart2[originalPasswordPart2.length - 1]] = 
//         [originalPasswordPart2[originalPasswordPart2.length - 1], originalPasswordPart1[0]];
//         [originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)], originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)]] = 
//         [originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)], originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)]];
//         originalPasswordPart1.reverse() && originalPasswordPart2.reverse();
//         swapped = false;
//     }
//     const encryptedPassword = originalPasswordPart1.concat(originalPasswordPart2);
//     return encryptedPassword.join('');
// }

// function checkPassword(encryptedPassword, originalPassword) {
//     if (encryptedPassword === passwordEntry(originalPassword)) {
//         swapped = false;
//         return true;
//     } else {
//         swapped = false;
//         return false;
//     }
// }

// const p = 'userpassword';
// const e = passwordEntry(p);
// const d = passwordEntry(e);
// console.log(p, e ,d, p === d);
// console.log(checkPassword(e, d));
// console.log(checkPassword(e, d));
// console.log(checkPassword(e, d));

// Вариант 3 (переписал состояния немного по другому и сделал разделение на два массива с помощью циклов)

let swapped = false;

function passwordEntry(originalPassword) {
    let originalPasswordPart1 = [];
    let originalPasswordPart2 = [];
    const index = Math.floor(originalPassword.length / 2);
    let i;
    originalPassword.split('');
    for (i = 0; i < originalPassword.length; i++) {
        if (i < index) {
            originalPasswordPart1.push(originalPassword[i]);
        } else {
            originalPasswordPart2.push(originalPassword[i]);
        }
    }
    if (!swapped) {
        originalPasswordPart1.reverse() && originalPasswordPart2.reverse();
    }
        [originalPasswordPart1[0], originalPasswordPart2[originalPasswordPart2.length - 1]] = 
        [originalPasswordPart2[originalPasswordPart2.length - 1], originalPasswordPart1[0]];
        [originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)], originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)]] = 
        [originalPasswordPart2[Math.floor(originalPasswordPart2.length / 2)], originalPasswordPart1[Math.floor(originalPasswordPart1.length / 2)]];
    if (swapped = true) {
        originalPasswordPart1.reverse() && originalPasswordPart2.reverse();
    }
    if (!swapped) {
        swapped = true;
    } else {
        swapped = false;
    }
    // swapped = !swapped; - либо так можно
    const encryptedPassword = originalPasswordPart1.concat(originalPasswordPart2);
    return encryptedPassword.join('');
}

function checkPassword(encryptedPassword, originalPassword) {
    if (encryptedPassword === passwordEntry(originalPassword)) {
        swapped = false;
        return true;
    } else {
        swapped = false;
        return false;
    }
}

const p = 'userpassword';
const e = passwordEntry(p);
const d = passwordEntry(e);
console.log(p, e ,d, p === d);
console.log(checkPassword(e, d));
console.log(checkPassword(e, d));
console.log(checkPassword(e, d));