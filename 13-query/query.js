'use strict';

const query = {
    search: 'Вася',
    take: 10,
};

// Вариант 1

// let objectProperties = [];
// function paramObject(param) {
//     for (const key in param) {
//         objectProperties.push(`${key}=${param[key]}`);
//     }
// }

// paramObject(query);
// console.log(objectProperties.join('&'));

// Вариант 2

// function paramObject(param) {
//     let params = Object.entries(param);
//     let params1 = params.map(el => `${el[0]}=${el[1]}`).join('&');
//     console.log(params1);
// }

// paramObject(query);

// Вариант 3 (сократил запись варианта 2)

function paramObject(param) {
    console.log(Object.entries(param).map(el => `${el[0]}=${el[1]}`).join('&'));
}

paramObject(query);