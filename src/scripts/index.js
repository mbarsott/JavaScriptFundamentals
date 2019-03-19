// const carId; // error, constants have to be initialized
const carId = 100;
// carId = 5; // error, constants are read only and cannot be reassigned;

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
