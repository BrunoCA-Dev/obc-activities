let cardsDeck = ["Clubs", "Diamonds", "Hearts", "Spades" ]
let option = ""

do {

 option = prompt("Your deck are composed of the following cards: \n\n" + 
   cardsDeck + 
   "\n\n What is your action?" +
   "\n1) Draw a card" +
   "\n2) Add a card" + 
   "\n3) Finish the game")

   switch(option){
    case ("1"):
    cardSelect = cardsDeck.pop()
    alert ("You got a " + cardSelect + " card.")
    break
   }
   switch(option){
    case ("2"):
    cardSelect = prompt("What card are you going to add to the deck?")
    cardsDeck.push(cardSelect)
    break
   }
   switch(option){
    case ("3"):
    break
   }
} while (option !=="3")

alert("Finishing the programm")

// pretacórios 555959 5 sad to see you gops