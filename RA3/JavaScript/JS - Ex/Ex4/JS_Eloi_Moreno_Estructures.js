// 1.- Crea un array amb 5 números de manera aleatòria.
// Utilitza les funcions necessàries per, en aquest ordre,
// ordenar de menor a major i obtenir el primer i últim valor.

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

console.log("####################################################")
// 2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

let numeros3 = [...numeros]
console.log(numeros3)

console.log("####################################################")
