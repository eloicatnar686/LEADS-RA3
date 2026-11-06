// 6.- Donats un number i un BigInt (1234 i 5678), calcula les quatre operacions: suma, resta, divisió i multiplicació i mostra els resultats amb un sol decimal.
let numero = 1234
let BigInt = 5678n

console.log("Suma " + (numero + Number(BigInt)).toFixed(1))
console.log("Resta " + (numero - Number(BigInt)).toFixed(1))
console.log("Multiplicació " + (numero * Number(BigInt).toFixed(1)))
console.log("Divisió " + (numero / Number(BigInt)).toFixed(1))


