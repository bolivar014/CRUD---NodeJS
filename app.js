// Importamos libreria Express | Instalando la libreria
const express = require('express');

// Creamos constante "app" que utilizaría express
const app = express();

// Creamos variable constante del puerto a utilizar
// const port = 3000;
const port = process.env.PORT || 3000;

// Importamos motor de plantillas - EJS
app.set('view engine', 'ejs');

// Ruta donde se encuentran almacenadas las plantillas
app.set('views', __dirname + '/views');


// Middleware - Express Static - Carpeta public
app.use(express.static(__dirname + '/public'));

// Respondemos a la ruta desde el servidor...
app.get('/', (req, resp) => {
    resp.render("index", { titulo : 'Titulo Dinamico' });
});

// Respondiendo a ruta "/servicios"
app.get('/servicios', (req, resp) => {
    resp.render("servicios", { tituloServicios : "Mensaje dinamico de servicios..." });
});

// Configuración de ruta 404 - NOT FOUND
app.use((req, resp, next) => {
    resp.status(404).render("404", { titulo: "404", descripcion: "Contenido no disponible" });
})

// Hacemos escucha de puerto
app.listen(port, () => {
    console.log('servidor disponible en http://localhost:' + port);
})