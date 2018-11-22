'use strict'

export function countLetters(testword: string): Object {
  let testwordArray: string[] = testword.toLowerCase().split('').sort();
  let dictionary: Object  = {};
  for (let i: number = 0; i < testwordArray.length; i++) {
    if (testwordArray[i] in dictionary) {
      dictionary[testwordArray[i]] ++;
    } else {
      dictionary[testwordArray[i]] = 1;
    }
  }
  return dictionary;
} 
console.log(countLetters('Elviss'))