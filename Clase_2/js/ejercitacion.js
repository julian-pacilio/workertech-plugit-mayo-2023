'use strict';

//* EJERCITACIÓN
//* Se le solicita al usuario que ingrese un número. 
//* Realice el algoritmo para informar si el número es:
    // * múltiplo de 3
    // * múltiplo 5
    // * múltiplo de ambos
    // * múltiplo de ninguno
 
let number, respuesta;

number = prompt('Ingrese un número y sepa si es múltiplo de 3 y 5, 3, 5, o ninguno');
respuesta = 'El numero ' + number;

if (number % 3 == 0) {

    if (number % 3 == 0 && number % 5 == 0) {
        alert(respuesta += ' es múltiplo de 3 y 5');
    } else {
        alert(respuesta += ' es múltiplo de 3');
    } 

} else if (number % 5 == 0) {

    alert(respuesta += ' es múltiplo de 5');

} else {

    alert (respuesta += ' no es multiplo ni de 3 ni de 5');
}

