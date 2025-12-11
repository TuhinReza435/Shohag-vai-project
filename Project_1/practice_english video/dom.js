// function validateFrom(){
//     const form=document.forms['myForm'];
//     const val=form['fname'].value;
//     console.log(val);
//     if(val==''){
//         alert("You must input a name");
//         return false;
//     }
//     return true;
   
// }

// let output=document.getElementById('output');
// function submit(){
//     let rates = document.getElementsByName('rate');
//     console.log(rates);
//     for(let value  of rates){
//         if(value.checked){
//             output.innerHTML= `Clicked value is ${value.value}`;
//         }
//     }
// }

// let menu = document.getElementById('menu');
// let child=menu.children;
// console.log(child);


// for(let i=0;i<child.length;i++){
//     console.log(child[i].innerHTML);
// }


const menu = document.getElementById("menu");

for (let li of menu.children) {
    console.log(li.innerText);
}
