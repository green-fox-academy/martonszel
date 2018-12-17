/*
Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds 
and it should show a text under the button: 2 seconds ellapsed
*/
    
document.querySelector('button').addEventListener('click', () =>
setTimeout(() => {
  document.querySelector('h1').textContent = " III seconds eltelt" 
}, 3000)
);

