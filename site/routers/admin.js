const express= require('express');
const router= express.Router();
const path=require('path');
const multer= require('multer');
const upload = require('../middlewares/multerProductos');
const praductsvalidations=require('../validators/praductsvalidations')
const haysession=require('../middlewares/verlogin')
const esAdmin=require('../middlewares/esAdmin')


let{edit,create,lista,nuevo,editado,destruir}=require('../controllers/adminControllers');


router.get('/edit/:id',/* esAdmin, */edit)
router.put('/edit/:id',/* esAdmin, */upload.single('imagenes'),praductsvalidations,editado)

router.get('/crear',/* esAdmin */create)
router.post('/crear', /* esAdmin, */  upload.single('imagenes'),praductsvalidations,nuevo);


router.get('/lista',/* esAdmin, */lista)


router.delete('/destruir/:id',/* haysession,esAdmin, */destruir)

module.exports= router;