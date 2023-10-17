const number = prompt("Hello, type the number you want to see the multiplication table: ")

result = ""

for (let i=1; i<=20; i++){
    result += "=> " + number + "*" + i + " =" + (number*i) + "\n"
}

alert ("Multiplication table result, " + number + ":\n\n" + result)

