const express= require('express');
const router= express.Router();

let{home,search}= require('../controllers/indexControllers');

router.get('/',home)
router.get('/busqueda', search);

module.exports= router