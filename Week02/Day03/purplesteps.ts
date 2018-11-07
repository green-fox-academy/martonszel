'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function steps(x, y) {
    ctx.fillStyle = 'purple' ;
    ctx.fillRect(x, y, 20, 20);
    
  }
  
  for (let i = 1; i <= 15; i++) {
    steps(i * 20, i * 20);
  }
