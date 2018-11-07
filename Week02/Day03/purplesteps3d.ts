
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function steps3d (x,y, z){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, z, z);
}

let position = [14, 14]
for (let i = 1; i <= 6; i++){
    steps3d (position[0], position[1], 14 * i);
    position[0] += 14 * i;
    position[1] += 14 * i;
}
