const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRazaHandler, getTemperamentHandler, getTemperamentForm } = require("../handlers/getRazasH")
const { getRazaIdHandler, getRazaNameHandler } = require("../handlers/getRazaIdH")
const createRazaHandler = require("../handlers/postH")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getRazaHandler) //? obtencion de datos de API y BD listo

router.get('/temperaments', getTemperamentHandler) //? obtencion y guardado de temperamentos en la BD listo

router.get('/dogs/:idRaza', getRazaIdHandler) //? busqueda por ID listo

router.get('/name', getRazaNameHandler) //? busqueda por Name listo

router.post('/postdogs', createRazaHandler) //? entrada de datos a la BD listo



module.exports = router;
