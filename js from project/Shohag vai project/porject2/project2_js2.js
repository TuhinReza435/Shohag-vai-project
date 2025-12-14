
// const cart = JSON.parse(localStorage.getItem('cart')) || [];
// const container = document.getElementById('First');



//const { createElement } = require("react");

// cart.forEach(book => {
//   let element = document.createElement('div');
//   element.classList.add('element');
//   element.innerText = book;
//   container.appendChild(element);
// });
const containar = document.querySelector('#First');
const card = JSON.parse(localStorage.getItem('list')) || [];

card.forEach(element => {

  // main box
  const main_div = document.createElement('div');
  main_div.className = 'per_box';
  containar.appendChild(main_div);

  // book name
  const div = document.createElement('div');
  div.className = 'Card_item';
  div.innerText = element;
  main_div.appendChild(div);

  // input wrapper
  const input_box = document.createElement('div');
  input_box.className = 'Myinput';

  const input = document.createElement('input');
  input.type = 'number';
  input.min = 1;
  input.max = 15;
  input.value = 1;

  input_box.appendChild(input);
  main_div.appendChild(input_box);

  // remove button
  const remove_box=document.createElement('div');
  remove_box.className='remove_box';

  const button = document.createElement('button');
  button.className = 'button';
  button.innerText = 'Remove';
  remove_box.appendChild(button);
  main_div.appendChild(remove_box);
});
