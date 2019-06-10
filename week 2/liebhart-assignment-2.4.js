/*
============================================
; Title:  liebhart-assignment-2.4.js
; Author: Nathaniel D. Liebhart
; Date:   June 9th 2019
; Description: Shows how to build and invoke functions
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Return a formatted string
 */

// import header file
const header = require('../liebhart-header');

// console log header.display()
console.log(header.display('Nathaniel', 'Liebhart', 'Assignment 2.4'));

/**
 * Params: firstName, lastName
 * Response: output
 * Description: Returns first and last names concatenated
 */
function full_name(firstName, lastName) {
  return firstName + ' ' + lastName;
}

/**
 * Params: year, month, day
 * Response: output
 * Description: Returns formatted date object
 */
function date_writer(year, month, day) {
  const monthIndex = month - 1;
  return new Date(year, monthIndex, day).toLocaleDateString('en-US');
}

/**
 * Params: number, fixedPosition
 * Response: output
 * Description: returns a float with a fixed position of decimal points
 */
function format_number(number, fixedPosition) {
  return number.toFixed(fixedPosition);
}

/**
 * Params: numberString
 * Response: output
 * Description: returns parsed string to integer
 */
function convert_to_int(numberString) {
  return parseInt(numberString);
}

/**
 * Params: numberString
 * Response: output
 * Description: Returns a parsed string to float
 */
function convert_to_float(numberString) {
  return parseFloat(numberString);
}

// Test full_name()
console.log('Hello my name is ' + full_name('Nathaniel', 'Liebhart') + '!\n');

// Test date_writer() & format_number()
console.log(
  "Today's date is " +
    date_writer(2019, 06, 09) +
    ' and the current temperature is ' +
    format_number(68.25, 1) +
    ' degrees.\n'
);

console.log(
  'I am ' +
    convert_to_int('31') +
    ' years old , and my savings account goal is ' +
    convert_to_float('50000') +
    ' dollars.'
);
