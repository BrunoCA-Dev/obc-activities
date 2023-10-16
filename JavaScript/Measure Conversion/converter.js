let firstInsput = parseFloat(prompt("Type the measure in meters (only the number)"))

let result = prompt (
"Choose the option that you want your measure to be converted to(insert only the abbreviation of the option):" + 
"\n1) Milimeters (mm)" + 
"\n2) Centimeters (cm)" + 
"\n3) Decimeters (dm)" + 
"\n4) Decameters (dam)" + 
"\n5) Hectometers (hm)" + 
"\n6) Kilometers (km)" )

let mm = (firstInsput * 1000)
let cm = (firstInsput * 100)
let dm = (firstInsput * 10)
let dam = (firstInsput / 10)
let hm = (firstInsput / 100)
let km = (firstInsput / 1000)

switch (result) {
    case "mm":
        alert("Your result is: " + mm)
        break
    case "cm":
        alert("Your result is: " + cm)
        break
    case "dm":
        alert("Your result is: " + dm)
        break
    case "dam":
        alert("Your result is: " + dam)
        break
    case "hm":
        alert("Your result is: " + hm)
        break
    case "km":
        alert("Your result is: " + km)
        break
    default:
        alert("Invalid option")
}