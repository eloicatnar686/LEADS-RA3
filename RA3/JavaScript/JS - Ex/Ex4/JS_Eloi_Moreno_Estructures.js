// 1.- Crea un array amb 5 números de manera aleatòria.
// Utilitza les funcions necessàries per, en aquest ordre,
// ordenar de menor a major i obtenir el primer i últim valor.

console.log("####################################################")
console.log("                         1                          ")
console.log("####################################################")

let numeros = []

for (let i = 0; i < 5; i++){
    numeros.push(Math.floor(Math.random() * 11))// 1 al 10
}

console.log(numeros)
let numeros2 = [...numeros]
let aux;
for (let i = 0; i < numeros.length; i++){
    for (let j = 0; j < numeros.length - 1 - i; j++){
        if (numeros[j] > numeros[j+1]){
            aux = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = aux
        }
    }
}
console.log("Bubble sort: ")
console.log(numeros)

console.log("Function Sort: ")
numeros2 = numeros2.sort(function (a,b){return a - b})
console.log(numeros2)

// 2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior
console.log("####################################################")
console.log("                         2                          ")
console.log("####################################################")

let numeros3 = [...numeros]
console.log(numeros3)

console.log("####################################################")
console.log("                         3                          ")
console.log("####################################################")
// 3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

let fusion = [1,3,2,7,8] // Duplicates = 1,2,
let fusion2 = [9,5,4,2,1]
let total_fusion = [...fusion, ...fusion2]
console.log(DeleteDuplicates(total_fusion))


// Comparamos array 1 con array 2 para encontrar numeros duplicados, guardamos las posiciones duplicadas y borramos las posiciones duplicadas

function DeleteDuplicates (fusion) {
    let empty = []
    for (let i of fusion){
        if (!empty.includes(i)){
            empty.push(i)
        }
    }
    return empty
}

// 4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.
console.log("####################################################")
console.log("                         4                          ")
console.log("####################################################")
let fusion3 = new Set([1,2,3,3,3,4,5,5,6]) // Repeated 3,5
console.log(fusion3)
