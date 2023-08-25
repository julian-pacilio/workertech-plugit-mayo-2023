'use strict';

// Creación del tablero:
// let tablero = [];
// tablero[0] = ['N', 'N', 'A', 'N', 'N', 'A', 'N', 'A'];

// tablero[1] = ['A', 'A', 'A', 'A', 'A', 'A', 'N', 'A'];

// tablero[2] = ['A', 'N', 'N', 'N', 'N', 'A', 'N', 'A'];

// tablero[3] = ['A', 'A', 'A', 'A', 'A', 'A', 'N', 'A'];

// tablero[4] = ['A', 'A', 'N', 'N', 'N', 'A', 'N', 'A'];

// tablero[5] = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];

// tablero[6] = ['N', 'A', 'N', 'N', 'N', 'A', 'A', 'N'];

// tablero[7] = ['N', 'A', 'A', 'A', 'A', 'A', 'A', 'N'];


let tablero = [
//    0    1    2    3    4    5    6    7
    ['N', 'N', 'A', 'N', 'N', 'A', 'N', 'A'], // 0
    ['A', 'A', 'A', 'A', 'A', 'A', 'N', 'A'], // 1
    ['A', 'N', 'N', 'N', 'N', 'A', 'N', 'A'], // 2
    ['A', 'A', 'A', 'A', 'A', 'A', 'N', 'A'], // 3
    ['A', 'A', 'N', 'N', 'N', 'A', 'N', 'A'], // 4
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'], // 5
    ['N', 'A', 'N', 'N', 'N', 'A', 'A', 'N'], // 6
    ['N', 'A', 'A', 'A', 'A', 'A', 'A', 'N'], // 7
];


// Funciones para las acciones de los botones:
const MostrarTablero = () => {
    console.table(tablero);
}

const MostrarFilaIndice4 = () => {
    console.table(tablero[4]);
}

const MostrarCoordenadas21 = () => {
    console.log(tablero[2][1]);
}

const MostrarCoordenadas67 = () => {
    console.log(tablero[6][7]);
}

const MostrarCoordenadas = () => {
    let f, c;
    do {
        f = parseInt(prompt('Índice de la fila'));
    } while (!(f >= 0 && f <= 7))
    do {
        c = parseInt(prompt('Índice de la celda'));
    } while (!(c >= 0 && c <= 7))
    console.log(tablero[f][c]);
}