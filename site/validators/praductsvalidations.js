const { check } = require('express-validator');

module.exports = [
    check('Titulo').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({ min: 5 }).withMessage('Debe haber por lo menos 5 letras'),
    check('Categoria').notEmpty().withMessage('Este campo es obligatorio'),
    check('Precio').notEmpty().withMessage('Este campo es obligatorio'),
    //check('Descuento').notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('Solo se aceptan numeros'),
    check('Stock').notEmpty().withMessage('Este campo es obligatorio').bail().isInt().withMessage('Solo se aceptan numeros'),
    check('Descripcion').notEmpty().withMessage('Este campo es obligatorio').bail().isLength({ min: 10 }).withMessage('Debe haber por lo menos 10 letras'),
    //check('imagen').notEmpty().withMessage('Este campo es obligatorio'),


]