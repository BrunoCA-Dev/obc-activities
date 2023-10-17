const tourist = prompt ("What is your name?")

let countryVisited = 0
let finalText = ""
let visited = prompt ("Did you visited any country? (yes/no)")

while (visited ==="yes") {
    countryVisited += 1
    let country = prompt ("What is the name of the country?")
    finalText += (country + "\n")
    visited = prompt ("Did you visited any other country? (yes/no)")
}
    alert (tourist + " a fellow explorer who already visited " + countryVisited + " countries wich are the following:\n" + finalText)
