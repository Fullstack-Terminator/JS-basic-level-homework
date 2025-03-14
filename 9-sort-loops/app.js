'use strict';

const arr = [1, 40, -5, 10, 0];
let i;
let j;

function Arrow(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            } else {
                continue;
            }
        }
    }
    return arr;
}

console.log(Arrow(arr));