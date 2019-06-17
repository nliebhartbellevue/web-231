/**
 * Title: Assignment 3.2
 * Author: Nathaniel Liebhart
 * Date: June 16th, 2019
 * Description: Patten matching functions
 */

/**
 * Params: first-name, last-name, assignment
 * Response: output
 * Description: Return a formatted string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Assignment 3.2') + '\n');

// Local test variables with default values
const truck = 'Truck',
  car = 'Car',
  bike1 = 'Bike',
  bike2 = 'Bike',
  four = 'Four',
  three = 'Three';

/**
 * Params: x, y
 * Response: output
 * Description: Returns true if the params match, else returns false
 */
function match(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

/**
 * Params: x, y
 * Response: output
 * Description: Returns a string message say x and y do not match!
 */
function logMismatch(x, y) {
  return console.log(`${x} and ${y} do not match!`);
}

/**
 * Params: x, y
 * Response: output
 * Description: Returns a string message saying x and y do match!
 */
function logMatch(x, y) {
  return console.log(`${x} and ${y} do match!`);
}

// Output from match() function
console.log(match('A', 'B'));
console.log(match(2, 2) + '\n');

// Test case # 1
if (match(truck, car)) {
  logMatch(truck, car);
} else {
  logMismatch(truck, car);
}

// Test case # 2
if (match(bike1, bike2)) {
  logMatch(bike1, bike2);
} else {
  logMismatch(bike1, bike2);
}

// Test case # 3
if (match(four, three)) {
  logMatch(four, three);
} else {
  logMismatch(four, three);
}
