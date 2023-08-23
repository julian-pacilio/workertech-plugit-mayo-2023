"use strict";

// * Ejemplo: Ingresar valores numéricos mientras el valor no sea 0

// ? En este caso, la condición dara true la primera vez, ya que numero es undefined

let numero, respuesta = '';

while ( numero != 0 ) {
    numero = parseInt(prompt('Ingrese un numero'));
    respuesta += 'El número es ' + numero;
    respuesta += '<br/>';
}

document.write(respuesta);

// ? Luego, al terminar las acciones del ciclo, volverá a preguntar. Mientras numero sea diferente a 0, seguirá entrando