const express= require('express');
const router= express.Router();
const registervalidation=require('../validators/registervalidation-')
let{login,register, informacion,logearse,cerrar,registrase,perfilusuario}=require('../controllers/usersControllers');



router.get('/login',login)
router.post('/login',logearse)
router.get('/cerrar',cerrar)


router.get('/perfil',registervalidation,perfilusuario)
router.get('/register',register)
router.post('/register',registervalidation,registrase)
router.get('/informacion',informacion)


module.exports= router;