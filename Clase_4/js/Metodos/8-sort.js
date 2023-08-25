'use strict';

/* 

* ¿Cómo funciona?
    ● El método sort() ordena los elementos de un array.
    ● El orden puede ser alfabético o numérico, así como descendente o ascendente.

* Notas:
    ● Este método modifica el array original.

* Sintaxis:
    ● unArray.sort(funcionComparadora );

* Parámetro/s:
    ● funcionComparadora [optativo]:
        ○ Devolverá un negativo, cero o un positivo según los argumentos, de la siguientes manera:

        ■ (a, b) => {
                if (a > b) { return 1; // -1 para descendente  }
                if (a < b) { return -1; // 1 para descendente  }
                return 0;
        }

        ■ Para números: (a, b) => a-b // ASCENDENTE 
                        (a, b) => b-a // DESCENDENTE 

Retorno:
● Devuelve un array con los elementos ordenados (tipo de dato: object Array).

*/


// Como la consola muestra el último valor del objeto, debo crear 3 objetos para el ejemplo:

// Arrays de string:
let frutas1 = ['banana', 'limón', 'manzana', 'kiwi'];
let frutas2 = ['banana', 'limón', 'manzana', 'kiwi'];

// Aplicación del método:
frutas1.sort((a, b) => b-a);

// Resultados:
console.info('frutas1:', frutas1);

// Aplicación del método:
frutas2.sort((a, b) => {
    if (a > b) { return -1; }
    if (a < b) { return 1; }
    return 0;
});

// Resultados:
console.info('frutas2:', frutas2);
console.info('-----');

// Arrays de numbers:
let numeros1 = [40, 100, 1, 5];
let numeros2 = [40, 100, 1, 5];

// Aplicación del método:
let orden1 = numeros1.sort();
let min = orden1[0];
let orden2 = numeros2.sort((a, b) => b-a);
let max = orden2[0];

// Resultados:
console.info('orden1:', orden1);
console.info('min:', min);
console.info('orden2:', orden2);
console.info('max:', max);
console.info('-----');

// Arrays de objects:
let datos1 = [
    {
        nombre: 'Mari',
        nacimiento: 1988
    },
    {
        nombre: 'Juan',
        nacimiento: 1989
    },
    {
        nombre: 'Fede',
        nacimiento: 1985
    },
];
let datos2 = datos1.slice();
let datos3 = datos1.slice();
let datos4 = datos1.slice();

// Ordenar ascendete por nombre:
datos1.sort((a, b) => {
    if (a.nombre > b.nombre) { return 1; }
    if (a.nombre < b.nombre) { return -1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nombre ascendete:', datos1);

// Ordenar ascendete por nacimiento:
datos2.sort((a, b) => {
    if (a.nacimiento > b.nacimiento) { return 1; }
    if (a.nacimiento < b.nacimiento) { return -1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nacimiento ascendete:', datos2);

// Ordenar descendete por nombre:
datos3.sort((a, b) => {
    if (a.nombre > b.nombre) { return -1; }
    if (a.nombre < b.nombre) { return 1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nombre descendete:', datos3);

// Ordenar ascendete por nacimiento:
datos4.sort((a, b) => {
    if (a.nacimiento > b.nacimiento) { return -1; }
    if (a.nacimiento < b.nacimiento) { return 1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nacimiento descendete:', datos4);