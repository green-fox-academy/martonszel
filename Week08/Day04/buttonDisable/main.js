'use strict'
window.onload = () => {
  let submitBtn = document.querySelector("button[type=submit]");
  let TigerButton = document.querySelector("button[type=button]");
  let favpetDiv = document.querySelector("#favpetdiv");
  let catfactsub = document.querySelector("#catfactsub");


  favpetDiv.addEventListener('change', (e) => {
    if (e.target.value !== 'goldfish') {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  })

  catfactsub.addEventListener('change', (e) => {
    if (e.target.value === 'yes') {
      TigerButton.disabled = false;
      alert(` you've successfully signed up for Tiger facts`)
    } else {
      TigerButton.disabled = true;
      alert(`added you to the cat facts list`)
    }
  })
}