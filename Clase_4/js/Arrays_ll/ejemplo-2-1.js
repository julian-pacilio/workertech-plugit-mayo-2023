'use strict';

// Creación de la matriz:
let sodaStereo = [
    ['Gustavo', 'Cerati', 'Guitarra', 'soda-stereo-cerati.jpg'],
    ['Héctor', 'Bosio', 'Bajo', 'soda-stereo-bosio.jpg'],
    ['Carlos', 'Ficicchia', 'Batería', 'soda-stereo-alberti.jpg'],
];

for (let musico of sodaStereo) {
    // console.log(musico);
    // console.log('----');
    for (let dato of musico) {
         console.log(dato);
    }
    console.log('----');
}

// Función para mostrar la info recorrida:
const MostrarInfo = () => {
    let info = '';
    for (let indiceMusico in sodaStereo) {
        info += `<p>Músico ${indiceMusico}:</p>`;
        info += '<ul>';
        for (let datoMusico of sodaStereo[indiceMusico]) {
            info += `<li>${datoMusico}</li>`;
        }
        info += '</ul>';
    }
    document.getElementById('info').innerHTML = info;
}