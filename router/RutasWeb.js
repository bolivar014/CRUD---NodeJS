// Importamos libreria Express | Instalando la libreria
const express = require('express');

// Acceder a las propiedades del Router para control de rutas.
const router = express.Router();

// Respondemos a la ruta desde el servidor...
router.get('/', (req, resp) => {
    resp.render("index", { titulo : 'Titulo Dinamico' });
});

// Respondiendo a ruta "/servicios"
router.get('/servicios', (req, resp) => {
    resp.render("servicios", { tituloServicios : "Mensaje dinamico de servicios..." });
});

// Exportamos modulo "router"
module.exports = router;