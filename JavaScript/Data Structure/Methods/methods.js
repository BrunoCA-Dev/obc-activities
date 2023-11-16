// We can create functions inside an object without the need to use the comand "function"

let people = {
    name: "Bruno",
    age:26,
    sayHi() {
        console.log("Hello, world! My name is " + this.name) // To reference itself inside the same scope we need to use "this"
    }
}

console.log(people)

people.sayHi()