function darkmode(){
    let root = document.documentElement;
    root.style.setProperty('--main-theme', '#000');
    root.style.setProperty('--primary-color', '#fff');
    root.style.setProperty('--secondary-color', '#000');
    root.style.setProperty('--text-color-color', '#fff');
    console.log("Dark Mode "+root.style.color+"ON");
}

function lightmode(){
    let root = document.documentElement;
    root.style.setProperty('--main-theme', '#fff');
    root.style.setProperty('--primary-color', '#000');
    root.style.setProperty('--secondary-color', '#fff');
    console.log("Light Mode "+root.style.color+"ON");
}

document.querySelectorAll('.color-themes .color').forEach(color =>{
    color.onclick=() =>{
        let background=color.style.background;
        console.log("Clicked color:", background);
        document.querySelector(':root').style.setProperty('--main-theme', background);
    }
})

//currency convertion 1USD currency
function currency(value,symbol,country){
    //get all items in the class "price"
    let prices = document.getElementsByClassName('price');
    //loop though all items in the class "price
    for (let i = 0; i < prices.length; i++){
        let price = prices[i];
        console.log("Element price:::>>>",price);
        //current price in market in 2024 format Currency
        let presentPrice = parseFloat(price.getAttribute('data-price'));
        //dollar and other currency values are multiplied
        let currency=presentPrice*value;
        console.log("currencyConversion::",presentPrice+"*"+value+"=",currency);
        // Update the price text with the converted value and currency symbol
        price.textContent = symbol+currency.toFixed(2);
        console.log("Convert the float value into a fixed last two didgits add only two::",price.textContent);
        console.log("Currency of country per Dollar",value);

        document.getElementById('navbarDropdownMenuLink').innerText = country;
    }
}


//changes into different languages
function switchToCountry(code, name) {
    // Update country name
    document.getElementById('currentCountryName').innerText = name;
    console.log("Name::",name);

    // Update country flag image
    var flagImg = document.querySelector('.navbar .dropdown .country img');
    switch (code) {
        case 'En':
            flagImg.src = 'https://em-content.zobj.net/source/apple/391/flag-united-states_1f1fa-1f1f8.png';
            break;
        case 'Hi':
            flagImg.src = 'https://em-content.zobj.net/source/apple/391/flag-india_1f1ee-1f1f3.png';
            break;
        case 'Np':
            flagImg.src = 'https://em-content.zobj.net/source/apple/391/flag-nepal_1f1f3-1f1f5.png';
            break;
        case 'Sp':
            flagImg.src = 'https://em-content.zobj.net/source/apple/391/flag-spain_1f1ea-1f1f8.png';
            break;
        case 'Jp':
            flagImg.src = 'https://em-content.zobj.net/source/apple/391/flag-japan_1f1ef-1f1f5.png';
            break;
        default:
            break;
    }
    console.log("Code::",code);
}