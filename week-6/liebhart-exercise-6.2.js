/**
 * Title: Exercise 6.2 - Exception Handling
 * Author: Nathaniel Liebhart
 * Date: June 30th, 2019
 * Description: Exception Handling
 */

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 6.2') + '\n');

try {
  // Variable
  let x = 4.25;

  // Validation check
  if (x > 1) {
    throw 'Error: x is larger than 1';
  }
  // Output
  console.log(x);
  // Catch errors
} catch (e) {
  console.log(e);
} finally {
  console.log('Finally clause reached...');
}
