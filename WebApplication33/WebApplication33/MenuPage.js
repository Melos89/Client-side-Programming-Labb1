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
var currentTime = new Date();
var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var weekday = document.getElementsByClassName('price');

for (var i = 0; i < weekday.length; i++) {
    if(weekdays[currentTime.getDay()] === weekday[i].id)
    {
        var currentPrice = Number(weekday[i].innerHTML);
        var discountedPrice = (currentPrice * 0.8).toFixed(2);
        weekday[i].innerHTML = discountedPrice;
        weekday[i].style.backgroundColor = "red";
    }
};