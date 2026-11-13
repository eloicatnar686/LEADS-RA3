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

