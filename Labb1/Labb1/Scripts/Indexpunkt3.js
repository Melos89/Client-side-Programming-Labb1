var firstnumber = prompt("first number:");

var secondNumber = prompt("Second number");

var thirdNumber = prompt("third number");

sumUp(parseInt(firstnumber), parseInt(secondNumber), parseInt(thirdNumber));





function sumUp(a, b, c)
{
    var result = a + b + c;
    document.getElementById('result').innerHTML = "Totala summan: " + result;
}