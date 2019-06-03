/*
  Title: Exercise 1.5
  Author: Nathaniel D. Liebhart
  Date: June 2, 2019
  Description: This program is used to demonstrate variable assignments
*/

// Declare variables and assign values
var firstName = 'John';
var lastName = 'Smith';
var address = '1020 S Main St';
var pay = '$11.00';
var todaysDate = new Date(2019, 5).toLocaleDateString();

// Declare variable to format
var itemList = '\nEmployee: ';
var person = '\nName: ' + firstName + ' ' + lastName;
var address = '\nAddress: ' + address;
var pay = '\nPay Rate: ' + pay + '\nHire Date: ' + todaysDate;

console.log(itemList + person + address + pay);

// Declare variables and assign values
var firstName = 'John';
var lastName = 'Doe';
var address = '2102 W 2nd St';
var pay = '$15.00';
var todaysDate = new Date(2012, 0).toLocaleDateString();

// Declare variable to format
var itemList = '\nEmployee: ';
var person = '\nName: ' + firstName + ' ' + lastName;
var address = '\nAddress: ' + address;
var pay = '\nPay Rate: ' + pay + '\nHire Date: ' + todaysDate;

console.log(itemList + person + address + pay);

// Declare variables and assign values
var firstName = 'Jack';
var lastName = 'Mark';
var address = '111 N Pine Rd';
var pay = '$13.50';
var todaysDate = new Date(2005, 0, 14).toLocaleDateString();

// Declare variable to format
var itemList = '\nEmployee: ';
var person = '\nName: ' + firstName + ' ' + lastName;
var address = '\nAddress: ' + address;
var pay = '\nPay Rate: ' + pay + '\nHire Date: ' + todaysDate;

console.log(itemList + person + address + pay);
