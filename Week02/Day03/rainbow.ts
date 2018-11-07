'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let colors = ['blue', 'green', 'yellow', 'orange', 'red'];

function rainbow(x, y) {
  ctx.fillStyle = y;
  ctx.fillRect(canvas.width / 2 - x / 2, canvas.height / 2 - x / 2, x, x);
}

for (let i = 4; i > 0; i--) {
  rainbow((canvas.width / 8) * i, colors[i - 1]);
}