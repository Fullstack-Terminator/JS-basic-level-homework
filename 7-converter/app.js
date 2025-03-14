'use strict';

// function converter(sum, currency, targetCurrency) {
//     const USD = 91.33;
//     const EUR = 112.33;
//     const RUB = 1;

//     currency = currency.toUpperCase();
//     targetCurrency = targetCurrency.toUpperCase();

//     switch(currency) {
//         case 'USD': {
//             switch (targetCurrency) {
//                 case 'RUB':
//                     return sum * USD;
//                 case 'EUR':
//                     return (sum * USD) / EUR;
//                 case 'USD':
//                     return USD;
//                 default:
//                     return null;
//             }
//         }
//         case 'EUR': {
//             switch (targetCurrency) {
//                 case 'RUB':
//                     return sum * EUR;
//                 case 'USD':
//                     return (sum * EUR) / USD;
//                 case 'EUR':
//                     return EUR;
//             }
//         }
//         case 'RUB': {
//             switch (targetCurrency) {
//                 case 'USD':
//                     return sum / USD;
//                 case 'EUR':
//                     return sum / EUR;
//                 case 'RUB':
//                     return RUB;
//             }
//         }
//         default:
//             return null;
//     }
// }

// console.log(converter(200, 'ruB', 'usd').toFixed(2));

function convertSum(sum, from, to) {
    return ((sum * from) / to.toFixed(2));
}

function getTargetCurrencyIcon(targetCurrency) {
    switch (targetCurrency) {
        case 'RUB':
            return 'руб';
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
    }
}

function messegeTemplete(value, icon) {
    return `${value} ${icon}`;
}

function converter(sum, currency, targetCurrency) {
    const ALLOW_CURRENCY_LIST = ['RUB', 'EUR', 'USD'];
    const USD = 91.33;
    const RUB = 1;
    const EUR = 112.33;

    currency = currency.toUpperCase();
    targetCurrency = targetCurrency.toUpperCase();
    const icon = getTargetCurrencyIcon(targetCurrency);

    if (currency === targetCurrency) {
        return messegeTemplete(sum, icon);
    }
    if (!ALLOW_CURRENCY_LIST.includes(currency)) {
        console.log('Входящая валюта мне не известна');
        return null;
    }
    if (!ALLOW_CURRENCY_LIST.includes(targetCurrency)) {
        console.log('Исходящая валюта мне не известна');
        return null;
    }

    let value = null;

    switch (currency) {
        case 'USD':{
            switch (targetCurrency) {
                case 'RUB': value = convertSum(sum, USD, RUB); break;
                case 'EUR': value = convertSum(sum, USD, EUR); break;
            }; break;
        }
            
        case 'RUB': {
            switch (targetCurrency) {
                case 'USD': value = convertSum(sum, RUB, USD); break;
                case 'EUR': value = convertSum(sum, RUB, EUR); break;
            }; break;
        }
            
        case 'EUR': {
            switch (targetCurrency) {
                case 'RUB': value = convertSum(sum, EUR, RUB); break;
                case 'USD': value = convertSum(sum, EUR, USD); break;
            }; break;
        }
    }

    return messegeTemplete(value, icon);
            
}