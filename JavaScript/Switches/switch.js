const result = prompt("You got a random wish, choose a number between 1,2,3:")

switch(result) {
    case "1":
        alert("You got an apartment")
        break
    case "2":
        alert("You got a house")
        break
    case "3":
        alert("You got a car")
        break
    default:
        alert("You did not followed the rules\n You got nothing!")
}