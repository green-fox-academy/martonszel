'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven (numbers) {
for ( let i=0 ; i< numbers.length ; i++){
    if (numbers === 7 ) {
    return "Hoorray"
}
else {
    return "Noooo"}
}
}
console.log(containsSeven(numbers));

export = containsSeven;