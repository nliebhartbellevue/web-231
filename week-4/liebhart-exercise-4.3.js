/**
 * Title: Exercise 4.3 - Filtering
 * Author: Nathaniel Liebhart
 * Date: June 23rd, 2019
 * Description: Filtering an array
 */

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns the header
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 4.2') + '\n');

// Create the vehicles array
const vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

// function
getValue = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      console.log(arr[i]);
    }
  }
};

// output
console.log('-- DISPLAYING ARRAY ITEMS --');
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

console.log('\n' + '-- SELECTED VALUE --');
getValue(vehicles, 'Motorcycle');
console.log('\n' + '-- SELECTED VALUE --');
getValue(vehicles, 'Bus');
