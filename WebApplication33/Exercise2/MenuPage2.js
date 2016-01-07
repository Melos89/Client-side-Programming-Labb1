/*
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
            for (var i = 0; i < pizzas.pizzaList.length; i++) {
                output += "<article>" + "<fieldset>"
                    + "<legend>" + pizzas.pizzaList[i].dayOfTheWeek + " pizza" + "</legend>"
                    + "<h3>" + pizzas.pizzaList[i].name + "</h3>"
                    + "<span>" + "<img src='Images/Pizza.png'/>" + "</span>"
                    + "<div class='price'" + " id='" + pizzas.pizzaList[i].dayOfTheWeek + "'>" + pizzas.pizzaList[i].price + "</div>"
                    + "</fieldset>" + "</article>";
            }
            output += "</h2>";
            document.getElementById("pizzaPlace").innerHTML = output;
        }
    }
    request.send();
}