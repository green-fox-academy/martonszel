const king = document.querySelector('.asteroid');
console.log(king.innerHTML);

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => { console.log(e.innerHTML)})

const conceitedKing = document.querySelector('.container')
const h = conceitedKing.querySelectorAll('div')
h.forEach(e => { alert(e.textContent)})

let noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => { console.log(e.innerHTML)})