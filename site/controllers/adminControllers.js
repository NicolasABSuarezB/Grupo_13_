const fs = require('fs')
const path = require('path')
const db = require("../database/models")

let nuevoGuardar = (guardar) => fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSON.stringify(guardar, null, 4), 'utf-8')

const { validationResult } = require('express-validator')


module.exports = {

    edit: (req, res) => {
        id = +req.params.id
        let categorias = db.categorias.findAll()
        let marcas = db.marcas.findAll()
        let producto = db.productos.findByPk(id, { include: 'categorias' })
        Promise.all([producto, categorias,marcas])
            .then(([producto, categorias,marcas]) => {
                //res.send(producto) 
                return res.render('admin/editarProducto', { producto, categorias,marcas })



            }
            )
    },
    create: (req, res) => {
        return res.render('admin/crearProducto')
    },
    lista: (req, res) => {
        let categorias  = db.categorias.findAll()
        let marcas   = db.marcas.findAll()
        Promise.all([categorias,marcas])
            .then(([categorias,marcas]) => {
                //res.send(productos.imagen)
                return res.render('admin/listaProducto', {categorias, marcas})

            }
            )

    },
    nuevo: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {



            let { Titulo, Categoria, Precio, Descuento, Stock, Descripcion,marca} = req.body
         

            db.productos.create({


                titulo: Titulo,
                precio: +Precio,
                descuento: +Descuento,
                stock: +Stock,
                descripcion: Descripcion,
                id_categoria: Categoria,
                id_marcas: 1,
                imagen: req.file ? req.file.filename : 'imgDefecto1.png',
            })

                .then((result) => {
                    res.redirect('/admin/lista')
                }).catch((err) => {
                    res.send(err)
                });



        } else {

            if (req.file) {
                if ((fs.existsSync("./public/img/imgproducto/", req.file.filename))) {
                    fs.unlinkSync(`./public/img/imgproducto/${req.file.filename}`)
                }
            }

            let { Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body;
            /* return res.send(errors) */
            console.log('ocurrio errores')
            return res.render('admin/crearProducto', { errors: errors.mapped(), old: req.body })

        }



    },
    editado: (req, res) => {

        let id = +req.params.id

        let errors = validationResult(req)
        let productos = db.productos.findOne({
            where: {
                id: id
            }
        })
            .then((productos) => {



                if (errors.isEmpty()) {



                    let { Titulo, Categoria, Precio, Descuento, Stock, Descripcion } = req.body;
                    db.productos.update({
                        titulo: Titulo,
                        id_categoria: Categoria,
                        precio: +Precio,
                        descuento: +Descuento,
                        stock: +Stock,
                        descripcion: Descripcion,
                        imagen: req.file ? req.file.filename : 'imgDefecto1.png',
                    },
                        {
                            where: { id: id }
                        })

                    return res.redirect('/admin/lista')
                } else {

                    if (req.file) {
                        if ((fs.existsSync("./public/img/imgproducto/", req.file.filename))) {
                            fs.unlinkSync(`./public/img/imgproducto/${req.file.filename}`)
                        }
                    }


                    let categorias = db.categorias.findAll()

                    let producto = db.productos.findByPk(id, { include: 'categorias' })
                    Promise.all([producto, categorias])
                        .then(([producto, categorias]) => {
                            //res.send(producto) 
                            return res.render('admin/editarProducto', {
                                producto, categorias, errors: errors.mapped(),
                                old: req.body
                            })
                        }
                        )

                    //return res.send({old:req.body.Precio})
                }
            })


    },
    destruir: (req, res) => {
        console.log('hola')
        let idParams = +req.params.id

        db.productos.findOne({
            where : {
                id : idParams
            },
            include : [{
                all : true
            }]
        })
        .then(producto => {
        console.log(producto)    
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'imgproducto', dato))
                if (ruta(producto.imagen) && (producto.imagen !== "imagenDefecto1.png")) {
                    fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'imgproducto', producto.imagen))
                }

            db.productos.destroy({
                where : {
                    id : idParams
                }
            })
            .then(eliminar => {
                return res.redirect('/admin/lista')
            })
        })
        .catch(errores => res.send(errores))
    },

}