'use strict';
 
 
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.rotate(20*Math.PI/125);

var hexRadius = 25;
var innerCircleRadius = hexRadius/2*Math.sqrt(3);
var TO_RADIANS = Math.PI/180;

function drawHex(x,y) {
    var r = hexRadius;
    ctx.beginPath();
    ctx.moveTo(x,y-r);
    for (var i = 0; i<=5; i++) {
         ctx.lineTo(x+Math.cos((i*60-90)*TO_RADIANS)*r,y+Math.sin((i*60-90)*TO_RADIANS)*r);
    }
    ctx.closePath();
    ctx.stroke();
}

drawHexCircle(300,100,3);

function drawHexCircle(x,y,circles) {
    var rc = innerCircleRadius;
    drawHex(300,100); //center
    
    for (var i = 1; i<=circles; i++) {
        for (var j = 0; j<6; j++) {
            var currentX = x+Math.cos((j*60)*TO_RADIANS)*rc*2*i;
            var currentY = y+Math.sin((j*60)*TO_RADIANS)*rc*2*i;
                drawHex(currentX,currentY);
            for (var k = 1; k<i; k++) {
                var newX = currentX + Math.cos((j*60+120)*TO_RADIANS)*rc*2*k;
                var newY = currentY + Math.sin((j*60+120)*TO_RADIANS)*rc*2*k;
                drawHex(newX,newY);
            }
        }
    }
    
}
 