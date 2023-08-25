'use strict';

/* 

* ¿Cómo funciona?
    ● El método reverse() invierte el orden de los elementos de un array.

* Notas:
    ● Este método modifica el array original.

* Sintaxis:
    ● unArray.reverse();

* Parámetro/s:
    ● No tiene.

* Retorno:
    ● Devuelve un array con los elementos invertidos (tipo de dato: object Array).

*/ 

// Array:
let frutas = ['banana', 'limón', 'manzana', 'mango'];

// Aplicación del método:
frutas.reverse();

// Resultados:
console.info('frutas:', frutas);
console.info('-----');

// Aplicación del método:
frutas.sort();

// Resultados:
console.info('frutas:', frutas);
console.info('-----');

// Aplicación del método:
frutas.reverse();

// Resultados:
console.info('frutas:', frutas);