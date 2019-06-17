/**
 * Title: Exercise 3.3
 * Author: Nathaniel Liebhart
 * Date: June 16th, 2019
 * Description: Control Statements
 */

/**
 * Params: first-name, last-name, assignment
 * Response: output
 * Description: Return a formatted string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 3.3') + '\n');

let eventKeyCode = 13;

// Start switch statement

switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}

// End switch statement
