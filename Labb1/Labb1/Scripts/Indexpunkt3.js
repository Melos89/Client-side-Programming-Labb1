var firstnumber = prompt("first number:");

var secondNumber = prompt("Second number");

var thirdNumber = prompt("third number");

sumUp(firstnumber, secondNumber, thirdNumber);





function sumUp(a, b, c)
{
    document.getElementById('result').innerHTML = "Totala summan: " + (a + b + c);
}