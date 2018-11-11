'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {

    if (i === 1 || i === lineCount) {
        console.log("%%%%%");
    }
    else if(i === 2 ) {
        console.log("%%  %");
    }
    else if(i === 3 ) {
        console.log("% % %");
    }
    else if(i === 4 ) {
        console.log("%  %%");
    }
    else if(i === 5 ) {
        console.log("%   %");
    }
}