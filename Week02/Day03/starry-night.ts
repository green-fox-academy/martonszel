'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, 600, 400);

for (var i=0; i<300; i++) { 
    var xCo = Math.floor(Math.random() * 600); 
    var yCo = Math.floor(Math.random() * 400);
    ctx.fillRect(xCo,yCo,1,1) 
    ctx.fillStyle = `rgb(${105+i},${105+i},${105+i})`;

}


