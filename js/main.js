let fromSelect= document.querySelector(".fromSelect")
let toSelect= document.querySelector(".toSelect")
let amount= document.querySelector(".amount")
let convertBtn= document.querySelector(".convertBtn")
let amountValue= document.querySelector(".amountValue")

fetch('https://openexchangerates.org/api/currencies.json')
	.then(response => response.json())
	.then(response => {
        console.log(response);
        for(let country in response){
        fromSelect.innerHTML+=`<option>${country}</option>`
        toSelect.innerHTML+=`<option>${country}</option>`
        }
    }
    )

    let fromVal;
      fromSelect.addEventListener("change",e=>{
       fromVal = e.target.value
        console.log(e.target.value);
    })
    
    let toVal;
     toSelect.addEventListener("change",e=>{
       toVal = e.target.value
        console.log(e.target.value);
    })

    convertBtn.addEventListener('click',(e)=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7ae6ee006emsh02fb32ffdd0f073p180f4fjsn52a7ae44a1e7',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        
        fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${fromVal}&to=${toVal}&q=20`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                let amountVal=amount.value*response;
                console.log(amountVal);
                amountValue.innerHTML="Conversion Rate = " + " " + amountVal + " " + toVal;
            })
            .catch(err => console.error(err));
    })
 
    