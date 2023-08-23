"use strict";

// * Ejemplo: Ingresar valores numéricos mientras lo desee el usuario

// ? En este caso la variable confirmar guardará la respuesta del usuario

let numero, confirmar;
let mensaje = '';

do {
    numero = parseInt(prompt('Ingrese un numero'));
    mensaje += 'El número es ' + numero;
    mensaje += '<br/>';
    confirmar = confirm('¿Desea ingresar otro valor?');
}
while ( confirmar == true ) // while ( confirmar ) // while (confirm('¿Desea ingresar otro valor?'))

document.write(mensaje);

// ? Si el usuario desea continuar, hará click en "Aceptar" y tendremos un true (el valor que hace cumplir la condición del ciclo)

// ! Si el usuario desea salir, hará click en "Cancelar" y tendremos un false (no vuelve a entrar al ciclo)