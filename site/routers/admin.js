const express= require('express');
const router= express.Router();

let{edit,create,listar}=require('../controllers/adminControllers');

router.get('/editar',edit)
router.get('/crear',create)
router.get('/listar',listar)

module.exports= router;