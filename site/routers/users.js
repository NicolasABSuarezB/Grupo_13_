const express= require('express');
const router= express.Router();

let{login,register}=require('../controllers/usersControllers');

router.get('/login',login)
router.get('/register',register)
router.get('/informacion',informacion)

module.exports= router;