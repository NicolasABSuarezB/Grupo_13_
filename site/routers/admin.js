const express= require('express');
const router= express.Router();
const path=require('path');
const multer= require('multer');
const upload = require('../middlewares/multerProductos');

let{edit,create,lista,nuevo,editado,destruir}=require('../controllers/adminControllers');


router.get('/edit/:id',edit)
router.put('/edit/:id',upload.single('imagenes'),editado)


router.get('/crear',create);
router.post('/crear', upload.single('imagenes'),nuevo);


router.get('/lista',lista);


router.delete('/destruir/:id',destruir);

module.exports= router;