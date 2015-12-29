var number = prompt("supply a number:");


if (EvenDivision(number))





function EvenDivision(nr)
{
    if(nr % 3 == 0)
        return true;
    else
        return false;
}