// Вариант 1

const languages = prompt();
const lowercaseLanguages = languages.toLowerCase();

switch(lowercaseLanguages) {
    case "en":{
        console.log("Hello");
        break;
    }
    case "ru":{
        console.log("Здравствуйте");
        break;
    }
    case "de": {
        console.log("Gutten tag");
        break;
    }
}

// Вариант 2

// const languages = prompt();
// const lowercaseLanguages = languages.toLowerCase();

// switch(true) {
//     case lowercaseLanguages === "en":{ 
//         console.log("Hello");
//         break;
//     }
//     case lowercaseLanguages === "ru":{
//         console.log("Здравствуйте");
//         break;
//     }
//     case lowercaseLanguages === "de":{
//         console.log("Gutten tag");
//         break;
//     }
// }