'use strict';

/*

* ¿Cómo funciona?
    ● El método map()aplica una función a cada elemento de un array generando uno nuevo con los resultados.

* Notas:
    ● Este método NO modifica el array original.

* Sintaxis:
    ● unArray.map(unaFuncion);

* Parámetro/s:
    ● unaFuncion[obligatorio]:
    ○ No es necesario pasarle argumentos ya que utiliza la información del array, de este modo:
    function unaFuncion(valor, indice, elArray) {
    /// Operaciones con los datos de cada elemento del array.
    }   

* Retorno:
    ● Devuelve un array con los resultados de la función aplicada a cada uno de los elementos (tipo de dato: object Array).

*/

// Array:
let lados = [1, 1, 2, 3, 5, 8];

// Aplicación del método:
let perimetros = lados.map(CalcularPerimetro);

function CalcularPerimetro(valorLado) {
    return valorLado * 4;
}

let areas = lados.map(valorLado => valorLado ** 2);

// Resultados:
console.info('perimetros:', perimetros);
console.info('-----');
console.info('areas:', areas);
console.info('-----');

// Array:
let personas = [
    { nombre: 'Jonh', apellido: 'Doe'},
    { nombre: 'Fede', apellido: 'Ramallo'},
    { nombre: 'Juan', apellido: 'Bert'},
];

// Aplicación del método:
let nombreApellidos = personas.map(ObtenerNombreApellido);
function ObtenerNombreApellido(laPersona) {
    return laPersona.nombre + ' ' + laPersona.apellido;
}

// Resultados:
console.info('nombreApellidos:', nombreApellidos);