'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function draw(x, y, w, h) {
    ctx.fillRect(x, y, w, h);
}

for (let i = 0; i < 5; i++){
    ctx.fillStyle = `rgb(0, 0, ${255  * i}`;
    draw(i + 100, (i * 50) + 20, i * 10, i * 10);
}
