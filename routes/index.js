const express = require('express');
const proyectoControllers = require('../controllers/proyectoControllers');

const router = express.Router();

module.exports = function () {
    router.get('/', proyectoControllers.proyectoIndex);
    router.get('/productos', proyectoControllers.proyectoProductos); 

    return router;
};