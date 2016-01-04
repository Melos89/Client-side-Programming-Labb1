
document.getElementById('result').innerHTML = CountingEvenNumbers();



function CountingEvenNumbers()
{
    var numbers = "";
    for (var i = 0; i <= 100; i++)
    {
        if(i %2 == 0)
        numbers += i + " ";
    }
    return numbers;
}