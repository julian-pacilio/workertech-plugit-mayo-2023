let auto = {
    // Se asigna con dos puntos (:) y se separa con coma (,)
    marca: 'Fiat',
    modelo: '128SE',
    color: 'celestito',
    neumaticos: 4,
    encendido: false,
    asientos: [
        'delantero izquierdo',
        'delantero derecho',
        'trasero izquierdo',
        'trasero derecho',
    ],
    propietario: null,
    tablero: {
        velocidad: 0,
        nafta: 30,
    },
    maximaVelocidad: 120,
    // Métodos del objeto (las acciones... es decir, las funciones):
    encender: function () {
        console.log(this);
        this.encendido = true;
        console.log('BRUM BRUM BRUM');
    },
    apagar: function () {
        auto.encendido = false;
        console.log('MURB');
    },
    acelerar : function() {
        if (auto.encendido) {
            if (auto.tablero.velocidad < auto.maximaVelocidad) {
                auto.tablero.velocidad += 10;
            }
        }
        console.log(auto.tablero.velocidad);
    },
    frenar : function() {
        if (auto.encendido) {
            if (auto.tablero.velocidad > 0) {
                auto.tablero.velocidad -= 10;
            }
        }
        console.log(auto.tablero.velocidad);
    },
    mostrarThis: function () {
        console.log(this);
    }
};

for (let indice in auto) {
    // if (typeof auto[indice] != 'function') {
    //     console.log(indice, auto[indice]);
    // }
    if (typeof auto[indice] == 'function') {
        console.log(indice, auto[indice]);
    }
}