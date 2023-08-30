class Materia {
    nombre = 'Nombre materia';
    nota = 0;

    constructor() {
        console.log('Nueva materia creada');
    }

    get leerNota() {
        return this.nota;
    }

    ingresarNombre() {
        do {
            this.nombre = prompt('Ingrese nombre de la materia');
        } while (!isNaN(this.nombre));
    }

    ingresarNota() {
        do {
            this.nota = parseInt(prompt('Ingrese nota de la materia'));
        } while (!(this.nota >= 1 && this.nota <= 10));
    }

    mostrar() {
        return `Materia: ${this.nombre} - Nota: ${this.nota}`;
    }
}