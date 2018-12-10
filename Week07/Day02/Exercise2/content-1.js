 // 1)  Fill every paragraph with the last one's content.
 // 2)  Do the same again, but you should keep the cat strong.

/*
let animals = document.querySelector('.animals');
let body = document.querySelectorAll('p');
body.forEach(e => { console.log( e.innerHTML = animals.innerHTML)})
*/

let body = document.querySelectorAll('p');
body.forEach(e => { console.log(e.innerHTML = " goat rabbit <strong>cat</strong> dog ")})
