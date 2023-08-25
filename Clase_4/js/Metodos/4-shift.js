"use strict";

/* 

* ¿Cómo funciona?
    ● El método shift() remueve el primer elemento de un array.

* Notas:
    ● Este método modifica el array original.

* Sintaxis:
    ● unArray.shift();

* Parámetro/s:
    ● No tiene.

* Retorno:
    ● Devuelve el elemento removido (tipo de dato: cualquiera).

*/

// Array:
let frutas = ["banana", "limón", "manzana"];

// Aplicación del método:
let fruta = frutas.shift();

// Resultados:
console.info("frutas:", frutas);
console.info("-----");
console.info("fruta:", fruta);
