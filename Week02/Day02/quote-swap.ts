'use strict';
export {};

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(words) {
  let newArr = words;
  let plus1 = 'cannot' ;
  let plus2 = " do " ;
  newArr[words.indexOf('cannot')] = plus2; 
  newArr[words.indexOf('do')] = plus1;
  return words.join(" ");
}

console.log(quoteSwap(words));

