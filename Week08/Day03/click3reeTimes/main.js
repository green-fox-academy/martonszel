

document.addEventListener("DOMContentLoaded",() => {
  let load = event.timeStamp;
  let button = document.querySelector('button');
  let p = document.querySelector('p');
  let counter = 0;
  button.addEventListener('click', (e) => {
    let clickMoment = e.timeStamp
    counter++
    if (counter === 3 && (clickMoment - load) > 5000) {
      p.innerText = `${Math.floor((clickMoment - load) / 1000)} seconds elapsed and clicked ${counter} times`;
    }})})