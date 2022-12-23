const {productos} = require('../../controllers/api/productos');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/productos', productos);

module.exports = router;