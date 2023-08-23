'use strict';

// Parametos => Se definen junto a la declaración de la función
function Sumar (a, b) {
    console.log('El resultado es: ' + (a + b));
}

// Argumentos => Se definen / otorgan, durante la ejecución de la función
Sumar(2, 4);


function Sumar (let a = 2, let b = 4) {
    console.log('El resultado es: ' + (a + b));
}