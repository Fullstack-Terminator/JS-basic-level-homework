const hasLicence = true;
const age = 19;
const isDrink = false;

const result = hasLicence && age > 18 && !isDrink ? "может" : "не может";
console.log(result);