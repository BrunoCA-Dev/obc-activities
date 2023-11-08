let option = ""

function triangle (a,b){
    return (a*b)/2
}

function rectangle (a,b){
    return a*b
}

function square (a){
    return a*a
}

function trapeze (a,b,c){
    return ((a+b)*c)/2
}

function circle (a){
    return (3.14*(a*a))
}

do {

    option = prompt (
        "Chose the geometric form that you want to calculate the area\n\n" + 
        "1) Triangle\n" +
        "2) Rectangle\n" + 
        "3) Square\n" + 
        "4) Trapeze\n" +
        "5) Circle\n" + 
        "6) Exit"
    )

    switch(option) {
        case "1":
            a = prompt ("What is the base of your triangle?")
            b = prompt ("What is the hight of your triangle?")
            result = triangle(a,b)
            alert ("The area of your triangle is " + result)
        break

        case "2":
            a = prompt ("What is the base of your rectangle?")
            b = prompt ("What is the hight of your rectangle?")
            result = rectangle(a,b)
            alert ("The area of your rectangle is " + result)
        break

        case "3":
            a = prompt ("What is the base of your square?")
            result = square(a)
            alert ("The area of your square is " + result)
        break

        case "4":
            a = prompt ("What is the higher base of your trapeze?")
            b = prompt ("What is the lower base of your trapeze?")
            c = prompt ("What is the hight of your trapeze?")
            result = triangle(a,b,c)
            alert ("The area of your trapeze is " + result)
        break

        case "5":
            a = prompt ("What is the base of your circle?")
            result = circle(a)
            alert ("The area of your circle is " + result)
        break

        case "6":
        break

        default: alert("Wrong option")

    }

} while (option!=="6")

alert("Finishing the application")