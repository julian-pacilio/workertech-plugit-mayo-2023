"use strict";

// * Ejemplo: Ingresar 5 valores numéricos. Contamos desde cero

// ? En este caso, la i empieza en 0, por lo que cumplirá la condición. Entra al ciclo

let numero, i, respuesta = '';

for ( i = 0; i < 5; i++) {
    numero = parseInt(prompt('Ingrese un numero'));
    respuesta += 'El número es ' + numero;
    respuesta += '<br/>';
}

document.write(respuesta);

// ? Luego, al terminar las acciones del ciclo, incrementa el valor de la i. Mientras i sea menor a 5, seguirá entrando

// ! Se puede comenzar a "contar" desde el valor que se desee, así como decrementar o incrementar, todo dependerá de la condición a cumplir para ver la cantidad de veces que entrará al ciclo.