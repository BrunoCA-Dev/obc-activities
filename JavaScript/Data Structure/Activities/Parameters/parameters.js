function double (x = 0){
    alert ("The double of " + x + " is " + (x*2))
}

//double(5)

function sayHello (name = "horrible thing") {
    alert ("Hello, " + name + " !")
}

//sayHello ()

function addition (a,b) {
    alert ("The result of the addition is " + (a+b))
}

//addition (50,50)

function createUser (name, email, password, type) {
    const user = {
        name: name,
        email: email,
        password: password,
        type: type
    }

    console.log(user)
}

//createUser ("bruno", "bruno.araujo4454@gmail.com", "123456", "admin").

function newUser (name, type ="admin", email, password) { // The order of parameters mattersm default parameters should allways be at the end
    const user = {
        name: name,
        email: email,
        password: password,
        type: type
    }
console.log(user)
}

newUser ("bruno", "bruno.araujo4454@gmail.com", "123456")

const userData = {
    name:"Yasuo",
    password:"123456",
    email:"cataclism@paradis.com",
    type:"default"
}

function objectParamater (userData) {
    console.log(userData)
}

