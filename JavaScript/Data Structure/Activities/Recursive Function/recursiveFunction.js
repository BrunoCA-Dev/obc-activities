// Recursive Function is a function that call itself
function divide(num) {
    console.log(num)
    if (num % 2 ===0){
        divide (num / 2)
    } else {
        return num
    }
}

// Caution, always configure a breakpoint or condition otherwise the function can run trought a infinite l00p
divide(40)

function double(num) {
    console.log(num)
    double(num * 2)
}

// Factorial (example 5) = !5 = 5*4*3*2*1 or 5 x !4
function factorial(num) {
    console.log("Number: " + num)
    if (num ===0) {
       return 1 
    } else if (num ===1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))