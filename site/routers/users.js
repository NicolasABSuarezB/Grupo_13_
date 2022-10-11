const express= require('express');
const router= express.Router();
const upload= require('../middlewares/multerUsuarios')
const registerValidator = require('./')
const loginValidator = require('./')

let{login,register, informacion,procesoDeRegistro}=require('../controllers/usersControllers');

router.get('/login',login)
router.post('/login',loginValidator,processLogin)

router.get('/register',register)
router.post('/register', upload.single('avatar'),procesoDeRegistro);

router.get('/informacion',informacion)

module.exports= router;