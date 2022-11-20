const db = require("../database/models")

module.exports={
    detalle: (req,res)=>{
        id = +req.params.id
        let productos = db.productos.findAll()
        let producto = db.productos.findByPk(id,{include:'categorias'})
        Promise.all([producto, productos])
        .then(([producto, productos])=>{
            //res.send(producto)
            return res.render('detalle',{producto,productos})
        
            }
        )
        .catch(error => res.send(error))
        
        
    },
    carrito: (req,res)=>{
        return res.render('carrito',{
            productos
        });
    }
}