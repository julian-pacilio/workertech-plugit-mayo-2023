let alumno = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    presentarse: function() {
        return `Soy ${this.nombre} ${this.apellido}`;
    }
};

let julian = alumno;
julian.nombre = 'Julian';

let nicolas = alumno;
nicolas.nombre = 'Nicolás';