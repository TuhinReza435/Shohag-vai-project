// const nam = document.querySelectorAll('.card_design');

//const { jsx } = require("react/jsx-runtime");

// document.querySelector("#box").addEventListener('click',function(){
//     window.open('Project2_html2.html','_blank')
// });

// nam.forEach(function (btn) {
//   btn.addEventListener('click', function (event) {
//     event.preventDefault();
//     const bookName=this.dataset.bookName;
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(bookName);
//     localStorage.setItem('cart', JSON.stringify(cart));
//   });
// });

document.querySelector('#box').addEventListener('click',function(){
  window.open('Project2_html2.html','_blank');
});
const nam = document.querySelectorAll('.card_design');
nam.forEach(function(btn){
  btn.addEventListener('click',function(event){
    event.preventDefault();
    const bookName=this.dataset.bookName;
    let list=JSON.parse(localStorage.getItem('list')) || [];
    
    
    if(!list.includes(bookName)){
      list.push(bookName);
      console.log(list);
    }
    localStorage.setItem('list',JSON.stringify(list));
    console.log(list);
  });
});



