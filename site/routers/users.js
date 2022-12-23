const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerUsuarios')
const registerValidator = require('./../validators/registervalidation')
const loginValidator = require('./../validators/loginvalidator')
const verlogin=require('./../middlewares/verlogin')

let { login, register, informacion, processLogin, processRegister, perfil, updatePerfil,cerrar,vistaperfil } = require('../controllers/usersControllers');


router.get('/login', login)
router.post('/login',/* loginValidator,*/processLogin)

router.get('/register', register)
router.post('/register', upload.single('image'), registerValidator, processRegister);

router.get('/informacion', informacion)

router.get('/profile',verlogin, perfil);
router.put('/profile/:id',upload.single('avatar'),verlogin,updatePerfil);

router.get('/perfil', vistaperfil)
router.get('/cerrar',cerrar)

router.get('/perfil', vistaperfil)
router.get('/cerrar',cerrar)

module.exports = router;