const express= require('express');
const router= express.Router();

let{carrito,detalle,productos}=require('../controllers/productsControllers');

router.get('/carrito',carrito)
router.get('/detalle/:id',detalle)
router.get('/productos', productos)

module.exports= router;