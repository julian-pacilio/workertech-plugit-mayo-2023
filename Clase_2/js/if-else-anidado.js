'use strict';

// Estructura if [else] anidamiento

// * En este caso simplemente evaluamos si una condición se cumple o no, y basándonos en eso volvemos a evaluar una vez que se haya cumplido la primer condición.

let edad, estudia

    edad    = 20; 
    estudia = true;

if ( edad >= 18) {

    if ( estudia == true ) {

        console.log('Es mayor de edad y estudia');

    } else {

        console.log('Es mayor de edad y no estudia');

    }

} else {

    if ( estudia == true ) {

        console.log('Es menor de edad y estudia');

    } else {

        console.log('Es menor de edad y no estudia');

    }

}