'use strict';

/* 

* ¿Cómo funciona?
    ● El método unshift() agrega nuevos elementos al principio de un array.

* Notas:
    ● Este método modifica el array original.

* Sintaxis:
    ● unArray.unshift(item1, item2, . . ., itemN );

* Parámetro/s:
    ● item1 [obligatorio], item2 [opcional], . . .[opcional], itemN [opcional]:
    ○ Será/n el/los elemento/s que agregar al principio del array.

* Retorno:
    ● Devuelve la nueva longitud del array (tipo de dato: number).

*/

// Array:
let frutas = ['banana', 'limón', 'manzana'];

// Aplicación del método:
let longitud = frutas.unshift('kiwi', 'naranja');

// Resultados:
console.info('frutas:', frutas);
console.info('-----');
console.info('longitud:', longitud);

