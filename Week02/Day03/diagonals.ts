'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.


for (let i = 0; i < 200; i += 20) {
    strokeLine(ctx, i);
}

function strokeLine(ctx, i) {

if (i===0){
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, i);
    ctx.lineTo(600, 400);
    ctx.stroke();
}
else {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(0, i);
    ctx.lineTo(600, 400);
    ctx.stroke();}
}
