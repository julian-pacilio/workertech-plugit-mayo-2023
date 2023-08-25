'use strict';

/* 

* ¿Cómo funciona?
    ● El método toString()convierte a cadena el array, generando una cadena con los elementos 
separados con comas.

* Notas:
    ● Este método NO modifica el array original.

* Sintaxis:
    ● unArray.toString();

* Parámetro/s:
    ● No tiene.
    
* Retorno:
    ● Devuelve una cadena de los elementos unidos por comas (tipo de dato: string).

*/


// Array:
let frutas = ['banana', 'limón', 'manzana', 'mango'];

// Aplicación del método:
let lasFrutas = frutas.toString();

// Resultados:
console.info('lasFrutas:', lasFrutas);