const {check}= require('express-validator');

module.exports=[
    check('name').notEmpty().withMessage('este campo es obkigatorio').bail().isLength({min:5}).withMessage('debe haber por lo menos 5 letras'),
    check('email').notEmpty().withMessage('este campo es obkigatorio').bail().isEmail().withMessage('no es un email valido'),
    check('telefono').notEmpty().withMessage('este campo es obkigatorio').bail().withMessage('no es un numero valido'),
    check('pass').notEmpty().withMessage('este campo es obkigatorio').bail().isLength({min:8}).withMessage('debe haber por lo menos 8 carcteres'),
    check('pass2').notEmpty().withMessage('este campo es obkigatorio')
]