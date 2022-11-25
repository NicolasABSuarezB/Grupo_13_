const { check } = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({ min: 5 }).withMessage('Debe haber por lo menos 5 letras'),
    check('email').notEmpty().withMessage('Este campo es obligatorio').bail().isEmail().withMessage('No es un email valido'),
    check('telefono').notEmpty().withMessage('Este campo es obligatorio').bail().withMessage('No es un número valido'),
    check('pass').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({ min: 8 }).withMessage('Debe haber por lo menos 8 carcteres').bail().isLength({ max: 12 }).withMessage('Maximo 12 carcteres'),
    check('pass2').notEmpty().withMessage('Este campo es obligatorio'),
    /* check('avatar').notEmpty().withMessage('Este campo es obligatorio') */
]