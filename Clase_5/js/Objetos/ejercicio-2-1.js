'use strict';

// Variales:
let html = '';

// Persona:
let Persona = {
    nombre: 'Julian',
    apellido: 'Pacilio',
    edad: 24,
    email: 'email@gmail.com',
    yoSoy: function () {
        return `<p>Mi nombres es ${this.nombre} ${this.apellido}</p>`;
    },
    tengo: function () {
        return `<p>Tengo ${this.edad} años</p>`;
    },
    contacto: function () {
        return `<p><a href="mailto:${this.email}">${this.email}</a></p>`;
    }
};

// Ejecución:
html += Persona.yoSoy();
html += Persona.tengo();
html += Persona.contacto();

document.getElementById('info').innerHTML = html;