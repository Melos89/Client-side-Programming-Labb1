var number = prompt("supply a number:");


if (isNaN(number) || number.trim() == "") {
    alert("Wrong input, didn´t supply a number");
}
else
{
    var result = EvenDivision(number);

    if (result == true)
        document.getElementById('result').innerHTML = number + " är jämnt delbart med 3";
    else
        document.getElementById('result').innerHTML = number + " är inte jämnt delbart med 3";
}




function EvenDivision(nr)
{
    if(nr % 3 == 0)
        return true;
    else
        return false;
}