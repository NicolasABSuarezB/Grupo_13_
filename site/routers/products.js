const express= require('express');
const router= express.Router();

let{carrito,detalle,productos,marcas,puntaje,especifico}=require('../controllers/productsControllers');

router.get('/carrito',carrito)
router.get('/detalle/:id',detalle)
router.get('/productos', productos)
router.get('/marcas/:id',marcas) 
router.get('/mascota/:id',especifico) 
router.post('/detalle/:id',puntaje)




module.exports= router;