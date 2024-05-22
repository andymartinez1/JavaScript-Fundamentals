'use strict';

/*
----- Understanding Hoisting -----
*/

// console.log(me); // Undefined (Var returns undefined if called before being defined)
// console.log(job); // Uncaught (Cannot access before initialization)
// console.log(year); // Uncaught (Cannot access before initialization)

// Variable hoisting
var me = 'Andrew';
let job = 'Teacher';
const year = 1991;

// Function hoisting
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2)); // Uncaught (Cannot access before initialization)
// console.log(addArrow(1, 2)); // Undefined (Var returns undefined if called before being defined)

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

/*
----- Example Hoisting Mistake -----
*/

// Because var returns undefined which is falsy like 0, deleteShoppingCart was executed
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

/*
----- Var Window Object Properties -----
*/

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
