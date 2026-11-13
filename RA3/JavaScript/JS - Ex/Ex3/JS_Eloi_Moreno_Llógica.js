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
