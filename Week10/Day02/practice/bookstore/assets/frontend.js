const xhr = new XMLHttpRequest();
xhr.open('GET', '/author');
xhr.onload = () => {
  if (xhr.status === 200) {
    const response = (JSON.parse(xhr.responseText));
    authorTable(response);
  }
}
xhr.send();
const tableBody = document.querySelector('tbody');


const authorTable = (data) => {
  data.forEach(e => {
    const tr = document.createElement('tr');
    const tdID = document.createElement('td');
    const tdNAME = document.createElement('td');
    const tdCOUNTRY = document.createElement('td');
    const tdHOMECITY = document.createElement('td');
    const button = document.createElement('button');

    tdID.textContent = e.aut_id;
    tdNAME.textContent = e.aut_name;
    tdCOUNTRY.textContent = e.country;
    tdHOMECITY.textContent = e.home_city;
    button.textContent = 'Delete';

    tr.appendChild(tdID);
    tr.appendChild(tdNAME);
    tr.appendChild(tdCOUNTRY);
    tr.appendChild(tdHOMECITY);
    tr.appendChild(button);
    tableBody.appendChild(tr);
    button.setAttribute('id', e.aut_id)
    button.setAttribute('class', 'button')
  });
  const button = document.querySelector('.button')
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList = '.button') {
      const deleteXHR = new XMLHttpRequest();
      deleteXHR.open("DELETE", '/author');
      deleteXHR.setRequestHeader('Content-Type', 'application/json');
      deleteXHR.send(JSON.stringify({
        aut_id: event.target.id
      }));

      deleteXHR.onload = () => {
        console.log(JSON.parse(deleteXHR.responseText))
      }
      setTimeout(() => { location.reload(); }, 1500);
    }
  })

}

const form = document.querySelector('.post');
const { aut_id, aut_name, country, home_city } = form.elements;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/author');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    aut_id: aut_id.value,
    aut_name: aut_name.value,
    country: country.value,
    home_city: home_city.value
  }));
  postXHR.onload = () => {
    console.log(JSON.parse(postXHR.responseText))
    setTimeout(() => { location.reload(); }, 1500);
  }
})


const deleteForm = document.querySelector('.delete');
deleteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const deleteXHR = new XMLHttpRequest();
  deleteXHR.open('DELETE', '/author');
  deleteXHR.setRequestHeader('Content-Type', 'application/json');
  deleteXHR.send(JSON.stringify({
    aut_id: deleteForm.elements.aut_id.value
  }));
  deleteXHR.onload = () => {
    console.log(JSON.parse(deleteXHR.responseText));
  }
  setTimeout(() => { location.reload(); }, 1500);
})