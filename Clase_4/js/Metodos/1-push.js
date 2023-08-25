'use strict';

/* 

* ¿Cómo funciona?
    ● El método push() agrega nuevos elementos al final de un array.

* Notas:
    ● Este método modifica el array original.

* Sintaxis:
    ● unArray.push(item1, item2, . . ., itemN );

* Parámetro/s:
    ● item1 [obligatorio], item2 [opcional], . . .[opcional], itemN [opcional]:
    ○ Será/n el/los elemento/s que agregar al final del array.

* Retorno:
    ● Devuelve la nueva longitud del array (tipo de dato: number).

*/

// Array:
let frutas = ['banana', 'limón', 'manzana'];

// Aplicación del método:
let longitud = frutas.push('kiwi', 'naranja');

// Resultados:
console.info('frutas:', frutas);
console.info('-----');
console.info('longitud:', longitud);