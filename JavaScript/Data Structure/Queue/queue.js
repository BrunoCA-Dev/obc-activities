let queue = []
let option = ""

do {
    let lobby = ""
    for (let i = 0; i < queue.length; i++)
     {
    lobby += (i+1) + "º " + queue[i] + "\n"
    }

    option = prompt (
        "Queued Champions :\n" + 
        lobby +  
        "Choose your action:\n" + 
        "Option 1 - Move the queue\n" +
        "Option 2 - Add a Champion to the queue\n" + 
        "Option 3 - EXIT" 
    )
    switch (option){
        case "1":
            queue.shift()
            break
        case "2":
           const champion = prompt("What is the champion name?")
           queue.push(champion)
           break
        case "3":
           prompt("Queue finished!")
           break
        default:
            ("Wrong option")}
} while (option !==3)
alert ("Bye bye")