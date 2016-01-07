/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl

//skip
2. Add som tags that doesn't change the visual part of the paragraph

.


5. PLay with the Methods -- DONE.
### DOM page 126:###
6. Play with the DOM-properties

### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array

### String objects page 132: ###
9. check if the 4th element in the array is a number

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
11. replace the 3rd word with PI then roud it to the nearest integer

### Date object###
12. Calculate how many days it's until your birthday and present it.
13. Calculate how many minutes old you are and present it.

Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/





//3.Play with the properties at page 124 in the book. 
  //Use properties creatively to display things at the html page
var element = document.createElement('div');

element.setAttribute('class', 'divboxOne');
element.style.border = '2px solid red';
element.style.width = '100px';
element.style.height = '100px';
element.textContent = "Knapp 1";



var boxOne = document.getElementById('box1').appendChild(element);

boxOne.addEventListener('click',PlayingWithProperties,false);



function PlayingWithProperties() {
    StyleItUp();
    var pointerx = window.screenX;
    var pointery = window.screenY;

    alert('innerheight of window: ' + window.innerHeight + 'and innerwidth: ' + window.innerWidth);
    alert('pagexOffset:' + window.pageXOffset + 'pageYoffset:' + window.pageYOffset);
    alert('Pointer is here!  X:' + pointerx + ' Y: ' + pointery);
    alert('The filepath of this page is: ' + window.location);

}
//End of 3.

//4.Add a stylesheet that displays the changed words in fat font and in red.
function StyleItUp() {
    $('head').append('<link href="Styling.css" rel="stylesheet" />');
}
//end of 4.

//6. Play with the DOM-properties

document.title = "Hello New Title";
alert("This page latest update: " + document.lastModified + "\n" +
    "the URL to this page: " + document.URL + "\n" +
    "the domain: " + document.domain);
//end of 6.

//7. Save the the text from the makeMeAnArray-paragraph into an array.
var textToSave = document.getElementById('makeMeAnArray').innerHTML;

var array = textToSave.trim().split(" ");

var text = "";

//end of 7.

//8. Use all the string methods and propertys allong with the array

//var length = array.length;
//var upperCase = array.toUpperCase;
//var lowerCase = array.toLowerCase;
//var indexOf = array.indexOf("pp");
//var lastIndexOf = array.lastIndexOf("out");
//var charAt = array.charAt(20);
//var replace = array.replace("y","**");


//end of 8.

//9. check if the 4th element in the array is a number

var arrayPosition = array[4];

if (arrayPosition.isNaN)
    alert("It isnt a number");
else
    alert("It's a number");

//end of 9.

//10. Round one of the numbers in the paragraph up/down

alert("Postion 4 in array is: " + Math.floor(arrayPosition));
alert("Postion 4 in array is: " + Math.ceil(arrayPosition));

//end of 10.

//11. replace the 3rd word with PI then roud it to the nearest integer
function replacingWithPi()
{
    document.getElementById('makeMeAnArray').innerHTML = textToSave.replace(array[2],Math.round(Math.PI));
}
//End of 11.

//12. Calculate how many days it's until your birthday and present it.

var today = new Date();
//var myYear = 1989;
var myBirthday = new Date(1989, 03, 22);
//var myBirthday = new Date(myYear, 03, 22);
//var myBirthdayNextYear = new Date((myYear + 1), 03, 22);
//var diff = myBirthday.getTime() - today.getTime();

//if (diff < 0) {
//    diff = myBirthdayNextYear.getTime() - today.getTime();
//}


    var nextBirthday = myYear.AddYears(DateTime.Today.Year - myYear.Year);
    if (nextBirthday < DateTime.Today) {
        nextBirthday = nextBirthday.AddYears(1);
        var daysToGo = (nextBirthday - DateTime.Today).Days;
    }

    var minutesToBirthday = Math.floor(diff / 1000 / 60);
    var daysToBirthday = Math.floor(minutesToBirthday / 24 / 60);

    var birthdayDiv = document.getElementById('birthdayPresentation');
    var birthdayParagraf = document.createElement('p');
    birthdayParagraf.textContent = "det är min födelsedag om :" + daysToGo + "dagar";
    birthdayDiv.appendChild(birthdayParagraf);
    //13. Calculate how many minutes old you are and present it.

    var diff = today.getTime() - myBirthday.getTime();

    var totalMinutes = Math.floor(diff / 1000 / 60);

    var minuteDiv = document.getElementById('minutePresentation');
    var minuteParagraf = document.createElement('p');
    minuteParagraf.textContent = "jag är :" + totalMinutes + "minuter gammal";
    minuteDiv.appendChild(minuteParagraf);
