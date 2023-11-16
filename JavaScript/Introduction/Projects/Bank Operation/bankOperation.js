let totalAmount =parseFloat (prompt("How much money do you have?"))

do {
    menu = prompt("Your balance is: " + totalAmount +"\n-Withdraw" + "\n-Deposit" + "\n-Exit" + "\nType your option: ")
        switch (menu) {
            case "Withdraw":
                withdraw = parseFloat(prompt("How much do you want to withdraw?"))
                totalAmount = (totalAmount-=withdraw)
                break
            case "Deposit":
                deposit = parseFloat(prompt("How much do you want to deposit?"))
                totalAmount = (totalAmount+=deposit)
                break
            case "Exit":
                break    
}    
} while (menu!=="Exit")
alert("Your session has ended")