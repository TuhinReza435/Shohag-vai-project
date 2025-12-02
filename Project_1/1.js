function display()
{
   const dis=document.querySelector('.form');
   dis.style.display='flex';
}
let arr=[];
// arr.push("First Name ");
// arr.push("Last Name ");
// arr.push("Age ");

function output(event){
     event.preventDefault();
     const form=document.getElementById('form_element');
     const formData = new FormData(form);
     let list='';
     for(let [name,value] of formData.entries()){
       // list+=`${name} : ${value}<br>`;
        arr.push({value:value});
     }
     for(let i=0;i<arr.length;i++){
        if((i+1)%3==0){
            list+=`${arr[i].value}   <br>`;
        }else{
            list+=`${arr[i].value}     `;
        }
     }
     list+='<br>';
     let val=document.getElementById('output');
     val.innerHTML=list;
     document.querySelector('.form').style.display='none';
}
