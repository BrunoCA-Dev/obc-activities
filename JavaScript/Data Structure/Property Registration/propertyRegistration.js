let properties = []
let option = ""

do {
    
    option = prompt (
        "Total properties registered: " +
        properties.length  + 
        "\n\n" + 
        "1) Add a property\n" +
        "2) Show properties registered\n" + 
        "3) Exit" 
    )

    switch (option){
        case "1":
            const property = {}
            property.name = prompt("Property name")
            property.owner = prompt("Property owner")
            property.rooms = prompt("Number of rooms")
            property.wc = prompt("Number of bathrooms")
            property.garage = prompt("Do it have a garage? (yes/no)")

        const confirmation = confirm(
            "Do you confirm the informations?\n\n" +
            "Property Owner: " + property.owner +
            "\nProperty rooms: " + property.rooms +
            "\nProperty bathrooms: " + property.wc +
            "\nProperty garage: " + property.garage
            );
            if (confirmation) {
                properties.push (property)
            }
        break
        case "2":
            alert (
                "Properties registered:\n\n " +
                properties
            )
        break
        case "3":
        break
    }

} while (option !== "3")
alert("Finishing...")