'use strict';

/*
----- The This Keyword -----
*/

console.log(this); // this keyword in the global scope is the window object

// Function declaration
const calcAge = function (birthYear) {
  console.log(2024 - birthYear); // 33
  console.log(this); // Undefined as we are in strict mode
};

calcAge(1991);

// Arrow function
const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear); // 33
  console.log(this); // Used the lexical this keyword. Parent scope which is the window object
};

calcAgeArrow(1991);

// This keyword in an object
const andrew = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Andrew object
    console.log(2024 - this.year); // 33
  },
};
andrew.calcAge();

//
const matilda = {
  year: 2017,
};

matilda.calcAge = andrew.calcAge; // Method borrowing
matilda.calcAge(); // Points to the matilda object because of the this keyword in andrew object

const f = andrew.calcAge;
// f(); // Undefined, throwing a TypeError as year cannot be undefined

// Object literal, not global scope
// var firstName = 'This Test'; // Hi This Test as it is in the global scope
const andy = {
  firstName: 'Andrew',
  year: 1991,
  calcAge: function () {
    console.log(this); // Andrew object
    console.log(2024 - this.year); // 33

    // Solution 1
    /*
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); // True
    */

    // Arrow function works as it uses the this keyword from its parent scope (andy)
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // True
  },

  // Never use arrow function as a method
  greet: () => console.log(`Hi ${this.firstName}`),
};
andy.greet(); // "Hi undefined" because the arrow function does not get its own this keyword
andy.calcAge();

// a=Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // Can take more arguments than parameters specified

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // arguments not defined
