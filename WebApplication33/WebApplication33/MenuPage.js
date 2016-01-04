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
setInterval(happyHour,1000);


/*Add pictures function to span:*/
var imageholder = document.getElementsByTagName('span');
for (var i = 0; i < imageholder.length; i++) {
    imageholder[i].innerHTML = '<img src="Images/Hamburger.png"/>';
}

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

