const inputCarOne = prompt ("What is the name of the first car?")
const inputSpeedOne = prompt ("What is the speed of the first car?")
const inputCarTwo = prompt ("What is the name of the second car?")
const inputSpeedTwo = prompt ("What is the name of the first car?")

if (inputSpeedOne>inputSpeedTwo) alert ("CONGRATULATIONS!\n" + inputCarOne + " won the race")
else if (inputSpeedOne==inputSpeedTwo) alert("Its a DRAW!")
else alert ("CONGRATULATIONS!\n" + inputCarTwo + " won the race")