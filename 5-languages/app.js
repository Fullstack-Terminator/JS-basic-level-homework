// Вариант 1

const languages = prompt();

switch(languages) {
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

// switch(true) {
//     case languages === "en":{ 
//         console.log("Hello");
//         break;
//     }
//     case languages === "ru":{
//         console.log("Здравствуйте");
//         break;
//     }
//     case languages === "de":{
//         console.log("Gutten tag");
//         break;
//     }
// }