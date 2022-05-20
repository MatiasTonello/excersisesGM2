/* Crear una función que evalúe si un array
tiene al menos un elemento par y si al
sumar dos de sus elementos el
resultado es igual a un elemento par del
mismo array.

Si hay un numero par y ademas hay
dos elementos que sumados dan el
mismo numero par entonces se
devuelve true. */


function parity(array){

    let arrayPares = array.filter(numero => numero % 2 == 0); /* Devuelve mi array de pares */
    let pareja = false;
    
    if(arrayPares.length === 0) return false;
    
    for(let i = 0; i<array.length; i++){
        for(let j = i+1; j<array.length; j++){
            let suma = array[i] + array[j];
            if(suma === arrayPares.find(numero => numero === suma)){
                pareja = true;
            }
            suma = 0;
        }
    }
    return pareja;
}
