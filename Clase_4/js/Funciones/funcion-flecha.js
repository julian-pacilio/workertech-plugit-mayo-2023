'use strict';

/* 
Instrucción () => {}:
    ● Esta instrucción reemplaza a const unaFuncion = function(){} por
    const unaFuncion = () => {} principalmente para simplificar la escritura de función llamadas "callback", que son la respuesta a la ejecución de una función o método que las contienen.

    ● Si la función flecha tiene al menos un parámetro, pero solamente uno, se pueden omitir los paréntesis, es decir: param => {}

    ● Si la función flecha tiene solamente el retorno, se pueden omitir las llaves, es decir:
        ○ () => 'Aquello que se quiere retornar'
        ○ param => 'Aquello que se quiere retornar'

*/

function unaFuncion () { /* algo de código */ }

const unaFuncionConstante = function() { /* algo de código */ }

const Sumar = (a, b) => { 
    
    return console.log(a + b);
}
Sumar(2, 1)

const Saludar = () => { 
    
    return console.log('Te saludo');
}
Saludar()

//const Saludar = (nombre = 'Nombre') => console.log('Hola ' + nombre)
