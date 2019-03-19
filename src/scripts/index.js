/* const */

// const carId; // error, constants have to be initialized
const carId = 100;
// carId = 5; // error, constants are read only and cannot be reassigned;

/* let and var */

console.log(varId); // variables declared ahead with var will result in undefined
var varId = 5;

// console.log(letId); // this generates an error. Uncomment the line to see the error.
let letId = 10;

if (true) {
  var varScoped = 15;
}
console.log(varScoped); // variables defined with var are not limited to the block scope

if (true) {
  let letScoped = 10; // scope is limited within the block
}
// console.log(letScoped); // error, let defines variables with local scope within the block

/* rest parameters */

function sendCars(...allCarIds) {
  console.log("");
  allCarIds.forEach(id => console.log(id));
}

sendCars(100, 200, 555);

function sendCarsWithDay(day, ...allCarIds) {
  console.log("\n" + day);
  allCarIds.forEach(id => console.log(id));
}

sendCarsWithDay("Monday", 1, 2, 3);

/* destructuring arrays */
let allIds = [100, 200, 300];
let [id1, id2] = allIds;
console.log("");
console.log(id1, id2);
console.log("");
let [id, ...restOfIds] = allIds;
console.log(id, restOfIds);
let v2, rest;
[, v2, ...rest] = allIds;
console.log("");
console.log(v2, rest);
