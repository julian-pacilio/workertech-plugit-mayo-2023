// Se crearan nuevos objetos a partir de la clase.
// En consecuencia, estamos preparando propiedades y métodos "base".
class Auto {
    // Propiedad estática pública:
    static fabrica = 'General Motors';
    static autosFabricados = 0;

    static mostrarGerentes() {
        console.log('Los gerentes son Juli y Nico');
    }

    // Propiedades:
    marca = 'Marca del auto';       // Pública
    modelo = 'Modelo del auto';     // Pública
    #numeroChasis = 1111;           // Privada
    #propietario = null;

    // Método constructor (se ejecuta automágicamente cuando se crea el objeto y por única vez):
    constructor(marca = 'Marca', modelo = 'Modelo', chasis = null) {
        console.log('Hemos creado un nuevo auto');
        this.marca = marca;
        this.modelo = modelo;
        this.#numeroChasis = chasis;
        // Cada vez que se crea un nuevo auto, altero la propiedad estática:
        Auto.autosFabricados++;
    }

    // Set de la propiedad pública marca:
    set establecerMarca(marca) {
        this.marca = marca;
    }

    // Get de la propiedad pública marca:
    get obtenerMarca() {
        return this.marca;
    }

    // Set de la propiedad pública modelo:
    set establecerModelo(modelo) {
        this.modelo = modelo;
    }

    // Get de la propiedad pública modelo:
    get obtenerModelo() {
        return this.modelo;
    }

    // Set de la propiedad privada numeroChasis:
    set establecerChasis(chasis) {
        this.#numeroChasis = chasis;
    }

    // Get de la propiedad privada numeroChasis:
    get obtenerChasis() {
        return this.#numeroChasis;
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

let autito1 = new Auto('Fiat', '128SE', 1112);
let autito2 = new Auto('Chevrolet', 'Corsa', 1113);
let autito3 = new Auto('Renault', '12', 1114);

let autito4 = new Auto();
autito4.establecerMarca = 'Audi';
autito4.establecerModelo = 'A3';
autito4.establecerChasis = 4444;