'use strict';

const mapWith = (array, callback) => {
  let output = [];
   array.map(elem => {
    return callback(elem)
  })

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (string) => {
  let newstr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newstr += string[i]
    }
  }
  return newstr;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']



const useCallback = (callback) => {
  callback('Chewing out a rhythm on my bubble gum');
  callback('The sun is out and I want some');
  callback('It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach');
};

const printSentence = (sentence) => {
 console.log(sentence);
};

useCallback(printSentence);