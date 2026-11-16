// 1.- Decideix si un número és múltiple de 3 o de 7
let position = 0;

function SaberCase (x){
    if (x % 3 === 0){
        position = 0;
      if (x % 7 === 0 && x % 3 === 0){
            position = 2
      }
    }
    else if (x % 7 === 0){
        position = 1
      if (x % 7 === 0 && x % 3 === 0){
            position = 2
      }
    }

    else {
        position = 3
    }

    return position;
}


function missatge (position) {
    SaberCase()
    switch (position) {
        case 0:
            console.log("Multiple de 3")
            break

        case 1:
            console.log("Multiple de 7")
            break

        case 2:
            console.log("Multiple de 3 i de 7")
            break

        case 3:
            console.log("No es multiple de res")
            break

    }
}

    missatge(SaberCase(9)) // Multiple de 3
    missatge(SaberCase(21))// Multiple de 7

console.log("###################################################")

// 2.- Donats dos enters (x, y), dir quins d’ells estan en el rang de 10 a 50 inclosos. Utilitza un operador ternari.

    let x = 34;
    let y = 60;

    x = x > 10 && x < 50 ? console.log("Dins del rang") : console.log("No està dins del rang")
    x = y > 10 && y < 50 ? console.log("Dins del rang") : console.log("No està dins del rang")

// 3.- Donat un enter (x), mostra per pantalla la qualificació de l’examen:

    function SaberNota(x) {
        if (x < 4.99) {
            return "Suspès";
        } else if (x >= 5 && x < 5.99) {
            return "Suficient"
        } else if (x >= 6 && x < 6.99) {
            return "Bé"
        } else if (x >= 7 && x < 8.99) {
            return "Notable"
        } else if (x >= 9 && x <= 10) {
            return "Excelent"
        }
    }

    console.log(SaberNota(6.4562))

console.log("###################################################")


// 5.- Donat un enter (x), troba el màxim número n tal que 1+2+3+...+n <= x
// Exemple: si x=15, n seria 5 ( 1 + 2 +3 +4 +5 = 15)


function max_n (x){
    let total = 0;
    let n = 0;

    for (let i = 0; i <= x; i++){
        if (total + i > x){
            break
        }
        total += i;
        n = i
    }
    console.log("X = " + x + ", el numero maxim de numeros = " + n + ", suma total = " + total)
    return x;
}

max_n(15)

console.log("###################################################")


// 6.- Donat un String (x), sumar els caràcters que siguin números.

function SumaString (a) {
        let suma = 0;
        for (let i = 0; i < a.length; i++){
            if (!isNaN(a[i])){
                suma += Number(a[i])
            }
        }
    console.log(suma)
}

SumaString("Hola car2aco2la") // 4

console.log("###################################################")



// 7.- Donat 3 enters, ordena de major a menor

function OrdenarMajor(enter1, enter2, enter3){
    console.log("Enters desordenats: " + enter1, enter2, enter3)
    let enters = [enter1, enter2, enter3]
    let aux = 0;
    for (let i = 0; i < enters.length; i++){
        for (let j = 0; j < enters.length - 1 - i; j++){
            if (enters[j] < enters[j+1]){
                aux = enters[j]
                enters[j] = enters[j+1];
                enters[j+1] = aux
            }
        }
    }
    console.log("Enters ordenats de major a menor " + enters)
    return enters
}

OrdenarMajor(1,2,5)

console.log("###################################################")


// 8.- Donat un enter (x), fes un bucle que digui des del 0 a x, quins són parells i quins senars.

function ParellsSenars (x){
        for (let i = x; x > 0; x--){
            if (x % 2 === 0){
                console.log("Parell: " + x)
            }
            else {
                console.log("Senar: " + x)
            }
        }
}

function ParellsSenarsArray (x){
    let parells = []
    let senars = []
    for (let i = x; x > 0; x--){
        if (x % 2 === 0){
            parells.push(x)
        }
        else {
            senars.push(x)
        }
    }
    console.log("Parells " + parells)
    console.log("Senars " + senars)
}


ParellsSenars(10)
ParellsSenarsArray(10)

console.log("###################################################")


// 9.- Realitza una funció que, utilitzant bucles, mostri per pantalla el següent patró:
// *
// * *
// * * *
// * * * *
// * * * * *

function arboldenavidad() {
    let num = "";

    for (let i = 1; i < 6; i++) {
        if (i === 1) {
            num = "*";
        } else {
            num = num + " *";
        }
        console.log(num);
    }
}

arboldenavidad()

console.log("###################################################")

// 10.- Utilitza un do..while per sumar els múltiples de 3 i 5 fins al número 1000.

function NoSeQuePoner () {
    let suma = 0;
    let i = 0
    do {
        if (i % 3 === 0 || i % 5 === 0){
            suma = suma + i
        }
        i++
    } while (i <= 1000)
    console.log(suma)
}

NoSeQuePoner()

console.log("###################################################")


// 11.- Modifica l’exercici 9 perquè només mostri les línies amb estrelles imparelles. Utilitza la sentència continue.

function arboldenavidad2() {
    let num = "";

    for (let fila = 1; fila < 6; fila++) {
        if (fila % 2 === 0){
            num = num + "* ";
            continue
        }
        num = num + "* ";


        console.log(num)

    }
}

arboldenavidad2()

console.log("###################################################")


// 12.- Donat un enter de longitud par, intercanvia els dígits adjacents. Exemple: 123456 → 214365

function intercanviarpos(x) {
    let digits = String(x);
    let resultat = "";
    if (x % 2 === 0){
        for (let i = 0; i < digits.length; i += 2) {
            resultat += digits[i + 1] + digits[i];
        }
        console.log(Number(resultat));
    } else {
        console.log("Imparell!")
    }
}

intercanviarpos(123456);

console.log("###################################################")
