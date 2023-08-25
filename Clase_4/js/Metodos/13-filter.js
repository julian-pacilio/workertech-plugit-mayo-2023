'use strict';

/* 

* ¿Cómo funciona?
    ● El método filter()aplica una función a cada elemento de un array generando uno nuevo 
con los resultados filtrados.

* Notas:
    ● Este método NO modifica el array original.

* Sintaxis:
    ● unArray.filter(unaFuncion);

* Parámetro/s:
    ● unaFuncion[obligatorio]:
        ○ No es necesario pasarle argumentos ya que utiliza la información del array, de este modo:
            function unaFuncion(valor, indice, elArray) {
                Mediante comparaciones "filtra" cada elemento del array. El 
                retorno deberá ser true si cumple con los requisitos del filtro, sino 
                false 
            }

*/

// Array:
let valores = [1, 1, 2, 3, 5, 8, 13, 21, 34];

// Aplicación del método:
let pares = valores.filter(EsPar);

function EsPar(valor) {
    return valor % 2 == 0 ? true : false;
}
let mayoresA10 = valores.filter(valor => valor > 10 ? true : false);

// Resultados:
console.info('pares:', pares);
console.info('-----');
console.info('mayoresA10:', mayoresA10);
console.info('-----');

// Array:
let personas = [
    { nombre: 'Agustín', apellido: 'Pietrasanta'},
    { nombre: 'Federico', apellido: 'Noto'},
    { nombre: 'Ignacio', apellido: 'Bertaccini'},
    { nombre: 'Rodolfo', apellido: 'Cignoli'},
];

// Aplicación del método:
let nombresVocalInicial = personas.filter(NombresVocalInicial);

function NombresVocalInicial(laPersona) {
    switch(laPersona.nombre.charAt(0).toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
    }
    return false;
}

// Resultados:
console.info('nombresVocalInicial:', nombresVocalInicial);