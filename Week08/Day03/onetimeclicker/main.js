  

/* 

1. solution

const listener = () => {
  console.log(Date.now());
  button.removeEventListener('click', listener);
}
button.addEventListener('click', listener);
*/

button.addEventListener('click', () => {
  console.log((new Date).toLocaleTimeString());
  button.disabled = true;
});

  /*
      Create an event listener which logs the current timestamp to the console once the button is clicked.
      When the button is clicked for the second or any other times no event listener should be called.
      Try to solve this two different ways.
      hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
  */


