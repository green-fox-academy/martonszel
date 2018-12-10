'use strict'



export function countLetters(str: string): Object {
  let dictionary = {};

  str.toLocaleLowerCase().split('').sort().forEach((value: string) =>{
    if (value in dictionary) {
      dictionary[value] += 1;
    } else if (value !== ' '){ 
      dictionary[value] = 1;
    }
  });

  return dictionary;
}

console.log(countLetters('As dfghasdasdasas'));