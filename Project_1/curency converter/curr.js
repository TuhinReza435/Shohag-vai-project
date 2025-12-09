const currencyFirst=document.getElementById('currency_first');
const currencySecond=document.getElementById('currency_second');



const worthFirst=document.getElementById('worth-first');
const worthsecond=document.getElementById('worth-second');

const exchangeRate=document.getElementById('exchange_rat');




function updaterate(){
    fetch(`https://v6.exchangerate-api.com/v6/d8ea0647f625d794942e4eda/latest/${currencyFirst.value}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currencySecond.value];
        exchangeRate.innerHTML = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
     
        const val= worthFirst.value*rate
        worthsecond.value=val;
        
    })
    .catch(erro=>{
          console.log("something is wrong please make it correct")
    });
    
}

currencyFirst.addEventListener("change",updaterate);
currencySecond.addEventListener("change",updaterate);
worthFirst.addEventListener('input',updaterate);
