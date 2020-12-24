var socket = io();

// Escuchar información
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Escuchar información
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Renato',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log(resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});