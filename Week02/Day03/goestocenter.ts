'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.s

function drawing (x,y){

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

for ( let i=0 ; i<=30; i++){
    drawing(i * 20,0 );
    drawing(i * 20,400 );
    
    for ( let j=0 ; j<=20; j++){
        drawing(0, j * 20 );
        drawing(600,j * 20 )
}

}
}