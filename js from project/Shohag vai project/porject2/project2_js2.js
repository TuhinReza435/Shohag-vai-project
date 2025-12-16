
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
let index=1;
card.forEach(element => {

         const main_div = document.createElement('div');
         main_div.className='cart_item';
         main_div.dataset.id=index;
         index++;
         const sub_div1 = document.createElement('span');
         sub_div1.className='item_name';
         sub_div1.innerHTML=element;
         main_div.append(sub_div1);

         const item_control = document.createElement('div');
         item_control.className='item_controls';
         const btn =document.createElement('button');
         btn.className='qty_btn decrement';
         btn.innerHTML='<';
         item_control.appendChild(btn);

         const item_qty = document.createElement('span');
         item_qty.className='item_qty';
         item_qty.innerHTML='10';
         item_control.appendChild(item_qty);

         const item_decrement = document.createElement('button');
         item_decrement.className='qty_btn increment';
         item_decrement.innerHTML='>';
         item_control.appendChild(item_decrement);


         const remove = document.createElement('button');
         remove.className='remove_btn';
         remove.innerHTML="Remove";
         item_control.appendChild(remove);
         main_div.appendChild(item_control);



        const outer_div =  document.getElementById('this_main_box');
        outer_div.appendChild(main_div);
});

const removeELement =  document.querySelectorAll('.remove_btn');

removeELement.forEach(function(btn){
      btn.addEventListener('click', function () {
               const cartName=this.closest('.cart_item');
               const itemName = cartName.querySelector('.item_name').innerText;
                
               let list =JSON.parse(localStorage.getItem('list'))||[];
               list =list.filter(item=>item!=itemName);
               localStorage.setItem('list',JSON.stringify(list));
               cartName.remove();

      });
});


const decrement = document.querySelectorAll('.decrement');
decrement.forEach(function(value){
      
            value.addEventListener('click',function(){
                   const cart_item = this.closest('.cart_item');
                   const qty=cart_item.querySelector('.item_qty');
                   let value = parseInt(qty.textContent);
                   if(value>0){
                        value--;
                   }
                   qty.textContent=value;
            });
});


const increment = document.querySelectorAll('.increment');
increment.forEach(function(value){
    value.addEventListener('click',function(){
          const cart_item = this.closest('.cart_item');
          const qty=cart_item.querySelector('.item_qty');
          let value =  parseInt(qty.textContent);
          if(value<=15){
            value++;
          }
          qty.textContent=value;
    });
});




