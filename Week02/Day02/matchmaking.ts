'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let result = [] ;
let i, l = Math.min(girls.length, boys.length);

result = [],
i, l = Math.min(girls.length, boys.length);

for (i = 0; i < l; i++) {
result.push(girls[i], boys[i]);
}
result.push(...girls.slice(l), ...boys.slice(l));

console.log(result);

