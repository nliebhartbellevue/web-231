/**
 * Title: Assignment 5.4 - Filtering/Reducing Complex Data Structures
 * Author: Nathaniel Liebhart
 * Date: June 30th, 2019
 * Description: Filtering/Reducing Complex Data Structures
 */

/*
  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require('../liebhart-header');
console.log(header.display('Nathaniel', 'Liebhart', 'Assignment 5.4') + '\n');

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

const composerByRating = composers.map(function(composer) {
  return { rating: composer.rating, lastName: composer.lastName };
});

const composerByGenre = composers.map(function(composer) {
  return { genre: composer.genre, lastName: composer.lastName };
});

console.log('-- COMPOSER BY RATING --');
const listByRating = composerByRating.forEach(function(composer) {
  console.log('Rating: ' + composer.rating);
  console.log('Composer: ' + composer.lastName + '\n');
});

console.log('\n-- COMPOSER BY GENRE --');
const listByGenre = composerByGenre.forEach(function(composer) {
  console.log('Genre: ' + composer.genre);
  console.log('Composer: ' + composer.lastName + '\n');
});
