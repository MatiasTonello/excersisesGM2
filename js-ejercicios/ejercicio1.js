/* EJERCICIO 1: ADICION Y RESTA
Crear una función que permita sumar y
otra restar un array de números con un
numero */

function addition(array, numero){

    let result =  numero + parseInt(array.join(""));
    let arrayToString = result.toString().split("");
    let newArray = [];
    for(let i = 0; i<arrayToString.length; i++){
        newArray.push(parseInt(arrayToString[i]));
    }
    return newArray;
}

function rest(array, numero){
    let result =parseInt(array.join("") - numero );
    let newArray = [];
    if(result > 0){
    let arrayToString = result.toString().split("");
    
    for(let i = 0; i<arrayToString.length; i++){
        newArray.push(parseInt(arrayToString[i]));      
    }
    } else {
        return 0;
    }
    return newArray;
}
