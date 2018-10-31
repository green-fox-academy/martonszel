'use strict';
export{}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let any: string = '';

for(let y = 1; y <= lineCount; y++){
for(let x = 0; x < y; x++){
any = any + '*';
}
console.log(any)
any = '';
}
