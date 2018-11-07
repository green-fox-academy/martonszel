'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

// Red rectangle
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(500, 100);
ctx.lineTo(100, 100);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 100);
ctx.lineTo(500, 200);
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(100, 200);
ctx.stroke();






