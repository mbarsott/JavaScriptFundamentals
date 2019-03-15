// const carId; // error, constants have to be initialized
const carId = 100;
// carId = 5; // error, constants are read only and cannot be reassigned;

console.log(varId); // variables declared ahead with var will result in undefined
var varId = 5;

console.log(letId); // this should generate and error but results in undefined instead. Has it changed in ECMAScript?
let letId = 10;

if (true) {
  var varScoped = 15;
}
console.log(varScoped); // variables defined with var have global scope

if (true) {
  let letScoped = 10; // scope is limited withing the block
}
// console.log(letScoped); // error, let defines variables with local scope
