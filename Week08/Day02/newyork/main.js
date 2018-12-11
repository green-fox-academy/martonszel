
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

const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&moon&landing&api_key=4a2644ac81444a3b9985936b4fb16121&limit=15'
sendHTTPRequest(URL, 'GET', (response) => {
  console.log(response);

  for (let i = 0; i < response.response.docs.length; i++) {
    let headLine = response.response.docs[i].headline.main;
    let snippet = response.response.docs[i].snippet;
    let publicDate = response.response.docs[i].pub_date;

    const mybody = document.querySelector('body');
    let actualArticle = document.createElement('ul');
    let actualHeadline = document.createElement('li');
    let actualSnippet = document.createElement('li');
    let actualPubDate = document.createElement('li');

    if(typeof publicDate !== "undefined") {
      actualHeadline.textContent = headLine + '\r\n' ;
      actualSnippet.textContent = snippet + '\r\n';
      actualPubDate.textContent = publicDate.slice(0,10);
    }else {
      actualHeadline.textContent = headLine + '\r\n' ;
      actualSnippet.textContent = snippet + '\r\n';
      actualPubDate.textContent = 'Unknown publication date';
      }
      let link = document.createElement('a');
      link.setAttribute('href', response[i]);
      link.innerText = response.response.docs[i].headline.main;
      actualHeadline.appendChild(link);
      actualArticle.appendChild(actualHeadline);
      actualArticle.appendChild(actualSnippet);
      actualArticle.appendChild(actualPubDate);
      mybody.appendChild(actualArticle);
    } 

  // here you can manipulate the dom
})