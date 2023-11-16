const characters = [
    { level: 42, name: "Thrall", race: "Orc", class: "Xaman" },
    { level: 28, name: "Garrosh", race: "Orc", class: "Warrior" },
    { level: 35, name: "Varok", race: "Orc", class: "Warrior" },
    { level: 35, name: "Uther", race: "human", class: "Paladin" },
    { level: 26, name: "Jaina", race: "human", class: "Mage" },
    { level: 39, name: "Tyrande", race: "Night Elf", class: "Priest" },
    { level: 29, name: "Muradin", race: "Dwarf", class: "Warrior" },
  ]

// Map = Select all the parameters given and create a new array based on an existing array
const names = characters.map(function(character){
    return character.name
})

// const names = []
//
// for (let i=0; i <characters.length; i++) {
//  names.push(characters[i].name) 
//}

console.log(names)

// Filter = Locate the selected information and create a new array 
const orcs = characters.filter(function(character){
    return character.race === "Orc"
})

// const orcs = []
// for (let i = 0; i <characters.length; i++) {
//  if  (characters[i].race ==="Orc") {
//         orcs.push(characters[i])
//    }
// }

console.log(orcs)

// Reduce = Generate an acumulative value after each interaction then transform everything into a unique array
const totalLevel = characters.reduce(function (acumulativeValue, character){
   return acumulativeValue + character.level
}, 0)

console.log(totalLevel)

const races = characters.reduce(function(acumulativeValue, character) {
    if (acumulativeValue[character.race]) {
        acumulativeValue[character.race].push(character)
    } else {
        acumulativeValue[character.race] = [character]
    }
    return acumulativeValue
}, {})

console.log(races)
