const {check}= require('express-validator');

module.exports= [
    check('Titulo').notEmpty().withMessage('este campo es obkigatorio').bail().isLength({min:5}).withMessage('debe haber por lo menos 5 letras'),
    check('categoria').notEmpty().withMessage('este campo es obkigatorio'),
    check('Precio').notEmpty().withMessage('este campo es obkigatorio'),
    check('Descuento').notEmpty().withMessage('este campo es obkigatorio').bail().isInt().withMessage('solo se aceptan numeros'),
    check('Stock').notEmpty().withMessage('este campo es obkigatorio').bail().isInt().withMessage('solo se aceptan numeros'),
    check('Descripcion').notEmpty().withMessage('este campo es obkigatorio').bail().isLength({min:5}).withMessage('debe haber por lo menos 10 letras'),
    check('imagen').notEmpty().withMessage('este campo es obkigatorio'),


]