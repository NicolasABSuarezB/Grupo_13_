const express= require('express');
const router= express.Router();
const upload= require('../middlewares/multerUsuarios')
/* const registerValidator = require('./')
const loginValidator = require('./') */

let{login,register, informacion,processLogin,processRegister, perfil, updatePerfil}=require('../controllers/usersControllers');


router.get('/login',login)
router.post('/login',/* loginValidator */processLogin)

router.get('/register',register)
router.post('/register', upload.single('avatar'),processRegister);

router.get('/informacion',informacion)

router.get('/perfil', perfil)
router.put('/profile/:id',upload.single('image'),updatePerfil);

module.exports= router;