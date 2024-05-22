'use strict';

/*
----- Understanding Scopes -----
*/

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Sally';
      // Reassigning outer scope variable
      output = 'New Output';

      const str = `You're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); Not defined as it is out of scope
    // Because var variables are function scopes instead of block scoped. it can be accessed
    console.log(millenial);
    // add(2, 3); Functions are block scoped but only in strict mode
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Andrew';
calcAge(1991);
// console.log(age); Not defined as it is out of scope
// printAge(); Not defined as it is out of scope
