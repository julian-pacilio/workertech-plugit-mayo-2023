'use strict';

let alumno = [];

alumno['Apellido'] = 'Franco';
alumno['Nombre']   = 'Martín';
alumno['Egresado'] = true;
alumno['DDMMAAAA'] = 21061985;

for (let index in alumno) {
     console.log(index, alumno[index])
}
console.log(alumno['Apellido'])
console.log(alumno['Nombre'])
console.log(alumno['Egresado'])
console.log(alumno['DDMMAAAA'])
