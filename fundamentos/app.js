// Requerir modulo http || todo lo necesario para crear un servidor...
const http = require('http');

// Callback peticiones al servidor
const server = http.createServer((req, resp) => {
    resp.end('Respondiendo a su solicitud...');
});

// Instanciamos puerto a utilizar
const puerto = 3000;

// Callback de escucha al puerto
server.listen(puerto, () => {
    console.log('escuchando solicitudes...');
});

// Imprimimos mensaje de escucha
console.log('Escuchando solicitudes del servidor en el puerto 3000...');