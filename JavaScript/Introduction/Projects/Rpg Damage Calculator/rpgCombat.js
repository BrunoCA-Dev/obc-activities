const fighter = prompt("FIGHTER registration\n" + "Name of the fighter:")
const fighterAttack = parseFloat(prompt("What is the attack power of your character?"))

const defender = prompt("DEFENDER registration\n" + "Name of the defender:")
let defenderDef = parseFloat(prompt("What is the defence power of your defender?"))
const defenderHp = parseFloat(prompt("What is the vital points of your defender?"))
const shield = prompt ("Does your defender have a shield? (type y for yes or just leave it empty)")

let damageWithShield = fighterAttack - defenderDef 
let damageTotal = damageWithShield / 2
let damageWithoutShield = fighterAttack-defenderDef

if (fighterAttack<=defenderDef) alert (fighter + " hitted " + defender + " for no damage due to his high defence")
  else if (fighterAttack>defenderDef&&shield==="y") alert(fighter + " hitted " + defender + " for " + damageTotal + " leaving " + defender + " with " + (defenderHp-damageTotal) + " hitpoints")
  else alert (fighter + " hitted " + defender + " for " + damageWithoutShield + " leaving " + defender + " with " + (defenderHp-damageWithoutShield) + " hitpoints")