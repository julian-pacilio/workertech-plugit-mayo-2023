"use strict";

/* 

* ¿Cómo funciona?
    ● El método concat() realiza la unión de dos o más arrays, devolviendo uno nuevo.

* Notas:
    ● Este método NO modifica a los arrays originales.

* Sintaxis:
    ● unArray.concat(array1, array2, . . ., arrayN );

* Parámetro/s:
    ● array1 [obligatorio], array2 [opcional], . . .[opcional], arrayN [opcional]:
        ○ Será/n el/los array/s a unir para generar el nuevo array.

* Retorno:
    ● Devuelve un array con todos los elementos de los arrays concatenados (tipo de dato: object 
Array).

*/

// Arrays:
let frutas1 = ["banana", "limón"];
let frutas2 = ["manzana", "mango"];

// Aplicación del método:
let frutasA = frutas1.concat(frutas2);
let frutasB = frutas2.concat(frutas1, frutas2);

// Resultados:
console.info("frutasA:", frutasA);
console.info("-----");
console.info("frutasB:", frutasB);
