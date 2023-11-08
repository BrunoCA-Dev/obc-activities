
////////// Objects can be manipulated from outside of the function depending on its position at the scope

let pokemon = "Charmander"

function evolve () {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evolve()             
console.log(pokemon)

////////// Objects created on an inner scope cannot be acessed on an outer scope if its not declared

function createError () {
    let yasuo = "feeder"
}

console.log(createError)

////////// Objects created on an inner scope can be acessed on an outer scope if created using VAR

function scoreAvaliation(score) {
    if (score>60) {
        var approved = true
        let situation = "aproved"
    } else {
        var approved = false
        let situation ="reproved"
    }

    console.log(score)
    console.log(approved)
    console.log(situation)
}

scoreAvaliation(89)
scoreAvaliation(10)