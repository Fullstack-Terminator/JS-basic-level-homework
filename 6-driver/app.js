const hasLicence = true;
const age = 19;
const isDrink = false;

const canDrive = hasLicence && age >= 18 && !isDrink;
const result = `Водитель ${canDrive ? 'может' : 'не может'} управлять транспортным средством`
console.log(result);