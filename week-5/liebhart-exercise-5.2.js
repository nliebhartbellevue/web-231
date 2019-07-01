/**
 * Title: Exercise 5.2 - Built-in Functions
 * Author: Nathaniel Liebhart
 * Date: June 30th, 2019
 * Description: Built-in Functions
 */

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 5.2') + '\n');

const foods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

foods.forEach(food => console.log(food));
