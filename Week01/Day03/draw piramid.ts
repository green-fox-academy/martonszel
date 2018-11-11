'use strict';
export { };
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function pyramid(lines: number): void {

  let lineCount: number = lines;

  for (let i: number = 0; i < lineCount; i++) {
    let str = '';
    for (let j: number = 1; j < lineCount - i; j++) {
      str += ' ';
    }
    for (let k: number = 1; k <= 2 * i + 1; k++) {
      str += '*';
    }
    console.log(str);
  }
}
pyramid(4);
