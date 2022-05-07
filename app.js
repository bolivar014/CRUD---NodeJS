// Importamos libreria Express | Instalando la libreria
const express = require('express');

// Creamos constante "app" que utilizaría express
const app = express();

// Archivo de configuración - Variables de entorno
require('dotenv').config();

// Creamos variable constante del puerto a utilizar
const port = process.env.PORT || 3000;

// Importamos Conexión a Base de Datos
const mongoose = require('mongoose');

// URL de conexión al servidor de mongoDB
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kwgww.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

// Creamos conexión a mongoDB
mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('Base de datos conectada correctamente.'))
.catch(e => console.log(e));

// Importamos motor de plantillas - EJS
app.set('view engine', 'ejs');

// Ruta donde se encuentran almacenadas las plantillas
app.set('views', __dirname + '/views');


// Middleware - Express Static - Carpeta public
app.use(express.static(__dirname + '/public'));

// Exportamos rutas | modularizada
app.use('/', require('./router/RutasWeb'));

// Exportamos rutas | Mascotas
app.use('/mascotas', require('./router/Mascotas'));

// Configuración de ruta 404 - NOT FOUND
app.use((req, resp, next) => {
    resp.status(404).render("404", { titulo: "404", descripcion: "Contenido no disponible" });
})

// Hacemos escucha de puerto
app.listen(port, () => {
    console.log('servidor disponible en http://localhost:' + port);
})