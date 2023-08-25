'use strict';

/*

* ¿Cómo funciona?
    ● El método slice() devuelve en un nuevo array los elementos seleccionados del array original.
    
* Notas:
    ● Este método NO modifica el array original.

* Sintaxis:
    ● unArray.slice(inicio, final);

* Parámetro/s:
    ● inicio [optativo]:
        ○ Un entero indica el índice desde dónde comienza la selección inclusive.
        ○ Si es un número negativo, se indica la cantidad de índices desde el final del array.
        ○ Si se omite, se seleccionará desde el índice 0.
    ● final [optativo]:
        ○ Un entero indica el índice en dónde termina la selección exclusive.
        ○ Si es un número negativo, se indica la cantidad de índices desde el final del array.
        ○ Si se omite, se seleccionará hasta el final del array.

* Retorno:
    ● Devuelve un array con el o los elementos seleccionados (tipo de dato: object Array).

*/

// Array:
let frutas = ['banana', 'limón', 'manzana', 'kiwi'];

// Aplicación del método:
let frutas1 = frutas.slice(2);
let frutas2 = frutas.slice(-1);
let frutas3 = frutas.slice(1, 3);
let frutas4 = frutas.slice(-2, -1);

// Resultados:
console.info('frutas1:', frutas1);
console.info('-----');
console.info('frutas2:', frutas2);
console.info('-----');
console.info('frutas3:', frutas3);
console.info('-----');
console.info('frutas4:', frutas4);