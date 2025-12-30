let addBtn = document.getElementById('info');
let submitBtn = document.getElementById('btn');
let backBtn = document.getElementById('Back');
let table = document.getElementById('table');
let mainForm = document.querySelector('.form');


mainForm.style.display = 'none';


let container = document.createElement('div');
mainForm.parentNode.insertBefore(container, mainForm);
container.appendChild(mainForm);


addBtn.addEventListener('click', function() {
    let row = document.createElement('div');
    row.classList.add('row');

    row.innerHTML = `
        <input type="text" placeholder="Name" class="name">
        <input type="email" placeholder="Email" class="email">
        <input type="text" placeholder="Address" class="address">
    `;

    container.appendChild(row);
    mainForm.style.display = 'block';
});

backBtn.addEventListener('click', function(e) {
    e.preventDefault();
    container.innerHTML = '';
    container.appendChild(mainForm);
    mainForm.style.display = 'none';
});


submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let rows = container.querySelectorAll('.row');

    if(rows.length === 0) {
        alert("Please click Add to enter data");
        return;
    }

    rows.forEach(row => {
        let name = row.querySelector('.name').value.trim();
        let email = row.querySelector('.email').value.trim();
        let address = row.querySelector('.address').value.trim();

        if(name === '' || email === '' || address === '') {
            alert("Please fill all fields");
            return;
        }

        table.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${address}</td>
            </tr>
        `;
    });

    table.style.display = 'table';
    container.innerHTML = '';
    container.appendChild(mainForm);
    mainForm.style.display = 'none';
});
