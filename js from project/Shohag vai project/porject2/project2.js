const cart_items = document.getElementById('cart_items');

cart_items.innerText = localStorage.getItem('totalBook') || 0;

document.querySelector('#box').addEventListener('click',function(){
  window.open('Project2_html2.html','_blank');
});

const nam = document.querySelectorAll('.card_design');

nam.forEach(function(btn){
  btn.addEventListener('click',function(event){
    event.preventDefault();

    const bookName = this.dataset.bookName;
    let list = JSON.parse(localStorage.getItem('list')) || [];

    if(!list.includes(bookName)){
      list.push(bookName);
      localStorage.setItem('list', JSON.stringify(list));

      // 🔥 totalBook update (instant cart update)
      let totalBook = JSON.parse(localStorage.getItem('totalBook')) || 0;
      totalBook++;
      localStorage.setItem('totalBook', totalBook);
      cart_items.innerText = totalBook;
    }
  });
});

window.addEventListener("storage", function(e) {
  if (e.key === "totalBook") {
    cart_items.innerText = e.newValue;
  }
});
