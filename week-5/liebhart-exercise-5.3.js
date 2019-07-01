/**
 * Title: Exercise 5.3 - Object Collections
 * Author: Nathaniel Liebhart
 * Date: June 30th, 2019
 * Description: Object Collections
 */

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Exercise 5.2') + '\n');

const composers = [
  {
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8
  },
  {
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10
  },
  {
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9
  },
  {
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6
  },
  {
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5
  }
];

console.log('-- COMPOSERS --');

composers.forEach(composer =>
  console.log(
    'Last Name: ' +
      composer.lastName +
      ', Genre: ' +
      composer.genre +
      ', Rating: ' +
      composer.rating
  )
);
