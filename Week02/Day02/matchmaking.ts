'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]){
let matchList: string[] = [];

for (let i=0 ; i < girls.length; i++ ) {
    matchList.push(girls[i], boys[i])
}
    return matchList
}

console.log(makingMatches(girls, boys));



/*
let result = [] ;
let i, l = Math.min(girls.length, boys.length);

result = [],
i, l = Math.min(girls.length, boys.length);

for (i = 0; i < l; i++) {
result.push(girls[i], boys[i]);
}
result.push(...girls.slice(l), ...boys.slice(l));

console.log(result);
*/
