class Alumno {
    static cantidadAlumnos = 0;

    nombre = 'Nombre alumno/a';
    apellido = 'Apellido alumno/a';
    materias = [];

    constructor() {
        console.log('Nuevo/a alumno/a creado');
        Alumno.cantidadAlumnos++;
    }

    ingresarNombre() {
        do {
            this.nombre = prompt('Ingrese nombre del/la alumno/a');
        } while (!isNaN(this.nombre));
    }

    ingresarApellido() {
        do {
            this.apellido = prompt('Ingrese apellido del/la alumno/a');
        } while (!isNaN(this.apellido));
    }

    set guardarMateria(materia) {
        this.materias.push(materia);
    }

    calcularPromedio() {
        let acum = 0;
        let cantidad = this.materias.length;
        for (let materia of this.materias) {
            acum += materia.leerNota;
        }
        return acum / cantidad;
    }

    mostrar() {
        let html = '';
        html += `
        <p><strong>Alumno:</strong> ${this.nombre} ${this.apellido} - <strong>Materias:</strong></p>
        <ul>`;
        for (let materia of this.materias) {
            html += `<li>${materia.mostrar()}</li>`;
        }
        html += `
        </ul>
        <p>Promedio: ${this.calcularPromedio()}</p>
        `;
        return html;
    }

    mostrarNyA() {
        return `<p>${this.nombre} ${this.apellido}</p>`;
    }
}