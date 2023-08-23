'use strict';

/* 
 * Inicialización por defecto y verificación

● Retomando el ejemplo inicial, podríamos verificar si se recibe una ruta del archivo.
● En caso de no recibir el argumento, se tienen dos opciones:
    ○ Colocar un valor por defecto (sería un parámetro opcional).
    ○ Colocar un valor vacío, para verificar con el condicional (sería un parámetro obligatorio).
*/

const CrearImgOpcional = function(rutaArchivo = 'items/javascript.png') {

    document.write('<img src="' + rutaArchivo + '" />');
}

const CrearImgObligatorio = function(rutaArchivo = null) {

    if (rutaArchivo == null) {
        console.error('No se recibió un valor válido');

    } else {
        document.write('<img src="' + rutaArchivo + '" />');
    }

}

//CrearImgOpcional();
//CrearImgOpcional('items/php.png');

CrearImgObligatorio();
CrearImgObligatorio('c.png');
CrearImgObligatorio('items/c.png');
