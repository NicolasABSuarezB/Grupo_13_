const session = require("express-session");
let usuarios = require("../data/usuarios.json");
const { validationResult } = require('express-validator')
const db = require('../database/models')
const bcrypt = require("bcryptjs")

module.exports = {
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {
        /* return console.log(req.body) */
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const { email, recordame } = req.body;
            /* let usuario = usuarios.find(use => use.email === email) */
            db.usuarios.findOne({
                where: {
                    email
                }
            })
                .then(usuario => {
                    /* console.log(usuario) */
                    req.session.sessionuser = {

                        nombre: usuario.nombre,
                        email: usuario.email,
                        foto: usuario.foto,
                        rol: usuario.id_roles

                    }
                    console.log(req.session.sessionuser)
                    if (recordame) {
                        res.cookie('hola', req.session.sessionuser, { maxAge: 1000 * 60 * 60 * 24 })
                    }
                    return res.redirect('/perfil')
                })
                .catch(error => {
                    return res.send(error)
                })
        } else {
            return res.render('login', { errors: errors.mapped(), old: req.body })
        }


    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'avatar',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            /* return res.send(req.body) */
            /* return res.redirect('/login') */
            let { name, email, telefono, pass } = req.body
            db.usuarios.create({
                nombre: name,
                apellido: null,
                email: email,
                contrase: bcrypt.hashSync(pass, 10),
                foto: req.file ? req.file.filename : "imagenDefectoAvatar.jpg",
                cp: null,
                telefono: telefono,
                id_roles: "1",
                id_paises: null,
                id_generos: null,
            })
                .then(usuario => {
                    return res.redirect('/login')
                })
                .catch(error => {
                    return res.send(error)
                })
        } else {
            //return res.send(errors)
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'imgusuario', dato))

            if (ruta(req.file.filename) && (req.file.filename !== "imagenDefectoAvatar.jpg")) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'imgusuario', req.file.filename))
            }
            return res.render('register', { errors: errors.mapped(), old: req.body })
        }

    },
    informacion: (req, res) => {
        return res.render('informacion')
    },
    cerrar: (req, res) => {
        req.session.sessionuser == null
        return res.redirect('/login')
    },
    /* perfil: (req, res) => {
        db.usuarios.findOne({
            where:{
                email:req.session.sessionuser.email 
            }
        })
        .then( usuarioemail => {res.render('user/profile' ,{usuarioemail} )})
        //res.render('perfilusuario')
        console.log(req.session.sessionuser)
        .catch(err => res.send(err))
    }, */
    perfil: (req, res) => {
        db.Users.findOne ({
            where: {
                email: req.session.user.email
            }
        })
            .then(user => {
                res.render('users/profile', {
                    user
                })
            }).catch(err => res.send(err))
    },
    updatePerfil: (req, res) => {
        //return res.send(req.body)

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            const { nombre, apellido, cp, telefono,  } = req.body

            db.Users.findOne({
                id: +req.params.id
            })
                .then(user => {
                    db.Users.update({
                        nombre: nombre.trim(),
                        apellido: apellido.trim(),
                        email: user.email,
                        contrase: user.contrase,
                        rid_roles: user.id_roles,
                        telefono: telefono,
                        cp: user.cp,
                        avatar: req.file ? req.file.filename : user.avatar
                    }, {
                        where: {
                            id: +req.params.id
                        }
                    })
                        .then(data => {
                            db.Users.findOne({
                                id: +req.params.id
                            })
                                .then(user => {

                                    req.session.user = {
                                        id: user.id,
                                        name: user.nombre,
                                        lastname: user.apellido,
                                        email: user.email,
                                        image: user.avatar,
                                        rol: user.rol_id
                                    }
                                    if (req.cookies.helloCookie) {
                                        res.cookie('helloCookie', '', { maxAge: -1 });
                                        res.cookie('helloCookie', req.session.user, { maxAge: 1000 * 60 * 60 * 24 })
                                    }
                                    req.session.save((err) => {
                                        req.session.reload((err) => {
                                            return res.redirect('/users/profile')

                                        });
                                    });

                                })

                        }).catch(err => res.send(err))

                })
                .catch(err => res.send(err))

        } else {

        }
    }
}
