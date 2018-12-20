
const URL = '/books';
const tablebody = document.querySelector('table');

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

  sendHTTPRequest(URL, 'GET', (response) => {
      console.log(response);

      response.forEach(book => {
        let newTabRow = document.createElement('tr');
        tablebody.appendChild(newTabRow);
        let newTitle = document.createElement('td');
        newTabRow.appendChild(newTitle);
        newTitle.innerText = book.book_name;
        let newAuthor = document.createElement('td');
        newTabRow.appendChild(newAuthor);
        newAuthor.innerText = book.aut_name;
        let newPub = document.createElement('td');
        newTabRow.appendChild(newPub);
        newPub.innerText = book.pub_name;
        let newCat = document.createElement('td');
        newTabRow.appendChild(newCat);
        newCat.innerText = book.cate_descrip;
        let newPrice = document.createElement('td');
        newTabRow.appendChild(newPrice);
        newPrice.innerText = book.book_price;
      });
    })

  