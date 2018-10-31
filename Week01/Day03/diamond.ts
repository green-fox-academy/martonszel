'use strict';
export { };

let lineCount: number = 7;
let space: string = ' ';
let star: string = '*'

for (let i= 0; i < lineCount; i++){
    if( i < lineCount/2){
        let starCount: number = 1 + i * 2;
        let spaceCount: number = (lineCount - starCount) / 2 ;
        console.log(space.repeat(spaceCount) + star.repeat(starCount));
    }else{
        let starCount: number = (lineCount - (i + 1)) * 2 + 1;
        let spaceCount: number = (lineCount - starCount) / 2;
        console.log(space.repeat(spaceCount) + star.repeat(starCount));
    }
}