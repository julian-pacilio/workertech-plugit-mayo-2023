'use strict';

// Estructura if [else if] [else]

// * En este caso simplemente evaluamos si una condición se cumple o no, y basándonos en eso volvemos a evaluar ona y otra vez hasta poder cubrir los posibles escenarios.

let edad, estudia

    edad    = 20; 
    estudia = true;

if( edad >= 18 ) {

    console.log('Es mayor de edad');

} else if ( edad >= 18 && estudia == true ) {

    console.log('Es mayor de edad y estudia');

} else if ( edad >= 18 && estudia != true ) {

    console.log('Es mayor de edad y no estudia');

} else if (edad <= 18) {

    console.log('Es menor de edad');

} else if (edad <= 18 && estudia == true) {

    console.log('Es menor de edad y estudia');

} else {

    console.log('Es menor de edad y no estudia');

}