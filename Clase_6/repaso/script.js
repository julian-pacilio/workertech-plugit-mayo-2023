let alumno = {
    name: 'Ada',
    apellido: 'Lovelace',
    edad: 75,
    carrera: 'Programación',
}

// console.log(alumno.name)
// console.log(alumno.apellido)
// console.log(alumno.edad)
// console.log(alumno.carrera)

for(let index in alumno) {
   console.log(index)
    console.log(alumno[index])
}

Object.keys(alumno).map(key => {
    const dato = alumno[key]
    console.log(dato)
})


let name = 'Nombre'
let apellido = 'Apellido'
let saludo;