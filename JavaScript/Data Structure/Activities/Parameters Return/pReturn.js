function averageCalculator (a, b) {
    const average = (a + b) / 2
    return average // return the value and store it on an variable
}

const result = averageCalculator(10,10)
console.log (result)

function createProduct(name,price) {
    const product = {
        name,
        price,
        stock: 1
    }
    return product
}

const notebook = createProduct("Dell", 6996)

console.log(notebook)

//////////////////////////////////////////////////

//function retangularArea(base, hight){
//    return base * hight // Return direct on the console
//}

//console.log(retangularArea(10,10)) (09)

////////////////////////////////////////////////////

function retangularArea(base, hight){
       return base * hight
    }

function squareArea (side){
    return retangularArea(side,side) // A function can call another function on its index
}

console.log(retangularArea (5,5))

console.log(squareArea(9))

//////////////////////////////////////////////////// regular function

function hello(){
    let text = "..."
    return text // return always finish the function, leaving everything after the return unusables
    text = "Hello, World!"
    console.log(text)
}

console.log(hello(hello))

/////////////////////////////////////////////////////

function old(age){
    if(age>=18) {
        return "You are 18 years old or older"
    } else {
        return "You are not older than 18"
    }

}

console.log(old(21))