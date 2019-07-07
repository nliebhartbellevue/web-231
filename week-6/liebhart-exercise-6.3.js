/**
 * Title: Exercise 6.3 - Object Literals
 * Author: Nathaniel Liebhart
 * Date: June 30th, 2019
 * Description: Object Literals
 */

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 6.3') + '\n');

// Init Object
const ticket = {
  id: 101,
  name: 'Support',
  requester: 'John Doe'
};

// Output
console.log(
  `{id: ${ticket.id}, name: ${ticket.name}, requester: ${ticket.requester}}`
);
