const session = require("express-session");
let usuarios = require("../data/usuarios.json");
const { validationResult } = require('express-validator')
const db = require('../database/models')
const bcrypt = require("bcryptjs")
const fs = require("fs");
const path = require("path");
const { log } = require("console");


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
                        id:usuario.id,
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
   /*  processRegister: (req, res) => {
        let errors = validationResult(req)
        //return res.send(errors)
        if (req.fileValidationError) {
            let foto = {
                param:'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(foto)
        }
        if (errors.isEmpty()) {
            // return res.send(req.file) 
            // return res.redirect('/login') 
            let { name, email, telefono, pass} = req.body
            db.usuarios.create({
                nombre: name,
                apellido: null,
                email: email,
                contrase: bcrypt.hashSync(pass, 10),
                foto: req.file ? req.file.filename : "AvatarDefecto.jfif",
                cp: null,
                telefono: telefono,
                id_roles: "1",
                id_paises: null,
                id_generos: null,
            })
                .then(usuario => {
                    req.session.sessionuser = {
                        id : usuario.id,
                        nombre : usuario.nombre,
                        image : usuario.imagen,
                        rol : usuario.rolId
                    }
                    return res.redirect('/login')
                })
                .catch(error => {
                    return res.send(error)
                })
        } else {
            //return res.send(errors)
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'imgusuario', dato))

            if (req.file) {
                if (ruta(req.file.filename) && (req.file.filename !== "AvatarDefecto.jfif")) {
                    fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'imgusuario', req.file.filename))
                }
            }

            return res.render('register', { errors: errors.mapped(), old: req.body })
        }

    }, */
    processRegister: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'image',
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
        req.session.destroy();
        if (req.cookies.hola) {
            res.cookie('hola', '', { maxAge: -1 })
        }
        return res.redirect('/')
    },
    perfil: (req, res) => {
        /* const{email}=req.body */
        db.usuarios.findOne({
            where:{
                email:req.session.sessionuser.email 
            }, include:[ 'generos','pais']
        })
        .then(user => {
            console.log(user)
          //return res.send(user)
            res.render('user/profile', {
                user
            })
        }).catch(err => res.send(err))
            
            /* usuarioemail => {res.render('/profile' ,{usuarioemail} )})
        //res.render('perfilusuario')
        console.log(req.session.sessionuser)
        .catch(err => res.send(err)) */
    },

    /* perfil: (req, res) => {
        db.Users.findOne ({
            where: {
                email: req.session.user.email
            }
        })
        .then(user => {
                res.render('user/profile', {
                    user
                })
            }).catch(err => res.send(err))
    }, */
    updatePerfil: (req, res) => {
        //return res.send(req.body)

        let errors = validationResult(req)
        let id = +req.params.id
        if (errors.isEmpty()) {
            /* return res.send (req.body) */
            const { name, apellido, genero,pais,direccion,codigopostal,numero} = req.body

            db.usuarios.findOne({
                where:{
                    id: id
                }
                
            })
                .then(user => {
                    db.usuarios.update({
                        nombre: name.trim(),
                        apellido: apellido.trim(),
                        email: user.email,
                        contrase: user.contrase,
                        id_roles: user.id_roles,
                        direccion:direccion ? direccion : null,
                        telefono: numero,
                        cp: codigopostal ? codigopostal : null,
                        foto: req.file ? req.file.filename : user.foto,
                        id_paises:pais ? pais : null,
                        id_generos: genero ? genero : null
                    }, {
                        where: {
                            id: id
                        }
                    })
                        .then(data => {
                            console.log(+req.params.id)
                            db.usuarios.findOne({
                                where:{
                                    id: id
                                } 
                            })
                                .then(user => {

                                    req.session.sessionuser = {
                                        id:user.id,
                                        nombre: user.nombre,
                                        email: user.email,
                                        foto: user.foto,
                                        rol: user.id_roles
                
                                    }
                                    if (req.cookies.helloCookie) {
                                        res.cookie('helloCookie', '', { maxAge: -1 });
                                        res.cookie('helloCookie', req.session.sessionuser, { maxAge: 1000 * 60 * 60 * 24 })
                                    }
                                    req.session.save((err) => {
                                        req.session.reload((err) => {
                                            return res.redirect('/profile')

                                        });
                                    });

                                })

                        }).catch(err => res.send(err))

                })
                .catch(err => res.send(err))

        } else {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'imgusuario', dato))

            if (ruta(req.file.filename) && (req.file.filename == req.file.filename)) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'imgusuario', req.file.filename))
            }
            return res.render('profile', { errors: errors.mapped(), old: req.body })
        }
    },
    vistaperfil: (req, res) => {
        /* const{email}=req.body */
        let user= db.usuarios.findOne({
            where:{
                email:req.session.sessionuser.email 
            },
            include: 'roles'

        })
        let minihisto=db.recomendados.findAll({
            where:{
                id_usuario:req.session.sessionuser.id
            },include: 'productos',
            order:[['updatedAt','DESC']]})
              
        Promise.all([user, minihisto])
        .then(([user, minihisto]) => {
           if (minihisto.length <=1) {
                minihisto=null
            }     
            //return res.send(minihisto2)
            return res.render('user/perfil', {
                user,minihisto
            })
        })
    }
}
