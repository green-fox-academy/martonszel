/*
  Here is an image inspector, but the buttons are not implemented yet, that will
  be your task!
   - the nav buttons (up, down, left, right) move the background by 10px
   - the zoom buttons increase/decrease the image by 20%
   - attach only two event listeners to the nav element
     - one for navigation
     - one for zooming
*/

'use strict';

let navTag = document.querySelector('nav');
let image = document.querySelector('.img-inspector');

let origiSize = 150;
let origiX = 0;
let origiY = 0;

navTag.addEventListener('click', (event) => {
  if (event.target.getAttribute('data-action') == 'move') {
    switch (event.target.getAttribute('data-direction')) {
      case 'up':
        image.style.backgroundPositionY = `${origiY - 80}px`;
        origiY -= 20;
        break;
      case 'down':
        image.style.backgroundPositionY = `${origiY + 20}px`;
        origiY += 20;
        break;
      case 'left':
        image.style.backgroundPositionX = `${origiX - 20}px`;
        origiX -= 20;
        break;
      case 'right':
        image.style.backgroundPositionX = `${origiX + 20}px`;
        origiX += 20;
        break;
    }
  } else if (event.target.getAttribute('data-action') == 'zoom') {
    switch (event.target.getAttribute('data-direction')) {
      case 'in':
        image.style.backgroundSize = `${origiSize + 20}%`;
        origiSize += 20;
        break;
      case 'out':
        image.style.backgroundSize = `${origiSize - 20}%`;
        origiSize -= 20;
        break;
    }
  }
})

