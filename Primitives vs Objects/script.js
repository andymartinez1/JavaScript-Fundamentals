'use strict';
// ----- Primitive -----
let age = 30;
let oldAge = age; // Preserved original age 30
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Andrew',
  age: 30,
};

// ----- Object -----
const friend = me;
friend.age = 27;
console.log('Friend', friend); // Both show age 27
console.log('Me', me); // Both show age 27

// ----- Primitive types -----
let lastName = 'Williams';
let oldLastName = 'Williams';
lastName = 'Davis';
console.log(lastName, oldLastName);

// ----- Reference types -----
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica); // Last name: Davis
console.log('After marriage', marriedJessica); // Last name: Davis

// ----- Copying objects -----
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Merge 2 objects using Object.assign
const jessicaCopy = Object.assign({}, jessica2); // Won't work on an object within an object
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2); // Last name: Williams
console.log('After marriage', jessicaCopy); // Last name: Davis

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2); // 4 family members. Should be 2
console.log('After marriage', jessicaCopy); // 4 family members
