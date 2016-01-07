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



var boxOne = document.getElementById('makeMeAnArray').appendChild(element);

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