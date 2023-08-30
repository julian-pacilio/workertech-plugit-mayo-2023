'use strict';

// * Versión constructora
let objetoConstructor = new Object();

// * Propiedades 
objetoConstructor.nombre = "Nombre";
objetoConstructor.apellido = "Constructor";

// * Métodos 
objetoConstructor.saludar = function() { 
    console.log(objetoConstructor.nombre + ' ' + objetoConstructor.apellido	)
}

//  -   -   -   -   -   -   -   -   -   -   -   -   

// * Versión literal
let objetoLitral = {};

// * Propiedades 
objetoLitral.nombre = "Nombre";
objetoLitral.apellido = "Literal";

// * Métodos 
objetoLitral.saludar = function() { 
    console.log(objetoLitral.nombre + ' ' + objetoLitral.apellido)
}
