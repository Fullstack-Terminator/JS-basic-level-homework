'use strict';

const card = '4561-2612-1234-5464';

// Вариант 1

    // function cardCheckingResult(card) {
    //     const cardChecking = card.split(/-|/).map((el, index) => {
    //         if (index % 2 === 0) {
    //             if (2 * el > 9) {
    //                 return 2 * el - 9;
    //             } 
    //             return 2 * el;
    //         }
    //         return Number(el); 
    //     });
    
    //     let number1 = cardChecking.slice(0, 4);
    //     let sumNumber1 = 0;
    //     for (let number of number1) {
    //         sumNumber1 += number;
    //     }
    
    //     let number2 = cardChecking.slice(4, 8);
    //     let sumNumber2 = 0;
    //     for (let number of number2) {
    //         sumNumber2 += number;
    //     }
    
    //     let number3 = cardChecking.slice(8, 12);
    //     let sumNumber3 = 0;
    //     for (let number of number3) {
    //         sumNumber3 += number;
    //     }
    
    //     let number4 = cardChecking.slice(12, 16);
    //     let sumNumber4 = 0;
    //     for (let number of number4) {
    //         sumNumber4 += number;
    //     }  
    //     return (sumNumber1 + sumNumber2 + sumNumber3 + sumNumber4) % 10 === 0 ? true : false;
    // }

// Вариант 2

    function cardCheckingResult(card) {
        const cardChecking = card.split(/-|/).map((el, index) => {
            if (index % 2 === 0) {
                2 * el > 9 ? 2 * el - 9 : 2 * el;
            }
            return Number(el); 
        });
    
        let number1 = cardChecking.slice(0, 4);
        let sumNumber1 = number1.reduce((acc, value) => {
            return acc += value;
        }, 0);
    
        let number2 = cardChecking.slice(4, 8);
        let sumNumber2 = number2.reduce((acc, value) => {
            return acc += value;
        }, 0);
    
        let number3 = cardChecking.slice(8, 12);
        let sumNumber3 = number3.reduce((acc, value) => {
            return acc += value;
        }, 0);
    
        let number4 = cardChecking.slice(12, 16);
        let sumNumber4 = number4.reduce((acc, value) => {
            return acc += value;
        }, 0);
        return (sumNumber1 + sumNumber2 + sumNumber3 + sumNumber4) % 10 === 0 ? true : false;
    }

console.log(cardCheckingResult(card));