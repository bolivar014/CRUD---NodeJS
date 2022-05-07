// Importamos libreria Express | Instalando la libreria
const express = require('express');

// Acceder a las propiedades del Router para control de rutas.
const router = express.Router();

// Exportamos modelo mascota
const Mascota = require('../models/mascota');

// Async de la vista mascota
router.get('/', async (req, resp) => {
    try {
        // En caso que suceda correctamente
        console.log('success - async');
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB);
        
        // Redireccionamos a la vista con su respectivo modelo
        resp.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        });
    
    } catch ( error ) {
        console.log('error - async');
        console.log(error);
    }    
});

// Exportamos modulo "router"
module.exports = router;