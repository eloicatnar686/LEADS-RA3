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
let paraula = "Hola mundo"
let contador = 0;
function Vocals(){
    for (let i = 0; i < paraula.length; i++){
        if (paraula.charAt(i) === "a" || paraula.charAt(i) === "e" || paraula.charAt(i) === "i" || paraula.charAt(i) === "o" || paraula.charAt(i) === "u"){
            contador++;
        }
    }
    return contador;

}
Vocals()
console.log("Numero de vocals = " + contador)
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
