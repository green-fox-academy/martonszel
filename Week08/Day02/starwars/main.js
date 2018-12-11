const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}

const URL = 'https://swapi.co/api/films'
sendHTTPRequest(URL, 'GET', (response) => {
console.log(response);

for (let i = 0; i < response.results.length; i++) {
  let title = response.results[i].title;
  
  const titles = document.querySelector('h3');
  const text = document.createElement('p1');
  titles.appendChild(text);
  text.textContent = title;
}


})