const express= require('express');
const router= express.Router();
const upload= require('../middlewares/multerUsuarios')
const registerValidator=require('../validators/registervalidation')

const loginValidator = require('./')

let{login,register, informacion,processLogin,processRegister, perfil}=require('../controllers/usersControllers');

router.get('/login',login)
router.post('/login',processLogin)

router.get('/register',register)
router.post('/register',registerValidator, upload.single('avatar'),processRegister);

router.get('/informacion',informacion)

router.get('/profile', perfil)

module.exports= router;