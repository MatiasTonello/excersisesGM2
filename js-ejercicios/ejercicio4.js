/* Crear una función que evalúe un
número y devuelva su equivalente en
números romanos.

Indicar si se ha pasado el número
máximo permitido en romano (3999).*/

function convertirARomano(number) {

    if (number > 3999) {
        console.log("El máximo permitido es 3999");
        return "El máximo permitido es 3999";
    }

    const romanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let numeroRomano = "";
    for (let letraRomana in romanos) {
        numeroRomano += letraRomana.repeat(Math.floor(number / romanos[letraRomana])) // Repetimos la letra la cantidad de veces que se pueda diviendo el numero por el valor de la letra
        number = number % romanos[letraRomana] // Sacamos el resto para seguir iterando buscando mas letras
    }
    return numeroRomano;
}