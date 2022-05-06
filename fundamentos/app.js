// Importamos libreria Express | Instalando la libreria
const express = require('express');

// Creamos constante "app" que utilizaría express
const app = express();

// Creamos variable constante del puerto a utilizar
const port = 3000;

// Middleware - Express Static - Carpeta public
app.use(express.static(__dirname + '/public'));

// Respondemos a la ruta desde el servidor...
app.get('/', (req, resp) => {
    resp.send('Hello world V2');
});

// Respondiendo a ruta "/servicios"
app.get('/servicios', (req, resp) => {
    resp.send('Esta en la vista de servicios...');
});

// Configuración de ruta 404 - NOT FOUND
app.use((req, resp, next) => {
    resp.status(404).sendFile(__dirname + '/public/404.html');
})

// Hacemos escucha de puerto
app.listen(port, () => {
    console.log('servidor disponible en http://localhost:' + port);
})