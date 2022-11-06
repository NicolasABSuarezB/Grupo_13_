const { check } = require('express-validator');

module.exports = [
    check('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('No es un email valido'),
    check('pass').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({ min: 8 }).withMessage('Debe haber por lo menos 8 carcteres'),
]