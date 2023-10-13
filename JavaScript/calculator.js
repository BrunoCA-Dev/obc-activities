let firstNumber = window.prompt('Type the first number');
let secondNumber = window.prompt('Type the second number');

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

let multiplication = firstNumber*secondNumber;
let division = firstNumber/secondNumber;
let addition = firstNumber+secondNumber;
let subtraction = firstNumber-secondNumber;

window.alert(
    "The results are:" +
    "\nMultiplication: " + multiplication +
    "\nDivision: " + division +
    "\nAddition: " + addition +
    "\nSubtraction: " + subtraction
)