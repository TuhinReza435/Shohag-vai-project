let add=document.getElementById('info');
let back=document.getElementById('Back');
let frm = document.getElementsByClassName('form')[0];
back.addEventListener('click',function(event){
 //  table.style.display='none';
   add.style.display='block';
   frm.style.display='none';
   event.preventDefault();
});
let submit=document.getElementById('btn');
 add.addEventListener('click',function(){
     frm.style.display='block';
     table.style.display='block';
     
 });

submit.addEventListener('click',function(event){
      event.preventDefault();
      worik();
      frm.style.display='none';
});
function worik(){
      event.preventDefault();
     console.log('mouse Clicked');
     let name = document.getElementById('name').value;
     let email=document.getElementById('email').value;
     let address= document.getElementById('address').value;
     let table=document.getElementById('table');
     if(name==='' || email==='' || address===''){
        alert("Please fill the information");
     //   return ;
     }
      table.innerHTML+=`
        <tr>
             <td>${name}</td>
             <td>${email}</td>
             <td>${address}</td>
             
        </tr>
      `;
      frm.reset();
     frm.style.display='block';
     table.style.display='block'
}
