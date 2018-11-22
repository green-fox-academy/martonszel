'use strict';

export function anagram (stringOne:string,  stringTwo: string ): boolean {
  return stringOne.toLowerCase().split('').sort().join('') === stringTwo.toLowerCase().split('').sort().join('')
}

console.log(anagram("elvis","lives"));
console.log(anagram("kaja","lives"));


