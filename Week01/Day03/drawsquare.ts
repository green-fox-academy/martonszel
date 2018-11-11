'use strict';
export { };


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;

for (let i: number = 1; i <= lineCount; i++) {

    if (i === 1 || i === lineCount) {
        console.log("%%%%%%");
    }
    else {
        console.log("%    %");
    }
}