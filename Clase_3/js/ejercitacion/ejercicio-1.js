"use strict";

// * Pedirle información al usuario

// ? 1)
// ? Declaramos nuestra función dentro de una constante y luego establecemos los parámetros que necesita la misma. "nombre, apellido, edad"

const Saludar = function (nombre, apellido, edad) {
  console.log("Hola " + nombre + " " + apellido + " " + edad);
};

// ? 2)
// ? Declaración de variables a utilizar

let nombre, apellido, edad;

// * En este caso, para validar que el usuario no ingrese valores "vacios", podemos utilizar la función isNaN().


do {
  nombre = prompt("Ingrese su nombre");
} while (!isNaN(nombre));

do {
  apellido = prompt("Ingrese su apellido");
} while (!isNaN(apellido));

do {
  edad = parseInt(prompt("Ingrese su edad"));
} while (isNaN(edad));

// ? 3)
// ? Ejecutamos la función con los "ARGUMENTOS" necesarios, los cuales contienen los valores insertados por el usuario

Saludar(nombre, apellido, edad);
