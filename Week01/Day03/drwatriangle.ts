'use strict';
export { }

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is



let lineCount: number = 4;

for (let i = '*'; i.length <= lineCount; i += '*') {
  console.log(i);
}

