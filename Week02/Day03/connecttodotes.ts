'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let list = [[10, 10], [290, 10], [290, 290], [10, 290]];
let list2 = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(dots) {
    ctx.strokeStyle = "green";
  for (let i= 0; i < dots.length; i++) {
    if (i < dots.length - 1) {
      ctx.moveTo(dots[i][0], dots[i][1]);
      ctx.lineTo(dots[i + 1][0], dots[i + 1][1]);
    } else {
      ctx.moveTo(dots[i][0], dots[i][1]);
      ctx.lineTo(dots[0][0], dots[0][1]);
      ctx.stroke();
    }
  }
}
connectDots(list);
connectDots(list2);