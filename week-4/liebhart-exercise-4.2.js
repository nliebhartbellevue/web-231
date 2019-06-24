/**
 * Title: Exercise 4.2 - Arrays
 * Author: Nathaniel Liebhart
 * Date: June 23rd, 2019
 * Description: Arrays
 */

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns the header
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 4.2') + '\n');

// Create the fruits array
const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

/**
 * Params: fruits array
 * Response: output
 * Description: console log each item within the array
 */
getFruits = fruits => {
  fruits.forEach(e => {
    console.log(e);
  });
};

getFruits(fruits);
