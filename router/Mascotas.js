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

// Route para crear mascota
router.get('/crear', (req, resp) => {
    resp.render('crear');
});

// Route para almacenar mascota
router.post('/', async (req, resp) => {
    // Recuperamos cuerpo del formulario enviado desde la vista crear mascota
    const body = req.body;
    // console.log(body);
    try {
        // Creamos instancia al modelo para crear nueva mascota
        // const mascotaDB = new Mascota(body);

        // Creamos almacenamiento en la db.
        // await mascotaDB.save();

        // console.log(mascotaDB);

        // Evento asincrono para creación de mascota - ejemplo 2
        await Mascota.create(body);

        // Redireccionamos
        resp.redirect('/mascotas');
    } catch (error) {
        console.log('error - creación mascota');
        console.log(error);
    }
});

// Route
router.get('/:id', async (req, resp) => {
    // Recolectamos el parametro recibido desde la URL
    const id = req.params.id;
    try {
        // Realizamos busqueda del id "Tener en cuenta que mongo los id los clasifica como ( _id )"
        const mascotaDB = await Mascota.findOne({ _id: id });

        // console.log(mascotaDB);

        //
        resp.render('detalle', {
            mascota: mascotaDB,
            error: false
        });
    } catch (error) {
        
        //
        resp.render('detalle', {
            error: true,
            mensaje: 'No se ha detectado el ID a buscar...'
        });
    }
});

// Exportamos modulo "router"
module.exports = router;