// Se crearan nuevos objetos a partir de la clase.
// En consecuencia, estamos preparando propiedades y métodos "base".
class Auto {
    // Propiedades:
    marca = 'Marca del auto';       // Pública
    modelo = 'Modelo del auto';     // Pública
    #numeroChasis = 1111;           // Privada
    #propietario = null;

    // Método constructor (se ejecuta automágicamente cuando se crea el objeto):
    constructor() {
        console.log('Hemos creado un nuevo auto');
    }

    // Métodos público:
    modeloMarca() {
        // Un método de la clase puede acceder a una propiedad privada.
        console.log(`Marca: ${this.marca} - Modelo: ${this.modelo} - Número de chasis: ${this.#numeroChasis}`);
        // Un método de la clase puede ejecutar a un método privado.
        this.#mostrarPropietario();
    }

    // Método privado:
    #mostrarPropietario() {
        console.log(`Propietario: ${this.#propietario}`);
    }
}

let autito1 = new Auto();
let autito2 = new Auto();
let autito3 = new Auto();