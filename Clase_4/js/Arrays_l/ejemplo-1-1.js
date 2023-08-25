'use strict';

let colores = [
    'red',
    'green',
    'blue',
];

const Agregar = function () {

    // Declaro la variable privada color para poder almacenar el ingreso del usuario
    let color;

    // Le pido al usuario que ingrese colores, validando que no sea un string vacio o un numero
    do {
        color = prompt('Ingrese un color');
    } while (!isNaN(color));

    // Agrego mediante el método push al array colores, el color cargado
    colores.push(color);
}

const Mostrar = function () {
    console.log(colores);
    console.table(colores);
}