function addition(a,b) {
    return a + b
}

const operation = addition
console.log(operation(4,5))

// Anonymous functions can be declared inside a variable without the need to be named
const subtraction = function (a,b) {
    return a-b
}

console.log(subtraction(36,13))

// Anonymous functions are only available after its creation, not universaly like normal functions