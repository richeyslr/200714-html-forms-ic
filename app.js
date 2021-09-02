const form = document.querySelector("form");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pword = document.getElementById('pword');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const city = document.getElementById('city');
const field = document.querySelectorAll('input');
const button = document.querySelector('button');

form.addEventListener('submit', handleFormSubmit = (evt) => {
  evt.preventDefault();
  let list = document.createElement('ul');
  for (let i = 0; i < field.length - 1; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = `${field[i].value}`;
    list.appendChild(listItem);
  }
  let lastItem = document.createElement('li');
  let dropdown = document.getElementById('city');
  lastItem.innerText = dropdown.value;
  list.appendChild(lastItem);
  document.body.appendChild(list);
})