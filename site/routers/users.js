const express= require('express');
const router= express.Router();
const upload= require('../middlewares/multerUsuarios')
/* const registerValidator = require('./')
const loginValidator = require('./') */

let{login,register, informacion,processLogin,processRegister, perfil}=require('../controllers/usersControllers');

router.get('/login',login)
router.post('/login',/* loginValidator */processLogin)

router.get('/register',register)
router.post('/register', upload.single('avatar'),processRegister);

router.get('/informacion',informacion)

router.get('/perfil', perfil)

module.exports= router;