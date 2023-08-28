let auto = {};

// Propiedades del objeto (todos los tipos de datos, menos funciones)
auto.marca = 'Fiat';
auto.modelo = '128SE';
auto.color = 'celestito';
auto.neumaticos = 4;
auto.encendido = false;
auto.asientos = [
    'delantero izquierdo',
    'delantero derecho',
    'trasero izquierdo',
    'trasero derecho',
];
auto.propietario = null;
auto.tablero = {};
auto.tablero.velocidad = 0;
auto.tablero.nafta = 30;
auto.maximaVelocidad = 120;

// Métodos del objeto (las acciones... es decir, las funciones):
auto.encender = function () {
    auto.encendido = true;
    console.log('BRUM BRUM BRUM');
};

auto.apagar = function () {
    auto.encendido = false;
    console.log('MURB');
};

auto.acelerar = function() {
    if (auto.encendido) {
        if (auto.tablero.velocidad < auto.maximaVelocidad) {
            auto.tablero.velocidad += 10;
        }
    }
    console.log(auto.tablero.velocidad);
}

auto.frenar = function() {
    if (auto.encendido) {
        if (auto.tablero.velocidad > 0) {
            auto.tablero.velocidad -= 10;
        }
    }
    console.log(auto.tablero.velocidad);
}

