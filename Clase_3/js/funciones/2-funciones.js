'use strict';

/*
 * Limitación de las variables globales:
    ● Se sabe que dentro de una función podemos utilizar variables globales.
    ● Creemos una función que genera una etiqueta img a través del document.write().
    ● El src de la etiqueta de imagen debe obtenerse de una variable global.
    ● Ejecutando la función, se quieren mostrar dos imágenes distintas:
*/

const CrearImg = function() {

    document.write('<img src="' + rutaArchivo + '" />');
}

let rutaArchivo;
    rutaArchivo = 'items/javascript.png';
    CrearImg();

    rutaArchivo = 'items/php.png';
    CrearImg();

    
/*
    ● El problema es que se debe cambiar el valor de la variable global antes de ejecutar la función.
    ● Se puede resolver utilizando los parámetros / argumentos de la función... ¿y qué es lo que son?
*/