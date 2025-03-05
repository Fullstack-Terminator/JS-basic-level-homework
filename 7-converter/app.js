function conversionCurrency(amountOfMany, currencyOriginal, currencyFinal) {
    currencyOriginal = currencyOriginal.toLowerCase();
    currencyFinal = currencyFinal.toLowerCase();
    switch(currencyOriginal) {
        case 'руб': {
            result = currencyFinal === 'usd' ? (amountOfMany *= 0.011342) : currencyFinal === 'euro' ? (amountOfMany *= 0.010868) : 'null';
            break;
        }
        case 'euro': {
            result = currencyFinal === 'руб' ? (amountOfMany *= 92.02) : currencyFinal === 'usd' ? (amountOfMany *= 1.05) : 'null';
            break;
        }
        case 'usd': {
            result = currencyFinal === 'руб' ? (amountOfMany *= 88.17) : currencyFinal === 'euro' ? (amountOfMany *= 0.96) : 'null';
            break;
        }
        default:
            console.log('Такой валюты нет');
    }
}

conversionCurrency(1000, 'euro', 'Usd');

console.log(result);