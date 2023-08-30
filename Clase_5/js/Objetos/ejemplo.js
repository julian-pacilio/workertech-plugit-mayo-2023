'use strict';

// Creo el objeto PersonaA:
let PersonaA = {
    Nombre: 'Julian',
    Apellido: 'Pacilio',
    Presentarse: function () {
        console.log(`Mi nombre es ${PersonaA.Nombre} ${PersonaA.Apellido}`);
    }
}

// Creo el objeto PersonaB:
let PersonaB = {
    Nombre : 'Nicolas',
    Apellido: 'Bogado',
    Presentarse: function () {
        console.log(`Mi nombre es ${this.Nombre} ${this.Apellido}`);
    }
}

// Ejecuto los métodos:
PersonaA.Presentarse();
PersonaB.Presentarse();