'use strict';

// Creo la función constructora Humano:
class Humano {
    // Propiedades públicas:
    nombre = 'Nombre';
    apellido = 'Apellido';
    // Propiedad privada:
    #dni = 12345678;

    // Constructor
    constructor() {
        console.log('Nuevo humano creado');
    }
    // Método:
    presentarse() {
        let m = `Soy ${this.nombre} ${this.apellido}, con DNI ${this.#dni}`;
        return m;
    }
    // Método con parámetro:
    estudio(materia) {
        console.log(`Estoy estudiando ${materia}`);
    }
}

// Se crea el objeto Carlos:
let carlos = new Humano();

// Se accede a la propiedades del objeto carlos
console.log(carlos.nombre, carlos.apellido, carlos.dni);

// Se ejecuta el método objeto carlos
console.log(carlos.presentarse());

// Se ejecuta el método con un parámetro objeto carlos
carlos.estudio('JavaScript');
