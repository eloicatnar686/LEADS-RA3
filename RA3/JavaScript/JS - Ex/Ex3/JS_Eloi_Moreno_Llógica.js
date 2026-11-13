// 1.- Decideix si un número és múltiple de 3 o de 7

function multiple (a) {
    if (a % 3 === 0){
        console.log("Multiple de 3")
    }
    else if (a % 7 === 0){
        console.log("Multiple de 7")
    }
}

multiple(6) // Multiple de 3
multiple(14) // Multiple de 7

// 2.- Donats dos enters (x, y), dir quins d’ells estan en el rang de 10 a 50 inclosos. Utilitza un operador ternari.

let x = 34;
let y = 60;

x = x > 10 && x < 50 ? console.log("Dins del rang") : console.log("No està dins del rang")
x = y > 10 && y < 50 ? console.log("Dins del rang") : console.log("No està dins del rang")

