const xhr = new XMLHttpRequest();

const API_BASE_URL = "http://api.giphy.com/v1/gifs/search?q=fuck+you&api_key=Cz9w6pJij1F5mBAHi9O7YaMOfbgUkQg7&limit=16"
const apiKey = "Cz9w6pJij1F5mBAHi9O7YaMOfbgUkQg7";

xhr.open('GET', `${API_BASE_URL}`, true);
xhr.send();
xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response)
    
    for ( let i = 0; i < response.data.length; i++){
      let giphystilluurl = response.data[i].images.original_still.url
      let giflist = document.querySelector('.gifs');
      let gifmove = response.data[i].images.original.url;
      let gif = document.createElement('img')
      gif.setAttribute('src', giphystilluurl)
      giflist.appendChild(gif);
      gif.onclick = () => {
        gif.setAttribute('src', gifmove)
      }
    }
  }
  }





