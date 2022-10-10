const express= require('express');
const router= express.Router();

let{edit,create,lista,nuevo,editado,destruir}=require('../controllers/adminControllers');
const praductsvalidations=require('../validators/praductsvalidations')
const haysession=require('../middleware/verlogin')


router.get('/edit/:id',haysession,edit)
router.put('/edit/:id',haysession,praductsvalidations,editado)


router.get('/crear',haysession,create)
router.post('/crear',haysession,praductsvalidations,nuevo)


router.get('/lista',haysession,lista)


router.delete('/destruir/:id',haysession,destruir)

module.exports= router;