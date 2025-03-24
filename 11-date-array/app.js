'use strict';

const arrInf = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '27/02/2000', '31-04-2025'];

function converterArrInDate(array) {
    const newArray = array.map(el => {
        const parts = el.split(/\-|\//);
        if (parts.length === 3) {
            const day = Number(parts[0]);
            const month = Number(parts[1]);
            const year = Number(parts[2]);
            if (month % 2 === 0 && month != 2) {
                if (day > 30) {
                    return null;
                }
            }
            if (day > 0 && day <= 31 && month > 0 && month <= 12) {
                if (month === 2) {
                    if (year % 4 === 0 && year % 100 != 0 || year % 100 === 0 && year % 400 === 0) {
                        if (day > 29) {
                            return null;
                        }
                        return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
                    }
                    if (day > 28) {
                        return null;
                    }
                }
                return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
                
            }
        }   
        return null;
    });
    return newArray.filter(date => date != null);
}

console.log(converterArrInDate(arrInf));