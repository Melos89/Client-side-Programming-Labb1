﻿/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs
addHamburgersToPage();
addPizzasToPage();
addSubsToPage();
addDrinksToPage();
//Hamburgers
function addHamburgersToPage() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JSON/hamburger.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var hamburgers = JSON.parse(request.responseText);
            var output = "<h2>" + "Delicious burgers";
            for (var i = 0; i < hamburgers.hamburgerList.length; i++) {
                output += "<article>" + "<fieldset>"
                    + "<legend>" + hamburgers.hamburgerList[i].dayOfTheWeek + " burger" + "</legend>"
                    + "<h3>" + hamburgers.hamburgerList[i].name + "</h3>"
                    + "<span>" + "<img src='Images/Hamburger.png'/>" + "</span>"
                    + "<div class='price'" + " id='" + hamburgers.hamburgerList[i].dayOfTheWeek + "'>" + hamburgers.hamburgerList[i].price + "</div>"
                    + "</fieldset>" + "</article>";
            }
            output += "</h2>";
            document.getElementById("burgersPlace").innerHTML = output;
        }
    }
    request.send();
}
//Pizzas
function addPizzasToPage() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JSON/pizza.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var pizzas = JSON.parse(request.responseText);
            var output = "<h2>" + "Delicious pizzas";
            for (var i = 0; i < pizzas.ListOfPizzas.length; i++) {
                output += "<article>" + "<fieldset>"
                    + "<legend>" + pizzas.ListOfPizzas[i].dayOfTheWeek + " pizza" + "</legend>"
                    + "<h3>" + pizzas.ListOfPizzas[i].name + "</h3>"
                    + "<span>" + "<img src='Images/Pizza.png'/>" + "</span>"
                    + "<div class='price'" + " id='" + pizzas.ListOfPizzas[i].dayOfTheWeek + "'>" + pizzas.ListOfPizzas[i].price + "</div>"
                    + "</fieldset>" + "</article>";
            }
            output += "</h2>";
            document.getElementById("pizzaPlace").innerHTML = output;
        }
    }
    request.send();
}
//Drinks
function addDrinksToPage() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JSON/drinks.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var drinks = JSON.parse(request.responseText);
            var output = "<h2>" + "Delicious drinks";
            for (var i = 0; i < drinks.ListOfDrinks.length; i++) {
                output += "<article>" + "<fieldset>"
                    + "<legend>" + drinks.ListOfDrinks[i].dayOfTheWeek + " drink" + "</legend>"
                    + "<h3>" + drinks.ListOfDrinks[i].name + "</h3>"
                    + "<span>" + "<img src='Images/Drink.png'/>" + "</span>"
                    + "<div class='price'" + " id='" + drinks.ListOfDrinks[i].dayOfTheWeek + "'>" + drinks.ListOfDrinks[i].price + "</div>"
                    + "</fieldset>" + "</article>";
            }
            output += "</h2>";
            document.getElementById("drinksPlace").innerHTML = output;
        }
    }
    request.send();
}
//Subs
function addSubsToPage() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JSON/subs.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var subs = JSON.parse(request.responseText);
            var output = "<h2>" + "Delicious subs";
            for (var i = 0; i < subs.subList.length; i++) {
                output += "<article>" + "<fieldset>"
                    + "<legend>" + subs.subList[i].dayOfTheWeek + " sub" + "</legend>"
                    + "<h3>" + subs.subList[i].name + "</h3>"
                    + "<span>" + "<img src='Images/Subs.png'/>" + "</span>"
                    + "<div class='price'" + " id='" + subs.subList[i].dayOfTheWeek + "'>" + subs.subList[i].price + "</div>"
                    + "</fieldset>" + "</article>";
            }
            output += "</h2>";
            document.getElementById("subsPlace").innerHTML = output;
        }
    }
    request.send();
}