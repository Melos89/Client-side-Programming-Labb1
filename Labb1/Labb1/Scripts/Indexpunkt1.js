var number = prompt("Supply a number:");



document.getElementById('text').innerHTML = "Talet i kvadrat är: " + calculate(number);







function calculate(nr)
{
    return nr * nr;
}