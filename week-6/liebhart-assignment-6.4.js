/**
 * Title: Assignment 6.4 - Nested Object Literals
 * Author: Nathaniel Liebhart
 * Date: June 30th, 2019
 * Description: Nested Object Literals
 */

/*
  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Assignment 6.4') + '\n');

// Init Object
const ticket = {
  id: 105,
  name: 'Support',
  dateCreated: new Date().toLocaleDateString('en-US'),
  person: {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Programmer I'
  }
};

// Output
console.log(
  `Ticket ${ticket.id} was created on ${
    ticket.dateCreated
  } and assigned to employee  ${ticket.person.firstName} ${
    ticket.person.lastName
  } (${ticket.person.jobTitle}).`
);
