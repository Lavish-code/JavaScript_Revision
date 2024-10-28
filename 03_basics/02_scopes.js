// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope

// Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example
// {
//   let x = 2;
// }
// // x can NOT be used here
// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

// Example
// {
//   var x = 2;
// }
// // x CAN be used here

// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:

// Example
// // code here can NOT use carName

// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
// }

// // code here can NOT use carName


// Function Scope
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:

// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   let carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo";   // Function Scope
// }
// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// Example
// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// }

const addOne = function(num){
    return num + 1
}
console.log(addOne(5))


// functions stored in variable
const addTwo = function(num){        //if we want to access this function from above of this function it will give error.
    return num + 2
}
console.log(addTwo(5))