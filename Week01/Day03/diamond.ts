'use strict';
export { };

function diamond(lines: number):void {

    let lineCount: number = lines;
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
}
diamond(7);



