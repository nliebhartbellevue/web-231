/**
 * Title: Exercise 7.2 - Constructor Functions
 * Author: Nathaniel Liebhart
 * Date: July 14yh, 2019
 * Description: Constructor Functions
 */

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a formatted string
 */

const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 7.2') + '\n');

/*
    Expected output:

    FirstName LastName
    Exercise 7.2
    Today's Date

    1 Thomas Edison Software Engineer
    2 Benjamin Franklin Programmer
    3 Nikola Tesla Project Manager
    4 Charles Babbage Product Manager
    5 Alexander Bell Business Analyst
  */

// Constructor function
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Array
let employees = [
  // Employee objects
  new Employee(1, 'Thomas', 'Edison', 'Software Engineer'),
  new Employee(2, 'Benjamin', 'Franklin', 'Programmer'),
  new Employee(3, 'Nikola', 'Tesla', 'Project Manager'),
  new Employee(4, 'Charles', 'Babbage', 'Product Manager'),
  new Employee(5, 'Alexander', 'Bell', 'Business Analyst')
];

// Print function
function printEmp(employees) {
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    console.log(
      `${employee.id} ${employee.firstName} ${employee.lastName} ${
        employee.title
      }`
    );
  }
}

// Execute print function
printEmp(employees);
