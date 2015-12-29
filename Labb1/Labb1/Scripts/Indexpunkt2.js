var number = prompt("supply a number:");

var result = EvenDivision(number);


if (result == true)
    document.getElementById('result').innerHTML = number + " är jämnt delbart med 3";
else
    document.getElementById('result').innerHTML = number + " är inte jämnt delbart med 3";





function EvenDivision(nr)
{
    if(nr % 3 == 0)
        return true;
    else
        return false;
}