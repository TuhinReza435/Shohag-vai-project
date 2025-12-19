
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
    const cart_items =  document.getElementById('cart_items');
    cart_items.innerHTML=list.length;
  });
});



window.addEventListener("storage", function(e) {
    if (e.key === "totalBook") {
        cart_items.innerText = e.newValue;
    }
});
