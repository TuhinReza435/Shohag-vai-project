const containar = document.querySelector('#First');
const card = JSON.parse(localStorage.getItem('list')) || [];
//console.log(card);
let totalBook = card.length;
//console.log(totalBook);
localStorage.setItem('totalBook', totalBook);
card.forEach(function(bookName,index){
      const BookList = document.createElement("div");
      BookList.className='Object_list';

      BookList.innerHTML = `<div class="Book_name" id="${index}">${bookName}</div>
        <div class="control_element">
           <div class="decrement" onclick="decrement(this)"><</div>
           <div class="value">1</div>
           <div class="incriment" onclick="incriment(this)">></div>
           <button class="remove" onclick="remove(this,${index})">remove</button> 
      </div> `;
      const main_div = document.getElementsByClassName('.this_main_box');
      document.getElementById("this_main_box").appendChild(BookList);
});

function remove(btn,index){
      let  totalBook = JSON.parse(localStorage.getItem('totalBook'));
      let cart_items = btn.closest('.control_element');
      let remove_items=cart_items.querySelector('.value');
      
    
      let number =parseInt(remove_items.innerHTML);
      totalBook-=number;
      localStorage.setItem('totalBook',totalBook);
      console.log(totalBook);
      // console.log(`The index number is ${index}`);
      btn.parentNode.parentNode.remove();
      card.splice(index, 1);
      localStorage.setItem('list', JSON.stringify(card));  
     
      
}
function incriment(current_chile){
      let  totalBook = JSON.parse(localStorage.getItem('totalBook'));
      let child = (current_chile.previousElementSibling);
      let number =parseInt(child.innerHTML);
      if(number<10){
            number++;
            child.innerHTML=number;
      }
      totalBook++;
      localStorage.setItem('totalBook',totalBook);
      console.log(totalBook);   
}
function decrement(current_chile){
      let  totalBook = JSON.parse(localStorage.getItem('totalBook'));
      let child = (current_chile.nextElementSibling);
      let number =parseInt(child.innerHTML);
      console.log(number);
      if(number>1){
           number--;
           totalBook--;
           child.innerHTML=number;
      }else{
            remove(current_chile);
            totalBook--;
      }
      
      
      localStorage.setItem('totalBook',totalBook);
      console.log(totalBook); 
}