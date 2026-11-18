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


