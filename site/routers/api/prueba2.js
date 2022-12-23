const {paginacion} = require('../../controllers/api/prueba2');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/historial', paginacion);

module.exports = router;