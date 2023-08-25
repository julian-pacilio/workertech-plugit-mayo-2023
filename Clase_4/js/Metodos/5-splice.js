'use strict';

/* 

* ¿Cómo funciona?
    ● El método splice() agrega y remueve elementos de un array, según el índice que se indique.

* Notas:
    ● Este método modifica el array original.

* Sintaxis:
    ● unArray.splice(indice, cantidad, item1, item2, . . ., itemN );

* Parámetro/s:
    ● indice [obligatorio]:
        ○ Un entero indica el índice en donde agregar o remover elementos.
        ○ Si es un número negativo, se indica la cantidad de índices desde el final del array.
    ● cantidad [obligatorio]:
        ○ Un entero positivo indica la cantidad de elementos a remover.
        ○ Si es cero, no se remueve nada.
    ● item1 [opcional], item2 [opcional], . . .[opcional], itemN [opcional]:
        ○ Será/n el/los elemento/s para agregar al array.

* Retorno:
    ● Devuelve un array con el o los elementos removidos (tipo de dato: object Array).
    ● Si no se remueve ningún elemento, devolverá un array vacío.

*/

// Array:
let frutas = ['banana', 'limón', 'manzana', 'mango'];

// Aplicación del método:
let removidos1 = frutas.splice(1, 1, 'kiwi', 'naranja');

// Resultados:
console.info('frutas:', frutas);
console.info('removidos1:', removidos1);
console.info('-----');

// Aplicación del método:
let removidos2 = frutas.splice(-3, 2);

// Resultados:
console.info('frutas:', frutas);
console.info('removidos2:', removidos2);