/**
 * Title: Assignment 4.4 - Predicates
 * Author: Nathaniel Liebhart
 * Date: June 23rd, 2019
 * Description: Arrays
 */

/*
  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns the header
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 4.2') + '\n');

// Create states array
const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

// function
getStates = (arr, str) => {
  let selState;

  // filter/sort the array and assign to sStates
  let sStates = arr
    .filter((state, i) => {
      return states.lastIndexOf(state) === i;
    })
    .sort((a, b) => {
      return a < b ? -1 : 1;
    });

  /**
   * loop through and log array elements
   * assign value to selected state
   */
  console.log('\n' + '-- ORIGINAL ARRAY --');
  for (let i = 0; i < states.length; i++) {
    const e = arr[i];
    // assign value to selected state
    if (e === str) {
      selState = e;
    }
    console.log(e);
  }

  // loop through and log sorted array
  console.log('\n' + '-- SORTED ARRAY --');
  for (let i = 0; i < states.length; i++) {
    const e = sStates[i];

    console.log(e);
  }

  // log selected state
  console.log('\n' + '-- SELECTED VALUE --' + '\n' + selState);
};

getStates(states, 'Iowa');
