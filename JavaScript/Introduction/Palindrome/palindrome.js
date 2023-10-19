let input = prompt("Type a word and the program will process and check if its a palindrome (palindrome is a word that are the same no matter if you read it from left to the right or right to the left")

let inputOne = ""
let inputTwo = ""

for (let i = 0; i<input.length; i++) {
    inputOne += (input[i])
}

for (let i = input.length -1; i>=0; i--) {
    inputTwo += (input[i])
}

if (inputOne===inputTwo)
 alert("You are a palindrome beast")
else 
  alert("You are not a palindrome beast, the word that you inserted cannot be read from right to left, here's why:\n" +
"Left to right: " + inputOne + 
"\nRight to left: " + inputTwo )