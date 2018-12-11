const imageContainer = [
  {
    'url': 'pictures/1.jpg',
    'title': 'Pau Gasol',
    'description': 'NBA Finals 2010'
  },
  {
    'url': 'pictures/2.jpg',
    'title': 'Scotland',
    'description': 'Highland cow'
  },
  {
    'url': 'pictures/3.jpg',
    'title': 'NBA Finals 2010',
    'description': 'Lebron James'
  },
  {
    'url': 'pictures/4.jpg',
    'title': 'NBA Allstars 2000',
    'description': 'West team '
  },
  {
    'url': 'pictures/5.jpg',
    'title': 'NBA Allstars 2001',
    'description': 'Jordan & Kobe'
  },
  {
    'url': 'pictures/6.jpg',
    'title': 'NBA Finals 2009',
    'description': 'Kobe Bryant'
  },
  {
    'url': 'pictures/7.jpg',
    'title': 'NBA Finals 2016',
    'description': 'Golden State Warriors'
  },
  {
    'url': 'pictures/8.jpg',
    'title': 'Mountain stage',
    'description': 'Tour de France'
  },
  {
    'url': 'pictures/9.jpg',
    'title': 'Vinyl Collection',
    'description': 'Vinyl Collection'
  },
  {
    'url': 'pictures/10.jpg',
    'title': 'Kansas 2015',
    'description': 'American football'
  },

  {
    'url': 'pictures/11.jpg',
    'title': 'Mount Gamota 2011',
    'description': 'Hiking'
  },
  {
    'url': 'pictures/12.jpg',
    'title': 'Vinyl Collection#2',
    'description': 'Vinyl Collection#2'
  },
];

const thumb = document.querySelector('.thumbnails');

imageContainer.forEach((e,i) =>{
  const btn = document.createElement('button');
  btn.classList.add('imgbtn')
  const imgData = document.createElement('img');
  imgData.setAttribute('src',e.url);
  btn.appendChild(imgData);
  thumb.appendChild(btn);
})

/* Get Variables */

const thumbnails = document.querySelectorAll('.thumbnails img');

const buttons = document.querySelectorAll('.imgbtn');
console.log(buttons);
const left = document.querySelector('.leftarrow');
const right = document.querySelector('.rightarrow');

const mainimg = document.querySelector('.main-img');

const imgTitle = document.querySelector('.text h3');
const imgDesc = document.querySelector('.text p');


/* ADD FUNCTION */


let counter = 0;

function imgloader(){
  let imgsrc = thumbnails[counter].getAttribute('src');
  mainimg.setAttribute('src', imgsrc);

  imgTitle.textContent = imageContainer[counter].title;
  imgDesc.textContent = imageContainer[counter].description;
}

function arrowAdder(){
  buttons.forEach(e => {   
    e.classList.remove('arrow_box');
  })
  buttons[counter].classList.add('arrow_box')
}

right.onclick = () => {
  if (counter <= thumbnails.length - 1) {
    if (counter == thumbnails.length - 1) {
      counter = 0;
    } else
      counter++;
    arrowAdder();
    imgloader();
    
  }
}

left.onclick = () => {
  if (counter >= 0) {
    if (counter == 0) {
      counter = thumbnails.length - 1;
    } else
      counter--;
    arrowAdder();
    imgloader();

  }
}

buttons.forEach((e,i) =>{
  e.onclick = () => {
    counter = i;
    imgloader();
    arrowAdder();
  }
})