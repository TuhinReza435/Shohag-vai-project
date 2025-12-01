function submitForm(){
     //event.preventDefault(); 
const name=document.getElementsByName('name');
    for(let x of name){
        console.log(x.value);
    }
}

function action(){
    document.getElementById('modal').classList.toggle('active');
}


