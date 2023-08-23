'use strict';

// * La función, prioriza la declaración de la variable nombre a nivel privado dentro de la ejecuión de la misma. En caso, de no existir, pasara al entorno Global a buscar la misma.

let nombre = 'Julian Global';

const Saludar = function () {
    let nombre = 'Julian Local';
    console.log(nombre);
}

Saludar();