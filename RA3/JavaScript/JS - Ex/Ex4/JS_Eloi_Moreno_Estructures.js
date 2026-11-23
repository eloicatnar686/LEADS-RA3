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

let fusion = [1,5,6,3] // Duplicates = 1,2,
let fusion2 = [9,5,6,4]
let total_fusion = [...fusion, ...fusion2]
DeleteDuplicates(total_fusion)


// Comparamos array 1 con array 2 para encontrar numeros duplicados, guardamos las posiciones duplicadas y borramos las posiciones duplicadas

function DeleteDuplicates (fusion) {
    let empty = []
    for (let i of fusion){
        if (!empty.includes(i)){
            empty.push(i)
        }
    }
    console.log(empty)
    return empty
}

// 4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

let array_set = new Set([1,1,3,4,3,7,8,9])

// 4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.
console.log("####################################################")
console.log("                         4                          ")
console.log("####################################################")
let fusion3 = new Set([1,2,3,3,3,4,5,5,6]) // Repeated 3,5
console.log(fusion3)


// 5.- Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número.
// Exemple: [1, 3, 6] => [1, 27, 216]

console.log("####################################################")
console.log("                         5                          ")
console.log("####################################################")

let array5 = [1,3,6]
let array5_1 = array5.map(item => { // Recorre todas las pos de la array, devuelve el cubo de cada item de la array en una nueva array delacarada en el let
    return item * item * item
})
console.log("Métode 1: " + array5_1)

const cubs = array5.map(array5 => array5**3)
console.log("Métode 2: " + cubs)

// 6.- A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’
console.log("####################################################")
console.log("                         6                          ")
console.log("####################################################")

let str_aaa = ["Hola", "hola", "holaaaa", "holaa", "holacaracolaaaa"]
let str_plusa = []
console.log(MoreA(str_aaa))

function MoreA (pepe){
    for (const str of pepe){
        let a_counter = 0;
        for (const letra of str){
            if (letra === "a"){
                a_counter++
            }
        }
        if (a_counter > 1){
            str_plusa.push(str)
        }
    }
    return str_plusa
}

// 7.- Crea una estructura Map i insereix 3 claus – valor. Les 3 claus han de ser de tipus de dades diferents. Et deixa?

console.log("####################################################")
console.log("                         7                          ")
console.log("####################################################")

let out = new Map()
out.set('1', 12)
out.set('2', "123")
out.set('3', true)

console.log(out)

// 8.- Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a un per poder decidir si és un palíndrom o no.

console.log("####################################################")
console.log("                         8                          ")
console.log("####################################################")

let paraula = "racecar"
let par_d = []
// Emplenar array
for (const lletra of paraula){
    par_d.push(lletra)
}

let i = paraula.length - 1
let pali = true;
while (i > 0){
    const lletra = par_d.shift() // Shift accedeix a la primera pos de una cua.
    if (lletra !== paraula[i]) { // "i" recórre desde el final al principi i compara amb "lletra", inversa
        pali = false // Si la lletra no coincideix amb la seva parella a la inversa, retorna fals
        // Ex: "race": r (lletra) ?= e (i); false!; No palíndrom!
    }
    i--
}

if (pali === true){
    console.log("Es palíndrom!")
}
else{
    console.log("No es palindrom")
}


console.log("####################################################")
console.log("                         9                          ")
console.log("####################################################")

// 9.- Crea un objecte Pel·lícula que contingui informació del títol, descripció i any d’estrena.
// Fes-ne dos exemples: un amb class + new i l’altre amb declaració literal (JSON).
// Mostra les dades dels dos objectes.

class peli{
    constructor(titol, desc, any) {
        this.titol = titol
        this.desc = desc
        this.any = any
    }
} // Declaració class

let peli1 = new peli("Top Gun", "Peli d'acció d'aviadors navals", 1986)
let peli2 = new peli("Harry Potter", "Película de màgia", 2001)
console.log("//// PELI 1 ////")
console.log("Titol: " + peli1.titol)
console.log("Desc: " + peli1.desc)
console.log("Any: " + peli1.any)
console.log("//// PELI 2 ////")
console.log("Titol: " + peli2.titol)
console.log("Desc: " + peli2.desc)
console.log("Any: " + peli2.any)

let peli3 = {"Titol": "Interestellar", "Desc":"Pelicula de SCFI espacial", "any": 2014}
let peli4 = {"Titol": "Regreso al futuro", "Desc":"Pelicula de SCFI temporal", "any": 1985}

console.log("//// PELI 3 ////")
console.log("Titol: " + peli3.Titol)
console.log("Desc: " + peli3.Desc)
console.log("Any: " + peli3.any)
console.log("//// PELI 4 ////")
console.log("Titol: " + peli4.Titol)
console.log("Desc: " + peli4.Desc)
console.log("Any: " + peli4.any)