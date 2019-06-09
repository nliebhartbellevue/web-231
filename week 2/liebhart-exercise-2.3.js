/*
============================================
; Title:  liebhart-exercise-2.3.js
; Author: Nathaniel D. Liebhart
; Date:   June 9th 2019
; Description: Demonstrates how to define and call function properties
;===========================================
*/

/*
 * Params: None
 * Response: Output
 * Description: Returns the value of a function property and console logs the results
 */

// Start
const header = require('../liebhart-header');

// Logs header.display to the console
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 2.3') + '\n');

// Declare function property
myName.Nate = 'Nathaniel Liebhart';

// Declare function to return function property
function myName() {
  return myName.Nate;
}

console.log('Hello ' + myName() + '!');
