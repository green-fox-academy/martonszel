/*
      Write the image's url to the console.
      Replace the image with a picture of your favorite animal.
      Make the link point to the Green Fox Academy website.
      Disable the second button.
      Replace its text with 'Don't click me!'.
 */

let imgTag = document.querySelector('img');
    console.log(imgTag)
    imgTag.setAttribute('src', 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/Mary-McGowan-Caught-in-the-Act-comedy-wildlife-awards.jpg')
    imgTag.setAttribute('style', 'width:200px;height:150px')
    document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/')
    let secondButton = document.querySelector('.this-one');
    secondButton.disabled = true;
    secondButton.innerText = `Don't click on me, you fuckin idiot!`
    