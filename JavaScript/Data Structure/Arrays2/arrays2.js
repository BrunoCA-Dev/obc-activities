const arr = ["Gandalf", "Frodo", "Sam", "Merry", "Merry", "Pippin"]

console.log(arr)

// PUSH - ADD elements at the END of the array
arr.push("Boromir")
console.log(arr)

// UNSHIFT -  ADD an element at the START of the array
arr.unshift("Borromir-Unshift")
console.log(arr)

// POP - REMOVE an element at the END of the array
let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// SHIFT - REMOVE an element at the START of the array
lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

// INCLUDES - SEARCH for an element on the array
const include = arr.includes("Gandalf")
console.log(include)