const express= require('express');
const router= express.Router();

let{edit,create,lista,nuevo,editado,destruir}=require('../controllers/adminControllers');


router.get('/edit/:id',edit)
router.put('/edit/:id',editado)


router.get('/crear',create)
router.post('/crear',nuevo)


router.get('/lista',lista)


router.delete('/destruir/:id',destruir)

module.exports= router;