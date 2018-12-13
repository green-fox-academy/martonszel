const pwd = document.querySelector('#Password');
const eye = document.querySelector('#eye');

function togglePress() {

  eye.classList.toggle('active');
  (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
}

eye.addEventListener('click',togglePress);
