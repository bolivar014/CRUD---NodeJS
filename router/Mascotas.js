// Importamos libreria Express | Instalando la libreria
const express = require('express');

// Acceder a las propiedades del Router para control de rutas.
const router = express.Router();

router.get('/', (req, resp) => {
    resp.render("mascotas", {
        arrayMascotas: [
            {
                id: 1,
                nombre: 'Rex',
                descripcion: 'Descripción de prueba'
            },{
                id: 2,
                nombre: 'Rexito',
                descripcion: 'Descripción dos'
            },
        ]
    });
})

// Exportamos modulo "router"
module.exports = router;