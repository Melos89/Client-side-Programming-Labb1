//happy hour logic:
function happyHour() {
    var currenttime = new Date();
    var burgerPrices = document.getElementsByClassName('price');

    if(currenttime.getHours() === 16)
    {
        for (var i = 0; i < burgerPrices.length; i++) {
            burgerPrices[i].innerHTML = 10.00.toFixed(2);
        }
    }
}
//Method calls:


//Adjust price function: (add .toFixed(2) for 2 decimals)

/*Add pictures function to span:*/

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

