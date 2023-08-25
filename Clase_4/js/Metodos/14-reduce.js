'use strict';

/* 

* ¿Cómo funciona?
    ● El método reduce()aplica una función "reductora" a cada elemento de un array generando un 
único valor.

* Notas:
    ● Este método NO modifica el array original.

* Sintaxis:
    ● unArray.reduce(funcionReductora );

* Parámetro/s:
    ● funcionReductora [obligatorio]:
        ○ Debe tener la siguiente estructura:
        const funcionReductora = (acumulador, valor) => {
        return acumulador + valor;
        }

* Retorno:
    ● Devuelve un valor con la suma o concatenación de los elementos del array: number|string.

*/

// Array:
let notas = [9, 6, 1, 4];


// Aplicación del método:
let resultado = notas.reduce((acumulador, valor) => acumulador + valor);

// Exta:
let promedio = resultado / notas.length;

// Resultados:
console.info('resultado:', resultado);
console.info('-----');
console.info('promedio:', promedio);

let materias = [
    {
        nota: 1,
    },
    {
        nota: 3,
    }
]

materias.reduce((acum, materia) => acum + materia.nota);