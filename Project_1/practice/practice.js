const baton = document.getElementById('btn');
console.log(baton.innerHTML);
function show(){
    const element=document.createElement("ol");
    element.className='orderlist';
    element.innerHTML=`
       <li>Tuhin</li>
       <li>Reza</li>
       <li>tuhinreza02042002@gmail.com</li>
    `;
    document.body.appendChild(element);
}

baton.addEventListener('click',show);