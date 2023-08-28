"use strict";

// Creo la función constructora Humano:
class Humano {
  // Propiedades públicas:
  // nombre = 'Nombre';
  // apellido = 'Apellido';
  // Propiedad privada:
  #dni = 12345678;

  // Constructor
  constructor(nombre = "sin nombre", apellido = "sin apellido", dni = 1111111) {
    // Guardamos los parámetros en propiedades públicas:
    this.nombre = nombre;
    this.apellido = apellido;
    this.#dni = dni;
    console.log(`Nuevo/a humano/a creado/a, ${this.nombre} ${this.apellido}`);
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

// Se crea el objeto carlos:
let carlos = new Humano("Carlos", "Perez", 23456789);

// Se accede a la propiedades del objeto carlos
console.log(carlos.nombre, carlos.apellido, carlos.dni);

// Se ejecuta el método objeto carlos
console.log(carlos.presentarse());

// Se ejecuta el método con un parámetro objeto carlos
carlos.estudio("Javascript");

// Creamos otro objeto:
let maria = new Humano("María", "Perez", 98765432);
