﻿var number = prompt("Provide digit to determine if it´s even or not:");

document.getElementById('result').innerHTML = CheckIfEven(number);



function CheckIfEven(nr)
{
    if (nr % 2 == 0)
        return nr + " is even";
    else
        return nr + " is uneven";
}