// 1.- Passa el teu nom i cognoms com a paràmetres i els mostri per consola.
function MostraNom (nom, cognom){
    console.log("Hola " + nom + " " + cognom)
}
MostraNom("Eloi", "Moreno")

// 2.- Passa un valor per paràmetre i mostri de quin tipus és.
function TipusVar(variable){
    console.log(typeof variable)
}
TipusVar("Hello")

// 3.- Mostri la data actual
function DataActual(){
    const date = new Date();
    console.log(date)
}
DataActual()

