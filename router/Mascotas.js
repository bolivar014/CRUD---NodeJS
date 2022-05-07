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

// Route para visualizar datos de ID
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
        resp.render('detalle', {
            error: true,
            mensaje: 'No se ha detectado el ID a buscar...'
        });
    }
});

// Evento para eliminación de registros
router.delete('/:id', async (req, resp) => {
    // Recolectamos el parametro recibido desde la URL
    const id = req.params.id;

    try {
        // Realizamos busqueda del id "Tener en cuenta que mongo los id los clasifica como ( _id ) y después de encontrarlo, procede a eliminarlo"
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });

        if(mascotaDB) {
            // Cuando existe el registro y es eliminado
            resp.json({
                estado: true,
                mensaje: 'Eliminado'
            });
        } else {
            // Cuando no existe el registro
            resp.json({
                estado: false,
                mensaje: 'Fallo al eliminar'
            });
        }
    } catch (error) {

    }
});

// Evento para actualización de registro 
router.put('/:id', async (req, resp) => {
    // Recolectamos el parametro recibido desde la URL
    const id = req.params.id;
    const body = req.body;

    try {
        // Evento para buscar y actualizar registro findByIdAndUpdate recibe 3 argumentos (id, cuerpo, { default })
        const mascotaDB = await Mascota.findByIdAndUpdate( id, body, { useFindAndModify: false });

        // Retornamos JSON
        resp.json({
            estado: true,
            mensaje: 'editado'
        })
    } catch (error) {
        // console.log('error de actualización');
        // console.log(error);

        // Retornamos JSON
        resp.json({
            estado: false,
            mensaje: 'fallo'
        })
    }
});

// Exportamos modulo "router"
module.exports = router;