const createcandyBtn = document.querySelector('.create-candies');
const candyNum = document.querySelector('.candies');
let value = '';


const addCandy = () => {
  if (value <= 10000) {
    value++;
    candyNum.innerText = value;
  } else {
    candyNum.innerText = `You reached the target of ! `;
  }
}

createcandyBtn.addEventListener('click', addCandy)
