const express= require('express');
const router= express.Router();

let{edit,create,lista}=require('../controllers/adminControllers');

router.get('/editar',edit)
router.get('/crear',create)
router.get('/listar',lista)

module.exports= router;