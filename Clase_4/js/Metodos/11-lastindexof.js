'use strict';

/* 

* ¿Cómo funciona?
    ● El método lastIndexOf() busca el elemento especificado en el array y devuelve su índice.

* Notas:
    ● Este método NO modifica el array original.
    ● El primer índice siempre será 0, empiece donde se empiece.
    ● Solamente devuelve la primera aparición del elemento buscado.

* Sintaxis:
    ● unArray.lastIndexOf(busqueda, inicio );

* Parámetro/s:
    ● busqueda [obligatorio]:
        ○ El valor a buscar en el array (number, string, boolean, null, undefined).
    ● inicio [optativo]:
        ○ Un entero indica el índice en dónde comenzar la búsqueda inclusive, desde el final del array hacia el comienzo del mismo.
        ○ Si es un número negativo, se indica la cantidad de índices desde el final del array.
        ○ Si se omite, se iniciará la búsqueda desde el final del array.

* Retorno:
    ● Devuelve el índice de la primera aparición del elemento buscado (tipo de dato: number).
    ● Si no encuentra el elemento, devolverá -1

*/


// Array:
let colores = ['rojo', 'verde', 'azul', 'rojo', 'blanco', 'negro', 'verde'];

// Aplicación del método:
let color1 = colores.lastIndexOf('rojo');
let color2 = colores.lastIndexOf('rojo', 1);
let color3 = colores.lastIndexOf('verde', -3);
let color4 = colores.lastIndexOf('amarillo');

// Resultados:
console.info('color1:', color1);
console.info('-----');
console.info('color2:', color2);
console.info('-----');
console.info('color3:', color3);
console.info('-----');
console.info('color4:', color4);