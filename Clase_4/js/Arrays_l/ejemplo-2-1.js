'use strict';

let djs = [
    'Solomun',
    'Hernan Cattaneo',
    'Boris Brejcha',
    'Matador',
    'Kevin de Vries',
    'Tale Of Us',
    'Hot Since 82',
    'Armin van Buuren',
    'Carl Cox',
];

console.log('for común: inicio');
for (let i = 0; i < djs.length; i++) {
    console.log(i, djs[i]);
}

console.log('for común: cierre');

console.log('----------');

console.log('for in: inicio');
for (let i in djs) {
    console.log(i, djs[i]);
}
console.log('for in: cierre');

console.log('----------');

console.log('for of: inicio');
for (let valor of djs) {
    console.log(valor);
}
console.log('for of: cierre');