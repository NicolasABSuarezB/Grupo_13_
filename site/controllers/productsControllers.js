let productos = require('../data/productos.json')
module.exports={
    detalle: (req,res)=>{
        return res.render('detalle',{
            productos
        });
    },
    carrito: (req,res)=>{
        return res.render('carrito',{
            productos
        });
    }
}