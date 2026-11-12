// 1.- Passa el teu nom i cognoms com a paràmetres i els mostri per consola.
function MostraNom (nom, cognom){
    console.log("Hola " + nom + " " + cognom)
}
MostraNom("Eloi", "Moreno")
console.log("///////////////////////////////////////////////////////")

// 2.- Passa un valor per paràmetre i mostri de quin tipus és.
function TipusVar(variable){
    console.log(typeof variable)
}
TipusVar("Hello")
console.log("///////////////////////////////////////////////////////")

// 3.- Mostri la data actual

function DataActual(date){
    console.log(date)
}
DataActual("10/11/2026")
console.log("///////////////////////////////////////////////////////")

// 4.- Declara una variable dins d’una funció i mostra el seu valor fora d’aquesta. Què passa? Perquè?
function Declarar(){
    let variable = 0;
}
//console.log(variable)
console.log("///////////////////////////////////////////////////////")

// 5.- Passa’t un String, retorni el número de vocals que té
let contador = 0;
function Vocals(paraula){
    for (let i = 0; i < paraula.length; i++){
        if (paraula.charAt(i) === "a" || paraula.charAt(i) === "e" || paraula.charAt(i) === "i" || paraula.charAt(i) === "o" || paraula.charAt(i) === "u"){
            contador++;
        }
    }
    return contador;

}
console.log("Numero de vocals = " + Vocals("Cocacola es una compañia"))
console.log("///////////////////////////////////////////////////////")

// 6.- Passa 3 enters com a paràmetres (el tercer ha de tenir un valor per defecte) i retorni la suma dels tres.
function suma(par1,par2,par3 = 2){
    return par1+par2+par3
}

console.log("Suma = " + suma(1,3))

console.log("///////////////////////////////////////////////////////")

// 7.- Ha de cridar la funció de l’exercici 3 i retornar el resultat de la funció de l’exercici 6.

function CallBack(num1, num2){
    DataActual("10/11/2026")
    return suma(num1,num2)
}
console.log(CallBack(1,4))

console.log("///////////////////////////////////////////////////////")

// 8.- Passa’t dos enters, retornar true si un d’ells és igual a 30 o si la seva suma és igual a 30.

let boolean = false;

function SumaOIgual(num1, num2){
    if(num1 + num2 === 30 || num1 === 30 || num2 === 30){
        boolean = true
    }
    return boolean
}

console.log("La suma dona 30 o algun numero es 30? " + SumaOIgual(2,7))
console.log("///////////////////////////////////////////////////////")

// 9.- Repeteix l’exercici anterior però com a funció anònima.

let boolean2 = false;

funko2 = function (num1, num2){
    if(num1 + num2 === 30 || num1 === 30 || num2 === 30){
        boolean2 = true
    }
    return boolean2;
}

console.log("La suma dona 30 o algun numero es 30? " + funko2(28,2))
console.log("///////////////////////////////////////////////////////")


// Funcions fletxa

// 10.- Passa’t dos valors, retorni cert o falç si el valor i el tipus de dades són el mateix.

let cert0fals = (a,b) => a === b;

console.log(cert0fals(3,3)) // true
console.log(cert0fals("a",4)) // false

console.log("///////////////////////////////////////////////////////")

// 11.- Passa’t un valor, realitzi l’arrel quadrada i retorni el valor amb dos decimals.

let arrel = (a) => {return Math.sqrt(a)}
console.log(Arrel(2).toFixed(2))


