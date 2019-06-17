/**
 * Title: Assignment 3.4
 * Author: Nathaniel Liebhart
 * Date: June 16th, 2019
 * Description: Loops
 */

/**
 * Params: first-name, last-name, assignment
 * Response: output
 * Description: Return a formatted string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Assignment 3.4') + '\n');

// variable to check
const myNum = 6;

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

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 */
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// Start for loop
console.log('\n' + '-- DO THE NUMBERS MATCH GAME --');

for (let i = 0; i < 10; i++) {
  const newRandomNum = randomNumber();
  if (match(myNum, newRandomNum)) {
    logMatch(myNum, newRandomNum);
  } else {
    logMismatch(myNum, newRandomNum);
  }
}

// End for loop
