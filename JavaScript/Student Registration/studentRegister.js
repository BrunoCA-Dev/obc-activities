let fName = window.prompt('What is your first name?');
let lName = window.prompt('What is your last name?');
let study = window.prompt('What is the name of your course?');
let bdaYear = window.prompt('What are the year that you were born?');
let year = parseFloat(bdaYear);
let curentYear = 2023;
curentYear -= year;

window.alert (
    fName + " " + lName + " student of the " + study + " school got registered at the age of " + curentYear 
)