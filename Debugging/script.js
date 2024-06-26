'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C) Fix bug. Convert value to number
    // value: prompt('Degrees celsius'),
    value: Number(prompt('Degrees celsius')),
  };

  // B) Find bug. Prompt gave us a string when we need a number
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify bug. Calculation is not right
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  // B) Find bug. Max and min set to 0 instead of the current iteration of the loop
  // let max = 0;
  // let min = 0;
  // C/ Fix bug. Set values by iteration of the loop
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // Using JavaScript built in debugger
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify bug. Min says 0 when the min of the arrays is 1
console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with ºC
- Strings needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${String(arr[i])}ºC in ${i + 1} days ...`);
  }
};

printForecast(testData2);
