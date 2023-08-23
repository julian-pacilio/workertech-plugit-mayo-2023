"use strict";

// * Ejemplo: Ingresar valores numéricos mientras el valor no sea 0

// ? En este caso, entrará al menos una vez

let numero, respuesta = '';

do {
    numero = parseInt(prompt('Ingrese un numero'));
    respuesta += 'El número es ' + numero;
    respuesta += '<br/>';
}
while ( numero != 0 ) 

document.write(respuesta);

// ? Luego, al terminar las acciones del ciclo, volverá a preguntar. Mientras numero sea diferente a 0, seguirá entrando