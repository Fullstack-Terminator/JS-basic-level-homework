const positionLat = 4;
const positionLong = 5;
const addressLat = 10;
const addressLong = 7;


let distance = Math.sqrt((addressLat - positionLat) * 2 + (addressLong - positionLong) * 2);
console.log(`Расстояние между двумя объектами составит ${distance}.`);