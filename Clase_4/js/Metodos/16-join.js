"use strict";

/* 

* ¿Cómo funciona?
    ● El método join()convierte a cadena el array, generando una cadena con los elementos 
separados con un elemento unidor.

* Notas:
    ● Este método NO modifica el array original.

* Si1ntaxis:
    ● unArray.join(unidor);

* Parámetro/s:
    ● unidor [optativo]:
        ○ Especifica el string que se utilizará como unidor entre los elementos del array.
        ○ Si se omite, el unidor será la coma.

* Retorno:
    ● Devuelve una cadena de los elementos unidos (tipo de dato: string).

*/

// Array:
let frutas = ["banana", "pera", "manzana", "limón"];

// Aplicación del método:
let licuado = frutas.join();
let ingredientes = frutas.join(" y ");

// Resultados:
console.info("licuado:", licuado);
console.info("-----");
console.info("ingredientes:", ingredientes);
