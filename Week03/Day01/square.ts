'use strict';
export{};


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have    as many lines as lineCount is

let star: any = '';
let lineCount: number = 5;
for(let i=0; i<=lineCount; i++){
    for(let j=0; j<= lineCount; j++){
        if(i ===0 || j===0 || i === lineCount || j === lineCount){
            star += '%';  
        }else {
            star+= ' ';
        }
    }
    star += '\n';
}
console.log(star);
