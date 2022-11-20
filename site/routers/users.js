const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerUsuarios')
const registerValidator = require('./../validators/registervalidation')
const loginValidator = require('./../validators/loginvalidator')

let { login, register, informacion, processLogin, processRegister, perfil, updatePerfil } = require('../controllers/usersControllers');


router.get('/login', login)
router.post('/login', loginValidator, processLogin)

router.get('/register', register)
router.post('/register', upload.single('avatar'), registerValidator, processRegister);

router.get('/informacion', informacion)

router.get('/perfil', perfil)
router.put('/profile/:id', upload.single('image'), updatePerfil);

module.exports = router;